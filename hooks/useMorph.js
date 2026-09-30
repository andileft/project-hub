import { useEffect, useState } from 'react';

/**
 * Drives a 0fr <-> 1fr expand/collapse transition.
 *
 * Keeps the content mounted after it has been opened once, so the CSS height
 * transition can run in both directions. On the first open the content is
 * mounted first, then animated on the next frame.
 *
 * @param {boolean} open - Whether the content should be expanded
 * @returns {{ mounted: boolean, shown: boolean }} `mounted` = render children,
 *   `shown` = target state for the transition
 */
export function useMorph(open) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(open);

  useEffect(() => {
    if (open) {
      if (!mounted) {
        setMounted(true);
        return;
      }
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
    setShown(false);
  }, [open, mounted]);

  return { mounted, shown };
}

export default useMorph;
