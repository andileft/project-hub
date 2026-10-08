import React from 'react';
import { getStatusClasses, formatShortNumber, safeParseFloat } from '../utils/formatting';
import { Building2Icon, UserCogIcon, ChevronDownIcon } from './Icons';
import ProjectCard from './ProjectCard';
import LaborBudgetBadge from './LaborBudgetBadge';
import MemberAssignmentBadge from './MemberAssignmentBadge';
import EndDateBadge from './EndDateBadge';
import Morph from './Morph';

const GRID_TRANSITION = (rows) => ({
  display: 'grid',
  gridTemplateRows: rows,
  transition: 'grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1)'
});

/**
 * Compact single-line row shown in the stacked (New) list view.
 * `groupBy` controls which of the grouping fields is hidden because the group
 * header already shows it.
 */
const CompactRow = ({ project, groupBy, expanded, onToggle, laborBudget, memberAssignment }) => {
  const hideCustomer = groupBy === 'customer';
  const hidePm = groupBy === 'pm';
  const mandays = formatShortNumber(safeParseFloat(project.sisaMandays));

  return (
    <button
      type="button"
      onClick={onToggle}
      title={project.projName}
      className="w-full text-left flex items-center gap-3 pl-3 pr-2 h-9 group cursor-pointer"
    >
      <span className="w-16 shrink-0 truncate text-[10px] font-bold text-slate-400 uppercase tracking-tighter tabular-nums">
        {project.projNumber || 'NO-ID'}
      </span>
      <span className="flex-1 min-w-0 truncate text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 transition-colors">
        {project.projName || 'Untitled Project'}
      </span>
      {!hideCustomer && (
        <span className="hidden md:flex items-center gap-1 w-36 shrink-0 min-w-0 text-[11px] font-medium text-slate-500 dark:text-slate-400">
          <Building2Icon className="h-3 w-3 shrink-0 text-slate-400" />
          <span className="truncate">{project.customer || '-'}</span>
        </span>
      )}
      {!hidePm && (
        <span className="hidden lg:flex items-center gap-1 w-32 shrink-0 min-w-0 text-[11px] font-medium text-slate-500 dark:text-slate-400">
          <UserCogIcon className="h-3 w-3 shrink-0 text-slate-400" />
          <span className="truncate">{project.pm || '—'}</span>
        </span>
      )}
      <span className="w-20 shrink-0 text-right text-[11px] font-bold text-indigo-600 tabular-nums">
        {formatShortNumber(safeParseFloat(project.value))}
      </span>
      <span className="w-16 shrink-0 text-right text-[11px] font-bold text-emerald-600 tabular-nums">
        {mandays}
      </span>
      <LaborBudgetBadge budget={laborBudget} />
      <MemberAssignmentBadge assignment={memberAssignment} />
      <EndDateBadge project={project} />
      <ChevronDownIcon className={`h-3.5 w-3.5 shrink-0 text-slate-300 group-hover:text-slate-500 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
    </button>
  );
};

/**
 * One card shell that morphs between the compact row and the full ProjectCard in place.
 */
const ProjectRow = ({ project, groupBy, expanded, onToggle, isAdmin, onEdit, onDelete, laborBudget, memberAssignment }) => {
  const statusStyle = getStatusClasses(project.status);

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 border-l-4 ${statusStyle.border} overflow-hidden transition-shadow duration-300 ${expanded ? 'shadow-lg' : 'hover:shadow-md'}`}>
      <div style={GRID_TRANSITION(expanded ? '0fr' : '1fr')}>
        <div
          className={`min-h-0 overflow-hidden transition-opacity duration-200 ${expanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-hidden={expanded}
        >
          <CompactRow project={project} groupBy={groupBy} expanded={expanded} onToggle={onToggle} laborBudget={laborBudget} memberAssignment={memberAssignment} />
        </div>
      </div>

      <Morph open={expanded}>
        <button
          type="button"
          onClick={onToggle}
          title="Collapse to stacked row"
          className="w-full flex items-center justify-end gap-1 px-4 pt-3 pb-1 group hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
        >
          <span className="flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <ChevronDownIcon className="h-3.5 w-3.5 rotate-180" />
            Collapse
          </span>
        </button>
        <ProjectCard
          project={project}
          embedded
          isAdmin={isAdmin}
          onEdit={onEdit}
          onDelete={onDelete}
          laborBudget={laborBudget}
          memberAssignment={memberAssignment}
        />
      </Morph>
    </div>
  );
};

export default React.memo(ProjectRow);
