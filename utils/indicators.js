/**
 * Shared severity rules for the three project indicators so every view
 * (card badges, stacked list, table, detail page) uses the same colours.
 *
 * Severity values: 'bad' | 'warn' | 'ok' | 'idle'
 */

export const TARGET_END_STATUSES = new Set(['Ongoing', 'Maintenance', 'Belum SDHO']);
export const NEAR_END_DAYS = 30;
export const LABOR_THRESHOLD_M = 15;

const SEVERITY_RANK = { idle: 0, ok: 1, warn: 2, bad: 3 };

/** Parse a `yyyy-mm-dd` (or any Date-compatible) value to local midnight. */
export const parseEndDate = (raw) => {
  if (!raw) return null;
  const m = String(raw).match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  const d = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(raw);
  if (Number.isNaN(d.getTime())) return null;
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

/** Whole days from today until the given date (negative = past). */
export const daysUntil = (raw) => {
  const d = parseEndDate(raw);
  if (!d) return null;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((d.getTime() - today.getTime()) / 86400000);
};

/** Remaining labor budget severity, from the useLaborBudgets hook state. */
export const laborSeverity = (budget) => {
  if (!budget || budget.state === 'loading') return 'idle';
  if (budget.state !== 'ready' || budget.value === null || budget.value === undefined) return 'idle';
  if (budget.sev === 0) return 'bad';
  if (budget.sev === 1) return 'warn';
  if (budget.sev === 2) return 'ok';
  return 'idle';
};

/** Member assignment severity, from the useMemberAssignments hook state. */
export const assignmentSeverity = (assignment) => {
  if (!assignment || assignment.state === 'loading' || assignment.state !== 'ready') return 'idle';
  if (assignment.active > 0) return 'ok';
  return assignment.total > 0 ? 'warn' : 'idle';
};

/** End-date severity (only meaningful for target statuses). */
export const endDateSeverity = (project) => {
  if (!project) return 'idle';
  if (!TARGET_END_STATUSES.has(project.status)) return 'idle';
  const d = daysUntil(project.end);
  if (d === null) return 'idle';
  if (d < 0) return 'bad';
  if (d <= NEAR_END_DAYS) return 'warn';
  return 'ok';
};

/** Worst of several severities. */
export const worstSeverity = (...sevs) =>
  sevs.reduce((worst, sev) => (SEVERITY_RANK[sev] > SEVERITY_RANK[worst] ? sev : worst), 'idle');

/** Overall project severity across the three indicators. */
export const projectSeverity = (project, budget, assignment) =>
  worstSeverity(laborSeverity(budget), assignmentSeverity(assignment), endDateSeverity(project));

// ---- class maps -------------------------------------------------------

const LAMP = { bad: 'ph-lamp--bad', warn: 'ph-lamp--warn', ok: 'ph-lamp--ok', idle: 'ph-lamp--idle' };
const HERO = { bad: 'hero-pill--red', warn: 'hero-pill--amber', ok: 'hero-pill--green', idle: 'hero-pill--idle' };
const VALUE = { bad: 'text-red-600', warn: 'text-amber-600', ok: 'text-[var(--green)]', idle: 'text-muted' };

export const lampClass = (sev) => LAMP[sev] || LAMP.idle;
export const heroPillClass = (sev) => HERO[sev] || HERO.idle;
export const valueToneClass = (sev) => VALUE[sev] || VALUE.idle;
