import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 sm:px-10 lg:px-16 border-t border-[var(--line)]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">04 — Contact</p>

        <h2 className="font-serif font-normal text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[var(--ink)] leading-[1.05] mb-8">
          Let&rsquo;s create something
          <br />
          <span className="italic text-[var(--accent)]">truly thoughtful.</span>
        </h2>

        <p className="text-[var(--ink-soft)] text-base max-w-md mx-auto mb-14 leading-relaxed">
          Open to graduate roles and AI/ML engineering internships &mdash; Melbourne or remote.
        </p>

        <button
          onClick={handleCopyEmail}
          className="group inline-flex items-center gap-3 font-serif text-2xl sm:text-3xl text-[var(--ink)] border-b border-[var(--ink)]/30 pb-2 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          <span>{PERSONAL_INFO.email}</span>
          {copied ? <Check size={18} className="text-[var(--accent)]" /> : <Copy size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />}
        </button>

        <div className="flex items-center justify-center gap-8 mt-12">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
          >
            GitHub <ArrowUpRight size={13} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
          >
            LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="pt-20 mt-20 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--ink-faint)] gap-4">
          <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
          <a href="#hero" className="hover:text-[var(--ink)] transition-colors">Back to top ↑</a>
        </div>
      </div>
    </section>
  );
};
