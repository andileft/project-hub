import React from 'react';
import StatCard from './StatCard.jsx';
import { formatShortNumber, formatShortCurrency } from '../utils/formatting.js';
import {
  BarChart3Icon,
  TrendingUpIcon,
  DollarSignIcon,
  BanknoteIcon,
  UsersIcon,
  AlertTriangleIcon,
  TrophyIcon,
  UserCheckIcon,
  ShieldCheckIcon
} from './Icons';

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const daysTo = (raw) => {
  if (!raw) return null;
  const m = String(raw).match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  const d = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(raw);
  if (Number.isNaN(d.getTime())) return null;
  const today = new Date();
  const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() - t0.getTime()) / 86400000);
};

const RankRow = ({ idx, label, valueText, ratio, tone = '', onClick }) => (
  <button type="button" onClick={onClick} className="w-full text-left group">
    <div className="flex items-center justify-between gap-3 text-[.78rem] font-bold mb-1.5">
      <span className="truncate flex items-center gap-2 min-w-0 group-hover:text-wine transition-colors">
        <span className="text-muted2 tabular-nums shrink-0">#{idx}</span>
        <span className="truncate">{label}</span>
      </span>
      <span className="text-wine tabular-nums shrink-0">{valueText}</span>
    </div>
    <div className={`ph-progress ${tone}`}><span style={{ width: `${Math.max(2, Math.min(100, ratio * 100))}%` }} /></div>
  </button>
);

