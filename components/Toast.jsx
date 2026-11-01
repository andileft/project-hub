import React from 'react';

const VARIANT = {
    error: { chip: 'ph-chip--red', label: 'Error' },
    success: { chip: 'ph-chip--green', label: 'Success' },
    info: { chip: 'ph-chip--blue', label: 'Info' }
};

const Toast = ({ toast, onClear, duration = 5000 }) => {
    if (!toast) return null;
    const v = VARIANT[toast.variant] || VARIANT.info;
    return (
        <div
            className="ph-toast fixed bottom-6 right-6 z-[70] w-[calc(100%-3rem)] max-w-sm rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-panel px-4 py-3 flex items-start gap-3"
            style={{ '--toast-dur': `${duration}ms` }}
            role="status"
        >
            <span className={`ph-chip ${v.chip} shrink-0 mt-0.5 text-[.62rem] uppercase tracking-wider`}>{v.label}</span>
            <p className="text-[.84rem] font-semibold leading-snug flex-1 text-ink dark:text-[var(--ink)]">{toast.message}</p>
            <button
                type="button"
                onClick={onClear}
                className="shrink-0 rounded-lg p-1 text-muted hover:text-ink transition-colors"
                aria-label="Dismiss notification"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </button>
            {onClear && <span className="ph-toast-progress" />}
        </div>
    );
};

export default React.memo(Toast);
