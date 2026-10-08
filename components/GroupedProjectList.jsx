import React, { useMemo } from 'react';
import { formatShortNumber, safeParseFloat } from '../utils/formatting';
import { splitSolutions } from '../utils/solutions';
import { ChevronDownIcon } from './Icons';
import ProjectRow from './ProjectRow';
import Morph from './Morph';

const STATUS_ORDER = ['Ongoing', 'Maintenance', 'Belum SDHO', 'Done', 'Archived'];

const GROUP_EMPTY_LABEL = {
  status: '(No Status)',
  customer: '(No Customer)',
  pm: '(Unassigned PM)',
  solusi: '(No Solution)'
};

/** Highest (newest) project number in a group, compared numerically. */
const newestProjNumber = (projects) =>
  projects.reduce((max, p) => {
    const n = String(p.projNumber || '');
    return n.localeCompare(max, undefined, { numeric: true, sensitivity: 'base' }) > 0 ? n : max;
  }, '');

/**
 * Groups projects by the selected field.
 * Group by "solusi" puts a multi-value project into every matching group.
 * @param {Array<object>} projects
 * @param {string} groupBy - 'none' | 'status' | 'customer' | 'pm' | 'solusi'
 * @returns {Array<{key: string, label: string|null, projects: Array<object>}>}
 */
export function buildGroups(projects, groupBy) {
  if (!groupBy || groupBy === 'none') return [{ key: '__all__', label: null, projects }];

  const map = new Map();
  const push = (key, project) => {
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(project);
  };

  if (groupBy === 'solusi') {
    projects.forEach((p) => {
      const values = splitSolutions(p.solusi);
      if (values.length === 0) push('', p);
      else values.forEach((v) => push(v, p));
    });
  } else {
    projects.forEach((p) => push(String(p[groupBy] || '').trim(), p));
  }

  const groups = [...map.entries()].map(([key, groupProjects]) => ({
    key,
    label: key || GROUP_EMPTY_LABEL[groupBy],
    projects: groupProjects
  }));

  if (groupBy === 'status') {
    groups.sort((a, b) => {
      const ia = STATUS_ORDER.indexOf(a.key);
      const ib = STATUS_ORDER.indexOf(b.key);
      const ra = ia === -1 ? 999 : ia;
      const rb = ib === -1 ? 999 : ib;
      if (ra !== rb) return ra - rb;
      return (a.label || '').localeCompare(b.label || '');
    });
  } else if (groupBy === 'customer') {
    groups.sort((a, b) => {
      if (!a.key && b.key) return 1;
      if (a.key && !b.key) return -1;
      // 1) most projects first
      if (b.projects.length !== a.projects.length) return b.projects.length - a.projects.length;
      // 2) newest project number first
      const na = newestProjNumber(a.projects);
      const nb = newestProjNumber(b.projects);
      if (na !== nb) return nb.localeCompare(na, undefined, { numeric: true, sensitivity: 'base' });
      // 3) alphabetical
      return (a.key || '').localeCompare(b.key || '', undefined, { sensitivity: 'base' });
    });
  } else {
    groups.sort((a, b) => {
      if (!a.key && b.key) return 1;
      if (a.key && !b.key) return -1;
      return (a.key || '').localeCompare(b.key || '', undefined, { sensitivity: 'base' });
    });
  }

  return groups;
}

const GroupedProjectList = ({
  projects,
  groupBy,
  expandedIds,
  onToggleCard,
  collapsedGroups,
  onToggleGroup,
  isAdmin,
  onEdit,
  onDelete,
  laborBudgets
}) => {
  const groups = useMemo(() => buildGroups(projects, groupBy), [projects, groupBy]);
  const showHeaders = groupBy && groupBy !== 'none';

  return (
    <div className="flex flex-col gap-4">
      {groups.map((group) => {
        const collapsed = collapsedGroups.has(group.key);
        const totalValue = group.projects.reduce((sum, p) => sum + safeParseFloat(p.value), 0);
        const totalMandays = group.projects.reduce((sum, p) => sum + safeParseFloat(p.sisaMandays), 0);

        return (
          <div key={group.key} className="flex flex-col gap-2">
            {showHeaders && (
              <button
                onClick={() => onToggleGroup(group.key)}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors text-left"
              >
                <ChevronDownIcon className={`h-4 w-4 text-slate-400 transition-transform shrink-0 ${collapsed ? '-rotate-90' : ''}`} />
                <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 truncate">{group.label}</span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 shrink-0">
                  {group.projects.length}
                </span>
                <span className="ml-auto flex items-center gap-3 sm:gap-5 text-[10px] font-black uppercase tracking-wider shrink-0">
                  <span className="text-indigo-600 dark:text-indigo-400 tabular-nums">{formatShortNumber(totalValue)}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 tabular-nums">{formatShortNumber(totalMandays)}</span>
                </span>
              </button>
            )}

            <Morph open={!collapsed}>
              <div className="flex flex-col gap-1 pb-1">
                {group.projects.map((p) => (
                  <ProjectRow
                    key={p.id}
                    project={p}
                    groupBy={groupBy}
                    expanded={expandedIds.has(p.id)}
                    onToggle={() => onToggleCard(p.id)}
                    isAdmin={isAdmin}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    laborBudget={laborBudgets?.[p.id]}
                  />
                ))}
              </div>
            </Morph>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(GroupedProjectList);
