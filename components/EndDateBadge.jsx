import React from 'react';
import { CalendarClock } from 'lucide-react';
import { formatDisplayDate } from '../utils/formatting';

// Only these statuses show the badge (per spec): past-due / near / safe end date.
const TARGET_STATUSES = new Set(['Ongoing', 'Maintenance', 'Belum SDHO']);
const NEAR_DAYS = 30;

// 0 red (overdue), 1 amber (<= 30 days), 2 green (still far).
const SEV_STYLE = [
  { pill: 'bg-red-50 dark:bg-red-900/30', icon: 'text-red-500 dark:text-red-400' },
  { pill: 'bg-amber-50 dark:bg-amber-900/30', icon: 'text-amber-500 dark:text-amber-400' },
  { pill: '', icon: 'text-emerald-500 dark:text-emerald-400' }
];

// Project dates are normalized to `yyyy-mm-dd` (utils/parsers); parse to a
// local-midnight Date, falling back to Date() for other shapes.
const parseEnd = (raw) => {
  if (!raw) return null;
  const m = String(raw).match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
  const d = new Date(raw);
  return Number.isNaN(d.getTime())
    ? null
    : new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

const startOfToday = () => {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
};

const tooltipText = (sev, end, diff) => {
  const label = formatDisplayDate(end);
  if (sev === 0) return `End date: sudah lewat (${label}, ${-diff} hari lalu)`;
  if (diff === 0) return `End date: hari ini (${label})`;
  if (sev === 1) return `End date: mendekat (${label}, ${diff} hari lagi)`;
  return `End date: masih aman (${label}, ${diff} hari lagi)`;
};

/**
 * Deadline proximity lamp: shown only for Ongoing / Maintenance / Belum SDHO
 * projects. Red = end date passed, amber = within 30 days, green = beyond 30
 * days. Green stays a plain colored icon (no pill) so red/amber stand out.
 * Plain spans only (safe inside the CompactRow <button>).
 */
const EndDateBadge = ({ project }) => {
  if (!project || !TARGET_STATUSES.has(project.status)) return null;

  const end = parseEnd(project.end);
  if (!end) return null;

  const diff = Math.round((end.getTime() - startOfToday().getTime()) / 86400000);
  const sev = diff < 0 ? 0 : diff <= NEAR_DAYS ? 1 : 2;
  const { pill, icon } = SEV_STYLE[sev];

  return (
    <span className="relative inline-flex shrink-0" title={tooltipText(sev, end, diff)}>
      <span className={`inline-flex items-center justify-center rounded-full p-0.5 transition-colors ${pill}`}>
        <CalendarClock className={`h-3.5 w-3.5 ${icon}`} />
      </span>
    </span>
  );
};

export default React.memo(EndDateBadge);
