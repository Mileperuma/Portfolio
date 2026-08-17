import React from 'react';

/**
 * A fixed, near-static pair of soft gradient fields. Replaces the old
 * particle canvas — no per-frame JS, just two blurred shapes drifting
 * slowly via CSS so the page never feels heavier than it needs to.
 */
export const AmbientField: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="animate-drift absolute -top-1/4 left-[8%] w-[42rem] h-[42rem] rounded-full blur-[140px] opacity-[0.16]"
        style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
      />
      <div
        className="animate-drift absolute top-1/2 right-[4%] w-[36rem] h-[36rem] rounded-full blur-[140px] opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #b08a5e 0%, transparent 70%)', animationDelay: '-11s' }}
      />
    </div>
  );
};
