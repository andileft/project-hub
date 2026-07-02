import React from 'react';
import {
  ListIcon,
  LayoutDashboardIcon,
  Trash2Icon,
  UploadIcon,
  PlusIcon,
  SunIcon,
  MoonIcon,
  LogOutIcon
} from './Icons';

const Header = ({
  activeTab,
  onTabChange,
  isAdmin,
  onImport,
  onCreate,
  onTruncate,
  onLogout,
  theme,
  onToggleTheme,
  isAuthenticated
}) => {
  if (!isAuthenticated) return null;

  return (
    <header className="bg-white dark:bg-slate-800 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="logo.png" alt="Project Hub" className="h-8 w-8 rounded-lg object-contain" />
            <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">Project Hub</h1>
          </div>
          <nav className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => onTabChange('list')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'list' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              <ListIcon className="h-4 w-4" />
              List
            </button>
            <button
              onClick={() => onTabChange('dashboard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'dashboard' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              <LayoutDashboardIcon className="h-4 w-4" />
              Dashboard
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {activeTab === 'list' && (
            <>
              {isAdmin && (
                <>
                  <button
                    onClick={onTruncate}
                    className="h-10 px-4 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all flex items-center gap-2 border border-red-100"
                  >
                    <Trash2Icon className="h-4 w-4" />
                    Truncate DB
                  </button>
                  <button
                    onClick={onImport}
                    className="h-10 px-4 text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 rounded-xl transition-all flex items-center gap-2 border border-slate-200 dark:border-slate-600"
                  >
                    <UploadIcon className="h-4 w-4" />
                    Import
                  </button>
                  <button
                    onClick={onCreate}
                    className="h-10 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all flex items-center gap-2"
                  >
                    <PlusIcon className="h-4 w-4" />
                    New
                  </button>
                </>
              )}
            </>
          )}
          <button onClick={onToggleTheme} className="p-2 text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400">
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
          <button onClick={onLogout} className="p-2 text-slate-400 hover:text-red-500">
            <LogOutIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
