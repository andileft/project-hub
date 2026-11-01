import React, { useMemo, useEffect, useRef } from 'react';
import { formatShortNumber, safeParseFloat, getStatusDotColor } from '../utils/formatting';
import { splitSolutions } from '../utils/solutions';
import { ChevronDownIcon, AlertTriangleIcon } from './Icons';
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

// A project is "at risk" when its remaining labor budget is low or its end
// date is near/past — derived from existing badge data only.
const daysToEnd = (end) => {
  if (!end) return Infinity;
  const m = String(end).match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  const d = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(end);
  if (Number.isNaN(d.getTime())) return Infinity;
  const today = new Date();
  const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() - t0.getTime()) / 86400000);
};

const isAtRisk = (project, laborBudget) => {
  const sev = laborBudget?.sev;
  if (sev === 0 || sev === 1) return true;
  const status = project.status;
  if (['Ongoing', 'Maintenance', 'Belum SDHO'].includes(status) && daysToEnd(project.end) <= 30) return true;
  return false;
};

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
  laborBudgets,
  memberAssignments,
  onOpenDetail,
  showExtActions
}) => {
  const groups = useMemo(() => buildGroups(projects, groupBy), [projects, groupBy]);
  const showHeaders = groupBy && groupBy !== 'none';

  // Staggered reveal on mount / when the group set changes.
  const rootRef = useRef(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = root.querySelectorAll('.reveal');
    items.forEach((el, i) => {
      el.style.transitionDelay = reduce ? '0ms' : `${Math.min(i * 30, 300)}ms`;
      el.classList.remove('in');
    });
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => {
      items.forEach((el) => el.classList.add('in'));
    }));
    return () => cancelAnimationFrame(raf);
  }, [groups.length, groupBy]);

  return (
    <div ref={rootRef} className="flex flex-col gap-3.5">
      {groups.map((group) => {
        const collapsed = collapsedGroups.has(group.key);
        const totalValue = group.projects.reduce((sum, p) => sum + safeParseFloat(p.value), 0);
        const totalMandays = group.projects.reduce((sum, p) => sum + safeParseFloat(p.sisaMandays), 0);
        const risky = group.projects.filter((p) => isAtRisk(p, laborBudgets?.[p.id])).length;
        const dotColor = groupBy === 'status' ? getStatusDotColor(group.key) : 'var(--wine)';

        return (
          <section
            key={group.key}
            className={`bg-[var(--surface)] border border-[var(--line)] rounded-card shadow-card overflow-hidden reveal`}
          >
            {showHeaders && (
              <button
                onClick={() => onToggleGroup(group.key)}
                className="w-full flex items-center gap-3.5 px-5 py-3.5 text-left hover:bg-[var(--surface-2)] transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: dotColor }} />
                <span className="font-display font-bold text-[.96rem] text-ink dark:text-[var(--ink)] truncate min-w-0">{group.label}</span>
                <span className="hidden md:inline-block text-[.72rem] font-bold text-muted2 bg-[var(--surface-2)] border border-[var(--line)] rounded-full px-2.5 py-0.5 shrink-0">{group.projects.length}</span>
                {risky > 0 && (
                  <span className="ph-chip ph-chip--red shrink-0 hidden md:inline-flex" title={`${risky} at risk`}>
                    <AlertTriangleIcon className="h-3 w-3" />
                    {risky} at risk
                  </span>
                )}
                {risky > 0 && (
                  <span className="md:hidden w-4 h-4 shrink-0 grid place-items-center text-[var(--red)]" title={`${risky} at risk`} aria-label={`${risky} at risk`}>
                    <AlertTriangleIcon className="h-3.5 w-3.5" />
                  </span>
                )}
                <span className="ml-auto flex items-center gap-4 text-[.76rem] text-muted shrink-0">
                  <span>value <b className="text-ink dark:text-[var(--ink)]">{formatShortNumber(totalValue)}</b></span>
                  <span className="hidden sm:inline">mandays <b className="text-ink dark:text-[var(--ink)]">{formatShortNumber(totalMandays)}</b></span>
                  <ChevronDownIcon className={`h-4 w-4 text-muted2 transition-transform duration-300 ${collapsed ? '-rotate-90' : ''}`} />
                </span>
              </button>
            )}

            <Morph open={!collapsed}>
              <div className={`flex flex-col divide-y divide-[var(--line-soft)] ${showHeaders ? 'border-t border-[var(--line)]' : ''}`}>
                {group.projects.map((p) => (
                  <div key={p.id} id={`deeplink-target-${p.id}`} className="scroll-mt-24">
                    <ProjectRow
                      project={p}
                      groupBy={groupBy}
                      expanded={expandedIds.has(p.id)}
                      onToggle={() => onToggleCard(p.id)}
                      isAdmin={isAdmin}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      laborBudget={laborBudgets?.[p.id]}
                      memberAssignment={memberAssignments?.[p.id]}
                      onOpenDetail={onOpenDetail}
                      showExtActions={showExtActions}
                      flush
                    />
                  </div>
                ))}
              </div>
            </Morph>
          </section>
        );
      })}
    </div>
  );
};

export default React.memo(GroupedProjectList);
