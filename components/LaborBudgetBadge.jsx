import React from 'react';
import { UserIcon } from './Icons';

// Index = severity from useLaborBudgets: 0 red, 1 amber, 2 green, 3 off.
const SEVERITY_DOT = [
  'bg-red-500',
  'bg-amber-400',
  'bg-emerald-500',
  'bg-slate-300 dark:bg-slate-600'
];

const jt = (juta) => `${juta.toLocaleString('id-ID')} jt`;

const tooltipText = ({ state, value, worst, sev }) => {
  if (state === 'loading') return 'Sisa budget labor: memuat...';
  if (state !== 'ready' || value === null || value === undefined) {
    return 'Sisa budget labor: data tidak tersedia';
  }
  const total = `Sisa budget labor: ${jt(value)}`;
  // Lamp driven by a WBS in trouble: name it so red/amber is explained.
  if (sev !== undefined && sev !== null && sev <= 1 && worst) {
    const where = worst.label === 'No WBS' ? 'tanpa WBS' : `WBS ${worst.label}`;
    return `${total} — ${where}: ${jt(worst.value)}`;
  }
  return total;
};

/**
 * Presence-style indicator for the remaining labor budget of a project:
 * a person silhouette with a status lamp at the bottom-right corner.
 * The lamp reflects the worst WBS severity (one red WBS => red badge).
 * Plain spans only (safe inside the CompactRow <button>).
 */
const LaborBudgetBadge = ({ budget }) => {
  const state = budget?.state ?? 'ready';
  const sev = budget?.sev ?? 3;
  const dotClass = SEVERITY_DOT[sev] ?? SEVERITY_DOT[3];

  return (
    <span
      className="relative inline-flex shrink-0"
      title={tooltipText({
        state,
        value: budget?.value ?? null,
        worst: budget?.worst ?? null,
        sev: budget?.sev
      })}
    >
      <UserIcon className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
      <span
        className={`absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full ring-2 ring-white dark:ring-slate-800 ${dotClass}${state === 'loading' ? ' animate-pulse' : ''}`}
      />
    </span>
  );
};

export default React.memo(LaborBudgetBadge);
