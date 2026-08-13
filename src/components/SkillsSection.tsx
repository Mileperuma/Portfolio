import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Brain, Server, Layout, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={18} className="text-[#84a98c]" />;
      case 'Brain': return <Brain size={18} className="text-[#84a98c]" />;
      case 'Server': return <Server size={18} className="text-[#c8bca8]" />;
      case 'Layout': return <Layout size={18} className="text-[#84a98c]" />;
      default: return <Terminal size={18} className="text-[#84a98c]" />;
    }
  };

  return (
    <section id="skills" className="py-28 border-t border-[#1a1d26] bg-[#090a0d] relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono tracking-[0.25em] text-[#84a98c] uppercase mb-2">
          03 // Competencies
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#e6ded2]">
            Engineering <span className="italic text-[#84a98c]">Capabilities.</span>
          </h2>
          <p className="text-xs font-mono text-zinc-400 max-w-md">
            Production-validated across offline edge hardware, cloud vector indices, and full CI/CD deployment pipelines.
          </p>
        </div>

        {/* 5-Column Bento Grid matching calm aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onMouseEnter={() => setActiveCategory(i)}
              onMouseLeave={() => setActiveCategory(null)}
              className="bg-[#11131a]/80 border border-[#1e222e] hover:border-[#84a98c]/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1a1d26]">
                  {getIcon(cat.iconName)}
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#84a98c] font-medium">
                    {cat.name}
                  </h3>
                </div>

                {/* Skill Items list */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/item py-1.5 border-b border-[#161922] last:border-none"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-300 group-hover/item:text-[#e6ded2] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      {skill.note && (
                        <span className="text-[10px] text-zinc-500 block mt-0.5 font-mono">
                          {skill.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#1a1d26] flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase">
                <span>Validation</span>
                <span className="text-[#84a98c]">Production</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
