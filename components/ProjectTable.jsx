import React, { useMemo, useState } from 'react';
import {
  getStatusChipClass,
  formatShortNumber,
  formatShortCurrency,
  formatDisplayDate,
  safeParseFloat
} from '../utils/formatting';
import {
  laborSeverity,
  assignmentSeverity,
  endDateSeverity,
  worstSeverity,
  lampClass,
  valueToneClass
} from '../utils/indicators';
import { AlertTriangleIcon, CheckCircle2Icon } from './Icons';
import ProjectCard from './ProjectCard';

const SORT_DEFAULT_DIR = { value: 'desc', sisaMandays: 'desc', budget: 'desc' };

const parseEnd = (raw) => {
  if (!raw) return null;
  const m = String(raw).match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  const d = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(raw);
  return Number.isNaN(d.getTime()) ? null : d;
};

const hexShort = (m) => formatShortNumber(safeParseFloat(m));

/**
 * Compact table view (New design only): 10 columns, sortable, searchable.
 * Row click opens the full ProjectCard in a right-side drawer.
 */
const ProjectTable = ({
  projects,
  isAdmin,
  onEdit,
  onDelete,
  laborBudgets,
  memberAssignments,
  onOpenDetail,
  sortKey = 'projNumber',
  sortDir = 'asc',
  onSortChange
}) => {
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = projects;
    if (q) {
      list = list.filter((p) => (
        p.projName?.toLowerCase().includes(q) ||
        p.customer?.toLowerCase().includes(q) ||
        p.projNumber?.toLowerCase().includes(q) ||
        p.pm?.toLowerCase().includes(q) ||
        p.solusi?.toLowerCase().includes(q)
      ));
    }
    const dir = sortDir === 'desc' ? -1 : 1;
    const val = (p) => {
      if (sortKey === 'value') return Number(p.value) || 0;
      if (sortKey === 'sisaMandays') return Number(p.sisaMandays) || 0;
      if (sortKey === 'budget') return laborBudgets?.[p.id]?.value ?? -Infinity;
      if (sortKey === 'end') return parseEnd(p.end)?.getTime() ?? 0;
      return String(p[sortKey] || '');
    };
    return [...list].sort((a, b) => {
      const va = val(a); const vb = val(b);
      if (typeof va === 'string' || typeof vb === 'string') {
        return String(va).localeCompare(String(vb), undefined, { numeric: true, sensitivity: 'base' }) * dir;
      }
      return (va - vb) * dir;
    });
  }, [projects, query, sortKey, sortDir, laborBudgets]);

  const totals = useMemo(() => ({
    value: rows.reduce((s, p) => s + (Number(p.value) || 0), 0),
    mandays: rows.reduce((s, p) => s + (Number(p.sisaMandays) || 0), 0)
  }), [rows]);

  const toggleSort = (key) => {
    const nextDir = sortKey === key
      ? (sortDir === 'asc' ? 'desc' : 'asc')
      : (SORT_DEFAULT_DIR[key] || 'asc');
    if (onSortChange) onSortChange(key, nextDir);
  };

  const openProject = openId ? projects.find((p) => p.id === openId) : null;

  const Th = ({ k, label, right, width }) => (
    <th
      onClick={() => toggleSort(k)}
      style={width ? { width } : undefined}
      className={`px-3 py-2.5 text-[.58rem] font-extrabold text-muted2 uppercase tracking-[.06em] bg-[var(--surface-2)] cursor-pointer select-none whitespace-nowrap ${right ? 'text-right' : 'text-left'}`}
    >
      <span className="inline-flex items-center gap-1 max-w-full align-middle">
        <span className="truncate">{label}</span>
        <span className="text-muted2 opacity-70 shrink-0">{sortKey === k ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}</span>
      </span>
    </th>
  );

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <input
          className="ph-input max-w-xs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
        />
        <span className="ml-auto flex items-center gap-2 text-[.76rem] text-muted">
          <span className="ph-chip">{rows.length} rows</span>
          <span className="ph-chip">value {formatShortNumber(totals.value)}</span>
          <span className="ph-chip">{formatShortNumber(totals.mandays)} mandays</span>
        </span>
      </div>

      {/* Table */}
      <div className="ph-table-wrap--stack overflow-x-auto rounded-card border border-[var(--line)] bg-[var(--surface)] shadow-card">
        <table className="w-full min-w-[1060px] table-fixed text-left border-collapse ph-table--stack text-[.8rem]">
          <colgroup>
            <col style={{ width: '84px' }} />
            <col />
            <col style={{ width: '170px' }} />
            <col style={{ width: '96px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '84px' }} />
            <col style={{ width: '132px' }} />
            <col style={{ width: '92px' }} />
            <col style={{ width: '84px' }} />
          </colgroup>
          <thead>
            <tr>
              <Th k="projNumber" label="No. Project" />
              <Th k="projName" label="Project Name" />
              <Th k="customer" label="Customer" />
              <Th k="pm" label="PM" />
              <Th k="status" label="Status" />
              <Th k="value" label="Contract Value" right />
              <Th k="sisaMandays" label="Mandays" right />
              <Th k="budget" label="Remaining Labor" />
              <Th k="end" label="End Date" />
              <th className="px-3 py-2.5 text-[.6rem] font-extrabold text-muted2 uppercase tracking-[.1em] bg-[var(--surface-2)]">Indicators</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => {
              const lb = laborBudgets?.[p.id];
              const ma = memberAssignments?.[p.id];
              const laborTone = laborSeverity(lb);
              const endTone = endDateSeverity(p);
              const overall = worstSeverity(laborTone, endTone);
              const pct = lb?.state === 'ready' && lb?.value != null
                ? Math.max(6, Math.min(100, lb.value / 50 * 100))
                : 6;
              const cell = 'px-3 py-2.5';
              return (
                <tr
                  key={p.id}
                  onClick={() => setOpenId(p.id)}
                  onDoubleClick={() => onOpenDetail && onOpenDetail(p)}
                  className="cursor-pointer border-b border-[var(--line-soft)] last:border-0 hover:bg-wine-soft/40 dark:hover:bg-[var(--surface-2)] transition-colors"
                >
                  <td className={`${cell} font-mono text-[.7rem] font-semibold text-muted2 tabular-nums align-top ph-cell-sub`} data-label="No. proyek"><div className="truncate">{String(p.projNumber || '—').replace(/^PRJ-/, '')}</div></td>
                  <td className={`${cell} align-top ph-cell-title`}>
                    <div className="font-bold text-ink dark:text-[var(--ink)] leading-snug break-words">{p.projName}</div>
                    <div className="text-[.7rem] text-muted2 leading-snug break-words">{[p.solusi, p.methodology].filter(Boolean).join(' · ')}</div>
                  </td>
                  <td className={`${cell} text-muted align-top`} data-label="Customer"><div className="leading-snug break-words">{p.customer || '—'}</div></td>
                  <td className={`${cell} align-middle`} data-label="PM" title={p.pm || ''}><div className="truncate">{p.pm || '—'}</div></td>
                  <td className={`${cell} whitespace-nowrap align-middle`} data-label="Status"><span className={getStatusChipClass(p.status)}>{p.status || '—'}</span></td>
                  <td className={`${cell} text-right font-extrabold text-wine tabular-nums whitespace-nowrap align-middle`} data-label="Nilai kontrak">{formatShortCurrency(Number(p.value) || 0)}</td>
                  <td className={`${cell} text-right font-extrabold text-[var(--green)] tabular-nums whitespace-nowrap align-middle`} data-label="Sisa mandays">{formatShortNumber(Number(p.sisaMandays) || 0)}</td>
                  <td className={`${cell} align-middle`} data-label="Sisa labor budget">
                    <div className="ph-progress max-w-[112px]"><span style={{ width: `${pct}%` }} /></div>
                    <div className={`text-[.7rem] mt-1.5 whitespace-nowrap tabular-nums ${valueToneClass(laborTone)}`}>
                      {lb?.state === 'ready' && lb?.value != null ? `${lb.value.toLocaleString('id-ID')} jt` : '—'}
                    </div>
                  </td>
                  <td className={`${cell} whitespace-nowrap tabular-nums align-middle ${endTone === 'bad' ? 'text-red-600 font-semibold' : endTone === 'warn' ? 'text-amber-600 font-semibold' : 'text-muted'}`} data-label="End date">
                    {(endTone === 'bad' || endTone === 'warn') && (
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle ${endTone === 'bad' ? 'bg-red-500' : 'bg-amber-500'}`} aria-hidden="true" />
                    )}
                    {formatDisplayDate(p.end)}
                  </td>
                  <td className={`${cell} align-middle`} data-label="Indikator">
                    <span className="flex flex-col items-start gap-1.5">
                      <span className={`ph-lamp ${lampClass(overall)}`} title={overall === 'bad' ? 'Perlu perhatian: jadwal atau budget' : overall === 'warn' ? 'Mendekati batas' : 'Sehat'}>
                        {overall === 'bad' || overall === 'warn' ? <AlertTriangleIcon className="h-3.5 w-3.5" /> : <CheckCircle2Icon className="h-3.5 w-3.5" />}
                      </span>
                      {ma?.state === 'ready' && (
                        <span className={`ph-lamp ${lampClass(assignmentSeverity(ma))} whitespace-nowrap`} title={`Member aktif: ${ma.active}/${ma.total}`}>{ma.active}/{ma.total}</span>
                      )}
                    </span>
                  </td>
                </tr>
              );
            })}
            {rows.length === 0 && (
              <tr>
                <td colSpan={10} className="py-10 text-center text-muted">No projects match the current filters.</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} className="px-3 py-3 bg-[var(--surface-2)] font-extrabold text-ink dark:text-[var(--ink)] ph-cell-title" data-label="">TOTAL — {rows.length} rows</td>
              <td className="px-3 py-3 bg-[var(--surface-2)] font-extrabold text-right text-wine tabular-nums whitespace-nowrap" data-label="Nilai kontrak">{formatShortCurrency(totals.value)}</td>
              <td className="px-3 py-3 bg-[var(--surface-2)] font-extrabold text-right text-[var(--green)] tabular-nums whitespace-nowrap" data-label="Sisa mandays">{formatShortNumber(totals.mandays)}</td>
              <td colSpan={3} className="px-3 py-3 bg-[var(--surface-2)] text-[.72rem] text-muted2" data-label="">Indicators: labor budget, end date, and risk flag.</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Detail drawer */}
      {openProject && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-[rgba(29,28,33,.48)] backdrop-blur-[2px]" onClick={() => setOpenId(null)} />
          <aside className="relative z-[2] w-[min(720px,100%)] h-full overflow-y-auto bg-[var(--surface)] border-l border-[var(--line)] shadow-panel ph-slide-up">
            <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-[var(--line)] sticky top-0 bg-[var(--surface)] z-10">
              <span className="ph-kicker">Project detail</span>
              <span className="flex items-center gap-2">
                {onOpenDetail && (
                  <button
                    onClick={() => { const p = openProject; setOpenId(null); onOpenDetail(p); }}
                    className="ph-btn ph-btn--primary ph-btn--sm"
                  >
                    Open full detail
                  </button>
                )}
                <button onClick={() => setOpenId(null)} className="ph-icon-btn" aria-label="Close detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </span>
            </div>
            <div className="p-4">
              <ProjectCard
                project={openProject}
                embedded
                isAdmin={isAdmin}
                onEdit={(proj) => { setOpenId(null); onEdit(proj); }}
                onDelete={onDelete}
                laborBudget={laborBudgets?.[openProject.id]}
                memberAssignment={memberAssignments?.[openProject.id]}
              />
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default React.memo(ProjectTable);
