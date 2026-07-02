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
import { Header, FilterBar, ProjectCard, Toast } from '../components';
import SkeletonLoader from '../components/SkeletonLoader';
import { formatShortCurrency } from '../utils/formatting';
import { TECH_HUB_URL } from '../constants/config';
import { parseCSVFile } from '../utils/parsers';
 import { extractTextFromFile, uploadFileToStorage, deleteFileFromStorageByUrl } from './utils/file-utils.js';

const Dashboard = lazy(() => import('../components/Dashboard'));
const ProjectModal = lazy(() => import('../components/ProjectModal'));

// Login form component
const LoginForm = ({ onLogin, isLoggingIn }) => (
  <form onSubmit={onLogin} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 w-full max-w-md space-y-4">
    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Sign in</h2>
    <div>
      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</label>
      <input name="email" type="email" required className="w-full h-10 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700 dark:text-slate-200" placeholder="you@company.com" />
    </div>
    <div>
      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Password</label>
      <input name="password" type="password" required className="w-full h-10 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700 dark:text-slate-200" placeholder="••••••••" />
    </div>
    <button type="submit" disabled={isLoggingIn} className="w-full h-11 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all active:scale-95 flex items-center justify-center gap-2">
      {isLoggingIn ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
          Signing in...
        </>
      ) : 'Sign in'}
    </button>
  </form>
);

const App = () => {
  // Authentication
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
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
    const solutions = [...new Set(projects.map(p => p.solusi).filter(Boolean))].sort();
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
       if (filters.solution && (p.solusi || '').trim() !== (filters.solution || '').trim()) return false;
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
          // Fetch user role from Firestore 'users' collection
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const role = userDocSnap.data().role;
            setIsAdmin(role === 'admin');
          } else {
            setIsAdmin(false);
          }
        } catch {
          setIsAdmin(false);
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    });
    return unsubscribe;
  }, []);

  // Projects listener
  useEffect(() => {
    if (!isAuthenticated) return;
    setLoading(true);
    const colRef = collection(db, COLLECTION_PATH);
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => (b.projNumber || '').localeCompare(a.projNumber || ''));
      setProjects(data);
      setLoading(false);
      setError(null);
    }, (err) => {
      console.error('Error loading projects:', err);
      setError('Failed to load projects');
      setLoading(false);
    });
    return () => unsubscribe();
  }, [isAuthenticated]);

  // Theme effect
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

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

  const handleFilterChange = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
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
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
        <LoginForm onLogin={handleLoginSubmit} isLoggingIn={isLoggingIn} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
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
      />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'list' && (
          <>
            <FilterBar
              filters={filters}
              searchTerm={searchTerm}
              filterOptions={filterOptions}
              pmOptions={pmOptions}
              onSearchChange={setSearchTerm}
              onFilterChange={handleFilterChange}
              onReset={resetFilters}
            />

             {loading ? (
               <SkeletonLoader type="card" count={6} />
             ) : error ? (
              <div className="text-center py-12 text-red-600">{error}</div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"><p className="text-slate-500 dark:text-slate-400">No projects match the current filters.</p></div>
            ) : (
              <div className="flex flex-col gap-6">
                {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} onEdit={handleOpenModal} onDelete={handleDelete} isAdmin={isAdmin} />
                ))}
              </div>
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
