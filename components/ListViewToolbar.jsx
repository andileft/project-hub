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
  <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-3 mb-4 flex flex-col sm:flex-row sm:items-center gap-3">
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 rounded-xl p-1 self-start flex-wrap">
      <span className="px-2 text-[9px] font-black uppercase tracking-widest text-slate-400">Group by</span>
      {GROUP_OPTIONS.map(([value, label]) => (
        <button
          key={value}
          onClick={() => onGroupByChange(value)}
          className={`px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all ${groupBy === value ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm' : 'text-slate-500 hover:text-indigo-600'}`}
        >
          {label}
        </button>
      ))}
    </div>

    {groupBy !== 'none' && (
      <div className="flex items-center gap-2 sm:ml-auto">
        <button
          onClick={onExpandAll}
          className="px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider text-slate-500 hover:text-indigo-600 border border-slate-200 dark:border-slate-700"
        >
          Expand groups
        </button>
        <button
          onClick={onCollapseAll}
          className="px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider text-slate-500 hover:text-indigo-600 border border-slate-200 dark:border-slate-700"
        >
          Collapse groups
        </button>
      </div>
    )}
  </div>
);

export default React.memo(ListViewToolbar);
