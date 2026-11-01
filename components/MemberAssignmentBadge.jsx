import React from 'react';
import { UserCheckIcon } from './Icons';
import { assignmentSeverity, lampClass } from '../utils/indicators';

const tooltipText = (assignment) => {
  const state = assignment?.state;
  const total = assignment?.total ?? 0;
  const active = assignment?.active ?? 0;
  if (state === 'loading') return 'Assignment member: memuat...';
  if (state === 'error') return 'Assignment member: gagal memuat';
  if (active > 0) return `Assignment member aktif: ${active}/${total}`;
  if (total > 0) return `Assignment member: tidak ada yang aktif saat ini (${total} tercatat)`;
  return 'Assignment member: belum ada member';
};

/**
 * Member assignment as a labeled lamp (e.g. "3/4"): green when at least one
 * member is active, amber when members exist but none active, idle when empty.
 * Plain spans only (safe inside a <button>).
 */
const MemberAssignmentBadge = ({ assignment }) => {
  const state = assignment?.state ?? 'ready';
  const total = assignment?.total ?? 0;
  const active = assignment?.active ?? 0;
  const loading = state === 'loading';
  const tone = assignmentSeverity(assignment);

  return (
    <span
      className={`ph-lamp ${lampClass(tone)}${loading ? ' animate-pulse' : ''}`}
      title={tooltipText(assignment)}
    >
      <UserCheckIcon className="h-3 w-3" />
      {loading ? '…' : `${active}/${total}`}
    </span>
  );
};

export default React.memo(MemberAssignmentBadge);
