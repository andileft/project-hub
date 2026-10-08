import { useEffect, useState } from 'react';
import { collection, getDocs, db, COLLECTION_PATH } from '../utils/firebase';

const MAX_PARALLEL = 8;

// Module-level cache: projectId -> { state, total, active }.
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

const MONTHS = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8,
  oct: 9, nov: 10, dec: 11,
  // Indonesian spellings (mei/agu/agt/okt/des + full names).
  mei: 4, agu: 7, agt: 7, okt: 9, des: 11,
  januari: 0, februari: 1, maret: 2, april: 3, juni: 5, juli: 6, agustus: 7,
  september: 8, oktober: 9, november: 10, desember: 11,
  january: 0, february: 1, march: 2, june: 5, july: 6, august: 7,
  october: 9, december: 11
};

const monthIndex = (token) => {
  const key = String(token || '').trim().toLowerCase().replace(/\.$/, '');
  if (!key) return null;
  if (MONTHS[key] !== undefined) return MONTHS[key];
  const three = key.slice(0, 3);
  return MONTHS[three] !== undefined ? MONTHS[three] : null;
};

// Two-digit years map to 2000+ (2018+ range).
const y2k = (y) => (y < 100 ? y + 2000 : y);

// Local-midnight Date, or null when the components overflow (e.g. Feb 30).
const makeDate = (year, month, day) => {
  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) {
    return null;
  }
  if (month < 0 || month > 11 || day < 1 || day > 31) return null;
  const d = new Date(year, month, day);
  if (d.getFullYear() !== year || d.getMonth() !== month || d.getDate() !== day) {
    return null;
  }
  return d;
};

/**
 * Tolerant date parser for the iServe `start`/`end` strings scraped into the
 * team subcollection. The real format is externally produced and unverified,
 * so accept the common shapes; unknown input returns null (=> fallback-valid).
 *
 * Supported: Firestore Timestamp (toDate()), ISO `yyyy-mm-dd`,
 * `dd-MMM-yyyy` / `dd MMM yyyy`, `MMM dd yyyy`, and day-first `dd/mm/yyyy`.
 */
const parseDate = (raw) => {
  if (raw === null || raw === undefined || raw === '') return null;

  if (typeof raw === 'object') {
    if (typeof raw.toDate === 'function') {
      try {
        const d = raw.toDate();
        return Number.isNaN(d.getTime())
          ? null
          : new Date(d.getFullYear(), d.getMonth(), d.getDate());
      } catch {
        return null;
      }
    }
    return null;
  }

  const str = String(raw).trim();
  if (!str) return null;

  // ISO yyyy-mm-dd (optionally followed by a time).
  let m = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return makeDate(+m[1], +m[2] - 1, +m[3]);

  // Optional trailing time (innerText cells sometimes include it).
  // dd[-/ ]MMM[-/ ]yyyy  e.g. 01-Jan-2025, 01 Jan 2025, 1/Jan/2025
  m = str.match(/^(\d{1,2})[\s/.-]+([A-Za-z]+)[\s/.-]+(\d{2,4})(?:\s+\d{1,2}:\d{2}(?::\d{2})?)?$/);
  if (m) {
    const mo = monthIndex(m[2]);
    if (mo !== null) return makeDate(y2k(+m[3]), mo, +m[1]);
  }

  // MMM dd, yyyy  e.g. Jan 01, 2025 / Jan 1 2025
  m = str.match(/^([A-Za-z]+)[\s/.-]+(\d{1,2}),?[\s/.-]+(\d{2,4})(?:\s+\d{1,2}:\d{2}(?::\d{2})?)?$/);
  if (m) {
    const mo = monthIndex(m[1]);
    if (mo !== null) return makeDate(y2k(+m[3]), mo, +m[2]);
  }

  // Numeric dd/mm/yyyy or dd-mm-yyyy (day-first, Indonesia locale).
  m = str.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})(?:\s+\d{1,2}:\d{2}(?::\d{2})?)?$/);
  if (m) return makeDate(y2k(+m[3]), +m[2] - 1, +m[1]);

  return null;
};

const startOfToday = () => {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
};

/**
 * A row is valid when today is inside [start, end] (inclusive, day
 * granularity). When both dates are unparseable the row is treated as valid so
 * a scrape format change cannot silently turn every lamp off; when only one
 * bound parses the missing bound is unbounded.
 */
const isRowValid = (row, today) => {
  const s = parseDate(row.start);
  const e = parseDate(row.end);
  if (s === null && e === null) return true;
  if (s && today < s) return false;
  if (e && today > e) return false;
  return true;
};

// One person can appear on several WBS rows; count them once. Key by NPK,
// then name, then wbs-start-end, then row index.
const memberKey = (row, index) => {
  const npk = row && row.npk;
  if (npk !== undefined && npk !== null && String(npk).trim() !== '') {
    return `npk:${String(npk).trim()}`;
  }
  const name = row && row.name;
  if (name !== undefined && name !== null && String(name).trim() !== '') {
    return `name:${String(name).trim()}`;
  }
  const wbs = String((row && (row.wbs || row.fullWbs)) || '').trim();
  const start = String((row && row.start) || '').trim();
  const end = String((row && row.end) || '').trim();
  if (wbs || start || end) return `comp:${wbs}|${start}|${end}`;
  return `idx:${index}`;
};

const computeEntry = (rows) => {
  if (!rows || rows.length === 0) {
    return { state: 'ready', total: 0, active: 0 };
  }
  const today = startOfToday();
  const members = new Map(); // key -> has a currently-valid assignment
  rows.forEach((row, i) => {
    const key = memberKey(row, i);
    const valid = isRowValid(row || {}, today);
    if (!members.has(key)) members.set(key, false);
    if (valid) members.set(key, true);
  });

  let activeCount = 0;
  members.forEach((hasActive) => {
    if (hasActive) activeCount += 1;
  });
  return { state: 'ready', total: members.size, active: activeCount };
};

// The team subcollection is small; read it fully per project (no useful filter).
const fetchTeamRows = async (projectId) => {
  const snap = await getDocs(collection(db, COLLECTION_PATH, projectId, 'team'));
  return snap.docs.map((doc) => doc.data());
};

const pump = () => {
  while (active < MAX_PARALLEL && queue.length > 0) {
    const id = queue.shift();
    active += 1;
    fetchTeamRows(id)
      .then((rows) => setEntry(id, computeEntry(rows)))
      .catch((err) => {
        // Background path for every card: never alert(), warn only.
        console.warn(`Failed to load member assignments for project ${id}:`, err);
        setEntry(id, { state: 'error', total: 0, active: 0 });
      })
      .finally(() => {
        active -= 1;
        pump();
      });
  }
};

const enqueue = (id) => {
  if (cache.has(id)) return false;
  cache.set(id, { state: 'loading', total: 0, active: 0 });
  queue.push(id);
  return true;
};

/**
 * Member-assignment lookup for the given project list.
 *
 * @param {Array<{id: string}>} projects
 * @returns {Object<string, {state: 'loading'|'ready'|'error', total: number, active: number}>}
 */
export function useMemberAssignments(projects) {
  const [assignments, setAssignments] = useState(snapshot);

  useEffect(() => {
    listeners.add(setAssignments);
    // Close the gap between the initial snapshot and listener registration.
    publish();
    return () => {
      listeners.delete(setAssignments);
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

  return assignments;
}

export default useMemberAssignments;
