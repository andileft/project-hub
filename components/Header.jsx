import React from 'react';
import {
  ListIcon,
  LayoutDashboardIcon,
  Trash2Icon,
  UploadIcon,
  PlusIcon,
  SunIcon,
  MoonIcon,
  LogOutIcon,
  Rows3Icon,
  TableIcon
} from './Icons';
import { Wordmark, LogoIcon } from './Wordmark';

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
  isAuthenticated,
  viewMode,
  onToggleViewMode,
}) => {
  if (!isAuthenticated) return null;

  return (
    <header className="sticky top-0 z-30 bg-[var(--surface)] backdrop-blur border-b border-[var(--line)]">
      <div className="mx-auto max-w-[1320px] px-4 py-3 flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="flex items-center gap-4 min-w-0">
          <a href="#" className="flex items-center shrink-0" onClick={(e) => e.preventDefault()}>
            <Wordmark className="h-9 hidden dark:hidden sm:block" />
            <span className="hidden dark:flex items-center gap-2.5">
              <LogoIcon className="h-9 w-9" />
              <span className="font-display font-extrabold text-lg tracking-tight text-[var(--ink)]">Project Hub</span>
            </span>
            <LogoIcon className="h-9 w-9 sm:hidden dark:hidden" />
          </a>
          <span className="hidden lg:block w-px h-8 bg-[var(--line-2)]" />
          <nav className="ph-seg order-3 lg:order-none w-full lg:w-auto overflow-x-auto">
            <button
              onClick={() => onTabChange('list')}
              className={`ph-seg__btn flex items-center gap-2 ${activeTab === 'list' ? 'is-active' : ''}`}
            >
              <ListIcon className="h-4 w-4" />
              Projects
            </button>
            <button
              onClick={() => onTabChange('dashboard')}
              className={`ph-seg__btn flex items-center gap-2 ${activeTab === 'dashboard' ? 'is-active' : ''}`}
            >
              <LayoutDashboardIcon className="h-4 w-4" />
              Dashboard
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2 lg:ml-auto flex-wrap">
          {activeTab === 'list' && isAdmin && (
            <>
              <button onClick={onTruncate} title="Truncate DB" aria-label="Truncate DB" className="ph-btn ph-btn--danger ph-btn--sm">
                <Trash2Icon className="h-4 w-4" />
                <span className="hidden md:inline">Truncate</span>
              </button>
              <button onClick={onImport} title="Import CSV" aria-label="Import CSV" className="ph-btn ph-btn--outline ph-btn--sm">
                <UploadIcon className="h-4 w-4" />
                <span className="hidden md:inline">Import</span>
              </button>
              <button onClick={onCreate} className="ph-btn ph-btn--primary ph-btn--sm">
                <PlusIcon className="h-4 w-4" />
                New Project
              </button>
            </>
          )}

          {activeTab === 'list' && (
            <button
              onClick={onToggleViewMode}
              title={viewMode === 'table' ? 'Switch to stacked rows' : 'Switch to table view'}
              aria-label="Toggle list view"
              className="ph-icon-btn hidden md:inline-grid"
            >
              {viewMode === 'table' ? <Rows3Icon className="h-5 w-5" /> : <TableIcon className="h-5 w-5" />}
            </button>
          )}

          <button onClick={onToggleTheme} title="Toggle theme" aria-label="Toggle theme" className="ph-icon-btn">
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <button onClick={onLogout} title="Sign out" aria-label="Sign out" className="ph-icon-btn hover:!text-red-500">
            <LogOutIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
