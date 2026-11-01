/**
 * FilterBar (new design) — sticky toolbar with search, filter selects,
 * active-filter chips and a live results summary.
 */

import React from 'react';

const STATUS_LABELS = {
  All: 'All Statuses',
  'All Active': 'All Active',
  Ongoing: 'Ongoing',
  Maintenance: 'Maintenance',
  Done: 'Done',
  'Belum SDHO': 'Belum SDHO'
};

const FilterBar = ({
  filters,
  searchTerm,
  filterOptions,
  pmOptions,
  onSearchChange,
  onFilterChange,
  onReset,
  summary
}) => {
  const activeChips = [];
  if (filters.status && filters.status !== 'All Active') {
    activeChips.push({ key: 'status', label: `Status: ${STATUS_LABELS[filters.status] || filters.status}` });
  }
  if (filters.customer) activeChips.push({ key: 'customer', label: `Customer: ${filters.customer}` });
  if (filters.solution) activeChips.push({ key: 'solution', label: `Solution: ${filters.solution}` });
  if (filters.pm) activeChips.push({ key: 'pm', label: `PM: ${filters.pm}` });
  if (filters.year) activeChips.push({ key: 'year', label: `Year: ${filters.year}` });
  if (filters.methodology && filters.methodology !== 'All Types') {
    activeChips.push({ key: 'methodology', label: `Methodology: ${filters.methodology}` });
  }
  if (searchTerm) activeChips.push({ key: 'search', label: `Search: “${searchTerm}”` });

  const removeChip = (key) => {
    if (key === 'search') onSearchChange('');
    else if (key === 'status') onFilterChange('status', 'All Active');
    else if (key === 'methodology') onFilterChange('methodology', 'All Types');
    else onFilterChange(key, '');
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="lg:sticky lg:top-[var(--ph-topbar,68px)] z-20 mb-6 rounded-card border border-[var(--line)] bg-[var(--surface)] backdrop-blur p-4 shadow-card">
      {/* Mobile: keep the bar compact (search only) so a sticky panel never
          covers the viewport; the rest of the filters collapse behind a toggle. */}
      <div className="flex items-center gap-2 lg:hidden">
        <input
          className="ph-input flex-1"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects…"
        />
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          className="ph-btn ph-btn--outline ph-btn--sm shrink-0"
        >
          Filters{activeChips.length ? ` (${activeChips.length})` : ''}
        </button>
      </div>

      <div className={`${mobileOpen ? 'grid' : 'hidden lg:grid'} grid-cols-1 md:grid-cols-2 xl:grid-cols-8 gap-4 lg:mt-0 ${mobileOpen ? 'mt-4' : ''}`}>
        <label className="ph-field xl:col-span-2 hidden lg:flex">
          <span className="ph-field__label">Search</span>
          <input
            className="ph-input"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Project name, number, customer, PM…"
          />
        </label>

        <label className="ph-field">
          <span className="ph-field__label">Status</span>
          <select className="ph-select" value={filters.status} onChange={(e) => onFilterChange('status', e.target.value)}>
            <option value="All">All Statuses</option>
            <option value="All Active">All Active</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Done">Done</option>
            <option value="Belum SDHO">Belum SDHO</option>
          </select>
        </label>

        <label className="ph-field">
          <span className="ph-field__label">Customer</span>
          <select className="ph-select" value={filters.customer} onChange={(e) => onFilterChange('customer', e.target.value)}>
            <option value="">All Customers</option>
            {filterOptions.customers.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>

        <label className="ph-field">
          <span className="ph-field__label">Solution</span>
          <select className="ph-select" value={filters.solution} onChange={(e) => onFilterChange('solution', e.target.value)}>
            <option value="">All Solutions</option>
            {filterOptions.solutions.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>

        <label className="ph-field">
          <span className="ph-field__label">PM</span>
          <select className="ph-select" value={filters.pm} onChange={(e) => onFilterChange('pm', e.target.value)}>
            <option value="">All PMs</option>
            {pmOptions.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>

        <label className="ph-field">
          <span className="ph-field__label">Year</span>
          <select className="ph-select" value={filters.year} onChange={(e) => onFilterChange('year', e.target.value)}>
            <option value="">Any Years</option>
            {filterOptions.years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </label>

        <label className="ph-field">
          <span className="ph-field__label">Methodology</span>
          <select className="ph-select" value={filters.methodology} onChange={(e) => onFilterChange('methodology', e.target.value)}>
            <option value="All Types">All Types</option>
            <option value="Tracked by EPM">Tracked by EPM</option>
            <option value="BAST Only">BAST Only</option>
            <option value="Simple">Simple</option>
            <option value="Complex">Complex</option>
          </select>
        </label>
      </div>

      <div className={`${mobileOpen ? 'flex' : 'hidden lg:flex'} flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-[var(--line)]`}>
        <div className="text-[.78rem] text-muted">
          {summary ? (
            <>
              <b className="text-ink dark:text-[var(--ink)]">{summary.count}</b> projects shown
              {summary.value ? <> · value <b className="text-ink dark:text-[var(--ink)]">{summary.value}</b></> : null}
              {summary.mandays ? <> · mandays <b className="text-ink dark:text-[var(--ink)]">{summary.mandays}</b></> : null}
              {summary.customers != null ? <> · {summary.customers} customers</> : null}
            </>
          ) : (
            <span>Filter the portfolio by any dimension.</span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {activeChips.map((chip) => (
            <span key={chip.key} className="ph-chip ph-chip--wine">
              {chip.label}
              <button type="button" onClick={() => removeChip(chip.key)} aria-label={`Remove ${chip.label}`} className="opacity-70 hover:opacity-100 leading-none text-base">&times;</button>
            </span>
          ))}
          {activeChips.length > 0 && (
            <button onClick={onReset} className="ph-btn ph-btn--ghost ph-btn--sm">Clear all</button>
          )}
          <button onClick={onReset} className="ph-btn ph-btn--outline ph-btn--sm">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FilterBar);
