import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, db, COLLECTION_PATH } from '../utils/firebase';
import { LABOR_GL_ACCOUNTS, LABOR_BUDGET_THRESHOLD } from '../constants/config';

const MAX_PARALLEL = 8;

// `in` query covers both stored types (string vs number glAccount).
const GL_IN_VALUES = LABOR_GL_ACCOUNTS.flatMap((v) => [String(v), Number(v)]);
// Digits-only keys for the loose client-side post-filter.
const LABOR_GL_DIGITS = new Set(
  LABOR_GL_ACCOUNTS.map((v) => String(v).replace(/\D/g, ''))
);

// Module-level cache: projectId -> { state, value }.
// Entry identity is preserved so React.memo(ProjectCard) stays effective and
// already-fetched projects are never fetched again.
const cache = new Map();
const listeners = new Set();
const queue = [];
let active = 0;

const snapshot = () => {
  const out = {};
  cache.forEach((entry, id) => {
    out[id] = entry;
  });
  return out;
};

const publish = () => {
  const snap = snapshot();
  listeners.forEach((setState) => setState(snap));
};

const setEntry = (id, entry) => {
  cache.set(id, entry);
  publish();
};

// Severity of one WBS's labor sum: 0 red, 1 amber, 2 green, 3 off (no data).
// Lower wins when combining WBS groups (worst lamp drives the badge).
const severity = (v) => {
  if (v === null || v === undefined) return 3;
  if (v < 0) return 0;
  if (v <= LABOR_BUDGET_THRESHOLD) return 1;
  return 2;
};

// Numeric presence check: safeParseFloat(undefined) === 0, so detect real
// numbers explicitly before summing (null/undefined/''/NaN are "no data").
const toNumber = (raw) => {
  if (typeof raw === 'number') return Number.isFinite(raw) ? raw : null;
  if (typeof raw === 'string' && raw.trim() !== '') {
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }
  return null;
};

/**
 * Per-WBS evaluation: labor rows are grouped by WBS, each group gets its own
 * sum + severity, and the badge takes the worst severity across groups
 * (one red WBS keeps the whole badge red even if the project total is green).
 * `value` stays the project total (tooltip), `worst` is the driving group.
 */
const computeEntry = (rows) => {
  const laborRows = rows.filter((r) =>
    LABOR_GL_DIGITS.has(String((r && r.glAccount) ?? '').replace(/\D/g, ''))
  );
  if (laborRows.length === 0) {
    return { state: 'ready', value: null, worst: null, sev: 3 };
  }

  const groups = new Map();
  laborRows.forEach((r) => {
    const label = String(r.wbs || 'No WBS');
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label).push(toNumber(r.availableBudget));
  });

  let total = 0;
  let hasNumeric = false;
  let worst = null; // { label, value, sev }
  groups.forEach((nums, label) => {
    const values = nums.filter((v) => v !== null);
    const sum = values.length > 0 ? values.reduce((a, b) => a + b, 0) : null;
    if (sum !== null) {
      total += sum;
      hasNumeric = true;
    }
    const sev = severity(sum);
    if (
      !worst ||
      sev < worst.sev ||
      (sev === worst.sev && sum !== null && (worst.value === null || sum < worst.value))
    ) {
      worst = { label, value: sum, sev };
    }
  });

  if (!hasNumeric) {
    return { state: 'ready', value: null, worst: null, sev: 3 };
  }
  return {
    state: 'ready',
    value: total,
    worst: { label: worst.label, value: worst.value },
    sev: worst.sev
  };
};

/**
 * Reads only the labor rows of one project's financials subcollection.
 * Single swap point: if the `in` query ever misses rows the financials table
 * shows (glAccount format/type difference), replace the body with a full
 * subcollection read — the loose post-filter in computeEntry already
 * tolerates spaces/prefixes/other non-digit characters:
 *   getDocs(collection(db, COLLECTION_PATH, projectId, 'financials'))
 */
const fetchLaborRows = async (projectId) => {
  const q = query(
    collection(db, COLLECTION_PATH, projectId, 'financials'),
    where('glAccount', 'in', GL_IN_VALUES)
  );
  const snap = await getDocs(q);
  return snap.docs.map((doc) => doc.data());
};

const pump = () => {
  while (active < MAX_PARALLEL && queue.length > 0) {
    const id = queue.shift();
    active += 1;
    fetchLaborRows(id)
      .then((rows) => setEntry(id, computeEntry(rows)))
      .catch((err) => {
        // Background path for every card: never alert(), warn only.
        console.warn(`Failed to load labor budget for project ${id}:`, err);
        setEntry(id, { state: 'error', value: null });
      })
      .finally(() => {
        active -= 1;
        pump();
      });
  }
};

const enqueue = (id) => {
  if (cache.has(id)) return false;
  cache.set(id, { state: 'loading', value: null });
  queue.push(id);
  return true;
};

/**
 * Labor budget lookup for the given project list.
 *
 * @param {Array<{id: string}>} projects
 * @returns {Object<string, {state: 'loading'|'ready'|'error', value: number|null}>}
 */
export function useLaborBudgets(projects) {
  const [budgets, setBudgets] = useState(snapshot);

  useEffect(() => {
    listeners.add(setBudgets);
    // Close the gap between the initial snapshot and listener registration.
    publish();
    return () => {
      listeners.delete(setBudgets);
    };
  }, []);

  useEffect(() => {
    let added = false;
    (projects || []).forEach((p) => {
      if (!p || !p.id) return;
      if (enqueue(p.id)) added = true;
    });
    if (added) {
      publish();
      pump();
    }
  }, [projects]);

  return budgets;
}

export default useLaborBudgets;
