import React from 'react';
import { XIcon, CheckCircle2Icon } from './Icons';

const SuccessModal = ({ modalState, onClose }) => {
    if (!modalState) return null;
    return (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="save-success-title">
            <div className="bg-white dark:bg-slate-800 dark:bg-slate-800 rounded-3xl w-full max-w-md shadow-2xl p-8 text-center relative">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:text-slate-300 p-1 rounded-lg"
                    aria-label="Close"
                >
                    <XIcon className="h-5 w-5" />
                </button>
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2Icon width={36} height={36} className="text-emerald-600" />
                </div>
                <h3 id="save-success-title" className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight mb-2">
                    {modalState === 'updated' ? 'Project updated' : 'Project created'}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
                    {modalState === 'updated' ? 'Your changes have been saved to the database.' : 'The new project has been saved to the database.'}
                </p>
                <button
                    type="button"
                    onClick={onClose}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') onClose();
                    }}
                    className="w-full h-12 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30 active:scale-[0.98]"
                    autoFocus
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default React.memo(SuccessModal);
