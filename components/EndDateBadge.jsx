import React from 'react';
import { formatDisplayDate } from '../utils/formatting';
import { TARGET_END_STATUSES, daysUntil, endDateSeverity, parseEndDate, lampClass } from '../utils/indicators';

const tooltipText = (sev, end, diff) => {
  const label = formatDisplayDate(end);
  if (sev === 'bad') return `End date: sudah lewat (${label}, ${-diff} hari lalu)`;
  if (diff === 0) return `End date: hari ini (${label})`;
  if (sev === 'warn') return `End date: mendekat (${label}, ${diff} hari lagi)`;
  return `End date: masih aman (${label}, ${diff} hari lagi)`;
};

/**
 * Deadline proximity lamp: shown only for Ongoing / Maintenance / Belum SDHO
 * projects. Red = end date passed, amber = within 30 days, green = beyond 30
 * days. Rendered as a labeled chip (plain spans only, safe inside a <button>).
 */
const EndDateBadge = ({ project }) => {
  if (!project || !TARGET_END_STATUSES.has(project.status)) return null;

  const end = parseEndDate(project.end);
  if (!end) return null;

  const diff = daysUntil(project.end);
  const sev = endDateSeverity(project);
  const label = diff < 0 ? `Overdue ${-diff}d` : diff === 0 ? 'Due today' : `${diff}d left`;

  return (
    <span
      className={`ph-lamp ${lampClass(sev)}`}
      title={tooltipText(sev, end, diff)}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      </svg>
      {label}
    </span>
  );
};

export default React.memo(EndDateBadge);
