import React from 'react';

// NOTE: StatCard component must be available. Import from './StatCard.jsx'
import StatCard from './StatCard.jsx';
import { formatShortCurrency } from '../utils/formatting.js';
import {
  BarChart3Icon,
  TrendingUpIcon,
  DollarSignIcon,
  BanknoteIcon,
  UsersIcon,
  AlertTriangleIcon,
  TrophyIcon,
  UserCheckIcon
} from './Icons';

export const Dashboard = ({
  dashboardData,
  dashboardYear,
  onYearChange,
  onProjectClick,
  onPMClick,
  onCustomerClick
}) => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
             <BarChart3Icon className="h-5 w-5 text-indigo-600" />
           </div>
          <div>
            <h2 className="font-bold text-slate-800 dark:text-slate-100">Portfolio Analytics</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Year Filter:</label>
          <select
            className="h-10 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-black text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-500"
            value={dashboardYear}
            onChange={(e) => onYearChange(e.target.value)}
          >
            <option value="All">All History</option>
            {dashboardData?.availableYears.map(year => <option key={year} value={year}>{year}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Projects"
          value={dashboardData?.activeCount || 0}
          icon={
            <TrendingUpIcon className="h-6 w-6 text-emerald-500" />
          }
          subtitle={`Filtering: ${dashboardYear}`}
        />
        <StatCard
          title="Total Value"
          value={formatShortCurrency(dashboardData?.totalValue || 0)}
          icon={
            <DollarSignIcon className="h-6 w-6 text-indigo-500" />
          }
          subtitle="Market Share Value"
        />
        <StatCard
          title="Total Mandays"
          value={formatShortCurrency(dashboardData?.totalMandays || 0)}
          icon={
            <BanknoteIcon className="h-6 w-6 text-emerald-500" />
          }
          subtitle="Portfolio Workload Value"
        />
        <StatCard
          title="Key Entities"
          value={dashboardData?.topCustomers.length || 0}
          icon={
            <UsersIcon className="h-6 w-6 text-orange-500" />
          }
          subtitle="Active Partnerships"
        />
      </div>

      <div className="dashboard-card border-amber-200 bg-amber-50/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-amber-100 text-amber-600 rounded-xl">
               <AlertTriangleIcon className="h-5 w-5 text-amber-600" />
             </div>
            <div>
              <h3 className="font-black text-slate-800 dark:text-slate-100 text-sm">Belum SDHO Queue</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Pending Acceptance Confirmation</p>
            </div>
          </div>
          <button
            onClick={() => { onProjectClick('Belum SDHO'); }}
            className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            View All ({dashboardData?.belumSdhoProjects.length})
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dashboardData?.belumSdhoProjects.slice(0, 6).map((p) => (
            <button
              key={p.id}
              onClick={() => onProjectClick(p.id)}
              className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-indigo-400 text-left group transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[9px] font-black text-slate-300 uppercase tabular-nums">ID: {p.projNumber || 'N/A'}</span>
                <span className="text-xs font-black text-amber-600 tabular-nums">{formatShortCurrency(p.value)}</span>
              </div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-xs truncate mb-1 group-hover:text-indigo-600">{p.projName}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">{p.customer}</p>
            </button>
          ))}
          {dashboardData?.belumSdhoProjects.length === 0 && (
            <div className="col-span-full py-8 text-center bg-white dark:bg-slate-800 rounded-xl border border-dashed border-slate-300 dark:border-slate-600">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">No projects in Belum SDHO status</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="dashboard-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="dashboard-title mb-0">Top 10 Projects by Value</h3>
            <TrophyIcon className="h-4 w-4 text-amber-400" />
          </div>
          <div className="space-y-4">
            {dashboardData?.topProjectsByValue.map((p, i) => (
              <button key={p.id} onClick={() => onProjectClick(p.id)} className="w-full space-y-1 text-left group">
                <div className="flex justify-between text-xs font-bold">
                  <span className="truncate pr-4 group-hover:text-indigo-600 flex items-center gap-2">
                    <span className="text-[10px] text-slate-300">#{i + 1}</span> {p.projName}
                  </span>
                  <span className="text-indigo-600">{formatShortCurrency(p.value)}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full transition-all duration-500" style={{ width: `${(p.value / (dashboardData.topProjectsByValue[0]?.value || 1)) * 100}%` }}></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="dashboard-title mb-0">Top 10 Projects by Mandays</h3>
            <BanknoteIcon className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="space-y-4">
            {dashboardData?.topProjectsByMandays.map((p, i) => (
              <button key={p.id} onClick={() => onProjectClick(p.id)} className="w-full space-y-1 text-left group">
                <div className="flex justify-between text-xs font-bold">
                  <span className="truncate pr-4 group-hover:text-indigo-600 flex items-center gap-2">
                    <span className="text-[10px] text-slate-300">#{i + 1}</span> {p.projName}
                  </span>
                  <span className="text-emerald-600">{formatShortCurrency(p.sisaMandays)}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${(p.sisaMandays / (dashboardData.topProjectsByMandays[0]?.sisaMandays || 1)) * 100}%` }}></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="dashboard-title mb-0">PM Workload (Active Projects)</h3>
            <UserCheckIcon className="h-3.5 w-3.5 text-slate-300" />
          </div>
          <div className="space-y-4">
            {dashboardData?.topPMs.map(([pm, count], i) => (
              <button key={pm} onClick={() => onPMClick(pm)} className="w-full space-y-1 text-left group">
                <div className="flex justify-between text-xs font-bold">
                  <span className="truncate pr-4 group-hover:text-indigo-600 flex items-center gap-2">
                    <span className="text-[10px] text-slate-300">#{i + 1}</span> {pm}
                  </span>
                  <span className="text-indigo-600">{count} Projects</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full transition-all duration-500" style={{ width: `${(count / (dashboardData.topPMs[0]?.[1] || 1)) * 100}%` }}></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="dashboard-title mb-0">Top 10 Customers (By Total Value)</h3>
            <UsersIcon className="h-4 w-4 text-slate-300" />
          </div>
          <div className="space-y-4">
            {dashboardData?.topCustomers.map(([cust, val], i) => (
              <button key={cust} onClick={() => onCustomerClick(cust)} className="w-full space-y-1 text-left group">
                <div className="flex justify-between text-xs font-bold">
                  <span className="truncate pr-4 group-hover:text-indigo-600 flex items-center gap-2">
                    <span className="text-[10px] text-slate-300">#{i + 1}</span> {cust}
                  </span>
                  <span className="text-indigo-600">{formatShortCurrency(val)}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${(val / (dashboardData.topCustomers[0]?.[1] || 1)) * 100}%` }}></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