export const Dashboard = ({ dashboardData, dashboardYear, onYearChange, onProjectClick, onPMClick, onCustomerClick }) => {
  const belum = dashboardData?.belumSdhoProjects || [];
  const rootRef = React.useRef(null);

  // Staggered reveal for stat cards and panels.
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = root.querySelectorAll('.reveal');
    items.forEach((el, i) => {
      el.style.transitionDelay = reduce ? '0ms' : `${Math.min(i * 30, 300)}ms`;
      el.classList.remove('in');
    });
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => {
      items.forEach((el) => el.classList.add('in'));
    }));
    return () => cancelAnimationFrame(raf);
  }, [dashboardYear]);

  return (
    <div ref={rootRef} className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="ph-kicker">Portfolio analytics</span>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink dark:text-[var(--ink)] mt-2">Project Hub</h1>
          <p className="text-[.86rem] text-muted mt-1">Active portfolio at a glance — value, mandays, and SDHO risk recalculated whenever data changes.</p>
        </div>
        <label className="ph-field min-w-[200px]">
          <span className="ph-field__label">Global Year Filter</span>
          <select className="ph-select" value={dashboardYear} onChange={(e) => onYearChange(e.target.value)}>
            <option value="All">All History</option>
            {dashboardData?.availableYears.map(year => <option key={year} value={year}>{year}</option>)}
          </select>
        </label>
      </div>

      {/* KPI strip */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Active Projects"
          value={dashboardData?.activeCount || 0}
          countup
          icon={<TrendingUpIcon className="h-6 w-6 text-[var(--green)]" />}
          foot={<span>Ongoing · Maintenance · Belum SDHO</span>}
        />
        <StatCard
          title="Total Value"
          value={formatShortCurrency(dashboardData?.totalValue || 0)}
          icon={<DollarSignIcon className="h-6 w-6 text-wine" />}
          subtitle="Market share value"
        />
        <StatCard
          title="Total Mandays"
          value={formatShortNumber(dashboardData?.totalMandays || 0)}
          icon={<BanknoteIcon className="h-6 w-6 text-[var(--green)]" />}
          subtitle="Portfolio workload"
        />
        <StatCard
          title="Key Entities"
          value={dashboardData?.topCustomers.length || 0}
          countup
          icon={<UsersIcon className="h-6 w-6 text-[var(--orange)]" />}
          subtitle="Active partnerships"
        />
      </section>

      {/* Belum SDHO queue */}
      <section className="ph-card">
        <div className="ph-card__head">
          <div className="ph-card__title">
            <span className="w-9 h-9 rounded-xl grid place-items-center bg-[var(--amber-soft)] text-[var(--amber)]"><AlertTriangleIcon className="h-4 w-4" /></span>
            Belum SDHO Queue
          </div>
          <span className="ph-card__hint">Pending acceptance confirmation</span>
          <button onClick={() => onProjectClick('Belum SDHO')} className="ph-btn ph-btn--ghost ph-btn--sm">View all ({belum.length})</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {belum.slice(0, 6).map((p) => {
            const d = daysTo(p.end);
            const agingRatio = d == null ? 0 : d < 0 ? Math.min(1, -d / 60) : Math.min(1, 1 - d / 60);
            return (
              <button key={p.id} onClick={() => onProjectClick(p.id)} className="text-left rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 hover:shadow-lift hover:border-[var(--line-2)] transition-all group">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-mono text-[.68rem] font-bold text-muted2">ID: {p.projNumber || 'N/A'}</span>
                  <span className="text-[.8rem] font-extrabold text-[var(--amber)] tabular-nums">{formatShortNumber(Number(p.value) || 0)}</span>
                </div>
                <h4 className="font-bold text-[.88rem] text-ink dark:text-[var(--ink)] truncate group-hover:text-wine transition-colors">{p.projName}</h4>
                <p className="text-[.76rem] text-muted truncate mb-3">{p.customer}</p>
                <div className="ph-progress ph-progress--orange mb-1.5"><span style={{ width: `${Math.max(4, agingRatio * 100)}%` }} /></div>
                <p className="text-[.68rem] text-muted2">{d == null ? 'No end date' : d < 0 ? `${-d} days since end date` : `${d} days until end date`}</p>
              </button>
            );
          })}
          {belum.length === 0 && (
            <div className="col-span-full py-10 text-center rounded-2xl border border-dashed border-[var(--line-2)]">
              <p className="text-[.72rem] font-extrabold text-muted2 uppercase tracking-[.12em]">No projects in Belum SDHO status</p>
            </div>
          )}
        </div>
      </section>

      {/* Rankings */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="ph-card">
          <div className="ph-card__head">
            <div className="ph-card__title"><TrophyIcon className="h-4 w-4 text-[var(--orange)]" />Top 10 Projects by Value</div>
            <span className="ph-card__hint">click to open</span>
          </div>
          <div className="flex flex-col gap-3.5">
            {dashboardData?.topProjectsByValue.map((p, i) => (
              <RankRow key={p.id} idx={i + 1} label={p.projName} valueText={formatShortNumber(Number(p.value) || 0)} ratio={(Number(p.value) || 0) / (Number(dashboardData.topProjectsByValue[0]?.value) || 1)} onClick={() => onProjectClick(p.id)} />
            ))}
          </div>
        </div>

        <div className="ph-card">
          <div className="ph-card__head">
            <div className="ph-card__title"><BanknoteIcon className="h-4 w-4 text-[var(--green)]" />Top 10 Projects by Mandays</div>
          </div>
          <div className="flex flex-col gap-3.5">
            {dashboardData?.topProjectsByMandays.map((p, i) => (
              <RankRow key={p.id} idx={i + 1} label={p.projName} valueText={formatShortNumber(Number(p.sisaMandays) || 0)} ratio={(Number(p.sisaMandays) || 0) / (Number(dashboardData.topProjectsByMandays[0]?.sisaMandays) || 1)} onClick={() => onProjectClick(p.id)} />
            ))}
          </div>
        </div>

        <div className="ph-card">
          <div className="ph-card__head">
            <div className="ph-card__title"><UserCheckIcon className="h-4 w-4 text-wine" />PM Workload <span className="ph-card__hint">(Active)</span></div>
          </div>
          <div className="flex flex-col gap-3.5">
            {dashboardData?.topPMs.map(([pm, count], i) => (
              <RankRow key={pm} idx={i + 1} label={pm} valueText={`${count} projects`} ratio={count / (dashboardData.topPMs[0]?.[1] || 1)} onClick={() => onPMClick(pm)} />
            ))}
          </div>
        </div>

        <div className="ph-card">
          <div className="ph-card__head">
            <div className="ph-card__title"><UsersIcon className="h-4 w-4 text-muted2" />Top 10 Customers <span className="ph-card__hint">(By Total Value)</span></div>
          </div>
          <div className="flex flex-col gap-3.5">
            {dashboardData?.topCustomers.map(([cust, val], i) => (
              <RankRow key={cust} idx={i + 1} label={cust} valueText={formatShortNumber(Number(val) || 0)} ratio={(Number(val) || 0) / (Number(dashboardData.topCustomers[0]?.[1]) || 1)} tone="ph-progress--green" onClick={() => onCustomerClick(cust)} />
            ))}
          </div>
        </div>
      </section>

      <p className="text-center text-[.72rem] text-muted2 flex items-center justify-center gap-1.5">
        <ShieldCheckIcon className="h-3.5 w-3.5" />
        Metrics derived from existing project data only.
      </p>
    </div>
  );
};

export default React.memo(Dashboard);
