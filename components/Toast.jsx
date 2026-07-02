import React from 'react';

const Toast = ({ toast, onClear }) => {
    if (!toast) return null;
    return (
        <div
            className={`fixed bottom-6 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-2xl border shadow-xl px-4 py-3 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 ${toast.variant === 'error' ? 'bg-red-50 border-red-200 text-red-900' : toast.variant === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-slate-900 border-slate-700 text-white'}`}
            role="status"
        >
            <p className="text-sm font-bold leading-snug flex-1 pt-0.5">{toast.message}</p>
            <button
                type="button"
                onClick={onClear}
                className={`shrink-0 rounded-lg p-1.5 font-bold text-xs uppercase tracking-wide ${toast.variant === 'error' ? 'text-red-600 hover:bg-red-100' : toast.variant === 'success' ? 'text-emerald-700 hover:bg-emerald-100/80' : 'text-slate-300 hover:bg-slate-800'}`}
                aria-label="Dismiss notification"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </button>
        </div>
    );
};

export default React.memo(Toast);
