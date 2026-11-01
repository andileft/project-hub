import React from 'react';

// Stable formatter identity: defining it inline as a default parameter would
// create a new function on every render, retriggering the effect forever.
const defaultFormatter = (n) => Math.round(n).toLocaleString('en-US');

const CountUp = ({ value, duration = 700, formatter }) => {
  const fmtRef = React.useRef(formatter || defaultFormatter);
  fmtRef.current = formatter || defaultFormatter;

  const [display, setDisplay] = React.useState(() => fmtRef.current(value));

  React.useEffect(() => {
    const fmt = fmtRef.current;
    // Non-numeric or reduced-motion: show the final value directly.
    if (typeof value !== 'number' || !isFinite(value)) { setDisplay(fmt(value)); return; }
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setDisplay(fmt(value)); return; }

    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(fmt(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(fmt(value));
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return <>{display}</>;
};

const StatCard = ({ title, value, icon, subtitle, delta, deltaTone = 'flat', foot, countup }) => {
  const toneClass = deltaTone === 'up' ? 'ph-delta--up' : deltaTone === 'down' ? 'ph-delta--down' : 'ph-delta--flat';
  return (
    <div className="ph-stat reveal">
      <div className="ph-stat__top">
        <span className="ph-stat__icon">{icon}</span>
        {delta && <span className={`ph-delta ${toneClass}`}>{delta}</span>}
        {!delta && subtitle && <span className="text-[.68rem] text-muted2">{subtitle}</span>}
      </div>
      <div className="ph-stat__label">{title}</div>
      <div className="ph-stat__value">
        {countup && typeof value === 'number' ? <CountUp value={value} /> : value}
      </div>
      {foot && <div className="ph-stat__foot">{foot}</div>}
    </div>
  );
};

export default React.memo(StatCard);
