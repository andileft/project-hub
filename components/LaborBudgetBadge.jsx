import React from 'react';
import { lampClass, laborSeverity } from '../utils/indicators';

const jt = (juta) => `${juta.toLocaleString('id-ID')} jt`;
const shortM = (juta) => `${juta.toLocaleString('id-ID')}M`;

const tooltipText = ({ state, value, worst, sev }) => {
  if (state === 'loading') return 'Sisa budget labor: memuat...';
  if (state !== 'ready' || value === null || value === undefined) {
    return 'Sisa budget labor: data tidak tersedia';
  }
  const total = `Sisa budget labor: ${jt(value)}`;
  if (sev !== undefined && sev !== null && sev <= 1 && worst) {
    const where = worst.label === 'No WBS' ? 'tanpa WBS' : `WBS ${worst.label}`;
    return `${total} — ${where}: ${jt(worst.value)}`;
  }
  return total;
};

/**
 * Remaining labor budget as a labeled lamp (e.g. "42M"). The lamp reflects the
 * worst WBS severity (one red WBS => red lamp). Plain spans only (safe inside a
 * <button>).
 */
const LaborBudgetBadge = ({ budget }) => {
  const state = budget?.state ?? 'ready';
  const value = budget?.value;
  const loading = state === 'loading';
  const tone = laborSeverity(budget);

  const label = (state === 'ready' && value !== null && value !== undefined)
    ? shortM(value)
    : (loading ? '…' : '—');

  return (
    <span
      className={`ph-lamp ${lampClass(tone)}${loading ? ' animate-pulse' : ''}`}
      title={tooltipText({
        state,
        value: value ?? null,
        worst: budget?.worst ?? null,
        sev: budget?.sev
      })}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2Z" />
        <path d="M10 14V6a2 2 0 1 1 4 0v8" />
      </svg>
      {label}
    </span>
  );
};

export default React.memo(LaborBudgetBadge);
