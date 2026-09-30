import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from './Icons';

const SHOW_AFTER_PX = 400;

/**
 * Floating "back to top" button, shown once the page is scrolled down.
 */
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 shadow-lg hover:text-indigo-600 hover:border-indigo-300 dark:hover:border-indigo-700 dark:hover:text-indigo-400 transition-all flex items-center justify-center"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
};

export default React.memo(BackToTopButton);
