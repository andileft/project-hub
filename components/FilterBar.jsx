/**
 * FilterBar Component
 * Renders search input, filter dropdowns, and reset button
 */

import React from 'react';
import FormInput from './FormInput.jsx';

export const FilterBar = ({
  filters,
  searchTerm,
  filterOptions,
  pmOptions,
  onSearchChange,
  onFilterChange,
  onReset
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4">
      <FormInput label="Search" value={searchTerm} onChange={onSearchChange} placeholder="Keywords..." />

      <div className="space-y-1">
        <label className="filter-label">Status</label>
        <select className="filter-input" value={filters.status} onChange={(e) => onFilterChange('status', e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="All Active">All Active</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Done">Done</option>
          <option value="Belum SDHO">Belum SDHO</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="filter-label">Customer</label>
        <select className="filter-input" value={filters.customer} onChange={(e) => onFilterChange('customer', e.target.value)}>
          <option value="">All Customers</option>
          {filterOptions.customers.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="space-y-1">
        <label className="filter-label">Solution</label>
        <select className="filter-input" value={filters.solution} onChange={(e) => onFilterChange('solution', e.target.value)}>
          <option value="">All Solutions</option>
          {filterOptions.solutions.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="space-y-1">
        <label className="filter-label">PM</label>
        <select className="filter-input" value={filters.pm} onChange={(e) => onFilterChange('pm', e.target.value)}>
          <option value="">All PMs</option>
          {pmOptions.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="space-y-1">
        <label className="filter-label">Year</label>
        <select className="filter-input" value={filters.year} onChange={(e) => onFilterChange('year', e.target.value)}>
          <option value="">Any Years</option>
          {filterOptions.years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>

      <div className="space-y-1">
        <label className="filter-label">Methodology</label>
        <select className="filter-input" value={filters.methodology} onChange={(e) => onFilterChange('methodology', e.target.value)}>
          <option value="All Types">All Types</option>
          <option value="Tracked by EPM">Tracked by EPM</option>
          <option value="BAST Only">BAST Only</option>
          <option value="Simple">Simple</option>
          <option value="Complex">Complex</option>
        </select>
      </div>

      <div className="flex items-end">
        <button onClick={onReset} className="text-xs font-bold text-indigo-600 mb-3 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Reset
        </button>
      </div>
    </div>
  );
};

export default React.memo(FilterBar);