import React from 'react';
import { UserCheckIcon } from './Icons';

const tooltipText = (assignment) => {
  const state = assignment?.state;
  const total = assignment?.total ?? 0;
  const active = assignment?.active ?? 0;
  if (state === 'loading') return 'Assignment member: memuat...';
  if (state === 'error') return 'Assignment member: gagal memuat';
  if (active > 0) return `Assignment member aktif: ${active}/${total}`;
  if (total > 0) {
    return `Assignment member: tidak ada yang aktif saat ini (${total} tercatat)`;
  }
  return 'Assignment member: belum ada member';
};

/**
 * On/off lamp for the current member assignment of a project: a person-check
 * icon that turns emerald when at least one team member's assignment window
 * covers today. No dot, so it does not echo the labor badge's presence lamp.
 * Plain spans only (safe inside the CompactRow <button>).
 */
const MemberAssignmentBadge = ({ assignment }) => {
  const state = assignment?.state ?? 'ready';
  const active = assignment?.active ?? 0;
  const isOn = state === 'ready' && active > 0;
  const loading = state === 'loading';

  return (
    <span className="relative inline-flex shrink-0" title={tooltipText(assignment)}>
      <span
        className={`inline-flex items-center justify-center rounded-full p-0.5 transition-colors ${isOn ? 'bg-emerald-50 dark:bg-emerald-900/30' : ''}`}
      >
        <UserCheckIcon
          className={`h-3.5 w-3.5 ${isOn ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-300 dark:text-slate-600'}${loading ? ' animate-pulse' : ''}`}
        />
      </span>
    </span>
  );
};

export default React.memo(MemberAssignmentBadge);
