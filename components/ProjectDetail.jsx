import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, db, COLLECTION_PATH } from '../utils/firebase';
import {
  formatDisplayDate,
  formatShortNumber,
  formatAssistantMessageHtml,
  safeParseFloat
} from '../utils/formatting';
import { parseNoteUpdates } from '../utils/parsers';
import { TECH_HUB_URL } from '../constants/config';
import { askTechHubChat, downloadTechHubFile } from '../utils/techHubChat';
import {
  laborSeverity,
  assignmentSeverity,
  endDateSeverity,
  worstSeverity,
  heroPillClass,
  valueToneClass,
  lampClass,
} from '../utils/indicators';
import {
  Building2Icon,
  UserCogIcon,
  UsersIcon,
  CalendarRangeIcon,
  FlagIcon,
  DatabaseIcon,
  BanknoteIcon,
  BarChart3Icon,
  Clock3Icon,
  ShieldCheckIcon,
  Edit2Icon,
  PaperclipIcon,
  FileTextIcon,
  Trash2Icon,
  CheckCircle2Icon,
  SparklesIcon,
  Loader2Icon,
  ArrowUpIcon
} from './Icons';

const money = (v) => formatShortNumber(safeParseFloat(v));
const full = (v) => `Rp ${(safeParseFloat(v)).toLocaleString('en-US')}`;
// Financials are stored in millions (Mio IDR); expand to full IDR to match project.value.
const fullFin = (v) => full(safeParseFloat(v) * 1e6);

const parseDate = (raw) => {
  if (!raw) return null;
  const m = String(raw).match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  const d = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(raw);
  return Number.isNaN(d.getTime()) ? null : d;
};
const daysTo = (raw) => {
  const d = parseDate(raw);
  if (!d) return null;
  const t = new Date();
  const t0 = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  return Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() - t0.getTime()) / 86400000);
};

// Notes are returned in document order; sort so the newest update is first.
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

