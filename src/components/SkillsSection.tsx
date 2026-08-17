import React from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 sm:px-10 lg:px-16 border-t border-[var(--line)]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">03 — Capabilities</p>
        <h2 className="font-serif font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--ink)] leading-[1.08] max-w-2xl mb-16">
          Tools, held <span className="italic text-[var(--accent)]">lightly.</span>
        </h2>

        <div className="border-t border-[var(--line)]">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.24) }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-2 py-8 border-b border-[var(--line)]"
            >
              <h3 className="sm:col-span-3 text-xs tracking-[0.15em] uppercase text-[var(--ink)]">
                {cat.name}
              </h3>
              <p className="sm:col-span-9 text-[15px] text-[var(--ink-soft)] leading-relaxed">
                {cat.skills.map((s) => s.name).join('  ·  ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
