import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(680px circle at ${x}% ${y}%, rgba(79,111,86,0.07), transparent 60%)`;
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[94vh] w-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div ref={glowRef} className="absolute inset-0 pointer-events-none transition-[background] duration-300" />

      <div className="relative max-w-4xl mx-auto w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs tracking-[0.3em] uppercase text-[var(--ink-soft)] mb-8"
        >
          {PERSONAL_INFO.location} &middot; {PERSONAL_INFO.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif font-normal text-6xl sm:text-8xl lg:text-[8.5rem] leading-[0.95] tracking-tight text-[var(--ink)]"
        >
          Matheesha
          <br />
          <span className="italic font-light text-[var(--accent)]">Ileperuma</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif italic text-xl sm:text-2xl text-[var(--ink-soft)] max-w-xl mx-auto mt-10 leading-relaxed"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-8 mt-14"
        >
          <a
            href="#projects"
            className="group text-sm tracking-wide text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 transition-colors hover:text-[var(--accent)] hover:border-[var(--accent)]"
          >
            View the work
          </a>
          <a
            href="#contact"
            className="text-sm tracking-wide text-[var(--ink-soft)] border-b border-transparent pb-0.5 transition-colors hover:text-[var(--ink)] hover:border-[var(--ink-soft)]"
          >
            Say hello
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="w-px h-10 bg-[var(--line)]" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--ink-faint)]">Scroll</span>
      </motion.div>
    </section>
  );
};
