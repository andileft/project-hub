import React from 'react';

const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'stat':
        return (
          <div className="ph-stat">
            <div className="ph-stat__top">
              <span className="sk w-10 h-10 rounded-xl" />
            </div>
            <span className="sk h-3 w-24 mb-2 block" />
            <span className="sk h-6 w-32 block" />
          </div>
        );
      case 'chart':
        return <div className="sk h-48 w-full rounded-card" />;
      case 'card':
      default:
        return (
          <div className="ph-card">
            <span className="sk h-5 w-3/4 mb-3 block" />
            <span className="sk h-4 w-1/2 mb-4 block" />
            <div className="flex gap-3">
              <span className="sk h-8 w-16 rounded-lg" />
              <span className="sk h-8 w-16 rounded-lg" />
            </div>
          </div>
        );
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
