import React from 'react';
import { getStatusChipClass, formatShortNumber, safeParseFloat } from '../utils/formatting';
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
 * header already shows it. Plain inline content only (it is a <button>).
 */
const CompactRow = ({ project, groupBy, expanded, onToggle, laborBudget, memberAssignment }) => {
  const hideCustomer = groupBy === 'customer';
  const hidePm = groupBy === 'pm';
  const mandays = formatShortNumber(safeParseFloat(project.sisaMandays));
  const statusClass = getStatusChipClass(project.status);

  return (
    <button
      type="button"
      onClick={onToggle}
      title={project.projName}
      className="row-compact w-full grid items-center gap-3.5 px-5 py-[11px] text-left cursor-pointer transition-colors hover:bg-wine-soft/60 dark:hover:bg-[var(--surface-2)] [grid-template-columns:76px_minmax(0,1fr)_auto] lg:[grid-template-columns:84px_minmax(0,1fr)_150px_128px_92px_132px_minmax(230px,auto)]"
    >
      <span className="truncate font-mono text-[.7rem] font-semibold text-muted2 tabular-nums whitespace-nowrap">
        {String(project.projNumber || 'NO-ID').replace(/^PRJ-/, '')}
      </span>

      <span className="min-w-0 flex flex-col">
        <span className={`truncate font-bold text-[.88rem] text-ink dark:text-[var(--ink)] transition-colors ${expanded ? '' : 'group-hover:text-wine'}`}>
          {project.projName || 'Untitled Project'}
        </span>
        {!hideCustomer && (
          <span className="hidden sm:flex items-center gap-1.5 truncate text-[.76rem] text-muted">
            <Building2Icon className="h-3 w-3 shrink-0 opacity-70" />
            <span className="truncate">{project.customer || '—'}</span>
          </span>
        )}
      </span>

      {!hidePm && (
        <span className="hidden lg:flex items-center gap-1.5 min-w-0 text-[.76rem] text-muted">
          <UserCogIcon className="h-3 w-3 shrink-0 opacity-70" />
          <span className="truncate">{project.pm || 'Unassigned'}</span>
        </span>
      )}

      <span className="hidden lg:block text-right font-extrabold text-[.82rem] text-wine tabular-nums whitespace-nowrap">
        {formatShortNumber(safeParseFloat(project.value))}
      </span>

      <span className="hidden lg:block text-right font-extrabold text-[.82rem] text-[var(--green)] tabular-nums whitespace-nowrap">
        {mandays}
      </span>

      <span className="hidden lg:flex justify-start">
        <span className={statusClass}>{project.status || '—'}</span>
      </span>

      <span className="flex items-center justify-end gap-1.5 flex-wrap">
        <span className="hidden sm:inline-flex items-center gap-1.5">
          <LaborBudgetBadge budget={laborBudget} />
          <MemberAssignmentBadge assignment={memberAssignment} />
        </span>
        <EndDateBadge project={project} />
        <ChevronDownIcon className={`h-3.5 w-3.5 shrink-0 text-muted2 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
      </span>
    </button>
  );
};

/**
 * One card shell that morphs between the compact row and the full ProjectCard in place.
 */
const ProjectRow = ({ project, groupBy, expanded, onToggle, isAdmin, onEdit, onDelete, laborBudget, memberAssignment, onOpenDetail, showExtActions, flush = false }) => {
  return (
    <div className={flush
      ? `transition-colors duration-200 ${expanded ? 'bg-[var(--surface-2)]' : ''}`
      : `bg-[var(--surface)] border border-[var(--line)] rounded-card overflow-hidden transition-shadow duration-300 ${expanded ? 'shadow-lift' : 'hover:shadow-card'}`}>
      <div style={GRID_TRANSITION(expanded ? '0fr' : '1fr')}>
        <div
          className={`group min-h-0 overflow-hidden transition-opacity duration-200 ${expanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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
          className="w-full flex items-center justify-end gap-1 px-4 pt-4 pb-1 group/collapse hover:opacity-100 transition-opacity"
        >
          <span className="flex items-center gap-1 px-2 py-1 rounded-full text-[.64rem] font-extrabold uppercase tracking-wider text-muted2 hover:text-wine transition-colors">
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
          onOpenDetail={onOpenDetail}
          showExtActions={showExtActions}
        />
      </Morph>
    </div>
  );
};

export default React.memo(ProjectRow);
