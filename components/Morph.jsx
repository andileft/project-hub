import React from 'react';
import { useMorph } from '../hooks/useMorph';

const GRID_STYLE = (rows) => ({
  display: 'grid',
  gridTemplateRows: rows,
  transition: 'grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1)'
});

/**
 * Animated expand/collapse wrapper (grid-template-rows 0fr <-> 1fr).
 * Content is lazily mounted on first open and stays mounted afterwards.
 */
const Morph = ({ open, children }) => {
  const { mounted, shown } = useMorph(open);

  return (
    <div style={GRID_STYLE(shown ? '1fr' : '0fr')}>
      <div
        className={`min-h-0 overflow-hidden transition-opacity duration-300 ${shown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      >
        {mounted ? children : null}
      </div>
    </div>
  );
};

export default React.memo(Morph);
