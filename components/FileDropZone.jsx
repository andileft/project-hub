import React, { useState } from 'react';
import { Trash2Icon, Loader2Icon, CheckCircle2Icon } from './Icons';

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

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative rounded-xl border-2 border-dashed transition-all p-3 flex flex-col justify-between h-24 group ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:border-indigo-300'
                }`}
        >
            <div className="flex justify-between items-start">
                <p className="text-[10px] font-black text-slate-400 uppercase">{label}</p>
                {fileUrl && onDelete && (
                    <button type="button" onClick={onDelete} className="text-red-400 hover:text-red-600 p-1 bg-white dark:bg-slate-800 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2Icon className="h-2.5 w-2.5" />
                    </button>
                )}
            </div>

            {isUploading ? (
                <div className="flex items-center gap-2 text-indigo-600 text-[10px] font-bold">
                    <Loader2Icon className="h-3 w-3 animate-spin" />
                    Uploading...
                </div>
            ) : fileUrl ? (
                <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-800 text-[10px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors truncate">
                    <CheckCircle2Icon className="h-3 w-3 text-emerald-500" />
                    <span className="truncate">View File</span>
                </a>
            ) : onUpload ? (
                <label className="cursor-pointer flex items-center gap-2 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-[10px] font-bold hover:bg-indigo-200 transition-colors self-start">
                    <span>Choose File</span>
                    <input type="file" className="hidden" onChange={handleFileSelect} />
                </label>
            ) : (
                <div className="text-[10px] font-bold text-slate-300 italic self-start py-1.5 px-3">
                    No Attachment
                </div>
            )}

            {!fileUrl && !isUploading && (
                <div className="absolute inset-0 flex items-center justify-end pointer-events-none pr-3 opacity-30 text-[9px] font-bold text-slate-400">
                    {isDragging ? 'Drop it!' : 'Drop File'}
                </div>
            )}
        </div>
    );
};

export default React.memo(FileDropZone);
