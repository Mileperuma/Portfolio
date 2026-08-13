import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, Cpu, Filter } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'featured' | 'ai-llm' | 'ml-dl' | 'cyber-nlp'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Systems' },
    { id: 'featured', label: 'Featured' },
    { id: 'ai-llm', label: 'AI & LLM / RAG' },
    { id: 'ml-dl', label: 'Deep Learning' },
    { id: 'cyber-nlp', label: 'Cybersecurity' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter || (selectedFilter === 'featured' && p.featured));

  return (
    <section id="projects" className="py-28 border-t border-[#1a1d26] bg-[#090a0d] relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-mono tracking-[0.25em] text-[#84a98c] uppercase mb-2">
              02 // Selected Works
            </p>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#e6ded2]">
              Systems &amp; <span className="italic text-[#84a98c]">Architectures.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap bg-[#11131a] p-1.5 rounded-full border border-[#1e222e]">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-full transition-all duration-200 ${
                  selectedFilter === tab.id
                    ? 'bg-[#84a98c] text-[#090a0d] font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-[#e6ded2] hover:bg-[#181c26]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className={`group relative bg-[#11131a]/80 border border-[#1e222e] hover:border-[#84a98c]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_4px_30px_rgba(132,169,140,0.06)] ${
                  project.featured && selectedFilter === 'all' ? 'md:col-span-2 bg-[#121520]/90' : ''
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                      {project.number}
                    </span>
                    {project.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 border border-[#84a98c]/30 text-[#84a98c] rounded-full bg-[#84a98c]/10">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`font-cormorant font-normal text-[#e6ded2] group-hover:text-[#84a98c] transition-colors leading-tight mb-2 ${
                    project.featured && selectedFilter === 'all' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#c8bca8] mb-3 tracking-wide">
                    {project.subtitle}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                    {project.shortDesc}
                  </p>

                  {/* Architecture Callout on Featured */}
                  {project.featured && selectedFilter === 'all' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 pt-4 border-t border-[#1a1d26]">
                      <div className="bg-[#151824] p-4 rounded-xl border border-[#232738]">
                        <span className="text-[10px] font-mono text-[#84a98c] uppercase tracking-wider block mb-1">
                          Vector Architecture
                        </span>
                        <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                          FastAPI + PostgreSQL 16 pgvector semantic search (1536-dim) ➔ Claude 3.5 Sonnet taste synthesis.
                        </p>
                      </div>
                      <div className="bg-[#151824] p-4 rounded-xl border border-[#232738]">
                        <span className="text-[10px] font-mono text-[#c8bca8] uppercase tracking-wider block mb-1">
                          Delivery Milestones
                        </span>
                        <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                          5 completed sprints with full CI/CD test gates on GitHub Actions deployed to Render &amp; Vercel.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, project.featured ? 10 : 6).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 bg-[#141722] text-zinc-400 border border-[#202534] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > (project.featured ? 10 : 6) && (
                      <span className="text-[11px] font-mono px-2 py-0.5 text-zinc-500">
                        +{project.tags.length - (project.featured ? 10 : 6)} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[#1a1d26] mt-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-mono uppercase tracking-wider text-[#84a98c] hover:text-[#e6ded2] flex items-center gap-1.5 group/btn transition-colors"
                  >
                    <span>Inspect System &amp; Demo</span>
                    <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-[#84a98c] transition-colors p-1"
                        title="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
