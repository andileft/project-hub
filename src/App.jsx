import React, { useState, useEffect, useMemo, useCallback, useRef, lazy, Suspense } from 'react';
import {
  auth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  storage
} from '../utils/firebase';
import {
  collection,
  onSnapshot,
  db,
  COLLECTION_PATH,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  writeBatch,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from '../utils/firebase';
import {
  Header, FilterBar, Toast, GroupedProjectList, ListViewToolbar, BackToTopButton, buildGroups,
  ProjectTable, ProjectDetail
} from '../components';
import SkeletonLoader from '../components/SkeletonLoader';
import { formatShortCurrency, formatShortNumber } from '../utils/formatting';
import { collectSolutionOptions, matchesSolution } from '../utils/solutions';
import { TECH_HUB_URL } from '../constants/config';
import { useLaborBudgets } from '../hooks/useLaborBudgets';
import { useMemberAssignments } from '../hooks/useMemberAssignments';
import { parseCSVFile } from '../utils/parsers';
 import { extractTextFromFile, uploadFileToStorage, deleteFileFromStorageByUrl } from './utils/file-utils.js';
import { readProjParam, findProjectByProjNumber } from './utils/deeplink.js';

const Dashboard = lazy(() => import('../components/Dashboard'));
const ProjectModal = lazy(() => import('../components/ProjectModal'));

// Persisted list view preferences
const VIEW_MODE_KEY = 'ph_view_mode';
const GROUP_BY_KEY = 'ph_group_by';
const VIEW_MODES = ['new', 'table'];
const GROUP_BYS = ['none', 'status', 'customer', 'pm', 'solusi'];

// Table view sort (persisted so it survives view switches / reloads).
const TABLE_SORT_KEY = 'ph_table_sort_key';
const TABLE_SORT_DIR_KEY = 'ph_table_sort_dir';
const TABLE_SORT_KEYS = ['projNumber', 'projName', 'customer', 'pm', 'status', 'value', 'sisaMandays', 'budget', 'end'];
const TABLE_SORT_DIRS = ['asc', 'desc'];

const readStored = (key, fallback, allowed) => {
  try {
    const value = localStorage.getItem(key);
    if (value && (!allowed || allowed.includes(value))) return value;
  } catch (e) {
    // localStorage unavailable (private mode / blocked) - use fallback
  }
  return fallback;
};

const writeStored = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // ignore storage errors
  }
};

// Login form component (wine auth split layout)
const LoginForm = ({ onLogin, isLoggingIn }) => {
  return (
    <div className="grid md:grid-cols-2 max-w-4xl w-full bg-[var(--surface)] border border-[var(--line)] rounded-hero shadow-panel overflow-hidden">
      <aside className="hidden md:flex flex-col gap-5 p-10 text-white relative" style={{ background: 'linear-gradient(135deg, var(--wine-solid), var(--wine-solid-2))' }}>
        <div className="flex items-center gap-3">
          <img src="logo-wine.png" alt="Project Hub" className="h-10 w-10 rounded-xl object-contain bg-white/10 p-1" />
          <div className="leading-tight">
            <div className="font-display font-extrabold text-lg tracking-tight">Project Hub</div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-white/70">AGIT · Internal PMO</div>
          </div>
        </div>
        <h1 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight mt-4">All projects, one source of truth.</h1>
        <p className="text-sm text-white/80 leading-relaxed">Contract value, mandays, labor budget, team, and SDHO documents — in one place, kept in sync across the systems you already use.</p>
        <div className="mt-auto grid grid-cols-3 gap-3 pt-6 border-t border-white/20">
          <div><b className="block font-display text-xl font-extrabold">—</b><span className="text-[10px] uppercase tracking-wider text-white/60">Active</span></div>
          <div><b className="block font-display text-xl font-extrabold">—</b><span className="text-[10px] uppercase tracking-wider text-white/60">Value</span></div>
          <div><b className="block font-display text-xl font-extrabold">—</b><span className="text-[10px] uppercase tracking-wider text-white/60">Customers</span></div>
        </div>
      </aside>

      <main className="p-8 sm:p-10 flex flex-col justify-center">
        <span className="text-[11px] font-display font-extrabold uppercase tracking-[0.14em] text-wine mb-2">Internal portal</span>
        <h2 className="font-display text-2xl font-extrabold text-ink dark:text-[var(--ink)] tracking-tight mb-1">Sign in to Project Hub</h2>
        <p className="text-sm text-muted mb-6">Use your AGIT corporate account to continue.</p>
        <form onSubmit={onLogin} className="space-y-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted2">Corporate email</span>
            <input name="email" type="email" required autoComplete="username" className="h-11 px-3.5 rounded-input border border-[var(--line)] bg-[var(--surface)] text-ink2 dark:text-[var(--ink-2)] text-sm font-medium outline-none focus:border-wine-2 focus:ring-[3px] focus:ring-wine/10 transition" placeholder="name@ag-it.com" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted2">Password</span>
            <input name="password" type="password" required autoComplete="current-password" className="h-11 px-3.5 rounded-input border border-[var(--line)] bg-[var(--surface)] text-ink2 dark:text-[var(--ink-2)] text-sm font-medium outline-none focus:border-wine-2 focus:ring-[3px] focus:ring-wine/10 transition" placeholder="••••••••" />
          </label>
          <button type="submit" disabled={isLoggingIn} className="ph-btn ph-btn--primary ph-btn--block">
            {isLoggingIn ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                Signing in...
              </>
            ) : 'Sign in'}
          </button>
        </form>
      </main>
    </div>
  );
};

