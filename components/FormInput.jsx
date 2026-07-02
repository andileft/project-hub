import React from 'react';

const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  options,
  action,
  disabled
}) => (
  <div className="space-y-1">
    <div className="flex justify-between items-center">
      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">{label}</label>
      {action}
    </div>
    {options ? (
      <select
        disabled={disabled}
        className="w-full h-11 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold text-slate-700 dark:text-slate-200 text-sm disabled:opacity-75"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    ) : (
      <input
        type={type}
        disabled={disabled}
        className="w-full h-11 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold text-slate-700 dark:text-slate-200 text-sm placeholder:text-slate-300 placeholder:font-normal disabled:opacity-75"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
      />
    )}
  </div>
);

export default React.memo(FormInput);
