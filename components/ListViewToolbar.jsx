import React from 'react';

export const GROUP_OPTIONS = [
  ['none', 'None'],
  ['status', 'Status'],
  ['customer', 'Customer'],
  ['pm', 'PM'],
  ['solusi', 'Solusi']
];

/**
 * Toolbar for the stacked (New) list view: grouping selector + group expand/collapse.
 */
const ListViewToolbar = ({ groupBy, onGroupByChange, onExpandAll, onCollapseAll }) => (
  <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-3">
    <div className="ph-seg self-start max-w-full">
      <span className="px-3 flex items-center text-[.66rem] font-extrabold uppercase tracking-[0.12em] text-muted2">Group by</span>
      {GROUP_OPTIONS.map(([value, label]) => (
        <button
          key={value}
          onClick={() => onGroupByChange(value)}
          className={`ph-seg__btn ${groupBy === value ? 'is-active' : ''}`}
        >
          {label}
        </button>
      ))}
    </div>

    {groupBy !== 'none' && (
      <div className="flex items-center gap-2 sm:ml-auto">
        <button onClick={onExpandAll} className="ph-btn ph-btn--outline ph-btn--sm">Expand all</button>
        <button onClick={onCollapseAll} className="ph-btn ph-btn--outline ph-btn--sm">Collapse all</button>
      </div>
    )}
  </div>
);

export default React.memo(ListViewToolbar);