const initials = (name) => {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  return parts.length ? (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase() : '?';
};

const DOC_SLOTS = [
  ['sdho', 'SDHO'],
  ['mom', 'MOM SDHO'],
  ['kickoff', 'Kick Off'],
  ['report', 'Progress Report']
];

const TAB_LABELS = [
  ['fin', 'Financials (WBS)'],
  ['team', 'Team & assignment'],
  ['docs', 'Documents'],
  ['timeline', 'Timeline'],
  ['copilot', 'Copilot']
];

/**
 * Full project detail page (New design), reached from the `?proj=` deep link.
 * Reuses the app's existing data sources (projects/{id}/financials, /team,
 * assignmentLetters) and postMessage/external actions. No new data fields.
 */
const ProjectDetail = ({ project, isAdmin, onEdit, onDelete, onBack, laborBudget, memberAssignment, showExtActions = true }) => {
  const [tab, setTab] = useState('fin');

  const [showTeam, setShowTeam] = useState(false);
  const [team, setTeam] = useState([]);
  const [loadingTeam, setLoadingTeam] = useState(true);
  const [financials, setFinancials] = useState([]);
  const [loadingFinancials, setLoadingFinancials] = useState(true);
  const [lastUpdatedFinancials, setLastUpdatedFinancials] = useState(null);
  const [letters, setLetters] = useState({});

  // Copilot chat (powered by Tech Hub's project RAG engine)
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatThinking, setChatThinking] = useState(false);
  const [openingDocId, setOpeningDocId] = useState(null);
  const chatRef = React.useRef(null);

  // ---- Data fetch (same sources as ProjectCard) ----
  useEffect(() => {
    let alive = true;
    const load = async () => {
      setLoadingFinancials(true);
      setLoadingTeam(true);
      try {
        const finRef = collection(db, COLLECTION_PATH, project.id, 'financials');
        const finSnap = await getDocs(finRef);
        const finData = finSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (!alive) return;
        let latest = null;
        finData.forEach(item => {
          if (item.updatedAt) {
            try {
              const d = item.updatedAt.toDate ? item.updatedAt.toDate() : new Date(item.updatedAt);
              if (!latest || d > latest) latest = d;
            } catch { /* ignore */ }
          }
        });
        setLastUpdatedFinancials(latest);
        const grouped = finData.reduce((acc, curr) => {
          const wbs = curr.wbs || 'No WBS';
          if (!acc[wbs]) acc[wbs] = { wbs, costPlan: 0, costCommit: 0, costActual: 0, items: [] };
          acc[wbs].costPlan += safeParseFloat(curr.costPlan);
          acc[wbs].costCommit += safeParseFloat(curr.costCommit);
          acc[wbs].costActual += safeParseFloat(curr.costActual);
          acc[wbs].items.push(curr);
          return acc;
        }, {});
        const groups = Object.values(grouped).sort((a, b) =>
          a.wbs.localeCompare(b.wbs, undefined, { numeric: true, sensitivity: 'base' }));
        groups.forEach(g => g.items.sort((a, b) =>
          String(a.glAccount || '').localeCompare(String(b.glAccount || ''), undefined, { numeric: true, sensitivity: 'base' })));
        setFinancials(groups);
      } catch (err) {
        console.error('Error fetching financials:', err);
      } finally {
        if (alive) setLoadingFinancials(false);
      }
    };
    load();
    return () => { alive = false; };
  }, [project.id]);

  useEffect(() => {
    let alive = true;
    const load = async () => {
      setLoadingTeam(true);
      try {
        const teamSnap = await getDocs(collection(db, COLLECTION_PATH, project.id, 'team'));
        const teamData = teamSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        try {
          const q = query(collection(db, 'assignmentLetters'), where('projectNumber', '==', project.projNumber));
          const letterSnap = await getDocs(q);
          const letterMap = {};
          letterSnap.forEach(ldoc => {
            const d = ldoc.data();
            const npk = d.npk || (d.assignee && d.assignee.npk);
            if (npk) letterMap[String(npk)] = true;
          });
          if (alive) setLetters(letterMap);
        } catch (le) {
          console.error('Error fetching letters status:', le);
        }
        const sorted = teamData.sort((a, b) => {
          const pmA = (a.role || '').toLowerCase() === 'project manager';
          const pmB = (b.role || '').toLowerCase() === 'project manager';
          if (pmA !== pmB) return pmA ? -1 : 1;
          const wbsCmp = (a.wbs || a.fullWbs || '').localeCompare(b.wbs || b.fullWbs || '', undefined, { numeric: true, sensitivity: 'base' });
          if (wbsCmp !== 0) return wbsCmp;
          return (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' });
        });
        if (alive) setTeam(sorted);
      } catch (err) {
        console.error('Error fetching team:', err);
      } finally {
        if (alive) setLoadingTeam(false);
      }
    };
    load();
    return () => { alive = false; };
  }, [project.id, project.projNumber]);

  // ---- Actions (preserved from ProjectCard) ----
  const requireNumber = () => {
    if (!project.projNumber) { alert('Project number is missing for this card.'); return false; }
    return true;
  };
  const post = (type) => {
    if (!requireNumber()) return;
    window.postMessage({ type, projectNumber: project.projNumber }, '*');
  };
  const goTechHub = () => {
    if (!requireNumber()) return;
    window.open(`${TECH_HUB_URL}?projectNo=${encodeURIComponent(project.projNumber)}`, '_blank', 'noopener,noreferrer');
  };
  const goPerformance = () => {
    if (!requireNumber()) return;
    window.open(`https://data-center-performance-dashboard-700684111556.us-west1.run.app/?screen=project&projectNo=${encodeURIComponent(project.projNumber)}`, '_blank', 'noopener,noreferrer');
  };
  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}?proj=${encodeURIComponent(project.projNumber)}`;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard.'), () => alert(url));
    } else {
      alert(url);
    }
  };

  // Auto-scroll the Copilot transcript to the newest message.
  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatMessages, chatThinking]);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    const query = chatInput.trim();
    if (!query || chatThinking) return;

    const history = chatMessages.map(({ role, text }) => ({ role, text }));
    setChatMessages((prev) => [...prev, { role: 'user', text: query }]);
    setChatInput('');
    setChatThinking(true);
    try {
      const { text, citations } = await askTechHubChat({
        projNumber: project.projNumber,
        query,
        messages: history,
      });
      setChatMessages((prev) => [...prev, { role: 'assistant', text, citations }]);
    } catch (err) {
      setChatMessages((prev) => [...prev, {
        role: 'assistant',
        text: err?.message || 'Gagal menghubungi Tech Hub.',
        error: true,
      }]);
    } finally {
      setChatThinking(false);
    }
  };

  // Open a cited source file. Tech Hub streams the bytes (proxy) which avoids
  // signed URLs — those need a service-account private key the Cloud Run
  // runtime does not have. We fetch the blob then open/download it locally.
  const VIEWABLE_EXT = ['pdf', 'png', 'jpg', 'jpeg', 'gif', 'webp', 'csv', 'txt', 'html'];

  const handleOpenSource = async (cit) => {
    const storagePath = cit?.metadata?.storage_path;
    const filename = cit?.filename || cit?.metadata?.original_filename || 'file';
    if (!storagePath || openingDocId) return;

    setOpeningDocId(storagePath);
    try {
      const { blob } = await downloadTechHubFile({
        projNumber: project.projNumber,
        storagePath,
        filename,
      });
      const url = URL.createObjectURL(blob);
      const ext = String(filename).split('.').pop()?.toLowerCase() || '';
      if (VIEWABLE_EXT.includes(ext)) {
        window.open(url, '_blank', 'noopener,noreferrer');
        setTimeout(() => URL.revokeObjectURL(url), 60000);
      } else {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 10000);
      }
    } catch (err) {
      setChatMessages((prev) => [...prev, {
        role: 'assistant',
        text: err?.message || 'Gagal membuka file sumber.',
        error: true,
      }]);
    } finally {
      setOpeningDocId(null);
    }
  };

  // ---- Derived ----
  // Remaining budget per GL: prefer stored `availableBudget`, else plan - commit.
  const itemAvail = (item) => {
    const raw = item?.availableBudget;
    if (raw !== null && raw !== undefined && raw !== '') return safeParseFloat(raw);
    return safeParseFloat(item?.costPlan) - safeParseFloat(item?.costCommit);
  };
  const finTotal = financials.reduce((a, g) => ({
    plan: a.plan + g.costPlan,
    commit: a.commit + g.costCommit,
    actual: a.actual + g.costActual,
    avail: a.avail + g.items.reduce((s, i) => s + itemAvail(i), 0)
  }), { plan: 0, commit: 0, actual: 0, avail: 0 });
  const totalAv = finTotal.avail;
  const groupAvail = (g) => g.items.reduce((s, i) => s + itemAvail(i), 0);
  const noteGroups = project.note ? sortNotesNewestFirst(parseNoteUpdates(project.note)) : [];
  const d = daysTo(project.end);
  const lowBudget = laborBudget?.sev === 0 || laborBudget?.sev === 1;
  const near = d != null && d <= 30;
  const activeMembers = memberAssignment?.state === 'ready' ? memberAssignment.active : 0;
  const totalMembers = memberAssignment?.state === 'ready' ? memberAssignment.total : 0;

  const laborTone = laborSeverity(laborBudget);
  const assignmentTone = assignmentSeverity(memberAssignment);
  const endTone = endDateSeverity(project);
  const overallTone = worstSeverity(laborTone, assignmentTone, endTone);
  const onTrack = overallTone === 'ok' || overallTone === 'idle';

  return (
    <div className="min-h-screen bg-cream dark:bg-[var(--bg)]">
      {/* Hero band */}
      <header style={{ background: 'linear-gradient(150deg, #5f1537, #812049 62%, #43233a)' }} className="text-white">
        <div className="mx-auto max-w-[1320px] px-4 py-7">
          <nav className="flex items-center gap-2 text-[.72rem] text-white/70 mb-3.5">
            <button onClick={onBack} className="hover:text-white transition-colors">Projects</button>
            <span>/</span>
            <span className="text-white/90 font-mono">{project.projNumber}</span>
          </nav>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-7">
            <div className="min-w-0">
              <span className="font-display font-extrabold text-[.72rem] uppercase tracking-[.14em] text-white/80">Project detail</span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-[1.05] mt-2 break-words">{project.projName || 'Untitled Project'}</h1>
              <div className="flex flex-wrap items-center gap-2.5 mt-3.5">
                <span className="ph-chip" style={{ background: 'rgba(255,255,255,.16)', color: '#fff', borderColor: 'transparent' }}>{project.status}</span>
                <span className="ph-chip" style={{ background: 'rgba(255,255,255,.10)', color: '#fff', borderColor: 'transparent' }}><Building2Icon className="h-3 w-3" />{project.customer || '—'}</span>
                <span className="ph-chip" style={{ background: 'rgba(255,255,255,.10)', color: '#fff', borderColor: 'transparent' }}><UserCogIcon className="h-3 w-3" />{project.pm || 'Unassigned'}</span>
                <span className="ph-chip" style={{ background: 'rgba(255,255,255,.10)', color: '#fff', borderColor: 'transparent' }}>{project.methodology || 'BAST Only'}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 mt-5">
                <button onClick={onBack} className="ph-btn ph-btn--sm" style={{ background: '#fff', color: 'var(--wine)' }}>Back to list</button>
                {isAdmin && <button onClick={() => onEdit(project)} className="ph-btn ph-btn--sm" style={{ background: 'rgba(255,255,255,.18)', color: '#fff' }}><Edit2Icon className="h-4 w-4" />Edit project</button>}
                <button onClick={() => setTab('copilot')} className="ph-btn ph-btn--sm" style={{ background: 'rgba(255,255,255,.18)', color: '#fff' }}><SparklesIcon className="h-4 w-4" />Ask Copilot</button>
                <button onClick={copyLink} className="ph-btn ph-btn--sm" style={{ background: 'rgba(255,255,255,.18)', color: '#fff' }}>Copy link</button>
              </div>
            </div>

            <aside className="rounded-hero border border-white/15 bg-white/[0.08] p-5 self-start">
              <div className="flex items-center justify-between gap-3 text-[.72rem] font-extrabold uppercase tracking-[.12em] text-white/85">
                <span>Project health</span>
                <span>{onTrack ? 'Healthy' : 'Needs attention'}</span>
              </div>
              <div className="h-2 rounded-full my-3.5 overflow-hidden" style={{ background: 'rgba(255,255,255,.18)' }}>
                <span
                  className="block h-full rounded-full transition-all"
                  style={{ width: onTrack ? '78%' : '46%', background: onTrack ? '#ffffff' : '#ffb03a' }}
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`hero-pill ${heroPillClass(laborTone)}`}>
                  <BanknoteIcon className="h-3.5 w-3.5" />
                  {laborBudget?.state === 'ready' && laborBudget?.value != null ? `${laborBudget.value.toLocaleString('id-ID')}M` : '—'}
                </span>
                <span className={`hero-pill ${heroPillClass(assignmentTone)}`}>
                  <UsersIcon className="h-3.5 w-3.5" />{activeMembers}/{totalMembers}
                </span>
                <span className={`hero-pill ${heroPillClass(endTone)}`}>
                  <CalendarRangeIcon className="h-3.5 w-3.5" />{d == null ? 'n/a' : d < 0 ? `${-d} days overdue` : `${d} days left`}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 mt-4 text-[.82rem] text-white/80">
                <span>End date <b className="text-white">{formatDisplayDate(project.end)}</b></span>
                <span>{d == null ? '' : d < 0 ? <b style={{ color: '#ffb03a' }}>overdue {-d} days</b> : <b className="text-white">{d} days left</b>}</span>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1320px] px-4 py-6">
        {/* KPI strip */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            ['Contract Value', full(project.value)],
            ['Cost Plan', fullFin(finTotal.plan)],
            ['Actual to date', fullFin(finTotal.actual)],
            ['Available', fullFin(totalAv)]
          ].map(([label, val]) => (
            <div key={label} className="rounded-2xl bg-[var(--surface)] border border-[var(--line)] shadow-card px-4 py-3.5">
              <p className="text-[.64rem] font-extrabold text-muted2 uppercase tracking-[.12em]">{label}</p>
              <p className="font-display font-extrabold text-ink dark:text-[var(--ink)] mt-1 tabular-nums">{val}</p>
            </div>
          ))}
        </section>

        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 items-start">
          {/* Left column */}
          <div className="min-w-0">
            <div className="ph-seg mb-4 max-w-full">
              {TAB_LABELS.map(([key, label]) => (
                <button key={key} onClick={() => setTab(key)} className={`ph-seg__btn ${tab === key ? 'is-active' : ''}`}>{label}</button>
              ))}
            </div>

            {/* Financials */}
            {tab === 'fin' && (
              <section className="ph-card !p-0 overflow-hidden">
                <div className="ph-card__head px-5 pt-5 mb-3.5">
                  <div className="ph-card__title"><BanknoteIcon className="h-4 w-4 text-[var(--green)]" />Breakdown per GL account</div>
                  {lastUpdatedFinancials && (
                    <span className={`ph-chip ${(new Date() - lastUpdatedFinancials) / (1000 * 60 * 60 * 24) > 7 ? 'ph-chip--amber' : 'ph-chip--green'}`}>Updated: {formatDisplayDate(lastUpdatedFinancials)}</span>
                  )}
                </div>
                <div className="ph-table-wrap--stack overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[640px] ph-table--stack text-[.84rem]">
                    <thead>
                      <tr>
                        <th className="px-3 py-3 text-[.62rem] font-extrabold text-muted2 uppercase tracking-[.1em] bg-[var(--surface-2)]">GL Account</th>
                        <th className="px-3 py-3 text-[.62rem] font-extrabold text-muted2 uppercase tracking-[.1em] bg-[var(--surface-2)]">Description</th>
                        <th className="px-3 py-3 text-[.62rem] font-extrabold text-muted2 uppercase tracking-[.1em] bg-[var(--surface-2)] text-right">Cost plan</th>
                        <th className="px-3 py-3 text-[.62rem] font-extrabold text-muted2 uppercase tracking-[.1em] bg-[var(--surface-2)] text-right">Commitment</th>
                        <th className="px-3 py-3 text-[.62rem] font-extrabold text-muted2 uppercase tracking-[.1em] bg-[var(--surface-2)] text-right">Actual</th>
                        <th className="px-3 py-3 text-[.62rem] font-extrabold text-muted2 uppercase tracking-[.1em] bg-[var(--surface-2)] text-right">Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      {financials.map((group) => (
                        <React.Fragment key={group.wbs}>
                          {/* WBS group header */}
                          <tr className="bg-[var(--surface-2)]">
                            <td colSpan="2" className="px-3 py-2 ph-cell-title">
                              <span className="font-mono text-[.72rem] font-extrabold uppercase tracking-wide text-ink dark:text-[var(--ink)]">WBS {group.wbs}</span>
                              <span className="ml-2 text-[.62rem] font-semibold text-muted2">{group.items.length} GL</span>
                            </td>
                            <td className="px-3 py-2 text-right text-[.74rem] font-bold tabular-nums" data-label="Cost plan">{money(group.costPlan)}</td>
                            <td className="px-3 py-2 text-right text-[.74rem] font-bold tabular-nums" data-label="Commitment">{money(group.costCommit)}</td>
                            <td className="px-3 py-2 text-right text-[.74rem] font-bold tabular-nums" data-label="Actual">{money(group.costActual)}</td>
                            <td className={`px-3 py-2 text-right text-[.74rem] font-bold tabular-nums ${groupAvail(group) < 0 ? 'text-red-600' : 'text-[var(--green)]'}`} data-label="Available">{money(groupAvail(group))}</td>
                          </tr>
                          {group.items.map((r, idx) => {
                            const plan = safeParseFloat(r.costPlan);
                            const commit = safeParseFloat(r.costCommit);
                            const actual = safeParseFloat(r.costActual);
                            const av = itemAvail(r);
                            const remainPct = plan > 0 ? Math.max(0, Math.min(100, (av / plan) * 100)) : 0;
                            return (
                              <tr key={`${group.wbs}-${idx}`} className="border-b border-[var(--line-soft)] last:border-0 hover:bg-wine-soft/40 dark:hover:bg-[var(--surface-2)] transition-colors">
                                <td className="px-3 py-2.5 pl-6 font-mono text-[.76rem] text-muted2 tabular-nums ph-cell-sub" data-label="GL Account">{r.glAccount}</td>
                                <td className="px-3 py-2.5 ph-cell-title">
                                  <div className="font-semibold text-ink dark:text-[var(--ink)]">{r.glAccountName}</div>
                                  <div className="ph-progress mt-2 max-w-[220px]"><span style={{ width: `${remainPct}%` }} /></div>
                                  <div className="text-[.68rem] text-muted2 mt-1">sisa {Math.round(remainPct)}% of cost plan</div>
                                </td>
                                <td className="px-3 py-2.5 text-right tabular-nums" data-label="Cost plan">{money(plan)}</td>
                                <td className="px-3 py-2.5 text-right tabular-nums" data-label="Commitment">{money(commit)}</td>
                                <td className="px-3 py-2.5 text-right tabular-nums" data-label="Actual">{actual !== 0 ? money(actual) : '—'}</td>
                                <td className={`px-3 py-2.5 text-right font-bold tabular-nums ${av < 0 ? 'text-red-600' : 'text-[var(--green)]'}`} data-label="Available">{money(av)}</td>
                              </tr>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2" className="px-3 py-3 bg-[var(--surface-2)] font-extrabold text-ink dark:text-[var(--ink)] ph-cell-title" data-label="">WBS TOTAL</td>
                        <td className="px-3 py-3 bg-[var(--surface-2)] font-extrabold text-right tabular-nums" data-label="Cost plan">{money(finTotal.plan)}</td>
                        <td className="px-3 py-3 bg-[var(--surface-2)] font-extrabold text-right tabular-nums" data-label="Commitment">{money(finTotal.commit)}</td>
                        <td className="px-3 py-3 bg-[var(--surface-2)] font-extrabold text-right tabular-nums" data-label="Actual">{money(finTotal.actual)}</td>
                        <td className={`px-3 py-3 bg-[var(--surface-2)] font-extrabold text-right tabular-nums ${totalAv < 0 ? 'text-red-600' : 'text-[var(--green)]'}`} data-label="Available">{money(totalAv)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                {financials.length === 0 && !loadingFinancials && (
                  <div className="py-10 text-center text-muted">No financial data available.</div>
                )}
                {loadingFinancials && <div className="py-10 text-center text-muted"><Loader2Icon className="h-5 w-5 animate-spin inline" /></div>}
                {isAdmin && (
                  <div className="flex justify-end gap-2 px-5 py-3.5 border-t border-[var(--line)]">
                    {showExtActions && (
                      <button onClick={() => post('GO_TO_FINANCIALS_SCRAPE')} className="ph-btn ph-btn--outline ph-btn--sm"><DatabaseIcon className="h-4 w-4" />Scrape Financials</button>
                    )}
                    <button onClick={goPerformance} className="ph-btn ph-btn--outline ph-btn--sm"><BarChart3Icon className="h-4 w-4" />Performance</button>
                  </div>
                )}
              </section>
            )}

            {/* Team */}
            {tab === 'team' && (
              <section className="ph-card">
                <div className="ph-card__head">
                  <div className="ph-card__title"><UsersIcon className="h-4 w-4 text-wine" />Project team</div>
                  <span className="ph-card__hint">{team.length} people · {activeMembers} active</span>
                </div>
                <div className="ph-table-wrap--stack overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[640px] ph-table--stack text-[.84rem]">
                    <thead>
                      <tr>
                        {['Name', 'Role', 'Type', 'NPK', 'Period', 'Assignment Letter', 'Action'].map((h, i) => (
                          <th key={h} className={`px-3 py-3 text-[.62rem] font-extrabold text-muted2 uppercase tracking-[.1em] bg-[var(--surface-2)] whitespace-nowrap ${i === 6 ? 'text-right' : 'text-left'}`}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {team.map(member => {
                        const isPM = (member.role || '').toLowerCase() === 'project manager';
                        const hasLetter = letters[String(member.npk)];
                        return (
                          <tr key={member.id} className="border-b border-[var(--line-soft)] last:border-0 hover:bg-wine-soft/40 dark:hover:bg-[var(--surface-2)] transition-colors">
                            <td className="px-3 py-2.5 ph-cell-title">
                              <span className="inline-flex items-center gap-2.5">
                                <span className="w-8 h-8 rounded-full grid place-items-center font-display font-extrabold text-[.68rem] text-white shrink-0" style={{ background: 'linear-gradient(135deg, var(--wine-solid), var(--wine-solid-2))' }}>{initials(member.name)}</span>
                                <span className="font-bold text-ink dark:text-[var(--ink)] flex items-center gap-1">{isPM && <ShieldCheckIcon className="h-3.5 w-3.5 text-wine" />}{member.name}</span>
                              </span>
                            </td>
                            <td className="px-3 py-2.5 text-muted" data-label="Peran">{member.role || '—'}</td>
                            <td className="px-3 py-2.5" data-label="Tipe">
                              <span className={`ph-chip ${member.type === 'D' ? 'ph-chip--blue' : 'ph-chip--orange'}`}>{member.type === 'S' ? 'Shared' : member.type === 'D' ? 'Dedicated' : member.type || '—'}</span>
                            </td>
                            <td className="px-3 py-2.5 font-mono text-muted2 tabular-nums" data-label="NPK">{member.npk || '—'}</td>
                            <td className="px-3 py-2.5 text-muted tabular-nums whitespace-nowrap" data-label="Period">
                              {member.start ? formatDisplayDate(member.start) : '—'} – {member.end ? formatDisplayDate(member.end) : '—'}
                            </td>
                            <td className="px-3 py-2.5" data-label="Surat penugasan">
                              {hasLetter
                                ? <span className="ph-chip ph-chip--green"><CheckCircle2Icon className="h-3 w-3" />Terbit</span>
                                : <span className="ph-chip ph-chip--red">Belum ada</span>}
                            </td>
                            <td className="px-3 py-2.5 text-right" data-label="Aksi">
                              <a
                                href={`https://agit-assignment-generator-344523195695.asia-southeast1.run.app/?projectNumber=${project.projNumber}&npk=${member.npk}`}
                                target="_blank" rel="noopener noreferrer"
                                className="ph-btn ph-btn--ghost ph-btn--sm"
                              ><FileTextIcon className="h-3.5 w-3.5" />Letter</a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {team.length === 0 && !loadingTeam && <div className="py-10 text-center text-muted">No team members assigned.</div>}
                {isAdmin && showExtActions && (
                  <div className="flex justify-end px-4 py-3.5 border-t border-[var(--line)]">
                    <button onClick={() => post('GO_TO_TEAM_SCRAPE')} className="ph-btn ph-btn--outline ph-btn--sm"><DatabaseIcon className="h-4 w-4" />Scrape Team Assignment</button>
                  </div>
                )}
              </section>
            )}

            {/* Documents */}
            {tab === 'docs' && (
              <section className="ph-card">
                <div className="ph-card__head">
                  <div className="ph-card__title"><PaperclipIcon className="h-4 w-4 text-wine" />Project documents</div>
                  <span className="ph-card__hint">4 standard PMO slots</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DOC_SLOTS.map(([key, label]) => {
                    const url = project.files?.[key];
                    return (
                      <div key={key} className={`flex items-center gap-3 rounded-2xl border p-3.5 ${url ? 'border-[var(--green)] bg-[var(--green-soft)]' : 'border-dashed border-[var(--line-2)] bg-[var(--surface-2)]'}`}>
                        <span className={`w-10 h-10 rounded-xl grid place-items-center shrink-0 ${url ? 'bg-[var(--green)] text-white' : 'bg-[var(--surface)] text-muted2 border border-[var(--line)]'}`}>
                          {url ? <CheckCircle2Icon className="h-5 w-5" /> : <FileTextIcon className="h-5 w-5" />}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[.68rem] font-extrabold uppercase tracking-[.06em] text-wine">{label}</span>
                          <span className="block text-[.78rem] text-muted truncate">{url ? 'Uploaded' : 'Not uploaded yet'}</span>
                        </span>
                        {url
                          ? <a href={url} target="_blank" rel="noopener noreferrer" className="ph-btn ph-btn--ghost ph-btn--sm">Open</a>
                          : <span className="ph-chip ph-chip--ghost text-muted2">Admin uploads via Edit</span>}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Timeline */}
            {tab === 'timeline' && (
              <section className="ph-card">
                <div className="ph-card__head">
                  <div className="ph-card__title"><Clock3Icon className="h-4 w-4 text-wine" />Notes &amp; progress</div>
                  <span className="ph-card__hint">auto-parsed from free-form notes</span>
                </div>
                {noteGroups.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    {noteGroups.map((g, i) => (
                      <div key={i} className={`flex gap-3 ${i ? 'opacity-80' : ''}`}>
                        <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: i === 0 ? 'var(--wine-solid)' : 'var(--line-2)' }} />
                        <div className="min-w-0">
                          {g.date && <div className="text-[.66rem] font-extrabold text-wine uppercase tracking-wider mb-0.5">{g.date}</div>}
                          <div className="text-[.8rem] text-muted leading-relaxed whitespace-pre-wrap">{g.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted text-center py-8">No notes recorded for this project.</p>
                )}
              </section>
            )}

            {/* Copilot — uses Tech Hub's project RAG chat engine */}
            {tab === 'copilot' && (
              <section className="ph-card">
                <div className="ph-card__head">
                  <div className="ph-card__title"><SparklesIcon className="h-4 w-4 text-wine" />Copilot</div>
                  <span className="ph-card__hint">Tech Hub · document-aware</span>
                </div>

                <div ref={chatRef} className="flex flex-col gap-3 h-[420px] overflow-y-auto pr-1">
                  {chatMessages.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-center h-full px-6">
                      <div className="w-14 h-14 rounded-2xl grid place-items-center bg-[var(--wine-soft)] text-wine mb-4">
                        <SparklesIcon className="h-7 w-7" />
                      </div>
                      <h4 className="font-display font-extrabold text-ink dark:text-[var(--ink)] mb-1.5">Ask about {project.projName}</h4>
                      <p className="text-[.84rem] text-muted max-w-md leading-relaxed">
                        Jawaban memakai engine Tech Hub (RAG dokumen proyek), dengan sitasi sumber. Contoh: “apa risiko utama dari MOM terakhir?”
                      </p>
                    </div>
                  )}

                  {chatMessages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] px-3.5 py-2.5 text-[.82rem] leading-relaxed border ${m.role === 'user'
                        ? 'text-white border-transparent rounded-2xl rounded-br-md'
                        : m.error
                          ? 'bg-[var(--red-soft)] text-[var(--red)] border-transparent rounded-2xl rounded-bl-md font-semibold'
                          : 'bg-[var(--surface-2)] text-ink2 dark:text-[var(--ink-2)] border-[var(--line)] rounded-2xl rounded-bl-md'
                        }`}
                        style={m.role === 'user' ? { background: 'linear-gradient(135deg, var(--wine), var(--wine-2))' } : undefined}
                      >
                        {m.role === 'assistant' && !m.error
                          ? <span className="ph-md" dangerouslySetInnerHTML={{ __html: formatAssistantMessageHtml(m.text) }} />
                          : m.text}
                        {m.citations?.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2.5 border-t border-[var(--line)]">
                            <span className="text-[.62rem] font-extrabold uppercase tracking-wider text-muted2 self-center mr-0.5">Sources</span>                            {m.citations.map((c, ci) => {
                              const storagePath = c?.metadata?.storage_path;
                              const canOpen = !!storagePath;
                              const busy = canOpen && openingDocId === storagePath;
                              const title = [c.citation || c.filename, canOpen ? 'Klik untuk membuka file' : 'File sumber tidak tersedia'].filter(Boolean).join(' — ');
                              return canOpen ? (
                                <button
                                  key={ci}
                                  type="button"
                                  onClick={() => handleOpenSource(c)}
                                  disabled={busy}
                                  title={title}
                                  className="ph-chip ph-chip--wine text-[.64rem] hover:brightness-95 disabled:opacity-60 cursor-pointer"
                                >
                                  {busy ? <Loader2Icon className="h-3 w-3 animate-spin" /> : <FileTextIcon className="h-3 w-3" />}
                                  {c.filename || c.citation || `Source ${ci + 1}`}
                                </button>
                              ) : (
                                <span key={ci} className="ph-chip ph-chip--ghost text-[.64rem]" title={title}>
                                  <FileTextIcon className="h-3 w-3" />
                                  {c.filename || c.citation || `Source ${ci + 1}`}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {chatThinking && (
                    <div className="flex justify-start">
                      <div className="bg-[var(--surface-2)] border border-[var(--line)] px-3.5 py-3 rounded-2xl rounded-bl-md flex gap-1">
                        <span className="w-1.5 h-1.5 bg-wine-2 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-wine-2 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-wine-2 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                </div>

                <form onSubmit={handleChatSubmit} className="flex items-end gap-2 pt-3.5 mt-3.5 border-t border-[var(--line)]">
                  <textarea
                    rows={1}
                    className="ph-textarea flex-1 !min-h-0 !py-2.5 resize-none"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleChatSubmit(e);
                      }
                    }}
                    placeholder={`Tanya tentang ${project.projNumber}…`}
                  />
                  <button
                    type="submit"
                    disabled={!chatInput.trim() || chatThinking}
                    className="ph-btn ph-btn--primary ph-btn--sm shrink-0"
                  >
                    <SparklesIcon className="h-4 w-4" />
                    Ask
                  </button>
                </form>
                <div className="flex items-center justify-between gap-2 mt-2.5">
                  <span className="text-[.68rem] text-muted2">Powered by Tech Hub · jawaban dapat mengandung kesalahan.</span>
                  <button onClick={goTechHub} className="text-[.68rem] font-bold text-wine hover:underline shrink-0">
                    Buka di Tech Hub ↗
                  </button>
                </div>
              </section>
            )}
          </div>

          {/* Right column */}
          <aside className="flex flex-col gap-4">
            <div className="ph-card">
              <div className="ph-card__head"><div className="ph-card__title"><ShieldCheckIcon className="h-4 w-4 text-wine" />Status &amp; indicator lamps</div></div>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
                <div className="rounded-2xl bg-[var(--surface-2)] border border-[var(--line)] p-3.5">
                  <span className="flex items-center gap-2 text-[.66rem] font-extrabold uppercase tracking-[.1em] text-muted2">
                    <BanknoteIcon className={`h-3.5 w-3.5 ${valueToneClass(laborTone)}`} />Remaining labor
                    <span className={`ml-auto ph-lamp ${lampClass(laborTone)} !px-1.5 !py-0.5`} aria-hidden="true" />
                  </span>
                  <div className={`font-display font-extrabold mt-1.5 tabular-nums ${valueToneClass(laborTone)}`}>
                    {laborBudget?.state === 'ready' && laborBudget?.value != null ? `${laborBudget.value.toLocaleString('id-ID')} jt` : '—'}
                  </div>
                </div>
                <div className="rounded-2xl bg-[var(--surface-2)] border border-[var(--line)] p-3.5">
                  <span className="flex items-center gap-2 text-[.66rem] font-extrabold uppercase tracking-[.1em] text-muted2">
                    <UsersIcon className={`h-3.5 w-3.5 ${valueToneClass(assignmentTone)}`} />Active assignment
                    <span className={`ml-auto ph-lamp ${lampClass(assignmentTone)} !px-1.5 !py-0.5`} aria-hidden="true" />
                  </span>
                  <div className={`font-display font-extrabold mt-1.5 tabular-nums ${valueToneClass(assignmentTone)}`}>
                    {activeMembers} / {totalMembers}
                  </div>
                </div>
                <div className="rounded-2xl bg-[var(--surface-2)] border border-[var(--line)] p-3.5">
                  <span className="flex items-center gap-2 text-[.66rem] font-extrabold uppercase tracking-[.1em] text-muted2">
                    <CalendarRangeIcon className={`h-3.5 w-3.5 ${valueToneClass(endTone)}`} />End date
                    <span className={`ml-auto ph-lamp ${lampClass(endTone)} !px-1.5 !py-0.5`} aria-hidden="true" />
                  </span>
                  <div className={`font-display font-extrabold mt-1.5 tabular-nums ${valueToneClass(endTone)}`}>
                    {d == null ? '—' : d < 0 ? `${-d}d overdue` : `${d}d left`}
                  </div>
                </div>
              </div>
            </div>

            <div className="ph-card">
              <div className="ph-card__head"><div className="ph-card__title"><Building2Icon className="h-4 w-4 text-wine" />Contract info</div></div>
              <div className="flex flex-col gap-3 text-[.82rem]">
                {[
                  ['Project number', project.projNumber],
                  ['Customer', project.customer],
                  ['Project manager', project.pm || '—'],
                  ['Subcontractor', project.subcon || '—'],
                  ['Methodology', project.methodology || 'BAST Only'],
                  ['Start', project.start ? formatDisplayDate(project.start) : '—'],
                  ['End', project.end ? formatDisplayDate(project.end) : '—'],
                  ['Solution', project.solusi || '—']
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4">
                    <span className="text-muted shrink-0">{k}</span>
                    <b className="text-right text-ink dark:text-[var(--ink)] truncate">{v || '—'}</b>
                  </div>
                ))}
              </div>
            </div>

            <div className="ph-card">
              <div className="ph-card__head"><div className="ph-card__title">Related systems</div></div>
              <div className="flex flex-wrap gap-2">
                {showExtActions && (
                  <>
                    <button onClick={() => post('GO_TO_CPC')} className="ph-btn ph-btn--ghost ph-btn--sm">CPC Quote</button>
                    <button onClick={() => post('GO_TO_SIMPLIFY')} className="ph-btn ph-btn--ghost ph-btn--sm">Simplify</button>
                    <button onClick={() => post('GO_TO_ISERVE')} className="ph-btn ph-btn--ghost ph-btn--sm">iServe</button>
                  </>
                )}
                <button onClick={goTechHub} className="ph-btn ph-btn--ghost ph-btn--sm">Tech Hub</button>
                {showExtActions && (
                  <button onClick={() => post('GO_TO_DASHBOARD')} className="ph-btn ph-btn--ghost ph-btn--sm">Financials</button>
                )}
              </div>
            </div>

            {!onTrack && (
              <div className="ph-note ph-note--wine text-[.82rem]">
                <span className="flex items-center gap-2 text-wine font-bold"><FlagIcon className="h-4 w-4" />Needs attention</span>
                <span className="text-muted">{lowBudget ? 'Remaining labor budget is low.' : ''} {near ? 'End date is near or past.' : ''}</span>
              </div>
            )}

            {isAdmin && (
              <button onClick={() => onDelete(project.id)} className="ph-btn ph-btn--danger ph-btn--block"><Trash2Icon className="h-4 w-4" />Delete project</button>
            )}
          </aside>
        </div>
      </main>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full grid place-items-center text-white shadow-btn"
        style={{ background: 'linear-gradient(135deg, var(--wine-solid), var(--wine-solid-2))' }}
        aria-label="Back to top"
      ><ArrowUpIcon className="h-5 w-5" /></button>
    </div>
  );
};

export default ProjectDetail;
