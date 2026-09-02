import React, { useState } from 'react';
import { collection, getDocs, query, where, db, COLLECTION_PATH } from '../utils/firebase';
import { getStatusClasses, formatDisplayDate, formatShortCurrency, safeParseFloat } from '../utils/formatting';
import { parseNoteUpdates } from '../utils/parsers';
import {
  Building2Icon,
  UserCogIcon,
  UsersIcon,
  CalendarRangeIcon,
  FlagIcon,
  FileBarChartIcon,
  DatabaseIcon,
  BanknoteIcon,
  BarChart3Icon,
  LightbulbIcon,
  Clock3Icon,
  ShieldCheckIcon,
  Edit2Icon,
  UploadIcon,
  PlusIcon,
  PaperclipIcon,
  FileTextIcon,
  Trash2Icon,
  CheckCircle2Icon,
  SparklesIcon,
  Loader2Icon
} from './Icons';

const ProjectCard = ({ project, onEdit, onDelete, isAdmin }) => {
  const statusStyle = getStatusClasses(project.status);
  const [showTeam, setShowTeam] = useState(false);
  const [team, setTeam] = useState([]);
  const [loadingTeam, setLoadingTeam] = useState(false);
  const [showFinancials, setShowFinancials] = useState(false);
  const [financials, setFinancials] = useState([]);
  const [loadingFinancials, setLoadingFinancials] = useState(false);
  const [lastUpdatedFinancials, setLastUpdatedFinancials] = useState(null);
  const [letters, setLetters] = useState({});

  const fetchTeam = async (e) => {
    e.stopPropagation();
    if (showTeam) {
      setShowTeam(false);
      return;
    }
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

      // Sort team members: Project Manager first
      const sortedTeam = teamData.sort((a, b) => {
        const roleA = (a.role || '').toLowerCase();
        const roleB = (b.role || '').toLowerCase();
        if (roleA === 'project manager' && roleB !== 'project manager') return -1;
        if (roleA !== 'project manager' && roleB === 'project manager') return 1;
        return 0;
      });
      setTeam(sortedTeam);
      setShowTeam(true);
    } catch (error) {
      console.error("Error fetching team:", error);
      alert("Failed to fetch team members.");
    } finally {
      setLoadingTeam(false);
    }
  };

  const handleGoToCpc = (e) => {
    e.stopPropagation();
    if (!project.projNumber) {
      alert("Project number is missing for this card.");
      return;
    }
    window.postMessage({
      type: 'GO_TO_CPC',
      projectNumber: project.projNumber
    }, '*');
  };

  const handleGoToSimplify = (e) => {
    e.stopPropagation();
    if (!project.projNumber) {
      alert("Project number is missing for this card.");
      return;
    }
    window.postMessage({
      type: 'GO_TO_SIMPLIFY',
      projectNumber: project.projNumber
    }, '*');
  };

  const handleGoToIserve = (e) => {
    e.stopPropagation();
    if (!project.projNumber) {
      alert("Project number is missing for this card.");
      return;
    }
    window.postMessage({
      type: 'GO_TO_ISERVE',
      projectNumber: project.projNumber
    }, '*');
  };

  const handleGoToFinancials = (e) => {
    e.stopPropagation();
    if (!project.projNumber) {
      alert("Project number is missing for this card.");
      return;
    }
    window.postMessage({
      type: 'GO_TO_DASHBOARD',
      projectNumber: project.projNumber
    }, '*');
  };

  const handleScrapeTeam = (e) => {
    e.stopPropagation();
    if (!project.projNumber) {
      alert("Project number is missing for this card.");
      return;
    }
    window.postMessage({
      type: 'GO_TO_TEAM_SCRAPE',
      projectNumber: project.projNumber
    }, '*');
  };

  const handleScrapeFinancials = (e) => {
    e.stopPropagation();
    if (!project.projNumber) {
      alert("Project number is missing for this card.");
      return;
    }
    window.postMessage({
      type: 'GO_TO_FINANCIALS_SCRAPE',
      projectNumber: project.projNumber
    }, '*');
  };

  const handleGoToTechHub = (e) => {
    e.stopPropagation();
    if (!project.projNumber) {
      alert("Project number is missing for this card.");
      return;
    }
    const url = `https://tech-hub-22966312336.asia-southeast2.run.app/?projectNo=${encodeURIComponent(project.projNumber)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewPerformance = (e) => {
    e.stopPropagation();
    if (!project.projNumber) {
      alert("Project number is missing for this card.");
      return;
    }
    const url = `https://data-center-performance-dashboard-700684111556.us-west1.run.app/?screen=project&projectNo=${encodeURIComponent(project.projNumber)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const fetchFinancials = async (e) => {
    if (e) e.stopPropagation();
    if (showFinancials) {
      setShowFinancials(false);
      return;
    }
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

      setFinancials(Object.values(grouped));
      setShowFinancials(true);
    } catch (error) {
      console.error("Error fetching financials:", error);
      alert("Failed to fetch financials data.");
    } finally {
      setLoadingFinancials(false);
    }
  };

  return (
    <div onClick={() => onEdit(project)} className={`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 border-l-4 ${statusStyle.border} p-5 hover:shadow-md transition-all group relative overflow-hidden flex flex-col gap-4 cursor-pointer`}>
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter tabular-nums">{project.projNumber || 'NO-ID'}</span>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${statusStyle.badge}`}>{project.status}</span>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400">{project.methodology || 'BAST Only'}</span>
          </div>
          <h3 className="font-bold text-slate-800 dark:text-slate-100 truncate text-lg group-hover:text-indigo-600 transition-colors mb-2">{project.projName}</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Building2Icon className="h-3.5 w-3.5 text-slate-400" />
              {project.customer}
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              <UserCogIcon className="h-3.5 w-3.5 text-slate-400" />
              {project.pm || <span className="text-slate-400 italic">Unassigned PM</span>}
            </div>

            {project.subcon && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                <UsersIcon className="h-3.5 w-3.5 text-slate-400" />
                {project.subcon}
              </div>
            )}

            {(project.start || project.end) && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                <CalendarRangeIcon className="h-3.5 w-3.5 text-slate-400" />
                <span className="tabular-nums">{formatDisplayDate(project.start)} - {formatDisplayDate(project.end)}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 lg:gap-1">
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Value</p>
            <p className="text-sm font-bold text-indigo-600 tabular-nums">{formatShortCurrency(project.value)}</p>
          </div>
          <div className="text-right border-l lg:border-l-0 lg:border-t border-slate-200 dark:border-slate-700 pl-3 lg:pl-0 lg:pt-1 ml-3 lg:ml-0">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mandays</p>
            <p className="text-sm font-bold text-emerald-600 tabular-nums">{formatShortCurrency(project.sisaMandays)}</p>
          </div>
          <div className="flex items-center gap-2 mt-2 w-full lg:w-auto">
            <button
              onClick={fetchTeam}
              className={`p-2 rounded-lg transition-all flex items-center justify-center gap-1 flex-1 lg:flex-none ${showTeam ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800'}`}
              title="View Team"
            >
              {loadingTeam ? <Loader2Icon className="h-4 w-4 animate-spin" /> : <UsersIcon className="h-4 w-4" />}
            </button>
            <button
              onClick={fetchFinancials}
              className={`p-2 rounded-lg transition-all flex items-center justify-center gap-1 flex-1 lg:flex-none ${showFinancials ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 border border-slate-100 dark:border-slate-800'}`}
              title="View Financials"
            >
              {loadingFinancials ? <Loader2Icon className="h-4 w-4 animate-spin" /> : <BanknoteIcon className="h-4 w-4" />}
            </button>
            <button
              onClick={handleViewPerformance}
              className="p-2 rounded-lg transition-all flex items-center justify-center gap-1 flex-1 lg:flex-none bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-violet-600 hover:bg-violet-50 border border-slate-100 dark:border-slate-800"
              title="View Financial Performance"
            >
              <BarChart3Icon className="h-4 w-4" />
            </button>
            <button
              onClick={handleGoToCpc}
              className="p-1 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all hidden lg:flex items-center justify-center flex-1 lg:flex-none [@media(pointer:coarse)]:!hidden"
              title="Go to CPC"
            >
              <div className="bg-[#1e5bb8] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none">CPC</div>
            </button>
            <button
              onClick={handleGoToSimplify}
              className="p-1 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all hidden lg:flex items-center justify-center flex-1 lg:flex-none [@media(pointer:coarse)]:!hidden"
              title="Go to Simplify"
            >
              <div className="bg-[#f39c12] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none">SIMPLIFY</div>
            </button>
            <button
              onClick={handleGoToIserve}
              className="p-1 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all hidden lg:flex items-center justify-center flex-1 lg:flex-none [@media(pointer:coarse)]:!hidden"
              title="Go to iServe"
            >
              <div className="bg-[#800000] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none flex items-center gap-1">
                ISERVE
              </div>
            </button>
            <button
              onClick={handleGoToFinancials}
              className="p-1 bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all hidden lg:flex items-center justify-center flex-1 lg:flex-none [@media(pointer:coarse)]:!hidden"
              title="Go to Financials"
            >
              <div className="bg-[#10b981] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none flex items-center gap-1 uppercase">
                Financials
              </div>
            </button>
            <button
              onClick={handleGoToTechHub}
              className="p-1 bg-slate-50 dark:bg-slate-900 hover:bg-cyan-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none"
              title="Go to Tech Hub"
            >
              <div className="bg-[#0891b2] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none flex items-center gap-1 uppercase">
                TECH
              </div>
            </button>
          </div>
        </div>
      </div>
      {project.solusi && (
        <div className="bg-slate-50/80 dark:bg-slate-900/50 rounded-xl p-3 flex items-start gap-3 border border-slate-100 dark:border-slate-800/50 shadow-sm transition-all hover:shadow-md">
          <div className="p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-lg shrink-0">
            <LightbulbIcon className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
          </div>
          <div>
            <h5 className="text-[9px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-1">Solution</h5>
            <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 italic leading-relaxed line-clamp-3">{project.solusi}</p>
          </div>
        </div>
      )}
      {project.note && (() => {
        const noteGroups = parseNoteUpdates(project.note);
        return (
          <div className="relative pl-6 py-1">
            <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-900/40 rounded-full"></div>
            <div className="absolute left-0 top-3 w-4 h-4 bg-indigo-100 dark:bg-indigo-900 rounded-full border-4 border-white dark:border-slate-800 shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
            </div>
            <div className="bg-white dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-700/50 shadow-sm">
              <h5 className="text-[9px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Clock3Icon className="h-2.5 w-2.5" />
                Updates ({noteGroups.length})
              </h5>
              <div className="space-y-2">
                {noteGroups.slice(-3).map((g, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-100 dark:border-slate-700/50 p-2.5">
                    {g.date && <p className="text-[8px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-1">{g.date}</p>}
                    <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">{g.text}</p>
                  </div>
                ))}
                {noteGroups.length > 3 && (
                  <details className="group" onClick={(e) => e.stopPropagation()}>
                    <summary className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors list-none flex items-center gap-1.5 select-none pl-1">
                      <svg className="w-3 h-3 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      Older ({noteGroups.length - 3})
                    </summary>
                    <div className="mt-2 space-y-2">
                      {noteGroups.slice(0, -3).map((g, i) => (
                        <div key={i} className="bg-slate-50/50 dark:bg-slate-900/20 rounded-lg border border-slate-100 dark:border-slate-700/50 p-2.5">
                          {g.date && <p className="text-[8px] font-black text-indigo-400 dark:text-indigo-500 uppercase tracking-wider mb-1">{g.date}</p>}
                          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-500 leading-relaxed whitespace-pre-wrap">{g.text}</p>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {(project.files && (project.files.sdho || project.files.mom || project.files.kickoff || project.files.report)) && (
        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/50 mt-auto">
          {project.files.sdho && (
            <a href={project.files.sdho} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1.5 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
              <PaperclipIcon className="h-2.5 w-2.5" /> SDHO
            </a>
          )}
          {project.files.mom && (
            <a href={project.files.mom} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1.5 rounded-lg hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all border border-emerald-100 dark:border-emerald-800/50 shadow-sm">
              <FileTextIcon className="h-2.5 w-2.5" /> MOM
            </a>
          )}
          {project.files.kickoff && (
            <a href={project.files.kickoff} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1.5 rounded-lg hover:bg-amber-600 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white transition-all border border-amber-100 dark:border-amber-800/50 shadow-sm">
              <FlagIcon className="h-2.5 w-2.5" /> Kickoff
            </a>
          )}
          {project.files.report && (
            <a href={project.files.report} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all border border-blue-100 dark:border-blue-800/50 shadow-sm">
              <FileBarChartIcon className="h-2.5 w-2.5" /> Report
            </a>
          )}
        </div>
      )}
      {isAdmin && (
        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 bg-gradient-to-l from-white via-white dark:from-slate-800 dark:via-slate-800 to-transparent pl-8 rounded-tr-2xl">
          <button onClick={(e) => { e.stopPropagation(); onEdit(project); }} className="p-2 bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-sm group/btn">
            <Edit2Icon className="h-3.5 w-3.5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onDelete(project.id); }} className="p-2 bg-red-50 dark:bg-slate-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-600 hover:text-white dark:hover:bg-red-500 transition-all shadow-sm group/btn">
            <Trash2Icon className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
      {showFinancials && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <BanknoteIcon className="h-3 w-3 text-emerald-500" />
                Project Financials (Mio IDR)
              </h4>
              {lastUpdatedFinancials && (
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${(new Date() - lastUpdatedFinancials) / (1000 * 60 * 60 * 24) > 7
                    ? 'bg-amber-50 text-amber-600 border border-amber-100'
                    : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                  }`}>
                  Updated: {formatDisplayDate(lastUpdatedFinancials)}
                </span>
              )}
            </div>
            {isAdmin && (
              <button
                onClick={handleScrapeFinancials}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100 hover:bg-emerald-600 hover:text-white transition-all text-[9px] font-black uppercase tracking-tighter [@media(pointer:coarse)]:!hidden"
                title="Scrape Financials from CPC"
              >
                <DatabaseIcon className="h-2.5 w-2.5" />
                Scrape Financials
              </button>
            )}
          </div>
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">WBS</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">GL Account</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">Description</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right">Cost Plan</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right">Commitment</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right">Actual</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right">Available</th>
              </tr>
            </thead>
            <tbody>
              {financials.map(group => (
                <React.Fragment key={group.wbs}>
                  {/* WBS Total Row */}
                  <tr className="bg-emerald-50/30 border-b border-emerald-50">
                    <td className="px-3 py-2 text-[11px] font-black text-emerald-900 tabular-nums">{group.wbs}</td>
                    <td colSpan="2" className="px-3 py-2 text-[11px] font-black text-emerald-900 italic uppercase tracking-tighter">WBS TOTAL</td>
                    <td className="px-3 py-2 text-[11px] font-black text-emerald-900 text-right tabular-nums">{group.costPlan.toLocaleString('id-ID')}M</td>
                    <td className="px-3 py-2 text-[11px] font-black text-emerald-900 text-right tabular-nums">{group.costCommit.toLocaleString('id-ID')}M</td>
                    <td className="px-3 py-2 text-[11px] font-black text-emerald-900 text-right tabular-nums">{group.costActual.toLocaleString('id-ID')}M</td>
                    <td className={`px-3 py-2 text-[11px] font-black text-right tabular-nums ${group.availableBudget < 0 ? 'text-red-600' : 'text-emerald-900'}`}>{group.availableBudget.toLocaleString('id-ID')}M</td>
                  </tr>
                  {/* Detail Rows */}
                  {group.items.map((item, idx) => (
                    <tr key={`${group.wbs}-${idx}`} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 dark:bg-slate-900/50 transition-colors">
                      <td className="px-3 py-2 text-[11px] font-bold tabular-nums"></td>
                      <td className="px-3 py-2 text-[11px] font-bold text-slate-600 dark:text-slate-300 tabular-nums">{item.glAccount}</td>
                      <td className="px-3 py-2 text-[11px] font-medium text-slate-700 dark:text-slate-200">{item.glAccountName}</td>
                      <td className="px-3 py-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 text-right tabular-nums">{safeParseFloat(item.costPlan).toLocaleString('id-ID')}M</td>
                      <td className="px-3 py-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 text-right tabular-nums">{safeParseFloat(item.costCommit).toLocaleString('id-ID')}M</td>
                      <td className="px-3 py-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 text-right tabular-nums">{safeParseFloat(item.costActual) > 0 ? `${safeParseFloat(item.costActual).toLocaleString('id-ID')}M` : '-'}</td>
                      <td className={`px-3 py-2 text-[11px] font-bold text-right tabular-nums ${safeParseFloat(item.availableBudget) < 0 ? 'text-red-600' : 'text-slate-800 dark:text-slate-100'}`}>{safeParseFloat(item.availableBudget).toLocaleString('id-ID')}M</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          {financials.length === 0 && !loadingFinancials && (
            <div className="py-8 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">No financial data available</p>
            </div>
          )}
        </div>
      )}
      {showTeam && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <UsersIcon className="h-3 w-3 text-indigo-500" />
              Assigned Team Members
            </h4>
            {isAdmin && (
              <button
                onClick={handleScrapeTeam}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-all text-[9px] font-black uppercase tracking-tighter [@media(pointer:coarse)]:!hidden"
                title="Scrape Team from CPC"
              >
                <DatabaseIcon className="h-2.5 w-2.5" />
                Scrape Team Assignment
              </button>
            )}
          </div>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">WBS</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">NPK</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">Name</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">Role</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">From</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">To</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">Type</th>
                <th className="px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {team.map(member => {
                const isPM = (member.role || '').toLowerCase() === 'project manager';
                return (
                  <tr key={member.id} className={`border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors ${isPM ? 'bg-indigo-50/50 dark:bg-indigo-900/20 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30' : 'hover:bg-slate-50 dark:hover:bg-slate-700/30'}`}>
                    <td className={`px-3 py-2 text-[11px] font-bold tabular-nums ${isPM ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-700 dark:text-slate-200'}`}>{member.wbs || member.fullWbs || '-'}</td>
                    <td className={`px-3 py-2 text-[11px] font-bold tabular-nums ${isPM ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300'}`}>{member.npk || '-'}</td>
                    <td className={`px-3 py-2 text-[11px] font-black ${isPM ? 'text-indigo-700 dark:text-indigo-200' : 'text-slate-800 dark:text-slate-100'}`}>
                      <div className="flex items-center gap-1">
                        {isPM && <ShieldCheckIcon className="h-2.5 w-2.5 text-indigo-600" />}
                        {member.name || '-'}
                      </div>
                    </td>
                    <td className={`px-3 py-2 text-[11px] font-black ${isPM ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}>
                      {member.role || '-'}
                    </td>
                    <td className="px-3 py-2 text-[11px] font-bold text-slate-500 dark:text-slate-400 tabular-nums">{member.start || '-'}</td>
                    <td className="px-3 py-2 text-[11px] font-bold text-indigo-600 tabular-nums">{member.end || '-'}</td>
                    <td className="px-3 py-2 text-[11px]">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${member.type === 'D' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}`}>
                        {member.type === 'S' ? 'Shared' : member.type === 'D' ? 'Dedicated' : member.type || '-'}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <a
                        href={`https://agit-assignment-generator-344523195695.asia-southeast1.run.app/?projectNumber=${project.projNumber}&npk=${member.npk}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all text-[9.5px] font-black uppercase tracking-tighter border border-indigo-100 dark:border-indigo-800/50 shadow-sm"
                        title="Open Assignment Generator"
                      >
                        <FileTextIcon className="h-2.5 w-2.5" />
                        {letters[String(member.npk)] && <CheckCircle2Icon className="h-2.5 w-2.5 text-emerald-500 shrink-0 inline-block mr-0.5" />}Letter
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {team.length === 0 && !loadingTeam && (
            <div className="py-8 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">No team members assigned</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(ProjectCard);
