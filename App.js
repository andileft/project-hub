import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
    Plus, Search, Edit2, Trash2, Calendar, Users, DollarSign, Clock, Filter,
    X, Save, CheckCircle2, Loader2, Upload, Tag, Briefcase, FileText, Settings, Shield,
    ArrowRight, LogIn, LogOut, Lock, AlertCircle, Mail, LayoutDashboard, List, TrendingUp, BarChart3, PieChart,
    Sparkles, BrainCircuit, MessageSquare, Wand2, RotateCcw, UserCheck, StickyNote, Lightbulb, UserCog, Layers,
    Timer, Banknote, Trophy, HardHat, Bot, Send, Minimize2, Sparkle, Building2, AlertTriangle, Database
} from 'lucide-react';

// Firebase Imports
import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    onSnapshot,
    deleteDoc,
    writeBatch,
    query,
    updateDoc,
    getDocs
} from 'firebase/firestore';
import {
    getAuth,
    signInAnonymously,
    signInWithCustomToken,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

// --- FIREBASE & API CONFIGURATION ---
const firebaseConfig = JSON.parse(window.__firebase_config || '{}');
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'project-tracker-prod';
const apiKey = ""; // Provided by environment

// --- ACCESS CONTROL ---
const ALLOWED_EMAIL = 'andileft@gmail.com';

const App = () => {
    const [activeTab, setActiveTab] = useState('list');
    const [projects, setProjects] = useState([]);
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    // Login Gate State
    const [emailInput, setEmailInput] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState('');

    // AI State
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { role: 'assistant', text: "Hello! I'm your Full-Access Portfolio Advisor. I can now analyze everything: project solutions, subcons, mandays, notes, and timelines. How can I assist you?" }
    ]);
    const [isAiThinking, setIsAiThinking] = useState(false);
    const [isGeneratingSolution, setIsGeneratingSolution] = useState(false);
    const chatEndRef = useRef(null);

    // Dashboard Specific Year Filter
    const [dashboardYear, setDashboardYear] = useState('All');

    // Advanced Filtering State (for List Tab)
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        status: 'All',
        pm: 'All',
        year: 'All',
        solution: 'All',
        customer: 'All',
        methodology: 'All'
    });

    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        projNumber: '', customer: '', projName: '', pm: '',
        value: '', sisaMandays: '', start: '', end: '',
        subcon: '', methodology: 'BAST Only', maintenance: 'No', status: 'Ongoing', note: '', solusi: '',
        files: { sdho: '', mom: '', kickoff: '', report: '' }
    });

    // 1. Authentication Listener
    useEffect(() => {
        // Skip Firebase auth entirely - just set auth loading to false
        setAuthLoading(false);
        setUser({ uid: 'local-user' }); // Minimal user object for Firestore operations
    }, []);

    // 2. Real-time Data Fetching
    useEffect(() => {
        if (!user || !isAuthenticated) {
            setProjects([]);
            return;
        }

        setIsDataLoading(true);
        const projectsRef = collection(db, 'artifacts', appId, 'public', 'data', 'projects');
        const q = query(projectsRef);

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const sortedData = data.sort((a, b) => {
                const numA = String(a.projNumber || '');
                const numB = String(b.projNumber || '');
                return numB.localeCompare(numA, undefined, { numeric: true, sensitivity: 'base' });
            });
            setProjects(sortedData);
            setIsDataLoading(false);
        }, (error) => {
            console.error("Firestore error:", error);
            setIsDataLoading(false);
        });

        return () => unsubscribe();
    }, [user, isAuthenticated]);

    // Scroll AI chat to bottom
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory, isAiThinking]);

    const extractTextFromFile = async (file) => {
        // Assume pdfjsLib and mammoth are available in the global scope (window)
        const pdfjsLib = window.pdfjsLib;
        const mammoth = window.mammoth;
        const extension = file.name.split('.').pop().toLowerCase();

        try {
            if (extension === 'pdf' && pdfjsLib) {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                let text = "";
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const content = await page.getTextContent();
                    text += content.items.map(item => item.str).join(" ") + " ";
                }
                return text;
            } else if (extension === 'docx' && mammoth) {
                const arrayBuffer = await file.arrayBuffer();
                const result = await mammoth.extractRawText({ arrayBuffer });
                return result.value;
            } else if (['txt', 'csv', 'md', 'json'].includes(extension)) {
                return await file.text();
            }
        } catch (err) {
            console.error("Extraction error:", err);
            return "";
        }
        return "";
    };

    // --- GEMINI API INTEGRATIONS ---

    const callGemini = async (prompt, systemInstruction = "") => {
        let retries = 0;
        const maxRetries = 5;

        while (retries < maxRetries) {
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }],
                        systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined
                    })
                });

                if (!response.ok) throw new Error('API request failed');

                const data = await response.json();
                return data.candidates?.[0]?.content?.parts?.[0]?.text;
            } catch (error) {
                retries++;
                const delay = Math.pow(2, retries) * 500;
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        throw new Error('All retries failed');
    };

    const handleAiChat = async (e) => {
        e.preventDefault();
        if (!chatInput.trim() || isAiThinking) return;

        const userMsg = chatInput;
        setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
        setChatInput('');
        setIsAiThinking(true);

        try {
            // FULL DATA MAPPING FOR AI CONTEXT
            const dataContext = projects.map(p => ({
                id: p.projNumber,
                name: p.projName,
                customer: p.customer,
                projectManager: p.pm,
                status: p.status,
                contractValue: p.value,
                mandaysValue: p.sisaMandays,
                subcontractor: p.subcon || 'None',
                solusi: p.solusi || '',
                methodology: p.methodology || 'BAST Only',
                startDate: p.start || 'Unknown',
                endDate: p.end || 'TBD',
                fileContent: Object.entries(p.files || {})
                    .filter(([key]) => key.endsWith('_text'))
                    .map(([key, val]) => `[${key.replace('_text', '').toUpperCase()}]: ${val.substring(0, 1000)}...`)
                    .join('\n')
            }));

            // Sync with Dashboard Filter if user mentions keywords
            const lowerInput = userMsg.toLowerCase();
            if (lowerInput.includes('project') || lowerInput.includes('ongoing') || lowerInput.includes('maintenance') || lowerInput.includes('done') ||
                lowerInput.includes('solution') || lowerInput.includes('solusi') || lowerInput.includes('tech') ||
                lowerInput.includes('subcon') || lowerInput.includes('subcontractor') || lowerInput.includes('contractor') || lowerInput.includes('vendor') || lowerInput.includes('partner')) {

                let statusFilter = null;
                if (lowerInput.includes('ongoing')) statusFilter = 'Ongoing';
                if (lowerInput.includes('maintenance')) statusFilter = 'Maintenance';
                if (lowerInput.includes('done') || lowerInput.includes('completed')) statusFilter = 'Done';

                const searchTerms = lowerInput
                    .replace(/how many|list|show|count|projects|project|ongoing|maintenance|done|completed|solution|solusi|tech|subcon|subcontractor|contractor|vendor|partner|with|who|in|at|for|the/g, '')
                    .trim();

                if (searchTerms.length > 2) setSearchTerm(searchTerms);
                if (statusFilter) setFilters(prev => ({ ...prev, status: statusFilter }));
                if (searchTerms.length > 2) setFilters(prev => ({ ...prev, pm: 'All', customer: 'All', solution: 'All' }));
                setActiveTab('list');
            }

            const systemPrompt = `You are a Senior Project Portfolio Analyst and Advisor. 
      You have access to the COMPLETE project dataset including extracted text from uploaded documents (SDHO, MOM, etc.): ${JSON.stringify(dataContext)}.
      
      Capabilities:
      1. Financial: Analyze "contractValue" vs "mandaysValue". Identify high-risk or high-value projects.
      2. Solutions: Review "solutionProvided" to see what technical work is being done.
      3. Documents: If asked about specific decisions or meeting outcomes, look into the "fileContent" field.
      4. Operations: Review "internalNotes" for status updates and roadblocks.
      5. Resources: Check "subcontractor" usage across projects.
      
      Instructions:
      - Always format currencies as IDR (e.g., Rp 1.250.000).
      - Use Markdown tables for data comparisons.
      - If asked about "solutions", "notes", or "subcons", use the specific fields provided in the context.
      - Be concise but highly analytical. Suggest optimizations if you see issues.`;

            const aiResponse = await callGemini(userMsg, systemPrompt);
            setChatHistory(prev => [...prev, { role: 'assistant', text: aiResponse }]);
        } catch (err) {
            setChatHistory(prev => [...prev, { role: 'assistant', text: "I'm sorry, I encountered an error analyzing the full dataset. Please try again." }]);
        } finally {
            setIsAiThinking(false);
        }
    };

    const generateSmartSolution = async () => {
        if (!formData.projName || isGeneratingSolution) return;
        setIsGeneratingSolution(true);

        try {
            const prompt = `Based on the project name "${formData.projName}" for the customer "${formData.customer || 'a client'}", suggest a brief professional technical solution or implementation strategy (max 100 words).`;
            const result = await callGemini(prompt, "You are a senior technical solution architect.");
            setFormData(prev => ({ ...prev, solusi: result.trim() }));
        } catch (err) {
            console.error("AI Generation failed", err);
        } finally {
            setIsGeneratingSolution(false);
        }
    };

    const generateStatusNote = async () => {
        if (!formData.projName || isGeneratingSolution) return;
        setIsGeneratingSolution(true);

        try {
            const prompt = `Draft a one-sentence professional status update for project "${formData.projName}" which is currently "${formData.status}".`;
            const result = await callGemini(prompt, "You are a project manager writing status reports.");
            setFormData(prev => ({ ...prev, note: result.trim() }));
        } catch (err) {
            console.error("AI Note Generation failed", err);
        } finally {
            setIsGeneratingSolution(false);
        }
    };

    // --- ACTIONS ---

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setLoginError('');
        if (emailInput.toLowerCase() === ALLOWED_EMAIL.toLowerCase()) {
            setIsAuthenticated(true);
        } else {
            setLoginError(`Access denied. Your email is not authorized.`);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setEmailInput('');
    };

    const handlePMClick = (pmName) => {
        setFilters({ ...filters, status: 'Ongoing', pm: pmName, year: dashboardYear, solution: 'All' });
        setSearchTerm('');
        setActiveTab('list');
    };

    const handleCustomerClick = (customerName) => {
        setFilters({ ...filters, status: 'All', pm: 'All', year: dashboardYear, customer: customerName, solution: 'All' });
        setSearchTerm('');
        setActiveTab('list');
    };

    const handleProjectClick = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            setFilters({ ...filters, status: 'All', pm: 'All', year: 'All', customer: 'All', solution: 'All' });
            setSearchTerm(project.projName);
            setActiveTab('list');
        }
    };

    const resetFilters = () => {
        setFilters({ status: 'All', pm: 'All', year: 'All', solution: 'All', customer: 'All', methodology: 'All' });
        setSearchTerm('');
    };

    const dashboardData = useMemo(() => {
        if (projects.length === 0) return null;

        const stats = {
            activeCount: 0,
            totalValue: 0,
            totalMandays: 0,
            yearlyValueTrend: {},
            customerValue: {},
            pmActiveCount: {},
            statusDistribution: { 'Ongoing': 0, 'Maintenance': 0, 'Done': 0, 'Belum SDHO': 0 },
            filteredProjects: [],
            belumSdhoProjects: []
        };

        projects.forEach(p => {
            const val = Number(p.value || 0);
            const mVal = Number(p.sisaMandays || 0);
            const pm = (String(p.pm || '')).trim();
            const cust = (String(p.customer || 'Unknown')).trim();
            const status = p.status || 'Ongoing';
            const projYear = p.start ? new Date(p.start).getFullYear().toString() : 'N/A';

            if (projYear !== 'N/A') {
                stats.yearlyValueTrend[projYear] = (stats.yearlyValueTrend[projYear] || 0) + val;
            }

            // Check for Belum SDHO (global or filtered by year)
            if (status === 'Belum SDHO') {
                if (dashboardYear === 'All' || projYear === dashboardYear) {
                    stats.belumSdhoProjects.push(p);
                }
            }

            if (dashboardYear !== 'All' && projYear !== dashboardYear) return;

            stats.filteredProjects.push(p);
            stats.totalValue += val;
            stats.totalMandays += mVal;
            if (stats.statusDistribution[status] !== undefined) stats.statusDistribution[status]++;

            if (status !== 'Done') {
                stats.activeCount++;
                if (pm && pm.toLowerCase() !== 'unassigned') {
                    stats.pmActiveCount[pm] = (stats.pmActiveCount[pm] || 0) + 1;
                }
            }

            stats.customerValue[cust] = (stats.customerValue[cust] || 0) + val;
        });

        const topCustomers = Object.entries(stats.customerValue).sort(([, a], [, b]) => b - a).slice(0, 10);
        const topPMs = Object.entries(stats.pmActiveCount).sort(([, a], [, b]) => b - a).slice(0, 10);
        const availableYears = [...new Set(projects.map(p => p.start ? new Date(p.start).getFullYear().toString() : null).filter(Boolean))].sort((a, b) => b - a);

        const topProjectsByValue = [...stats.filteredProjects]
            .sort((a, b) => (b.value || 0) - (a.value || 0))
            .slice(0, 10);

        const topProjectsByMandays = [...stats.filteredProjects]
            .sort((a, b) => (b.sisaMandays || 0) - (a.sisaMandays || 0))
            .slice(0, 10);

        // Sort Belum SDHO by value
        stats.belumSdhoProjects.sort((a, b) => (b.value || 0) - (a.value || 0));

        return { ...stats, topCustomers, topPMs, availableYears, topProjectsByValue, topProjectsByMandays };
    }, [projects, dashboardYear]);

    const handleFileUpload = (e) => {
        if (!user || !isAuthenticated) return;
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (event) => {
            const text = event.target.result;
            const rows = text.split(/\r?\n/);
            const parseCSVLine = (line) => {
                const result = []; let cur = ''; let inQuote = false; const delimiter = line.includes(';') ? ';' : ',';
                for (let char of line) {
                    if (char === '"') inQuote = !inQuote;
                    else if (char === delimiter && !inQuote) { result.push(cur.trim()); cur = ''; } else cur += char;
                }
                result.push(cur.trim()); return result;
            };
            const headers = parseCSVLine(rows[0]).map(h => h.toLowerCase().trim());
            const batch = writeBatch(db);
            const projectsRef = collection(db, 'artifacts', appId, 'public', 'data', 'projects');
            rows.slice(1).forEach((row, index) => {
                if (!row.trim()) return;
                const values = parseCSVLine(row);
                const project = {};
                headers.forEach((header, i) => {
                    let val = (values[i] || '').replace(/^"|"$/g, '').trim();
                    if (header.includes('proj number')) project.projNumber = val;
                    else if (header === 'customer') project.customer = val;
                    else if (header.includes('proj name')) project.projName = val;
                    else if (header === 'pm') project.pm = val;
                    else if (header === 'value') project.value = parseInt(val.replace(/[^0-9]/g, ""), 10) || 0;
                    else if (header.includes('mandays')) project.sisaMandays = parseInt(val.replace(/[^0-9]/g, ""), 10) || 0;
                    else if (header === 'start') project.start = val;
                    else if (header === 'end') project.end = val;
                    else if (header === 'status') project.status = val;
                    else if (header === 'note') project.note = val;
                    else if (header.includes('solusi') || header.includes('solution')) project.solusi = val;
                    else if (header.includes('subcon') || header.includes('vendor') || header.includes('contractor')) project.subcon = val;
                    else if (header.includes('methodology')) project.methodology = val;
                });
                if (!project.methodology) project.methodology = 'BAST Only';
                if (project.projName) batch.set(doc(projectsRef, `csv-${Date.now()}-${index}`), project);
            });
            await batch.commit();
            e.target.value = null;
        };
        reader.readAsText(file);
    };

    const handleOpenModal = (project = null) => {
        if (project) {
            setEditingProject(project);
            setFormData({
                projNumber: project.projNumber || '',
                customer: project.customer || '',
                projName: project.projName || '',
                pm: project.pm || '',
                value: project.value || '',
                sisaMandays: project.sisaMandays || '',
                start: project.start || '',
                end: project.end || '',
                subcon: project.subcon || '',
                methodology: project.methodology || 'BAST Only',
                maintenance: project.maintenance || 'No',
                status: project.status || 'Ongoing',
                note: project.note || '',
                solusi: project.solusi || ''
            });
        } else {
            setEditingProject(null);
            setFormData({
                projNumber: '', customer: '', projName: '', pm: '',
                value: '', sisaMandays: '', start: '', end: '',
                subcon: '', methodology: 'BAST Only', maintenance: 'No', status: 'Ongoing', note: '', solusi: ''
            });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user || !isAuthenticated) return;
        const docId = editingProject ? editingProject.id : Date.now().toString();
        const projectsRef = doc(db, 'artifacts', appId, 'public', 'data', 'projects', docId);
        const cleanData = {
            ...formData,
            value: Number(formData.value || 0),
            sisaMandays: Number(formData.sisaMandays || 0)
        };
        delete cleanData.id;
        await setDoc(projectsRef, cleanData);
        setIsModalOpen(false);
    };

    const handleDelete = async (id) => {
        if (!user || !isAuthenticated) return;
        if (window.confirm('Delete this project record?')) {
            await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'projects', id));
        }
    };

    const formatShortCurrency = (val) => {
        if (val >= 1e9) return `Rp ${(val / 1e9).toFixed(1)}B`;
        if (val >= 1e6) return `Rp ${(val / 1e6).toFixed(1)}M`;
        return `Rp ${val?.toLocaleString()}`;
    };

    // Number formatting helpers for form inputs
    const formatNumberWithCommas = (value) => {
        if (!value) return '';
        const numStr = value.toString().replace(/[^0-9]/g, '');
        return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const parseFormattedNumber = (value) => {
        if (!value) return '';
        return value.toString().replace(/[^0-9]/g, '');
    };

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const searchStr = searchTerm.toLowerCase();
            const matchesSearch = String(project.projName || '').toLowerCase().includes(searchStr) ||
                String(project.customer || '').toLowerCase().includes(searchStr) ||
                String(project.projNumber || '').toLowerCase().includes(searchStr) ||
                String(project.pm || '').toLowerCase().includes(searchStr) ||
                String(project.solusi || '').toLowerCase().includes(searchStr) ||
                String(project.subcon || '').toLowerCase().includes(searchStr);
            const matchesStatus = filters.status === 'All' || project.status === filters.status;
            const matchesPM = filters.pm === 'All' || project.pm === filters.pm;
            const matchesCustomer = filters.customer === 'All' || project.customer === filters.customer;
            const matchesSolution = filters.solution === 'All' || project.solusi === filters.solution;
            const matchesMethodology = filters.methodology === 'All' || (project.methodology || 'BAST Only') === filters.methodology;
            let matchesYear = true;
            if (filters.year !== 'All' && project.start) matchesYear = new Date(project.start).getFullYear().toString() === filters.year;
            return matchesSearch && matchesStatus && matchesPM && matchesYear && matchesCustomer && matchesSolution && matchesMethodology;
        });
    }, [projects, searchTerm, filters]);

    const filterOptions = useMemo(() => {
        const pms = new Set(), years = new Set(), customers = new Set(), solutions = new Set();
        projects.forEach(p => {
            if (p.pm) pms.add(String(p.pm).trim());
            if (p.customer) customers.add(String(p.customer).trim());
            if (p.solusi) solutions.add(String(p.solusi).trim());
            if (p.start) years.add(new Date(p.start).getFullYear().toString());
        });
        return {
            pms: [...pms].sort(),
            years: [...years].sort((a, b) => b - a),
            customers: [...customers].sort(),
            solutions: [...solutions].sort()
        };
    }, [projects]);

    if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="w-10 h-10 text-indigo-600 animate-spin" /></div>;

    if (!isAuthenticated) return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Lock size={32} /></div>
                <h2 className="text-2xl font-black text-slate-800 mb-6 text-center">Private Access</h2>
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <input type="email" required className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Enter authorized email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                    {loginError && <p className="text-red-500 text-xs font-bold">{loginError}</p>}
                    <button type="submit" className="w-full bg-indigo-600 py-3 rounded-xl font-bold text-white hover:bg-indigo-700 transition-all">Access Dashboard</button>
                </form>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pb-12 font-sans">
            <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-600 rounded-lg text-white"><CheckCircle2 size={24} /></div>
                            <h1 className="text-xl font-bold text-slate-800 tracking-tight">Project Hub</h1>
                        </div>
                        <nav className="flex items-center bg-slate-100 p-1 rounded-xl">
                            <button onClick={() => setActiveTab('list')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'list' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}><List size={16} /> List</button>
                            <button onClick={() => setActiveTab('dashboard')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'dashboard' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}><LayoutDashboard size={16} /> Dashboard</button>
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">
                        {activeTab === 'list' && (
                            <>
                                <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".csv" className="hidden" />
                                <button onClick={() => fileInputRef.current.click()} className="btn-secondary h-10 px-4 text-xs"><Upload size={14} /> Import</button>
                                <button onClick={() => handleOpenModal()} className="btn-primary h-10 px-4 text-xs"><Plus size={14} /> New</button>
                            </>
                        )}
                        <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-500"><LogOut size={18} /></button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                {activeTab === 'list' ? (
                    <>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4">
                            <FormInput label="Search" value={searchTerm} onChange={setSearchTerm} placeholder="Keywords..." />

                            <div className="space-y-1">
                                <label className="filter-label">Customer</label>
                                <select className="filter-input" value={filters.customer} onChange={(e) => setFilters({ ...filters, customer: e.target.value })}>
                                    <option value="All">All Customers</option>
                                    {filterOptions.customers.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="filter-label">Solution</label>
                                <select className="filter-input" value={filters.solution} onChange={(e) => setFilters({ ...filters, solution: e.target.value })}>
                                    <option value="All">All Solutions</option>
                                    {filterOptions.solutions.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="filter-label">Status</label>
                                <select className="filter-input" value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
                                    <option value="All">All Statuses</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Maintenance">Maintenance</option>
                                    <option value="Done">Done</option>
                                    <option value="Belum SDHO">Belum SDHO</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="filter-label">PM</label>
                                <select className="filter-input" value={filters.pm} onChange={(e) => setFilters({ ...filters, pm: e.target.value })}>
                                    <option value="All">All PMs</option>
                                    {filterOptions.pms.map(p => <option key={p} value={p}>{p}</option>)}
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="filter-label">Year</label>
                                <select className="filter-input" value={filters.year} onChange={(e) => setFilters({ ...filters, year: e.target.value })}>
                                    <option value="All">Any Year</option>
                                    {filterOptions.years.map(y => <option key={y} value={y}>{y}</option>)}
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="filter-label">Methodology</label>
                                <select className="filter-input" value={filters.methodology} onChange={(e) => setFilters({ ...filters, methodology: e.target.value })}>
                                    <option value="All">All Types</option>
                                    <option value="BAST Only">BAST Only</option>
                                    <option value="Simple">Simple</option>
                                    <option value="Complex">Complex</option>
                                </select>
                            </div>

                            <div className="flex items-end"><button onClick={resetFilters} className="text-xs font-bold text-indigo-600 mb-3 flex items-center gap-1"><RotateCcw size={12} /> Reset</button></div>
                        </div>

                        <div className="space-y-4">
                            {filteredProjects.map(project => <ProjectCard key={project.id} project={project} onEdit={handleOpenModal} onDelete={handleDelete} />)}
                            {filteredProjects.length === 0 && (
                                <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
                                    <p className="text-slate-400 font-bold">No projects found matching your filters.</p>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><BarChart3 size={20} /></div>
                                <h2 className="font-bold text-slate-800">Portfolio Analytics</h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Year Filter:</label>
                                <select
                                    className="h-10 px-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-black text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-500"
                                    value={dashboardYear}
                                    onChange={(e) => setDashboardYear(e.target.value)}
                                >
                                    <option value="All">All History</option>
                                    {dashboardData?.availableYears.map(year => <option key={year} value={year}>{year}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatCard title="Active Projects" value={dashboardData?.activeCount || 0} icon={<TrendingUp className="text-emerald-500" />} subtitle={`Filtering: ${dashboardYear}`} />
                            <StatCard title="Total Value" value={formatShortCurrency(dashboardData?.totalValue || 0)} icon={<DollarSign className="text-indigo-500" />} subtitle="Market Share Value" />
                            <StatCard title="Total Mandays" value={formatShortCurrency(dashboardData?.totalMandays || 0)} icon={<Banknote className="text-emerald-500" />} subtitle="Portfolio Workload Value" />
                            <StatCard title="Key Entities" value={dashboardData?.topCustomers.length || 0} icon={<Users className="text-orange-500" />} subtitle="Active Partnerships" />
                        </div>

                        <div className="dashboard-card border-amber-200 bg-amber-50/20">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-amber-100 text-amber-600 rounded-xl"><AlertTriangle size={20} /></div>
                                    <div>
                                        <h3 className="font-black text-slate-800 text-sm">Belum SDHO Queue</h3>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Pending Acceptance Confirmation</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { setFilters({ ...filters, status: 'Belum SDHO' }); setActiveTab('list'); }}
                                    className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors"
                                >
                                    View All ({dashboardData?.belumSdhoProjects.length})
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {dashboardData?.belumSdhoProjects.slice(0, 6).map((p) => (
                                    <button
                                        key={p.id}
                                        onClick={() => handleProjectClick(p.id)}
                                        className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-400 text-left group transition-all"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[9px] font-black text-slate-300 uppercase tabular-nums">ID: {p.projNumber || 'N/A'}</span>
                                            <span className="text-xs font-black text-amber-600 tabular-nums">{formatShortCurrency(p.value)}</span>
                                        </div>
                                        <h4 className="font-bold text-slate-800 text-xs truncate mb-1 group-hover:text-indigo-600">{p.projName}</h4>
                                        <p className="text-[10px] text-slate-500 font-medium truncate">{p.customer}</p>
                                    </button>
                                ))}
                                {dashboardData?.belumSdhoProjects.length === 0 && (
                                    <div className="col-span-full py-8 text-center bg-white rounded-xl border border-dashed border-slate-300">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">No projects in Belum SDHO status</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="dashboard-card">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="dashboard-title mb-0">Top 10 Projects by Value</h3>
                                    <Trophy size={16} className="text-amber-400" />
                                </div>
                                <div className="space-y-4">
                                    {dashboardData?.topProjectsByValue.map((p, i) => (
                                        <button key={p.id} onClick={() => handleProjectClick(p.id)} className="w-full space-y-1 text-left group">
                                            <div className="flex justify-between text-xs font-bold">
                                                <span className="truncate pr-4 group-hover:text-indigo-600 flex items-center gap-2">
                                                    <span className="text-[10px] text-slate-300">#{i + 1}</span> {p.projName}
                                                </span>
                                                <span className="text-indigo-600">{formatShortCurrency(p.value)}</span>
                                            </div>
                                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-indigo-500 h-full rounded-full transition-all duration-500" style={{ width: `${(p.value / (dashboardData.topProjectsByValue[0]?.value || 1)) * 100}%` }}></div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="dashboard-card">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="dashboard-title mb-0">Top 10 Projects by Mandays</h3>
                                    <Banknote size={16} className="text-emerald-400" />
                                </div>
                                <div className="space-y-4">
                                    {dashboardData?.topProjectsByMandays.map((p, i) => (
                                        <button key={p.id} onClick={() => handleProjectClick(p.id)} className="w-full space-y-1 text-left group">
                                            <div className="flex justify-between text-xs font-bold">
                                                <span className="truncate pr-4 group-hover:text-indigo-600 flex items-center gap-2">
                                                    <span className="text-[10px] text-slate-300">#{i + 1}</span> {p.projName}
                                                </span>
                                                <span className="text-emerald-600">{formatShortCurrency(p.sisaMandays)}</span>
                                            </div>
                                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${(p.sisaMandays / (dashboardData.topProjectsByMandays[0]?.sisaMandays || 1)) * 100}%` }}></div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="dashboard-card">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="dashboard-title mb-0">PM Workload (Active Projects)</h3>
                                    <UserCheck size={16} className="text-slate-300" />
                                </div>
                                <div className="space-y-4">
                                    {dashboardData?.topPMs.map(([pm, count], i) => (
                                        <button key={pm} onClick={() => handlePMClick(pm)} className="w-full space-y-1 text-left group">
                                            <div className="flex justify-between text-xs font-bold">
                                                <span className="truncate pr-4 group-hover:text-indigo-600 flex items-center gap-2">
                                                    <span className="text-[10px] text-slate-300">#{i + 1}</span> {pm}
                                                </span>
                                                <span className="text-indigo-600">{count} Projects</span>
                                            </div>
                                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                                <div className="bg-blue-500 h-full rounded-full transition-all duration-500" style={{ width: `${(count / (dashboardData.topPMs[0]?.[1] || 1)) * 100}%` }}></div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="dashboard-card">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="dashboard-title mb-0">Top 10 Customers (By Total Value)</h3>
                                    <Users size={16} className="text-slate-300" />
                                </div>
                                <div className="space-y-4">
                                    {dashboardData?.topCustomers.map(([cust, val], i) => (
                                        <button key={cust} onClick={() => handleCustomerClick(cust)} className="w-full space-y-1 text-left group">
                                            <div className="flex justify-between text-xs font-bold">
                                                <span className="truncate pr-4 group-hover:text-indigo-600 flex items-center gap-2">
                                                    <span className="text-[10px] text-slate-300">#{i + 1}</span> {cust}
                                                </span>
                                                <span className="text-indigo-600">{formatShortCurrency(val)}</span>
                                            </div>
                                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                                <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${(val / (dashboardData.topCustomers[0]?.[1] || 1)) * 100}%` }}></div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* AI CHAT BUTTON & MODAL */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
                {isChatOpen && (
                    <div className="bg-white w-96 h-[550px] mb-4 rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-300">
                        <div className="bg-indigo-600 p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Sparkles size={20} className="text-indigo-200" />
                                <span className="font-black text-xs uppercase tracking-widest">AI Portfolio Advisor</span>
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="p-1 hover:bg-white/20 rounded-lg"><Minimize2 size={16} /></button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {chatHistory.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-100' : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-tl-none prose prose-slate'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isAiThinking && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                                        <span className="text-[10px] font-black text-indigo-600 mr-2 uppercase animate-pulse">Analyzing...</span>
                                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        <form onSubmit={handleAiChat} className="p-4 bg-white border-t border-slate-100 flex gap-2">
                            <input
                                value={chatInput}
                                onChange={e => setChatInput(e.target.value)}
                                placeholder="Ask about project solutions or financial risk..."
                                className="flex-1 h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button disabled={isAiThinking || !chatInput.trim()} className="w-11 h-11 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-lg shadow-indigo-100">
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                )}
                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 relative group ${isChatOpen ? 'bg-slate-800 rotate-90' : 'bg-indigo-600 hover:scale-110 active:scale-95'}`}
                >
                    {isChatOpen ? <X className="text-white" /> : <Bot className="text-white" size={28} />}
                    {!isChatOpen && (
                        <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full animate-bounce shadow-sm">AI ON</span>
                    )}
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="bg-white w-full max-w-2xl rounded-3xl p-8 relative z-10 shadow-2xl overflow-y-auto max-h-[90vh]">
                        <div className="flex justify-between items-center mb-6 border-b pb-4">
                            <h2 className="text-xl font-black text-slate-800 tracking-tight">{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X size={20} /></button>
                        </div>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <FormInput label="Project Name" value={formData.projName} onChange={v => setFormData({ ...formData, projName: v })} required placeholder="Enter formal project title..." />
                            </div>
                            <FormInput label="Project ID" value={formData.projNumber} onChange={v => setFormData({ ...formData, projNumber: v })} placeholder="PRJ-202X-001" />
                            <FormInput label="Customer" value={formData.customer} onChange={v => setFormData({ ...formData, customer: v })} required placeholder="Client name..." />
                            <FormInput label="Project Manager" value={formData.pm} onChange={v => setFormData({ ...formData, pm: v })} placeholder="Lead PM (optional)..." />
                            <FormInput label="Project Value (Rp)" value={formatNumberWithCommas(formData.value)} onChange={v => setFormData({ ...formData, value: parseFormattedNumber(v) })} placeholder="0" />
                            <FormInput label="Sisa Mandays (Rp)" value={formatNumberWithCommas(formData.sisaMandays)} onChange={v => setFormData({ ...formData, sisaMandays: parseFormattedNumber(v) })} placeholder="0" />
                            <FormInput label="Subcon" value={formData.subcon} onChange={v => setFormData({ ...formData, subcon: v })} placeholder="Third-party partner..." />

                            <div className="space-y-1">
                                <label className="filter-label">Status</label>
                                <select className="filter-input h-12" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Maintenance">Maintenance</option>
                                    <option value="Done">Done</option>
                                    <option value="Belum SDHO">Belum SDHO</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="filter-label">Methodology</label>
                                <select className="filter-input h-12" value={formData.methodology || 'BAST Only'} onChange={(e) => setFormData({ ...formData, methodology: e.target.value })}>
                                    <option value="BAST Only">BAST Only</option>
                                    <option value="Simple">Simple</option>
                                    <option value="Complex">Complex</option>
                                </select>
                            </div>

                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <FormInput label="Start Date" type="date" value={formData.start} onChange={v => setFormData({ ...formData, start: v })} />
                                <FormInput label="End Date" type="date" value={formData.end} onChange={v => setFormData({ ...formData, end: v })} />
                            </div>

                            <div className="md:col-span-2">
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="filter-label mb-0">Solution / Solusi</label>
                                    <button
                                        type="button"
                                        onClick={generateSmartSolution}
                                        disabled={isGeneratingSolution || !formData.projName}
                                        className="text-[10px] font-black text-indigo-600 flex items-center gap-1 px-2 py-1 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors disabled:opacity-50"
                                    >
                                        {isGeneratingSolution ? <Loader2 size={10} className="animate-spin" /> : <Sparkles size={10} />} ✨ Suggest Solution
                                    </button>
                                </div>
                                <textarea className="filter-input min-h-[80px] py-3" value={formData.solusi} onChange={(e) => setFormData({ ...formData, solusi: e.target.value })} placeholder="Detailed project solution description..." />
                            </div>

                            <div className="md:col-span-2">
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="filter-label mb-0">Notes</label>
                                    <button
                                        type="button"
                                        onClick={generateStatusNote}
                                        disabled={isGeneratingSolution || !formData.projName}
                                        className="text-[10px] font-black text-emerald-600 flex items-center gap-1 px-2 py-1 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors disabled:opacity-50"
                                    >
                                        {isGeneratingSolution ? <Loader2 size={10} className="animate-spin" /> : <Wand2 size={10} />} ✨ Status Update
                                    </button>
                                </div>
                                <textarea className="filter-input min-h-[80px] py-3" value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })} placeholder="Key project notes or obstacles..." />
                            </div>

                            <div className="md:col-span-2 mt-6 flex gap-4 border-t pt-6">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 h-12 border-2 border-slate-200 rounded-xl font-black text-slate-400 hover:bg-slate-50 transition-colors">Discard</button>
                                <button type="submit" className="flex-1 h-12 bg-indigo-600 text-white rounded-xl font-black shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all">
                                    {editingProject ? 'Update Project' : 'Launch Project'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <style>{`
        .btn-primary { @apply inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-sm active:scale-95; }
        .btn-secondary { @apply inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-sm; }
        .filter-label { @apply block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1; }
        .filter-input { @apply w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-xs font-bold text-slate-700 transition-all; }
        .dashboard-card { @apply bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col; }
        .dashboard-title { @apply text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2; }
        .prose { max-width: 100%; font-size: 0.75rem; }
        .prose table { width: 100%; border-collapse: collapse; margin: 8px 0; }
        .prose th, .prose td { border: 1px solid #e2e8f0; padding: 4px 8px; text-align: left; }
        .prose th { background: #f8fafc; }
      `}</style>
        </div>
    );
};

const ProjectCard = ({ project, onEdit, onDelete }) => {
    const statusStyle = getStatusClasses(project.status);
    const [showTeam, setShowTeam] = useState(false);
    const [team, setTeam] = useState([]);
    const [loadingTeam, setLoadingTeam] = useState(false);

    const fetchTeam = async () => {
        if (showTeam) {
            setShowTeam(false);
            return;
        }
        setLoadingTeam(true);
        try {
            const teamRef = collection(db, 'artifacts', appId, 'public', 'data', 'projects', project.id, 'team');
            const snapshot = await getDocs(teamRef);
            const teamData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
            alert("Failed to fetch team members. Please check connection.");
        } finally {
            setLoadingTeam(false);
        }
    };

    const handleGoToCpc = () => {
        if (!project.projNumber) {
            alert("Project number is missing for this card.");
            return;
        }
        window.postMessage({
            type: 'GO_TO_CPC',
            projectNumber: project.projNumber
        }, '*');
    };

    const handleGoToSimplify = () => {
        if (!project.projNumber) {
            alert("Project number is missing for this card.");
            return;
        }
        window.postMessage({
            type: 'GO_TO_SIMPLIFY',
            projectNumber: project.projNumber
        }, '*');
    };

    const handleScrapeTeam = () => {
        if (!project.projNumber) {
            alert("Project number is missing for this card.");
            return;
        }
        window.postMessage({
            type: 'GO_TO_TEAM_SCRAPE',
            projectNumber: project.projNumber
        }, '*');
    };

    const handleGoToIserve = () => {
        if (!project.projNumber) {
            alert("Project number is missing for this card.");
            return;
        }
        window.postMessage({
            type: 'GO_TO_ISERVE',
            projectNumber: project.projNumber
        }, '*');
    };

    return (
        <div className={`bg-white rounded-xl border border-slate-200 border-l-4 ${statusStyle.border} p-5 hover:shadow-md transition-all group relative overflow-hidden flex flex-col gap-4`}>
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter tabular-nums">{project.projNumber || 'NO-ID'}</span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${statusStyle.badge}`}>{project.status}</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500">{project.methodology || 'BAST Only'}</span>
                    </div>
                    <h3 className="font-bold text-slate-800 truncate text-lg group-hover:text-indigo-600 transition-colors mb-2">{project.projName}</h3>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                            <Users size={14} className="text-slate-400" /> {project.customer}
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                                <UserCheck size={14} className="text-indigo-400" /> <span className="font-bold">{project.pm || 'Unassigned'}</span>
                            </div>

                            {project.subcon && (
                                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 px-2 py-0.5 bg-slate-100 rounded-lg border border-slate-200">
                                    <Building2 size={13} className="text-slate-400" /> {project.subcon}
                                </div>
                            )}

                            {project.solusi && (
                                <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full text-[10px] font-black border border-amber-100 uppercase tracking-tight max-w-[200px] truncate">
                                    <Layers size={10} /> {project.solusi}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-start gap-8 lg:min-w-[400px]">
                    <div>
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Financial Value</p>
                        <p className="text-sm font-bold text-slate-700 tabular-nums">Rp {project.value?.toLocaleString() || 0}</p>
                    </div>
                    <div>
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Mandays Value</p>
                        <p className="text-sm font-bold text-emerald-600 tabular-nums">Rp {project.sisaMandays?.toLocaleString() || 0}</p>
                    </div>
                    <div>
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Timeline</p>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                            <span className="tabular-nums">{project.start || '-'}</span>
                            <ArrowRight size={10} className="text-slate-300" />
                            <span className="tabular-nums text-indigo-600">{project.end || 'TBD'}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-auto pb-1">
                        <button
                            onClick={fetchTeam}
                            className={`p-2 rounded-lg transition-all flex items-center gap-1 ${showTeam ? 'bg-indigo-100 text-indigo-600' : 'text-slate-300 hover:text-indigo-600 hover:bg-indigo-50'}`}
                            title="Fetch Team Members"
                        >
                            {loadingTeam ? <Loader2 size={16} className="animate-spin" /> : <Users size={16} />}
                        </button>
                        <button
                            onClick={handleGoToCpc}
                            className="p-1 rounded-lg transition-all flex items-center justify-center hover:bg-indigo-50"
                            title="Go to CPC"
                        >
                            <div className="bg-[#1e5bb8] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none">CPC</div>
                        </button>
                        <button
                            onClick={handleGoToSimplify}
                            className="p-1 rounded-lg transition-all flex items-center justify-center hover:bg-indigo-50"
                            title="Go to Simplify"
                        >
                            <div className="bg-[#f39c12] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none">SIMPLIFY</div>
                        </button>
                        <button
                            onClick={handleGoToIserve}
                            className="p-1 rounded-lg transition-all flex items-center justify-center hover:bg-indigo-50"
                            title="Go to iServe"
                        >
                            <div className="bg-[#800000] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none flex items-center gap-1">
                                <Timer size={10} /> ISERVE
                            </div>
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-1 self-end">
                    <button onClick={() => onEdit(project)} className="p-2 text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"><Edit2 size={16} /></button>
                    <button onClick={() => onDelete(project.id)} className="p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={16} /></button>
                </div>
            </div>
            {project.note && (
                <div className="mt-2 pt-3 border-t border-slate-100">
                    <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-indigo-50/50 group-hover:border-indigo-100 transition-all">
                        <StickyNote size={14} className="text-slate-400 mt-0.5 shrink-0" />
                        <div className="space-y-1">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Recent Status Update</p>
                            <p className="text-xs text-slate-600 leading-relaxed italic">"{project.note}"</p>
                        </div>
                    </div>
                </div>
            )}

            {project.files && Object.keys(project.files).length > 0 && (
                <div className="mt-2 pt-3 border-t border-slate-100">
                    <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Uploaded Documents</p>
                        <div className="flex flex-wrap gap-2">
                            {Object.keys(project.files)
                                .filter(key => !key.endsWith('_text'))
                                .map(fileKey => {
                                    const displayName = fileKey
                                        .replace(/_/g, ' ')
                                        .split(' ')
                                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                        .join(' ');
                                    return (
                                        <div key={fileKey} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-blue-200 text-xs font-bold text-blue-700">
                                            <FileText size={12} className="text-blue-500" />
                                            {displayName}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            )}
            {showTeam && (
                <div className="mt-4 pt-4 border-t border-slate-100 overflow-x-auto">
                    <div className="flex items-center justify-between mb-3">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <Users size={12} className="text-indigo-500" /> Assigned Team Members
                        </h4>
                        <button
                            onClick={handleScrapeTeam}
                            className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-all text-[9px] font-black uppercase tracking-tighter"
                            title="Scrape Team from CPC"
                        >
                            <Database size={10} /> Scrape Team Assignment
                        </button>
                    </div>
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="px-3 py-2 text-[9px] font-black text-slate-500 uppercase tracking-tight">WBS</th>
                                <th className="px-3 py-2 text-[9px] font-black text-slate-500 uppercase tracking-tight">NPK</th>
                                <th className="px-3 py-2 text-[9px] font-black text-slate-500 uppercase tracking-tight">Name</th>
                                <th className="px-3 py-2 text-[9px] font-black text-slate-500 uppercase tracking-tight">Role</th>
                                <th className="px-3 py-2 text-[9px] font-black text-slate-500 uppercase tracking-tight">From</th>
                                <th className="px-3 py-2 text-[9px] font-black text-slate-500 uppercase tracking-tight">To</th>
                                <th className="px-3 py-2 text-[9px] font-black text-slate-500 uppercase tracking-tight">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {team.map(member => {
                                const isPM = (member.role || '').toLowerCase() === 'project manager';
                                return (
                                    <tr key={member.id} className={`border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors ${isPM ? 'bg-indigo-50/50' : ''}`}>
                                        <td className={`px-3 py-2 text-[11px] font-bold tabular-nums ${isPM ? 'text-indigo-900' : 'text-slate-700'}`}>{member.wbs || member.fullWbs || '-'}</td>
                                        <td className={`px-3 py-2 text-[11px] font-bold tabular-nums ${isPM ? 'text-indigo-900' : 'text-slate-600'}`}>{member.npk || '-'}</td>
                                        <td className={`px-3 py-2 text-[11px] font-black ${isPM ? 'text-indigo-900' : 'text-slate-800'}`}>
                                            <div className="flex items-center gap-1">
                                                {isPM && <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-indigo-600"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>}
                                                {member.name || '-'}
                                            </div>
                                        </td>
                                        <td className={`px-3 py-2 text-[11px] font-black ${isPM ? 'text-indigo-600' : 'text-slate-600'}`}>
                                            {member.role || '-'}
                                        </td>
                                        <td className="px-3 py-2 text-[11px] font-bold text-slate-500 tabular-nums">{member.start || '-'}</td>
                                        <td className="px-3 py-2 text-[11px] font-bold text-indigo-600 tabular-nums">{member.end || '-'}</td>
                                        <td className="px-3 py-2 text-[11px]">
                                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${member.type === 'D' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                                                {member.type === 'S' ? 'Shared' : member.type === 'D' ? 'Dedicated' : member.type || '-'}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {team.length === 0 && !loadingTeam && (
                        <div className="py-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">No team members assigned</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const StatCard = ({ title, value, icon, subtitle }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-3 hover:border-indigo-100 transition-colors">
        <div className="flex justify-between items-start"><div className="p-2 bg-slate-50 rounded-xl">{icon}</div><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{title}</span></div>
        <div><h4 className="text-2xl font-black text-slate-800 leading-none mb-1 tabular-nums">{value}</h4><p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{subtitle}</p></div>
    </div>
);

const FormInput = ({ label, type = "text", value, onChange, placeholder = "", required = false }) => (
    <div className="space-y-1">
        <label className="filter-label">{label}{required && <span className="text-red-500"> *</span>}</label>
        <input required={required} type={type} placeholder={placeholder} className="filter-input h-12" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
);

const getStatusClasses = (status) => {
    switch (status) {
        case 'Ongoing': return { bg: 'bg-blue-500', badge: 'bg-blue-50 border-blue-200 text-blue-700', border: 'border-l-blue-500' };
        case 'Done': return { bg: 'bg-emerald-500', badge: 'bg-emerald-50 border-emerald-200 text-emerald-700', border: 'border-l-emerald-500' };
        case 'Maintenance': return { bg: 'bg-pink-500', badge: 'bg-pink-50 border-pink-200 text-pink-700', border: 'border-l-pink-500' };
        case 'Belum SDHO': return { bg: 'bg-amber-500', badge: 'bg-amber-50 border-amber-200 text-amber-700', border: 'border-l-amber-500' };
        default: return { bg: 'bg-slate-400', badge: 'bg-slate-50 border-slate-200 text-slate-700', border: 'border-l-slate-400' };
    }
};

export default App;
