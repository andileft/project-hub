import React, { useState } from 'react';
import { collection, getDocs, query, where, db, COLLECTION_PATH } from '../utils/firebase';
import { getStatusChipClass, getStatusDotColor, formatDisplayDate, formatShortNumber, safeParseFloat } from '../utils/formatting';
import { parseNoteUpdates } from '../utils/parsers';
import { isRowValid } from '../hooks/useMemberAssignments';

import LaborBudgetBadge from './LaborBudgetBadge';
import MemberAssignmentBadge from './MemberAssignmentBadge';
import EndDateBadge from './EndDateBadge';
import {
  Building2Icon,
  UserCogIcon,
  UsersIcon,
  CalendarRangeIcon,
  ChevronDownIcon,
  FlagIcon,
  FileBarChartIcon,
  DatabaseIcon,
  BanknoteIcon,
  LightbulbIcon,
  Clock3Icon,
  ShieldCheckIcon,
  Edit2Icon,
  PaperclipIcon,
  FileTextIcon,
  Trash2Icon,
  CheckCircle2Icon,
  SparklesIcon,
  Loader2Icon
} from './Icons';

// Compact money for the financials accordion (Mio IDR, matches the app style).
const money = (v) => formatShortNumber(safeParseFloat(v));

const initDate = (raw) => {
  if (!raw) return null;
  const m = String(raw).match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  const d = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(raw);
  return Number.isNaN(d.getTime()) ? null : d;
};

const initials = (name) => {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
};

// Notes come back in document order; sort so the newest update is first and the
// highlighted bullet is always the latest one.
const MONTH_IDX = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
const noteTime = (dateStr) => {
  if (!dateStr) return -Infinity;
  const m = String(dateStr).match(/^(\d{4})-([A-Za-z]{3})-(\d{1,2})/);
  if (m) {
    const mi = MONTH_IDX[m[2].toLowerCase()];
    if (mi !== undefined) return new Date(+m[1], mi, +m[3]).getTime();
  }
  const t = new Date(dateStr).getTime();
  return Number.isNaN(t) ? -Infinity : t;
};
const sortNotesNewestFirst = (groups) => [...groups].sort((a, b) => noteTime(b.date) - noteTime(a.date));

const fileNameFromUrl = (url) => {
  try {
    const u = new URL(url, window.location.origin);
    const last = decodeURIComponent((u.pathname.split('/').pop() || '').split('?')[0]);
    return last || 'Open file';
  } catch {
    return 'Open file';
  }
};

const DOC_SLOTS = [
  ['sdho', 'SDHO', PaperclipIcon],
  ['mom', 'MOM SDHO', FileTextIcon],
  ['kickoff', 'Kick Off', FlagIcon],
  ['report', 'Progress Report', FileBarChartIcon]
];

/** Small titled card used for the left/right panels of the expanded card. */
const Panel = ({ icon, title, hint, children }) => (
  <section className="bg-[var(--surface)] border border-[var(--line)] rounded-card shadow-card p-4">
    <div className="flex items-center justify-between gap-3 mb-3">
      <h5 className="flex items-center gap-2 font-display font-bold text-[.86rem] text-ink dark:text-[var(--ink)]">
        {icon}
        {title}
      </h5>
      {hint}
    </div>
    {children}
  </section>
);

