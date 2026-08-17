import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
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
            <div className="flex items-center justify-between px-7 sm:px-10 pt-8">
              <span className="text-xs tracking-[0.2em] uppercase text-[var(--ink-faint)]">{project.number}</span>
              <button
                onClick={onClose}
                className="text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors p-1 -m-1"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-7 sm:px-10 pt-4 pb-10 overflow-y-auto flex-1">
              <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)]">{project.title}</h2>
              <p className="text-sm text-[var(--accent)] mt-2">{project.subtitle}</p>

              <p className="text-[15px] text-[var(--ink-soft)] leading-relaxed mt-6">{project.fullDesc}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-8 border-t border-[var(--line)]">
                {project.keyMetrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="font-serif text-xl text-[var(--ink)]">{metric.value}</div>
                    <div className="text-[11px] text-[var(--ink-faint)] mt-1 leading-snug">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--line)]">
                <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--ink-faint)] mb-3">Architecture</h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{project.architecture}</p>
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--line)]">
                <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--ink-faint)] mb-3">Highlights</h3>
                <ul className="space-y-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-[var(--ink-soft)] leading-relaxed pl-4 relative">
                      <span className="absolute left-0 text-[var(--accent)]">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--line)]">
                <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--ink-faint)] mb-3">Stack</h3>
                <p className="text-[13px] text-[var(--ink-soft)] leading-relaxed">{project.tags.join('  ·  ')}</p>
              </div>
            </div>

            <div className="px-7 sm:px-10 py-5 border-t border-[var(--line)] flex items-center justify-between">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
                >
                  <Github size={15} />
                  <span>Repository</span>
                  <ArrowUpRight size={13} />
                </a>
              ) : <span />}

              <button
                onClick={onClose}
                className="text-sm text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
