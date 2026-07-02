import React from 'react';

const StatCard = ({ title, value, icon, subtitle }) => (
  <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">{icon}</div>
      {subtitle && <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded-full">{subtitle}</span>}
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
      <p className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">{value}</p>
    </div>
  </div>
);

export default React.memo(StatCard);
