import React from 'react';
import { XIcon, CheckCircle2Icon } from './Icons';

const SuccessModal = ({ modalState, onClose }) => {
    if (!modalState) return null;
    return (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="save-success-title">
            <div className="ph-slide-up bg-[var(--surface)] rounded-hero w-full max-w-md shadow-panel p-8 text-center relative border border-[var(--line)]">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted hover:text-ink p-1 rounded-lg transition-colors"
                    aria-label="Close"
                >
                    <XIcon className="h-5 w-5" />
                </button>
                <div className="w-16 h-16 bg-[var(--green-soft)] text-[var(--green)] rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2Icon width={36} height={36} />
                </div>
                <h3 id="save-success-title" className="font-display text-xl font-extrabold text-ink dark:text-[var(--ink)] tracking-tight mb-2">
                    {modalState === 'updated' ? 'Project updated' : 'Project created'}
                </h3>
                <p className="text-[.86rem] font-medium text-muted mb-8">
                    {modalState === 'updated' ? 'Your changes have been saved to the database.' : 'The new project has been saved to the database.'}
                </p>
                <button
                    type="button"
                    onClick={onClose}
                    onKeyDown={(e) => { if (e.key === 'Enter') onClose(); }}
                    className="ph-btn ph-btn--primary ph-btn--block"
                    autoFocus
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default React.memo(SuccessModal);
