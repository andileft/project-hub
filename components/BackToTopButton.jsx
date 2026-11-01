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
      className="fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full grid place-items-center text-white shadow-btn transition-all hover:-translate-y-0.5"
      style={{ background: 'linear-gradient(135deg, var(--wine-solid), var(--wine-solid-2))' }}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
};

export default React.memo(BackToTopButton);
