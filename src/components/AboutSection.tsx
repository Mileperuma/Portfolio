import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

const FACTS = [
  { label: 'Location', value: PERSONAL_INFO.location },
  { label: 'Education', value: `${PERSONAL_INFO.degree}, ${PERSONAL_INFO.institution}` },
  { label: 'Graduating', value: PERSONAL_INFO.graduatingYear },
  { label: 'Status', value: PERSONAL_INFO.status }
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 }
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp} className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
          01 — About
        </motion.p>

        <motion.h2
          {...fadeUp}
          className="font-serif font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--ink)] leading-[1.08] max-w-2xl"
        >
          Quiet rigor, built into <span className="italic text-[var(--accent)]">systems that hold.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-14 mt-16">
          <motion.div {...fadeUp} className="lg:col-span-7 space-y-5 text-[17px] sm:text-lg leading-relaxed text-[var(--ink-soft)]">
            <p>{PERSONAL_INFO.bio1}</p>
            <p>{PERSONAL_INFO.bio2}</p>
            <p>{PERSONAL_INFO.bio3}</p>
          </motion.div>

          <motion.dl {...fadeUp} className="lg:col-span-5 divide-y divide-[var(--line)] border-t border-[var(--line)]">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4">
                <dt className="text-xs tracking-[0.15em] uppercase text-[var(--ink-faint)] sm:w-32 shrink-0">
                  {fact.label}
                </dt>
                <dd className="text-[15px] text-[var(--ink)]">{fact.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 mt-20 pt-12 border-t border-[var(--line)]"
        >
          {PERSONAL_INFO.stats.map((stat) => (
            <div key={stat.label} className="sm:border-l sm:border-[var(--line)] sm:pl-5 first:sm:border-l-0 first:sm:pl-0">
              <div className="font-serif text-3xl sm:text-4xl text-[var(--ink)]">{stat.value}</div>
              <div className="text-[11px] tracking-wide text-[var(--ink-faint)] mt-1.5 leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.p {...fadeUp} className="mt-14 text-[13px] text-[var(--ink-faint)] leading-relaxed">
          {PERSONAL_INFO.interests.join('  ·  ')}
        </motion.p>
      </div>
    </section>
  );
};
