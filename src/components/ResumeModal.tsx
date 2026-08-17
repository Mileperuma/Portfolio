import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-6 bg-[#211f1a]/50 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-2xl min-h-screen sm:min-h-0 sm:my-auto bg-[var(--paper)] sm:rounded-2xl sm:shadow-2xl sm:max-h-[86vh] flex flex-col"
          >
            <div className="flex items-center justify-between px-7 sm:px-10 pt-8 pb-4">
              <span className="text-xs tracking-[0.2em] uppercase text-[var(--ink-faint)]">Résumé</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
                >
                  <Printer size={14} />
                  <span>Print</span>
                </button>
                <button onClick={onClose} className="text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors p-1 -m-1" aria-label="Close">
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="px-7 sm:px-10 pb-10 overflow-y-auto flex-1">
              <h1 className="font-serif text-3xl text-[var(--ink)]">{PERSONAL_INFO.name}</h1>
              <p className="text-sm text-[var(--accent)] mt-1">{PERSONAL_INFO.role}</p>
              <p className="text-sm text-[var(--ink-faint)] mt-2">
                {PERSONAL_INFO.location} &middot; {PERSONAL_INFO.email} &middot; github.com/{PERSONAL_INFO.githubHandle}
              </p>

              <div className="mt-8 pt-8 border-t border-[var(--line)]">
                <h2 className="text-xs tracking-[0.2em] uppercase text-[var(--ink-faint)] mb-3">Education</h2>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="text-[15px] text-[var(--ink)]">{PERSONAL_INFO.degree}</span>
                  <span className="text-sm text-[var(--ink-faint)]">{PERSONAL_INFO.graduatingYear}</span>
                </div>
                <p className="text-sm text-[var(--ink-soft)] mt-1">{PERSONAL_INFO.institution}</p>
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--line)]">
                <h2 className="text-xs tracking-[0.2em] uppercase text-[var(--ink-faint)] mb-4">Selected Projects</h2>
                <div className="space-y-6">
                  {PROJECTS.slice(0, 3).map((p) => (
                    <div key={p.id}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <span className="text-[15px] text-[var(--ink)]">{p.title}</span>
                        <span className="text-xs text-[var(--ink-faint)]">{p.badge}</span>
                      </div>
                      <p className="text-sm text-[var(--ink-soft)] mt-1 leading-relaxed">{p.shortDesc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--line)]">
                <h2 className="text-xs tracking-[0.2em] uppercase text-[var(--ink-faint)] mb-4">Technical Competencies</h2>
                <div className="space-y-3">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.name} className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
                      <span className="sm:col-span-3 text-xs text-[var(--ink-faint)] uppercase tracking-wide">{cat.name}</span>
                      <span className="sm:col-span-9 text-sm text-[var(--ink-soft)]">
                        {cat.skills.map((s) => s.name).join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
