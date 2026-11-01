import React, { useState } from 'react';
import { Trash2Icon, Loader2Icon, CheckCircle2Icon, UploadIcon } from './Icons';

const FileDropZone = ({ label, fileUrl, onUpload, onDelete }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) await processUpload(file);
    };

    const handleFileSelect = async (e) => {
        if (e.target.files?.[0]) {
            await processUpload(e.target.files[0]);
        }
    };

    const processUpload = async (file) => {
        setIsUploading(true);
        await onUpload(file);
        setIsUploading(false);
    };

    const filled = !!fileUrl;

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative flex flex-col items-center gap-2 text-center p-4 rounded-2xl border-[1.5px] transition-all group ${isDragging
                ? 'border-wine-2 bg-[var(--wine-soft)] -translate-y-0.5'
                : filled
                    ? 'border-solid border-[var(--green)] bg-[var(--green-soft)]'
                    : 'border-dashed border-[var(--line-2)] bg-[var(--surface-2)] hover:border-wine-2 hover:bg-[var(--wine-soft)]'
                }`}
        >
            <div className="flex w-full justify-between items-start">
                <span className="text-[.7rem] font-extrabold uppercase tracking-[.06em] text-wine">{label}</span>
                {fileUrl && onDelete && (
                    <button type="button" onClick={onDelete} className="text-red-400 hover:text-red-600 p-1 rounded-md transition-colors" aria-label={`Remove ${label}`}>
                        <Trash2Icon className="h-3 w-3" />
                    </button>
                )}
            </div>

            {isUploading ? (
                <span className="flex items-center gap-2 text-wine text-[.72rem] font-bold py-2">
                    <Loader2Icon className="h-4 w-4 animate-spin" />
                    Uploading…
                </span>
            ) : filled ? (
                <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[.72rem] font-bold text-[var(--green)] hover:opacity-80 transition-opacity py-2">
                    <CheckCircle2Icon className="h-4 w-4" />
                    View File
                </a>
            ) : onUpload ? (
                <label className="cursor-pointer flex items-center gap-2 text-[.72rem] font-bold text-muted hover:text-wine transition-colors py-2">
                    <UploadIcon className="h-4 w-4" />
                    Choose or drop file
                    <input type="file" className="hidden" onChange={handleFileSelect} />
                </label>
            ) : (
                <span className="text-[.72rem] font-bold text-muted2 italic py-2">No attachment</span>
            )}
        </div>
    );
};

export default React.memo(FileDropZone);
