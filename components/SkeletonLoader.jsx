import React from 'react';

const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const getSkeletonStyle = () => {
    switch (type) {
      case 'stat':
        return 'h-8 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse';
      case 'chart':
        return 'h-48 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse';
      case 'card':
      default:
        return 'space-y-3 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700';
    }
  };

  const renderCardSkeleton = () => (
    <div className={getSkeletonStyle()}>
      <div className="h-5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
      <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
      <div className="flex gap-4 pt-2">
        <div className="h-8 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
        <div className="h-8 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
      </div>
    </div>
  );

  const renderStatSkeleton = () => (
    <div className="flex items-center gap-3">
      <div className={getSkeletonStyle()}></div>
      <div className="space-y-2">
        <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
        <div className="h-4 w-12 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
      </div>
    </div>
  );

  const renderChartSkeleton = () => (
    <div className={getSkeletonStyle()}></div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case 'stat':
        return renderStatSkeleton();
      case 'chart':
        return renderChartSkeleton();
      case 'card':
      default:
        return renderCardSkeleton();
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>{renderSkeleton()}</div>
      ))}
    </>
  );
};

export default SkeletonLoader;
