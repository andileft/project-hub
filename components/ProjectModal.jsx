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
    <div className="fixed inset-0 z-50 bg-[rgba(29,28,33,.48)] backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="ph-slide-up bg-[var(--surface)] border border-[var(--line)] p-6 sm:p-8 rounded-hero w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-panel relative">
        <div className="flex justify-between items-start gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <span className="ph-kicker">{editingProject ? 'Update' : 'Create project'}</span>
            <h2 className="font-display text-xl font-extrabold text-ink dark:text-[var(--ink)] tracking-tight">{editingProject ? 'Edit Project' : 'New Project'}</h2>
          </div>
          <button type="button" onClick={onClose} className="ph-icon-btn" aria-label="Close">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        {formError && (
          <div className="mb-6 p-4 rounded-2xl bg-[var(--red-soft)] border border-transparent text-[var(--red)] text-[.84rem] font-bold flex items-start gap-3" role="alert">
            <CheckCircle2Icon className="shrink-0 h-4 w-4 mt-0.5" aria-hidden="true" />
            <span>{formError}</span>
          </div>
        )}
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  className="ph-chip ph-chip--wine text-[.62rem] uppercase tracking-wider mb-1"
                >
                  <SparklesIcon className="w-3 h-3" />
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
            <div className="md:col-span-2 ph-field">
              <label className="ph-field__label">Project Notes &amp; Remarks</label>
              <textarea
                disabled={!isAdmin}
                className="ph-textarea disabled:opacity-60"
                value={formData.note}
                onChange={e => onFormDataChange({ ...formData, note: e.target.value })}
                placeholder="Document current progress, critical blockers, or important updates here..."
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-4 border-t border-[var(--line)]">
              <label className="block text-[.68rem] font-extrabold uppercase tracking-[.12em] text-muted2 mb-3">Project Attachments</label>
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

          <div className="flex gap-4 pt-6 border-t border-[var(--line)]">
            <button type="button" onClick={onClose} className="ph-btn ph-btn--outline flex-1">Discard</button>
            {isAdmin && (
              <button type="submit" className="ph-btn ph-btn--primary flex-1">
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