const ProjectCard = ({ project, onEdit, onDelete, isAdmin, embedded = false, laborBudget, memberAssignment, onOpenDetail, showExtActions = true }) => {
  const statusClass = getStatusChipClass(project.status);

  // Team (collapsed by default, loaded on first open)
  const [teamOpen, setTeamOpen] = useState(false);
  const [team, setTeam] = useState([]);
  const [teamLoaded, setTeamLoaded] = useState(false);
  const [loadingTeam, setLoadingTeam] = useState(false);
  const [letters, setLetters] = useState({});

  // Financials (collapsed by default, loaded on first open)
  const [finOpen, setFinOpen] = useState(false);
  const [financials, setFinancials] = useState([]);
  const [finLoaded, setFinLoaded] = useState(false);
  const [loadingFinancials, setLoadingFinancials] = useState(false);
  const [lastUpdatedFinancials, setLastUpdatedFinancials] = useState(null);

  const loadTeam = async () => {
    if (loadingTeam) return;
    setLoadingTeam(true);
    try {
      const teamRef = collection(db, COLLECTION_PATH, project.id, 'team');
      const snapshot = await getDocs(teamRef);
      const teamData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Check for assignment letters
      try {
        const lettersRef = collection(db, 'assignmentLetters');
        const q = query(lettersRef, where("projectNumber", "==", project.projNumber));
        const letterSnap = await getDocs(q);
        const letterMap = {};
        letterSnap.forEach(ldoc => {
          const d = ldoc.data();
          const npk = d.npk || (d.assignee && d.assignee.npk);
          if (npk) letterMap[String(npk)] = true;
        });
        setLetters(letterMap);
      } catch (le) {
        console.error("Error fetching letters status:", le);
      }

      // Sort team members: Project Manager first, then by WBS, then by name.
      // Values are coerced to strings because WBS/name can arrive as numbers.
      const asText = (v) => (v == null ? '' : String(v).trim());
      const sortedTeam = [...teamData].sort((a, b) => {
        const pmA = asText(a.role).toLowerCase() === 'project manager';
        const pmB = asText(b.role).toLowerCase() === 'project manager';
        if (pmA !== pmB) return pmA ? -1 : 1;

        const wbsA = asText(a.wbs) || asText(a.fullWbs);
        const wbsB = asText(b.wbs) || asText(b.fullWbs);
        // Missing WBS goes last.
        if (!wbsA && wbsB) return 1;
        if (wbsA && !wbsB) return -1;
        const wbsCmp = wbsA.localeCompare(wbsB, undefined, { numeric: true, sensitivity: 'base' });
        if (wbsCmp !== 0) return wbsCmp;

        const roleCmp = asText(a.role).localeCompare(asText(b.role), undefined, { sensitivity: 'base' });
        if (roleCmp !== 0) return roleCmp;

        return asText(a.name).localeCompare(asText(b.name), undefined, { sensitivity: 'base' });
      });
      setTeam(sortedTeam);
      setTeamLoaded(true);
    } catch (error) {
      console.error("Error fetching team:", error);
      alert("Failed to fetch team members.");
    } finally {
      setLoadingTeam(false);
    }
  };

  const loadFinancials = async () => {
    if (loadingFinancials) return;
    setLoadingFinancials(true);
    try {
      const financialsRef = collection(db, COLLECTION_PATH, project.id, 'financials');
      const snapshot = await getDocs(financialsRef);
      const financialsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Find latest updatedAt
      let latest = null;
      financialsData.forEach(item => {
        if (item.updatedAt) {
          try {
            // Handle Firestore Timestamp or string
            const d = item.updatedAt.toDate ? item.updatedAt.toDate() : new Date(item.updatedAt);
            if (!latest || d > latest) latest = d;
          } catch (e) {
            console.warn("Invalid date:", item.updatedAt);
          }
        }
      });
      setLastUpdatedFinancials(latest);

      // Group and Total by WBS
      const grouped = financialsData.reduce((acc, curr) => {
        const wbs = curr.wbs || 'No WBS';
        if (!acc[wbs]) {
          acc[wbs] = {
            wbs,
            costPlan: 0,
            costCommit: 0,
            costActual: 0,
            availableBudget: 0,
            items: []
          };
        }
        acc[wbs].costPlan += safeParseFloat(curr.costPlan);
        acc[wbs].costCommit += safeParseFloat(curr.costCommit);
        acc[wbs].costActual += safeParseFloat(curr.costActual);
        acc[wbs].availableBudget += safeParseFloat(curr.availableBudget);
        acc[wbs].items.push(curr);
        return acc;
      }, {});

      // Sort: WBS groups, then each group's details by GL account
      const sortedGroups = Object.values(grouped).sort((a, b) =>
        a.wbs.localeCompare(b.wbs, undefined, { numeric: true, sensitivity: 'base' })
      );
      sortedGroups.forEach(group => {
        group.items.sort((a, b) =>
          String(a.glAccount || '').localeCompare(String(b.glAccount || ''), undefined, { numeric: true, sensitivity: 'base' })
        );
      });

      setFinancials(sortedGroups);
      setFinLoaded(true);
    } catch (error) {
      console.error("Error fetching financials:", error);
      alert("Failed to fetch financials data.");
    } finally {
      setLoadingFinancials(false);
    }
  };

  const toggleTeam = (e) => {
    e.stopPropagation();
    const next = !teamOpen;
    setTeamOpen(next);
    if (next) loadTeam();
  };

  const toggleFin = (e) => {
    e.stopPropagation();
    const next = !finOpen;
    setFinOpen(next);
    if (next) loadFinancials();
  };

  const guardNumber = () => {
    if (!project.projNumber) {
      alert("Project number is missing for this card.");
      return false;
    }
    return true;
  };

  const handleGoToCpc = (e) => { e.stopPropagation(); if (guardNumber()) window.postMessage({ type: 'GO_TO_CPC', projectNumber: project.projNumber }, '*'); };
  const handleGoToSimplify = (e) => { e.stopPropagation(); if (guardNumber()) window.postMessage({ type: 'GO_TO_SIMPLIFY', projectNumber: project.projNumber }, '*'); };
  const handleGoToIserve = (e) => { e.stopPropagation(); if (guardNumber()) window.postMessage({ type: 'GO_TO_ISERVE', projectNumber: project.projNumber }, '*'); };
  const handleGoToFinancials = (e) => { e.stopPropagation(); if (guardNumber()) window.postMessage({ type: 'GO_TO_DASHBOARD', projectNumber: project.projNumber }, '*'); };
  const handleScrapeTeam = (e) => { e.stopPropagation(); if (guardNumber()) window.postMessage({ type: 'GO_TO_TEAM_SCRAPE', projectNumber: project.projNumber }, '*'); };
  const handleScrapeFinancials = (e) => { e.stopPropagation(); if (guardNumber()) window.postMessage({ type: 'GO_TO_FINANCIALS_SCRAPE', projectNumber: project.projNumber }, '*'); };

  const handleGoToTechHub = (e) => {
    e.stopPropagation();
    if (!guardNumber()) return;
    const url = `https://tech-hub-22966312336.asia-southeast2.run.app/?projectNo=${encodeURIComponent(project.projNumber)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewPerformance = (e) => {
    e.stopPropagation();
    if (!guardNumber()) return;
    const url = `https://data-center-performance-dashboard-700684111556.us-west1.run.app/?screen=project&projectNo=${encodeURIComponent(project.projNumber)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const noteGroups = project.note ? sortNotesNewestFirst(parseNoteUpdates(project.note)) : [];
  const today = new Date();
  const endDate = initDate(project.end);
  const daysLeft = endDate ? Math.round((new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - new Date(today.getFullYear(), today.getMonth(), today.getDate())) / 86400000) : null;
  const overdue = daysLeft != null && daysLeft < 0;

  // Remaining budget per GL: prefer the stored `availableBudget` (already net of
  // commitment + actual as computed upstream); fall back to plan - commitment.
  const itemAvail = (item) => {
    const raw = item?.availableBudget;
    if (raw !== null && raw !== undefined && raw !== '') return safeParseFloat(raw);
    return safeParseFloat(item?.costPlan) - safeParseFloat(item?.costCommit);
  };
  const groupAvail = (g) => g.items.reduce((s, i) => s + itemAvail(i), 0);

  const finTotal = financials.reduce((acc, g) => ({
    plan: acc.plan + g.costPlan,
    commit: acc.commit + g.costCommit,
    actual: acc.actual + g.costActual,
    avail: acc.avail + g.items.reduce((s, i) => s + itemAvail(i), 0)
  }), { plan: 0, commit: 0, actual: 0, avail: 0 });
  const finTotalAv = finTotal.avail;

  return (
    <div className={embedded ? 'p-5 group relative flex flex-col gap-4' : `bg-[var(--surface)] border border-[var(--line)] border-l-4 rounded-card p-5 hover:shadow-lift transition-all group relative overflow-hidden flex flex-col gap-4`}
      style={embedded ? undefined : { borderLeftColor: getStatusDotColor(project.status) }}
    >
      {/* ===== Header ===== */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-5">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono text-[.7rem] font-semibold text-muted2 tabular-nums tracking-tight">{project.projNumber || 'NO-ID'}</span>
            <span className={statusClass}>{project.status}</span>
            <span className="ph-chip">{project.methodology || 'BAST Only'}</span>
            <LaborBudgetBadge budget={laborBudget} />
            <MemberAssignmentBadge assignment={memberAssignment} />
            <EndDateBadge project={project} />
          </div>
          <h3 className="font-display font-bold text-ink dark:text-[var(--ink)] text-lg leading-snug mb-2">{project.projName}</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-[.8rem] text-muted">
            <span className="flex items-center gap-1.5">
              <Building2Icon className="h-3.5 w-3.5 opacity-70" />
              {project.customer}
            </span>
            <span className="flex items-center gap-1.5">
              <UserCogIcon className="h-3.5 w-3.5 opacity-70" />
              {project.pm || <span className="italic opacity-70">Unassigned PM</span>}
            </span>
            {project.subcon && (
              <span className="flex items-center gap-1.5">
                <UsersIcon className="h-3.5 w-3.5 opacity-70" />
                {project.subcon}
              </span>
            )}
            {(project.start || project.end) && (
              <span className="flex items-center gap-1.5 tabular-nums">
                <CalendarRangeIcon className="h-3.5 w-3.5 opacity-70" />
                {formatDisplayDate(project.start)} – {formatDisplayDate(project.end)}
              </span>
            )}
            {project.solusi && (
              <span className="flex items-center gap-1.5 min-w-0 max-w-full" title={project.solusi}>
                <LightbulbIcon className="h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-[var(--amber)]" />
                <span className="truncate">{project.solusi}</span>
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 lg:gap-5 lg:justify-end">
          <div className="text-right">
            <p className="text-[.66rem] font-extrabold text-muted2 uppercase tracking-[.12em]">Value</p>
            <p className="font-display font-extrabold text-wine tabular-nums">{formatShortNumber(safeParseFloat(project.value))}</p>
          </div>
          <div className="text-right">
            <p className="text-[.66rem] font-extrabold text-muted2 uppercase tracking-[.12em]">Mandays</p>
            <p className="font-display font-extrabold text-[var(--green)] tabular-nums">{formatShortNumber(safeParseFloat(project.sisaMandays))}</p>
          </div>
          <div className="flex items-center gap-1.5">
            {onOpenDetail && (
              <button onClick={(e) => { e.stopPropagation(); onOpenDetail(project); }} className="ph-btn ph-btn--primary ph-btn--sm">
                Open detail
              </button>
            )}
            {isAdmin && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); onEdit(project); }}
                  className="ph-icon-btn opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                  title="Edit"
                >
                  <Edit2Icon className="h-4 w-4" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onDelete(project.id); }}
                  className="ph-icon-btn opacity-0 group-hover:opacity-100 focus:opacity-100 hover:!text-red-500 transition-opacity"
                  title="Delete"
                >
                  <Trash2Icon className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ===== Two columns ===== */}
      <div className="grid lg:grid-cols-2 gap-4 items-start">
        {/* LEFT: Documents → Quick Links → Notes */}
        <div className="flex flex-col gap-4 min-w-0">
          <Panel
            icon={<PaperclipIcon className="h-4 w-4 text-wine" />}
            title="Documents"
            hint={<span className="text-[.72rem] text-muted2">{DOC_SLOTS.filter(([k]) => project.files?.[k]).length}/{DOC_SLOTS.length}</span>}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {DOC_SLOTS.map(([key, label, Icon]) => {
                const url = project.files?.[key];
                const body = (
                  <>
                    <span className={`w-9 h-9 rounded-xl grid place-items-center shrink-0 ${url ? 'bg-[var(--wine-soft)] text-wine' : 'bg-[var(--surface-2)] text-muted2 border border-[var(--line)]'}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[.74rem] font-bold text-ink dark:text-[var(--ink)]">{label}</span>
                      <span className={`block text-[.72rem] truncate ${url ? 'text-muted' : 'text-muted2 italic'}`}>
                        {url ? fileNameFromUrl(url) : 'Not uploaded'}
                      </span>
                    </span>
                  </>
                );
                return url ? (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-2.5 hover:border-[var(--line-2)] hover:shadow-card transition-all">
                    {body}
                  </a>
                ) : (
                  <div key={key} className="flex items-center gap-3 rounded-2xl border border-dashed border-[var(--line-2)] p-2.5">
                    {body}
                  </div>
                );
              })}
            </div>
          </Panel>

          <Panel
            icon={<SparklesIcon className="h-4 w-4 text-wine" />}
            title="Quick links"
            hint={<span className="text-[.72rem] text-muted2">related systems</span>}
          >
            <div className="flex flex-wrap gap-2">
              {showExtActions && (
                <>
                  <button onClick={handleGoToCpc} className="ph-btn ph-btn--ghost ph-btn--sm">CPC Quote ↗</button>
                  <button onClick={handleGoToSimplify} className="ph-btn ph-btn--ghost ph-btn--sm">Simplify ↗</button>
                  <button onClick={handleGoToIserve} className="ph-btn ph-btn--ghost ph-btn--sm">iServe ↗</button>
                  <button onClick={handleGoToFinancials} className="ph-btn ph-btn--ghost ph-btn--sm">Financials ↗</button>
                </>
              )}
              <button onClick={handleGoToTechHub} className="ph-btn ph-btn--ghost ph-btn--sm">Tech Hub ↗</button>
              <button onClick={handleViewPerformance} className="ph-btn ph-btn--ghost ph-btn--sm">Performance ↗</button>
            </div>
          </Panel>

          <Panel
            icon={<Clock3Icon className="h-4 w-4 text-wine" />}
            title="Notes & progress"
            hint={<span className="ph-chip ph-chip--wine text-[.6rem] uppercase tracking-wider" title="Notes diparsing otomatis jadi grup tanggal"><SparklesIcon className="h-3 w-3" />Auto-parsed</span>}
          >
            {noteGroups.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                {noteGroups.slice(0, 3).map((g, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: i === 0 ? 'var(--wine-solid)' : 'var(--line-2)' }} />
                    <div className="min-w-0">
                      {g.date && <p className="text-[.64rem] font-extrabold text-wine uppercase tracking-wider mb-0.5">{g.date}</p>}
                      <p className="text-[.78rem] text-muted leading-relaxed whitespace-pre-wrap">{g.text}</p>
                    </div>
                  </div>
                ))}
                {noteGroups.length > 3 && (
                  <details className="group/notes" onClick={(e) => e.stopPropagation()}>
                    <summary className="text-[.64rem] font-extrabold text-muted2 uppercase tracking-wider cursor-pointer hover:text-wine transition-colors list-none flex items-center gap-1.5 select-none">
                      <svg className="w-3 h-3 transition-transform group-open/notes:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      Older ({noteGroups.length - 3})
                    </summary>
                    <div className="mt-2 flex flex-col gap-2.5">
                      {noteGroups.slice(3).map((g, i) => (
                        <div key={i} className="flex gap-3 opacity-80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--line-2)' }} />
                          <div className="min-w-0">
                            {g.date && <p className="text-[.64rem] font-extrabold text-muted2 uppercase tracking-wider mb-0.5">{g.date}</p>}
                            <p className="text-[.78rem] text-muted leading-relaxed whitespace-pre-wrap">{g.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ) : (
              <p className="text-[.78rem] text-muted2 italic py-1">Belum ada catatan.</p>
            )}
          </Panel>
        </div>

        {/* RIGHT: WBS (collapsed) → Team (collapsed) */}
        <div className="flex flex-col gap-4 min-w-0">
          {/* Financials / WBS accordion */}
          <section className="bg-[var(--surface)] border border-[var(--line)] rounded-card shadow-card overflow-hidden">
            <button
              type="button"
              onClick={toggleFin}
              aria-expanded={finOpen}
              className="w-full flex flex-wrap items-center gap-3 px-4 py-3.5 text-left hover:bg-[var(--surface-2)] transition-colors"
            >
              <span className="inline-flex items-center gap-2 font-display font-bold text-[.86rem] text-ink dark:text-[var(--ink)]">
                <BanknoteIcon className="h-4 w-4 text-[var(--green)]" />
                Financials (WBS)
              </span>
              <span className="ml-auto inline-flex items-center gap-3 text-[.76rem] text-muted whitespace-nowrap">
                {loadingFinancials && finLoaded && <Loader2Icon className="h-3.5 w-3.5 animate-spin text-muted2" />}
                <span>Plan <b className="text-ink dark:text-[var(--ink)]">{finLoaded ? money(finTotal.plan) : '—'}</b></span>
                <span>Available <b className={finTotalAv < 0 ? 'text-red-600' : 'text-[var(--green)]'}>{finLoaded ? money(finTotalAv) : '—'}</b></span>
                <ChevronDownIcon className={`h-4 w-4 text-muted2 transition-transform duration-300 ${finOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>
            <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: finOpen ? '1fr' : '0fr' }}>
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-[var(--line)] px-4 pt-4 pb-3">
                  {isAdmin && showExtActions && (
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      {lastUpdatedFinancials ? (
                        <span className={`ph-chip ${(new Date() - lastUpdatedFinancials) / (1000 * 60 * 60 * 24) > 7 ? 'ph-chip--amber' : 'ph-chip--green'}`}>
                          Updated: {formatDisplayDate(lastUpdatedFinancials)}
                        </span>
                      ) : <span />}
                      <button onClick={handleScrapeFinancials} className="ph-btn ph-btn--outline ph-btn--sm" title="Scrape Financials from CPC">
                        <DatabaseIcon className="h-3.5 w-3.5" />Scrape
                      </button>
                    </div>
                  )}
                  {isAdmin && !showExtActions && lastUpdatedFinancials && (
                    <div className="mb-3">
                      <span className={`ph-chip ${(new Date() - lastUpdatedFinancials) / (1000 * 60 * 60 * 24) > 7 ? 'ph-chip--amber' : 'ph-chip--green'}`}>
                        Updated: {formatDisplayDate(lastUpdatedFinancials)}
                      </span>
                    </div>
                  )}
                  {financials.length > 0 ? (
                    <div className="flex flex-col">
                      {financials.map((g) => (
                        <div key={g.wbs} className="mb-1.5 last:mb-0">
                          {/* WBS group header */}
                          <div className="flex items-center gap-2 py-1.5">
                            <span className="font-mono text-[.7rem] font-bold text-ink dark:text-[var(--ink)]">{g.wbs}</span>
                            <span className="text-[.62rem] text-muted2">{g.items.length} GL</span>
                            <span className={`ml-auto text-[.72rem] font-bold tabular-nums ${groupAvail(g) < 0 ? 'text-red-600' : 'text-[var(--green)]'}`}>
                              {money(groupAvail(g))}
                            </span>
                          </div>

                          {/* GL rows: one compact block per GL account */}
                          {g.items.map((item, i) => {
                            const plan = safeParseFloat(item.costPlan);
                            const commit = safeParseFloat(item.costCommit);
                            const actual = safeParseFloat(item.costActual);
                            const avail = itemAvail(item);
                            const pct = plan > 0 ? Math.max(0, Math.min(100, (avail / plan) * 100)) : 0;
                            const neg = avail < 0;
                            return (
                              <div key={i} className="py-1.5 pl-2 border-t border-[var(--line-soft)]">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="font-mono text-[.68rem] text-muted2 shrink-0">{item.glAccount}</span>
                                  <span className="truncate text-[.72rem] text-muted flex-1" title={item.glAccountName}>{item.glAccountName}</span>
                                  <span className={`text-[.74rem] font-bold tabular-nums shrink-0 ${neg ? 'text-red-600' : 'text-[var(--green)]'}`}>{money(avail)}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="ph-progress flex-1" style={{ height: 5 }}>
                                    <span style={{ width: `${pct}%` }} />
                                  </div>
                                  <span className="text-[.6rem] text-muted2 tabular-nums whitespace-nowrap">
                                    plan {money(plan)} · comm {money(commit)} · act {money(actual)}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                      <div className="flex items-center justify-between pt-2.5 border-t border-[var(--line)] text-[.76rem] font-extrabold">
                        <span className="text-muted2 uppercase tracking-wide text-[.66rem]">WBS TOTAL</span>
                        <span className={`tabular-nums ${finTotalAv < 0 ? 'text-red-600' : 'text-[var(--green)]'}`}>{money(finTotalAv)}</span>
                      </div>
                    </div>
                  ) : null}
                  {loadingFinancials && <div className="py-8 text-center text-muted"><Loader2Icon className="h-5 w-5 animate-spin inline" /></div>}
                  {finLoaded && financials.length === 0 && !loadingFinancials && (
                    <div className="py-8 text-center rounded-2xl border border-dashed border-[var(--line-2)]">
                      <p className="text-[.68rem] font-extrabold text-muted2 uppercase tracking-[.12em]">No financial data available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Team accordion */}
          <section className="bg-[var(--surface)] border border-[var(--line)] rounded-card shadow-card overflow-hidden">
            <button
              type="button"
              onClick={toggleTeam}
              aria-expanded={teamOpen}
              className="w-full flex flex-wrap items-center gap-3 px-4 py-3.5 text-left hover:bg-[var(--surface-2)] transition-colors"
            >
              <span className="inline-flex items-center gap-2 font-display font-bold text-[.86rem] text-ink dark:text-[var(--ink)]">
                <UsersIcon className="h-4 w-4 text-wine" />
                Team
              </span>
              <span className="ml-auto inline-flex items-center gap-3 text-[.76rem] text-muted whitespace-nowrap">
                {loadingTeam && teamLoaded && <Loader2Icon className="h-3.5 w-3.5 animate-spin text-muted2" />}
                <span>{teamLoaded ? `${team.length} people · ${team.filter((m) => isRowValid(m)).length} active` : ''}</span>
                <ChevronDownIcon className={`h-4 w-4 text-muted2 transition-transform duration-300 ${teamOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>
            <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: teamOpen ? '1fr' : '0fr' }}>
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-[var(--line)] px-4 pt-4 pb-3">
                  {isAdmin && showExtActions && (
                    <div className="flex justify-end mb-3">
                      <button onClick={handleScrapeTeam} className="ph-btn ph-btn--outline ph-btn--sm" title="Scrape Team from CPC">
                        <DatabaseIcon className="h-3.5 w-3.5" />Scrape Team
                      </button>
                    </div>
                  )}
                  {team.length > 0 ? (
                    <div className="flex flex-col gap-2">
                      {team.map(member => {
                        const isPM = (member.role || '').toLowerCase() === 'project manager';
                        const hasLetter = letters[String(member.npk)];
                        const isActive = isRowValid(member);
                        return (
                          <div key={member.id} className={`flex items-start gap-2.5 rounded-2xl border p-2.5 ${isPM && isActive ? 'bg-wine-soft/60 dark:bg-[var(--wine-soft)] border-transparent' : 'border-[var(--line)]'} ${isActive ? '' : 'opacity-70'}`}>
                            <span className="w-8 h-8 mt-0.5 rounded-full grid place-items-center font-display font-extrabold text-[.68rem] shrink-0" style={isActive ? { color: '#fff', background: 'linear-gradient(135deg, var(--wine-solid), var(--wine-solid-2))' } : { color: 'var(--muted2)', background: 'var(--surface-2)' }}>
                              {initials(member.name)}
                            </span>
                            <span className="min-w-0 flex-1 leading-tight">
                              <span className="flex items-center gap-1.5 min-w-0">
                                {isPM && <ShieldCheckIcon className="h-3.5 w-3.5 text-wine shrink-0" />}
                                <span className="truncate font-bold text-[.82rem] text-ink dark:text-[var(--ink)]">{member.name || '-'}</span>
                                <span className={`ph-chip shrink-0 text-[.58rem] uppercase tracking-wider ${member.type === 'D' ? 'ph-chip--blue' : member.type === 'S' ? 'ph-chip--orange' : 'ph-chip--ghost'}`}>
                                  {member.type === 'D' ? 'Dedicated' : member.type === 'S' ? 'Shared' : (member.type || '—')}
                                </span>
                                {!isActive && (
                                  <span className="ph-chip ph-chip--ghost shrink-0 text-[.58rem] uppercase tracking-wider">Inactive</span>
                                )}
                              </span>
                              <span className="block truncate text-[.7rem] text-muted mt-0.5">
                                {member.role || '-'}{member.wbs || member.fullWbs ? ` · WBS ${member.wbs || member.fullWbs}` : ''}
                              </span>
                              <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[.66rem] text-muted2 mt-0.5 tabular-nums">
                                <span className="font-mono">NPK {member.npk || '—'}</span>
                                {(member.start || member.end) && (
                                  <span>· {member.start ? formatDisplayDate(member.start) : '—'} – {member.end ? formatDisplayDate(member.end) : '—'}</span>
                                )}
                              </span>
                            </span>
                            <a
                              href={`https://agit-assignment-generator-344523195695.asia-southeast1.run.app/?projectNumber=${project.projNumber}&npk=${member.npk}`}
                              target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                              title="Open Assignment Generator"
                              className={`ph-chip shrink-0 mt-0.5 ${hasLetter ? 'ph-chip--green' : 'ph-chip--ghost'}`}
                            >
                              {hasLetter ? <CheckCircle2Icon className="h-3 w-3" /> : <FileTextIcon className="h-3 w-3" />}
                              {hasLetter ? 'SP' : 'Letter'}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    !loadingTeam && (
                      <div className="py-8 text-center rounded-2xl border border-dashed border-[var(--line-2)]">
                        <p className="text-[.68rem] font-extrabold text-muted2 uppercase tracking-[.12em]">No team members assigned</p>
                      </div>
                    )
                  )}
                  {loadingTeam && <div className="py-8 text-center text-muted"><Loader2Icon className="h-5 w-5 animate-spin inline" /></div>}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
};

export default React.memo(ProjectCard);