const App = () => {
  // Authentication
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Projects
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI
  const [activeTab, setActiveTab] = useState('list');
  const [theme, setTheme] = useState('light');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [toast, setToast] = useState(null);

  // Dashboard year
  const [dashboardYear, setDashboardYear] = useState('All');

  // Filters
  const [filters, setFilters] = useState({
    status: 'All Active',
    customer: '',
    solution: '',
    pm: '',
    year: '',
    methodology: 'All Types',
    showArchived: false
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Deep link (?proj=<PROJNUMBER>): read once per page load and held in memory
  // so it survives the sign-in gate. Consumed exactly once after data loads.
  const deepLinkNumberRef = useRef(readProjParam(typeof window !== 'undefined' ? window.location.search : ''));
  const deepLinkHandledRef = useRef(false);
  // Focus mode: when set, chrome (header/filters/toolbar) is hidden and only the
  // single project's card is shown. Set by deep link; there is no in-app exit.
  const [focusProjectId, setFocusProjectId] = useState(null);
  // Kept so the "not found" notice is only offered while the pin is absent.
  const deepLinkNoticeShownRef = useRef(false);

  // List view mode: 'new' = stacked + grouped, 'classic' = today's full cards
  const [viewMode, setViewMode] = useState(() => readStored(VIEW_MODE_KEY, 'new', VIEW_MODES));
  const [groupBy, setGroupBy] = useState(() => readStored(GROUP_BY_KEY, 'status', GROUP_BYS));
  const [expandedIds, setExpandedIds] = useState(() => new Set());
  const [collapsedGroups, setCollapsedGroups] = useState(() => new Set());

  // Phone detection: the table view only makes sense from tablet up, so on a
  // phone we always render the stacked card view (and the toggle is hidden).
  const [isPhone, setIsPhone] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  );

  // The CPC/Simplify/iServe/scrape buttons rely on the desktop browser
  // extension. Phones and tablets (iPad/Android) have no extension, so we key
  // off the primary pointer: mouse/trackpad = yes, touch = no. This is correct
  // regardless of device width or orientation.
  const [canUseExtension, setCanUseExtension] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );

  // Table view sort state (lifted so it survives view switches).
  const [tableSortKey, setTableSortKey] = useState(() => readStored(TABLE_SORT_KEY, 'projNumber', TABLE_SORT_KEYS));
  const [tableSortDir, setTableSortDir] = useState(() => readStored(TABLE_SORT_DIR_KEY, 'asc', TABLE_SORT_DIRS));

  // Form data
  const [formData, setFormData] = useState({
    projName: '',
    projNumber: '',
    customer: '',
    pm: '',
    status: 'Ongoing',
    value: 0,
    sisaMandays: 0,
    start: '',
    end: '',
    subcon: '',
    methodology: 'BAST Only',
    note: '',
    solusi: '',
    files: {
      sdho: '', mom: '', kickoff: '', report: '',
      sdho_text: '', mom_text: '', kickoff_text: '', report_text: ''
    }
  });

  // File input ref for CSV import
  const fileInputRef = useRef(null);

  // Derived filter options
  const filterOptions = useMemo(() => {
    const customers = [...new Set(projects.map(p => p.customer).filter(Boolean))].sort();
    const solutions = collectSolutionOptions(projects);
    const pms = [...new Set(projects.map(p => p.pm).filter(Boolean))].sort();
    const years = [...new Set(projects.map(p => p.start?.split('-')[0]).filter(Boolean).filter(y => Number(y) >= 2019))].sort((a, b) => Number(b) - Number(a));

    const methodologies = [...new Set(projects.map(p => p.methodology).filter(Boolean))].sort();
    return { customers, solutions, pms, years, methodologies };
  }, [projects]);

  const pmOptions = filterOptions.pms;

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      // Status filter
      if (filters.status === 'All') {
        // no filter
      } else if (filters.status === 'All Active') {
        if (!['Ongoing', 'Maintenance'].includes(p.status)) return false;
      } else if (filters.status && p.status !== filters.status) {
        return false;
      }
      // Search
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        if (!(
          p.projName?.toLowerCase().includes(term) || 
          p.customer?.toLowerCase().includes(term) ||
          p.projNumber?.toLowerCase().includes(term) ||
          p.pm?.toLowerCase().includes(term) ||
          p.solusi?.toLowerCase().includes(term)
        )) return false;
      }
       // Customer
       if (filters.customer && (p.customer || '').trim() !== (filters.customer || '').trim()) return false;
       // Solution
       if (filters.solution && !matchesSolution(p.solusi, filters.solution)) return false;
       // PM
       if (filters.pm && (p.pm || '').trim() !== (filters.pm || '').trim()) return false;
       // Year
       if (filters.year && !(p.start || '').trim().startsWith(filters.year.trim())) return false;
      // Methodology
      if (filters.methodology === 'All Types') {
        // ok
      } else if (filters.methodology === 'Tracked by EPM') {
        if (!['Simple', 'Complex'].includes(p.methodology)) return false;
      } else if (p.methodology !== filters.methodology) {
        return false;
      }
      // Archived
      if (!filters.showArchived && p.status === 'Archived') return false;
      return true;
    });
  }, [projects, filters, searchTerm]);

  // Remaining labor budget per visible project (cached, lazily fetched)
  const laborBudgets = useLaborBudgets(filteredProjects);

  // Current member assignment per visible project (cached, lazily fetched)
  const memberAssignments = useMemberAssignments(filteredProjects);

  // Dashboard data
  const dashboardData = useMemo(() => {
    // Year filter first
    const yearFiltered = dashboardYear === 'All' ? projects : projects.filter(p => p.start?.startsWith(dashboardYear));

    // Active projects for metrics (only Ongoing/Maintenance)
    const activeProjects = yearFiltered.filter(p => ['Ongoing', 'Maintenance'].includes(p.status));

    const activeCount = activeProjects.length;
    const totalValue = activeProjects.reduce((sum, p) => sum + (Number(p.value) || 0), 0);
    const totalMandays = activeProjects.reduce((sum, p) => sum + (Number(p.sisaMandays) || 0), 0);

    // Top PMs from activeProjects only
    const pmCounts = {};
    activeProjects.forEach(p => { if (p.pm) pmCounts[p.pm] = (pmCounts[p.pm] || 0) + 1; });
    const topPMs = Object.entries(pmCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);

    // Top Projects by Value/Mandays from yearFiltered (all statuses)
    const topProjectsByValue = [...yearFiltered].sort((a, b) => (Number(b.value) || 0) - (Number(a.value) || 0)).slice(0, 10);
    const topProjectsByMandays = [...yearFiltered].sort((a, b) => (Number(b.sisaMandays) || 0) - (Number(a.sisaMandays) || 0)).slice(0, 10);

    // Top Customers from yearFiltered (all statuses)
    const custValues = {};
    yearFiltered.forEach(p => { if (p.customer) custValues[p.customer] = (custValues[p.customer] || 0) + (Number(p.value) || 0); });
    const topCustomers = Object.entries(custValues).sort((a, b) => b[1] - a[1]).slice(0, 10);

    // Belum SDHO from yearFiltered
    const belumSdhoProjects = yearFiltered.filter(p => p.status === 'Belum SDHO');

    // availableYears from all projects (still >=2019)
    const availableYears = [...new Set(projects.map(p => p.start?.split('-')[0]).filter(Boolean).filter(y => Number(y) >= 2019))].sort((a, b) => Number(b) - Number(a));

    return {
      activeCount,
      totalValue,
      totalMandays,
      topProjectsByValue,
      topProjectsByMandays,
      topPMs,
      topCustomers,
      belumSdhoProjects,
      availableYears
    };
  }, [projects, dashboardYear]);

  // Toast helper
  const showToast = useCallback((variant, message, duration = 5000) => {
    setToast({ variant, message });
    if (duration > 0) {
      setTimeout(() => setToast(null), duration);
    }
  }, []);

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsAuthenticated(true);
        try {
          // Fetch user profile from Firestore 'users' collection
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const data = userDocSnap.data();
            setUserProfile(data);
            const role = data.role;
            setIsAdmin(role === 'admin');
          } else {
            setUserProfile({});
            setIsAdmin(false);
          }
        } catch (err) {
          console.error("Error fetching user profile:", err);
          setUserProfile({});
          setIsAdmin(false);
        }
      } else {
        setUser(null);
        setUserProfile(null);
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    });
    return unsubscribe;
  }, []);

  // Projects listener
  useEffect(() => {
    if (!isAuthenticated || userProfile === null) return;
    setLoading(true);
    const colRef = collection(db, COLLECTION_PATH);
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => (b.projNumber || '').localeCompare(a.projNumber || ''));
      
      // If PM (user has no role), filter projects by PM name
      const isPM = !userProfile.role;
      if (isPM) {
        const pmName = (userProfile.name || user.displayName || '').trim().toLowerCase();
        data = data.filter(p => (p.pm || '').trim().toLowerCase() === pmName);
      }

      setProjects(data);
      setLoading(false);
      setError(null);
    }, (err) => {
      console.error('Error loading projects:', err);
      setError('Failed to load projects');
      setLoading(false);
    });
    return () => unsubscribe();
  }, [isAuthenticated, userProfile, user]);

  // Theme effect
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Track phone/tablet breakpoint (matches Tailwind's `md`).
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const onChange = () => setIsPhone(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Track whether a real pointer (mouse/trackpad) is available.
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const onChange = () => setCanUseExtension(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Persist table sort
  useEffect(() => {
    writeStored(TABLE_SORT_KEY, tableSortKey);
    writeStored(TABLE_SORT_DIR_KEY, tableSortDir);
  }, [tableSortKey, tableSortDir]);

  // Persist list view mode
  useEffect(() => {
    writeStored(VIEW_MODE_KEY, viewMode);
  }, [viewMode]);

  // Persist grouping and reset expand/collapse state when grouping changes
  useEffect(() => {
    writeStored(GROUP_BY_KEY, groupBy);
    setExpandedIds(new Set());
    setCollapsedGroups(new Set());
  }, [groupBy]);

  // Deep link execution: runs once per page load, after login AND data are ready.
  useEffect(() => {
    const projNumber = deepLinkNumberRef.current;
    if (!projNumber) return;
    if (deepLinkHandledRef.current) return;
    if (!isAuthenticated || loading) return;

    deepLinkHandledRef.current = true;

    // Always land on the list tab.
    setActiveTab('list');

    const match = findProjectByProjNumber(projects, projNumber);
    if (!match) {
      // Not found: untouched normal list + a single visible notice.
      if (!deepLinkNoticeShownRef.current) {
        deepLinkNoticeShownRef.current = true;
        showToast('info', `Project ${projNumber.toUpperCase()} not found in Hub. Showing all projects.`, 8000);
      }
      return;
    }

    // Focus on just this project: hide all chrome and show only its card.
    setFocusProjectId(match.id);
  }, [isAuthenticated, loading, projects, showToast]);

  // Handlers
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const handleLoginSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      showToast('error', 'Login failed: ' + (err.message || String(err)), 8000);
    } finally {
      setIsLoggingIn(false);
    }
  }, [showToast]);

  const handleLogout = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (err) {
      showToast('error', 'Logout failed', 8000);
    }
  }, [showToast]);

  const handleOpenModal = useCallback((project = null) => {
    setEditingProject(project);
    if (project) {
      // Normalize date to YYYY-MM-DD for <input type="date">
      const normalizeDate = (dateStr) => {
        if (!dateStr) return '';
        // Already in YYYY-MM-DD?
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return '';
        const year = d.getFullYear();
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const day = d.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
      const files = project.files || {};
      setFormData({
        projName: project.projName || '',
        projNumber: project.projNumber || '',
        customer: project.customer || '',
        pm: project.pm || '',
        status: project.status || 'Ongoing',
        value: Number(project.value) || 0,
        sisaMandays: Number(project.sisaMandays) || 0,
        start: normalizeDate(project.start),
        end: normalizeDate(project.end),
        subcon: project.subcon || '',
        methodology: project.methodology || 'BAST Only',
        note: project.note || '',
        solusi: project.solusi || '',
        files: {
          sdho: files.sdho || '',
          mom: files.mom || '',
          kickoff: files.kickoff || '',
          report: files.report || '',
          sdho_text: files.sdho_text || '',
          mom_text: files.mom_text || '',
          kickoff_text: files.kickoff_text || '',
          report_text: files.report_text || ''
        }
      });
    } else {
      setFormData({
        projName: '',
        projNumber: '',
        customer: '',
        pm: '',
        status: 'Ongoing',
        value: 0,
        sisaMandays: 0,
        start: '',
        end: '',
        subcon: '',
        methodology: 'BAST Only',
        note: '',
        solusi: '',
        files: {
          sdho: '', mom: '', kickoff: '', report: '',
          sdho_text: '', mom_text: '', kickoff_text: '', report_text: ''
        }
      });
    }
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setEditingProject(null);
  }, []);

  const handleFormDataChange = useCallback((updates) => {
    setFormData(prev => typeof updates === 'function' ? updates(prev) : { ...prev, ...updates });
  }, []);

  const validateForm = (data) => {
    const errors = [];
    if (!data.projName?.trim()) errors.push('Project Name is required');
    if (!data.projNumber?.trim()) errors.push('Project Number is required');
    if (!data.customer?.trim()) errors.push('Customer is required');
    if (!data.pm?.trim()) errors.push('PM is required');
    if (!data.status) errors.push('Status is required');
    if (!data.start) errors.push('Start Date is required');
    if (data.value < 0) errors.push('Value must be ≥ 0');
    if (data.sisaMandays < 0) errors.push('Mandays must be ≥ 0');
    if (data.end && data.start && data.end < data.start) {
      errors.push('End Date cannot be before Start Date');
    }
    return errors;
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (errors.length > 0) {
      showToast('error', errors.join('; '), 8000);
      return;
    }
    try {
      if (editingProject) {
        const docRef = doc(db, COLLECTION_PATH, editingProject.id);
        await updateDoc(docRef, formData);
        showToast('success', 'Project updated successfully!', 3000);
      } else {
        const newDocRef = doc(collection(db, COLLECTION_PATH));
        await setDoc(newDocRef, formData);
        showToast('success', 'Project created successfully!', 3000);
      }
      handleCloseModal();
    } catch (err) {
      console.error('Save error:', err);
      showToast('error', 'Failed to save project: ' + (err.message || String(err)), 8000);
    }
  }, [editingProject, formData, showToast, handleCloseModal]);

  const handleDelete = useCallback(async (projectId) => {
    if (!window.confirm('Delete this project?')) return;
    try {
      await deleteDoc(doc(db, COLLECTION_PATH, projectId));
      showToast('success', 'Project deleted.', 3000);
    } catch (err) {
      showToast('error', 'Delete failed: ' + (err.message || String(err)), 8000);
    }
  }, [showToast]);

  const handleTruncate = useCallback(async () => {
    if (!window.confirm('Delete ALL projects? This cannot be undone.')) return;
    try {
      const colRef = collection(db, COLLECTION_PATH);
      const snapshot = await getDocs(colRef);
      const batch = writeBatch(db);
      snapshot.docs.forEach(d => batch.delete(d.ref));
      await batch.commit();
      showToast('success', 'All projects deleted.', 3000);
    } catch (err) {
      showToast('error', 'Truncate failed: ' + (err.message || String(err)), 8000);
    }
  }, [showToast]);

  const handleImport = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileUpload = useCallback(async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const csvText = await file.text();
      const projects = parseCSVFile(csvText);
      if (projects.length === 0) {
        showToast('error', 'No valid projects found in CSV', 8000);
        return;
      }

      const batch = writeBatch(db);
      projects.forEach(proj => {
        const docRef = doc(collection(db, COLLECTION_PATH));
        batch.set(docRef, proj);
      });
      await batch.commit();
      showToast('success', `Imported ${projects.length} projects successfully!`, 3000);
    } catch (err) {
      console.error('Import error:', err);
      showToast('error', 'Import failed: ' + (err.message || String(err)), 8000);
    }

    e.target.value = ''; // reset input
  }, [showToast]);

  const handleProjectClick = useCallback((projectId) => {
    if (projectId === 'Belum SDHO') {
      // View All Belum SDHO
      setActiveTab('list');
      setFilters({
        status: 'Belum SDHO',
        customer: '',
        solution: '',
        pm: '',
        year: '',
        methodology: 'All Types',
        showArchived: false
      });
      setSearchTerm('');
    } else {
      // Individual project card from dashboard
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setActiveTab('list');
        // Reset all filters to defaults (except status = 'All' to show any status)
        setFilters({
          status: 'All',
          customer: '',
          solution: '',
          pm: '',
          year: '',
          methodology: 'All Types',
          showArchived: false
        });
        setSearchTerm(project.projName); // Search by name
      }
    }
  }, [projects]);

  const handlePMClick = useCallback((pm) => {
    setActiveTab('list');
    setFilters({
      status: 'All Active',
      customer: '',
      solution: '',
      pm: pm,
      year: dashboardYear === 'All' ? '' : dashboardYear,
      methodology: 'All Types',
      showArchived: false
    });
    setSearchTerm('');
  }, [dashboardYear]);

  const handleCustomerClick = useCallback((customer) => {
    setActiveTab('list');
    setFilters({
      status: 'All',
      customer: customer,
      solution: '',
      pm: '',
      year: dashboardYear === 'All' ? '' : dashboardYear,
      methodology: 'All Types',
      showArchived: false
    });
    setSearchTerm('');
  }, [dashboardYear]);

  // Open the dedicated project detail view (deep-link target). Sets the in-app
  // focus and mirrors it into the URL so the link is shareable/reloadable.
  const openDetail = useCallback((project) => {
    if (!project) return;
    setActiveTab('list');
    setFocusProjectId(project.id);
    try {
      const url = new URL(window.location.href);
      if (project.projNumber) url.searchParams.set('proj', project.projNumber);
      window.history.replaceState({}, '', url.pathname + url.search);
    } catch { /* ignore */ }
  }, []);

  const handleFilterChange = useCallback((key, value) => {    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      status: 'All Active',
      customer: '',
      solution: '',
      pm: '',
      year: '',
      methodology: 'All Types',
      showArchived: false
    });
    setSearchTerm('');
  }, []);

  // Stacked (New) view helpers
  const groupKeys = useMemo(() => buildGroups(filteredProjects, groupBy).map(g => g.key), [filteredProjects, groupBy]);

  // Results summary for the New-design filter bar (derived from existing data).
  const filterSummary = useMemo(() => {
    const totalValue = filteredProjects.reduce((sum, p) => sum + (Number(p.value) || 0), 0);
    const totalMandays = filteredProjects.reduce((sum, p) => sum + (Number(p.sisaMandays) || 0), 0);
    const customers = new Set(filteredProjects.map(p => p.customer).filter(Boolean)).size;
    return {
      count: filteredProjects.length,
      value: formatShortCurrency(totalValue),
      mandays: formatShortNumber(totalMandays),
      customers
    };
  }, [filteredProjects]);

  const toggleViewMode = useCallback(() => {
    setViewMode(prev => (prev === 'new' ? 'table' : 'new'));
  }, []);

  const handleToggleCard = useCallback((id) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  const handleToggleGroup = useCallback((key) => {
    setCollapsedGroups(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  }, []);

  const expandAllGroups = useCallback(() => setCollapsedGroups(new Set()), []);
  const collapseAllGroups = useCallback(() => setCollapsedGroups(new Set(groupKeys)), [groupKeys]);

  const handleAttachmentUpload = useCallback(async (key, file) => {
    try {
      // 1. Upload to Firebase Storage
      const url = await uploadFileToStorage(file);

      // 2. Extract text for AI features
      const extractedText = await extractTextFromFile(file);

      // 3. Update formData.files: store both URL and extracted text (follow old pattern)
      setFormData(prev => ({
        ...prev,
        files: {
          ...prev.files,
          [key]: url,
          [`${key}_text`]: extractedText
        }
      }));

      showToast('success', `${key.toUpperCase()} uploaded successfully!`, 3000);

      // Auto-infer methodology if MOM uploaded
      if (key === 'mom' && extractedText) {
        try {
          const inferred = await inferMethodologyFromText(extractedText);
          if (inferred) {
            setFormData(prev => ({ ...prev, methodology: inferred }));
            showToast('info', `Methodology inferred: ${inferred}`, 5000);
          }
        } catch (err) {
          console.error('Methodology inference error:', err);
        }
      }
    } catch (err) {
      console.error('Upload error:', err);
      showToast('error', 'Upload failed: ' + (err.message || String(err)), 8000);
    }
  }, [showToast]);

  const handleAttachmentDelete = useCallback((key) => {
    setFormData(prev => {
      const fileUrl = prev.files?.[key];
      // If it's a Storage URL (not base64), delete from Firebase Storage
      if (fileUrl && fileUrl.startsWith('https://firebasestorage.googleapis.com/')) {
        deleteFileFromStorageByUrl(fileUrl).catch(err => console.error('Storage delete error:', err));
      }
      // Clear both URL and extracted text
      return {
        ...prev,
        files: {
          ...prev.files,
          [key]: '',
          [`${key}_text`]: ''
        }
      };
    });
  }, []);

  // Render
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-cream dark:bg-[var(--bg)] flex items-center justify-center p-4">
        <LoginForm onLogin={handleLoginSubmit} isLoggingIn={isLoggingIn} />
      </div>
    );
  }

  // Deep-link detail: a `?proj=` link resolves to one project and renders the
  // dedicated detail view.
  const focusProject = focusProjectId ? projects.find(p => p.id === focusProjectId) : null;
  if (focusProject) {
    const handleBackFromDetail = () => {
      setFocusProjectId(null);
      // Drop the ?proj= param so a reload lands on the normal list.
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete('proj');
        window.history.replaceState({}, '', url.pathname + url.search);
      } catch { /* ignore */ }
    };
    return (
      <div>
        <ProjectDetail
          showExtActions={canUseExtension}
          project={focusProject}
          onEdit={handleOpenModal}
          onDelete={handleDelete}
          onBack={handleBackFromDetail}
          isAdmin={isAdmin}
          laborBudget={laborBudgets[focusProject.id]}
          memberAssignment={memberAssignments[focusProject.id]}
        />

        {modalOpen && (
          <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center"><div className="text-white">Loading modal...</div></div>}>
            <ProjectModal
              isOpen={modalOpen}
              editingProject={editingProject}
              formData={formData}
              isAdmin={isAdmin}
              formError={null}
              onClose={handleCloseModal}
              onSubmit={handleSubmit}
              onFormDataChange={handleFormDataChange}
              onAttachmentUpload={handleAttachmentUpload}
              onAttachmentDelete={handleAttachmentDelete}
              showToast={showToast}
            />
          </Suspense>
        )}

        {toast && <Toast toast={toast} onClear={() => setToast(null)} />}
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-cream dark:bg-[var(--bg)]'>
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isAdmin={isAdmin}
        onImport={handleImport}
        onCreate={() => handleOpenModal(null)}
        onTruncate={handleTruncate}
        onLogout={handleLogout}
        theme={theme}
        onToggleTheme={toggleTheme}
        isAuthenticated={isAuthenticated}
        viewMode={viewMode}
        onToggleViewMode={toggleViewMode}
      />

      <main className='mx-auto max-w-[1320px] px-4 py-6'>
        {activeTab === 'list' && (
          <>
            <FilterBar
              filters={filters}
              searchTerm={searchTerm}
              filterOptions={filterOptions}
              pmOptions={pmOptions}
              onSearchChange={handleSearchChange}
              onFilterChange={handleFilterChange}
              onReset={resetFilters}
              summary={filterSummary}
            />

             {!loading && !error && filteredProjects.length > 0 && viewMode === 'new' && (
               <ListViewToolbar
                 groupBy={groupBy}
                 onGroupByChange={setGroupBy}
                 onExpandAll={expandAllGroups}
                 onCollapseAll={collapseAllGroups}
               />
             )}

             {loading ? (
               <SkeletonLoader type="card" count={6} />
             ) : error ? (
              <div className="text-center py-12 text-red-600">{error}</div>
            ) : filteredProjects.length === 0 ? (
              <div className='text-center py-14 rounded-card border border-dashed border-[var(--line-2)]'>
                <p className='text-muted'>No projects match the current filters.</p>
              </div>
            ) : (viewMode === 'table' && !isPhone) ? (
              <ProjectTable
                showExtActions={canUseExtension}
                projects={filteredProjects}
                isAdmin={isAdmin}
                onEdit={handleOpenModal}
                onDelete={handleDelete}
                laborBudgets={laborBudgets}
                memberAssignments={memberAssignments}
                onOpenDetail={openDetail}
                sortKey={tableSortKey}
                sortDir={tableSortDir}
                onSortChange={(key, dir) => { setTableSortKey(key); setTableSortDir(dir); }}
              />
            ) : (
              <GroupedProjectList
                showExtActions={canUseExtension}
                projects={filteredProjects}
                groupBy={groupBy}
                expandedIds={expandedIds}
                onToggleCard={handleToggleCard}
                collapsedGroups={collapsedGroups}
                onToggleGroup={handleToggleGroup}
                isAdmin={isAdmin}
                onEdit={handleOpenModal}
                onDelete={handleDelete}
                laborBudgets={laborBudgets}
                memberAssignments={memberAssignments}
                onOpenDetail={openDetail}
              />
            )}
          </>
        )}

        {activeTab === 'dashboard' && (
          <Suspense fallback={
            <div className="space-y-8">
              <SkeletonLoader type="stat" count={4} />
              <SkeletonLoader type="chart" count={4} />
            </div>
          }>
            {loading ? (
              <div className="space-y-8">
                {/* Stats skeleton */}
                <SkeletonLoader type="stat" count={4} />
                {/* Charts skeleton */}
                <SkeletonLoader type="chart" count={4} />
              </div>
            ) : (
              <Dashboard
                dashboardData={dashboardData}
                dashboardYear={dashboardYear}
                onYearChange={setDashboardYear}
                onProjectClick={handleProjectClick}
                onPMClick={handlePMClick}
                onCustomerClick={handleCustomerClick}
              />
            )}
          </Suspense>
        )}
      </main>

       {modalOpen && (
         <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center"><div className="text-white">Loading modal...</div></div>}>
           <ProjectModal
             isOpen={modalOpen}
             editingProject={editingProject}
             formData={formData}
             isAdmin={isAdmin}
             formError={null}
             onClose={handleCloseModal}
             onSubmit={handleSubmit}
             onFormDataChange={handleFormDataChange}
             onAttachmentUpload={handleAttachmentUpload}
             onAttachmentDelete={handleAttachmentDelete}
             showToast={showToast}
           />
         </Suspense>
       )}

      {toast && <Toast toast={toast} onClear={() => setToast(null)} />}

      <BackToTopButton />

      {/* Hidden file input for CSV import */}
      <input
        type="file"
        ref={fileInputRef}
        accept=".csv,.txt"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default App;
