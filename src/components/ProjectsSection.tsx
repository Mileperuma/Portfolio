import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-32 px-6 sm:px-10 lg:px-16 border-t border-[var(--line)]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">02 — Selected Work</p>
        <h2 className="font-serif font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--ink)] leading-[1.08] max-w-2xl mb-16">
          Systems &amp; <span className="italic text-[var(--accent)]">architectures.</span>
        </h2>

        <div className="border-t border-[var(--line)]">
          {PROJECTS.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => onSelectProject(project)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
              className="group w-full text-left border-b border-[var(--line)] py-7 sm:py-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 transition-colors duration-300 hover:bg-[var(--paper-soft)] px-3 -mx-3 sm:px-4 sm:-mx-4 rounded-md"
            >
              <span className="text-xs text-[var(--ink-faint)] tabular-nums sm:w-12 shrink-0">
                {project.number.split(' / ')[0]}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--accent)]">Featured</span>
                  )}
                </div>
                <p className="text-sm text-[var(--ink-soft)] mt-1.5 max-w-2xl leading-relaxed">
                  {project.subtitle}
                </p>
                <p className="text-xs text-[var(--ink-faint)] mt-2.5">
                  {project.tags.slice(0, 4).join('  ·  ')}
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="text-[var(--ink-faint)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 hidden sm:block"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
