import React, { useEffect } from 'react';
import FormInput from './FormInput';
import FileDropZone from './FileDropZone';
import { inferMethodologyFromText } from '../utils/ai';
import { formatNumberWithCommas, parseFormattedNumber } from '../utils/formatting';
import { XIcon, CheckCircle2Icon, SparklesIcon } from './Icons';

const ProjectModal = ({
  isOpen,
  editingProject,
  formData,
  isAdmin,
  formError,
  onClose,
  onSubmit,
  onFormDataChange,
  onAttachmentUpload,
  onAttachmentDelete,
  showToast
}) => {
  // Handle ESC key to close modal (like Discard)
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 dark:bg-slate-800 p-8 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight">{editingProject ? 'Edit Project' : 'New Project'}</h2>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:text-slate-300">
            <XIcon />
          </button>
        </div>
        {formError && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-700 text-sm font-bold flex items-start gap-3" role="alert">
            <CheckCircle2Icon className="shrink-0 text-red-500 mt-0.5" aria-hidden="true" />
            <span>{formError}</span>
          </div>
        )}
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <FormInput label="Project Name" value={formData.projName} onChange={v => onFormDataChange({ ...formData, projName: v })} required placeholder="Enter project title..." disabled={!isAdmin} />
            </div>
            <FormInput label="Project Number" value={formData.projNumber} onChange={v => onFormDataChange({ ...formData, projNumber: v })} required placeholder="PRJ-202X-XXX" disabled={!isAdmin} />
            <FormInput label="Customer" value={formData.customer} onChange={v => onFormDataChange({ ...formData, customer: v })} required placeholder="Client name..." disabled={!isAdmin} />
            <FormInput label="PM" value={formData.pm} onChange={v => onFormDataChange({ ...formData, pm: v })} placeholder="Lead PM..." disabled={!isAdmin} />
            <FormInput label="Status" value={formData.status} onChange={v => onFormDataChange({ ...formData, status: v })} options={['Ongoing', 'Maintenance', 'Done', 'Belum SDHO']} disabled={!isAdmin} />
            <FormInput
              label="Methodology"
              value={formData.methodology || 'BAST Only'}
              onChange={v => onFormDataChange({ ...formData, methodology: v })}
              options={['BAST Only', 'Simple', 'Complex']}
              disabled={!isAdmin}
              action={isAdmin && formData.files?.mom_text && (
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      showToast('info', 'Reading methodology from MOM…', 0);
                      const inferred = await inferMethodologyFromText(formData.files.mom_text);
                      if (inferred) {
                        onFormDataChange(prev => ({ ...prev, methodology: inferred }));
                        showToast('success', `Methodology updated to: ${inferred}`, 6500);
                      } else {
                        showToast('info', 'Could not identify methodology from this MOM text.', 6000);
                      }
                    } catch (err) {
                      console.error(err);
                      showToast('error', 'Fetch from MOM failed: ' + (err.message || String(err)), 8000);
                    }
                  }}
                  className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 bg-indigo-50 px-2 py-0.5 rounded-lg border border-indigo-100 mb-1"
                >
                  <SparklesIcon className="w-[10px] h-[10px]" />
                  Fetch from MOM
                </button>
              )}
            />
            <FormInput label="Subcon" value={formData.subcon} onChange={v => onFormDataChange({ ...formData, subcon: v })} placeholder="Partner..." disabled={!isAdmin} />
            <FormInput label="Value (Rp)" type="text" value={formatNumberWithCommas(formData.value)} onChange={v => onFormDataChange({ ...formData, value: parseFormattedNumber(v) })} required disabled={!isAdmin} />
            <FormInput label="Mandays (Rp)" type="text" value={formatNumberWithCommas(formData.sisaMandays)} onChange={v => onFormDataChange({ ...formData, sisaMandays: parseFormattedNumber(v) })} required disabled={!isAdmin} />
            <FormInput label="Start Date" type="date" value={formData.start} onChange={v => onFormDataChange({ ...formData, start: v })} required disabled={!isAdmin} />
            <FormInput label="End Date" type="date" value={formData.end} onChange={v => onFormDataChange({ ...formData, end: v })} disabled={!isAdmin} />
            <div className="md:col-span-2">
              <FormInput label="Solution" value={formData.solusi} onChange={v => onFormDataChange({ ...formData, solusi: v })} placeholder="Technical approach..." disabled={!isAdmin} />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1 mb-1.5 block">Project Notes & Remarks</label>
              <textarea
                disabled={!isAdmin}
                className="w-full h-32 px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-semibold text-slate-700 dark:text-slate-200 text-sm disabled:opacity-75 shadow-inner placeholder:text-slate-400 dark:placeholder:text-slate-600"
                value={formData.note}
                onChange={e => onFormDataChange({ ...formData, note: e.target.value })}
                placeholder="Document current progress, critical blockers, or important updates here..."
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-4 border-t border-slate-100 dark:border-slate-800">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Project Attachments</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {['sdho', 'mom', 'kickoff', 'report'].map(key => (
                    <FileDropZone
                        key={key}
                        label={key === 'mom' ? 'MOM SDHO' : key === 'report' ? 'Progress Report' : key.toUpperCase()}
                        fileUrl={formData.files?.[key]}
                        onUpload={isAdmin ? ((file) => onAttachmentUpload(key, file)) : null}
                        onDelete={isAdmin ? (() => onAttachmentDelete(key)) : null}
                    />
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button type="button" onClick={onClose} className="flex-1 h-12 rounded-xl font-bold text-slate-400 dark:text-slate-500 border-2 border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 dark:bg-transparent transition-colors">Discard</button>
            {isAdmin && (
              <button type="submit" className="flex-1 h-12 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all active:scale-95">
                {editingProject ? 'Update Project' : 'Launch Project'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
