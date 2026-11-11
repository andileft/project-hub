import React from 'react';

// Wide brand wordmark (icon + "Project Hub" text baked into the asset),
// aspect ratio ~6.43:1. Height is fixed via className (e.g. "h-8"); width
// follows.
export const Wordmark = ({ className = 'h-8', alt = 'Project Hub', ...props }) => (
  <img
    src="project-hub-wordmark.svg"
    alt={alt}
    className={`${className} w-auto object-contain`}
    {...props}
  />
);

// Square brand icon (512x512). Use where a square mark or a mark that reads on
// a dark/brand-colored surface is needed (favicon, login hero).
export const LogoIcon = ({ className = 'h-10 w-10', alt = 'Project Hub', ...props }) => (
  <img
    src="project-hub-icon.svg"
    alt={alt}
    className={`${className} object-contain`}
    {...props}
  />
);

export default Wordmark;
