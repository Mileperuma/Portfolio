import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Briefcase, Calendar, Sparkles, Terminal, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 border-t border-[#1a1d26] relative z-20 bg-[#090a0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono tracking-[0.25em] text-[#84a98c] uppercase mb-4">
          01 // About &middot; Philosophy
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Key Metrics */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#e6ded2] leading-[1.05]">
              Building with<br />
              tranquil rigor &amp;<br />
              <span className="italic text-[#84a98c]">precision.</span>
            </h2>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#11131a]/80 border border-[#1e222e] p-4 rounded-xl hover:border-[#84a98c]/40 transition-colors"
                >
                  <div className="font-mono text-2xl sm:text-3xl font-normal text-[#e6ded2]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Interests / Passions */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-3">
                Core Passions &amp; Engineering Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3.5 py-1.5 bg-[#13151c] text-[#c8bca8] border border-[#232733] rounded-full hover:border-[#84a98c]/50 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Academic Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-sans font-light">
              <p>
                I'm <strong className="text-[#e6ded2] font-medium">Matheesha Ileperuma</strong>, a final-year Computer Science (AI) student at{' '}
                <strong className="text-[#e6ded2] font-medium">Swinburne University of Technology, Melbourne</strong>. I focus on building calm, resilient AI systems that reliably perform in the real world — offline LLMs for disconnected environments, high-precision biomedical signal networks, and robust recommendation pipelines.
              </p>
              <p className="text-zinc-400">
                My work spans dense RAG pipelines, fine-tuned compact language models, graph-based classification, and deterministic vector search architectures. When away from the terminal, I appreciate analogue music on vinyl and vintage mechanical design.
              </p>
              <p className="text-zinc-400">
                Currently open to <strong className="text-[#e6ded2] font-medium">AI/ML Engineering roles and internships</strong> for 2025/2026 — Melbourne-based or remote.
              </p>
            </div>

            {/* Structured Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1a1d26]">
              <div className="bg-[#11131a] p-4 rounded-xl border border-[#1e222e] flex items-start gap-3.5">
                <GraduationCap size={20} className="text-[#84a98c] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Degree</span>
                  <span className="text-xs sm:text-sm font-medium text-[#e6ded2] block mt-0.5">
                    B.Comp.Sc. (Artificial Intelligence)
                  </span>
                  <span className="text-[11px] text-zinc-400">Swinburne University of Technology</span>
                </div>
              </div>

              <div className="bg-[#11131a] p-4 rounded-xl border border-[#1e222e] flex items-start gap-3.5">
                <Calendar size={20} className="text-[#c8bca8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Graduating</span>
                  <span className="text-xs sm:text-sm font-medium text-[#e6ded2] block mt-0.5">
                    Class of 2025
                  </span>
                  <span className="text-[11px] text-[#84a98c] font-mono">Available for Immediate Hire</span>
                </div>
              </div>

              <div className="bg-[#11131a] p-4 rounded-xl border border-[#1e222e] flex items-start gap-3.5">
                <MapPin size={20} className="text-[#84a98c] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-[#e6ded2] block mt-0.5">
                    Melbourne, Australia
                  </span>
                  <span className="text-[11px] text-zinc-400">Open to Relocation &amp; Remote</span>
                </div>
              </div>

              <div className="bg-[#11131a] p-4 rounded-xl border border-[#1e222e] flex items-start gap-3.5">
                <Briefcase size={20} className="text-[#c8bca8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Target Roles</span>
                  <span className="text-xs sm:text-sm font-medium text-[#e6ded2] block mt-0.5">
                    AI / ML Engineer &middot; Full Stack AI
                  </span>
                  <span className="text-[11px] text-zinc-400">Graduate Roles &middot; Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
