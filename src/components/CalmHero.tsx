import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CalmZenWave } from './CalmZenWave';
import {
  ArrowDown,
  Sparkles,
  Terminal,
  Disc3,
  Compass,
  Layers,
  Cpu,
  Brain,
  Code2,
  MapPin,
  Coffee,
  Volume2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CalmHeroProps {
  onOpenTerminal: () => void;
  onOpenVinylVibe: () => void;
}

export const CalmHero: React.FC<CalmHeroProps> = ({ onOpenTerminal, onOpenVinylVibe }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const x = (e.clientX / clientWidth - 0.5) * 2;
    const y = (e.clientY / clientHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-16 px-4 sm:px-8 md:px-16 overflow-hidden bg-[#090a0d] selection:bg-[#84a98c]/30 selection:text-[#d8e2dc]"
    >
      {/* Meditative Generative Wave Simulation */}
      <CalmZenWave mousePos={mousePos} />

      {/* Gentle Ambient Vignette & Soothing Radial Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#84a98c]/10 via-[#c8bca8]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#090a0d_95%)]" />
      </div>

      {/* Top Subtle Status Line */}
      <div className="relative z-20 max-w-6xl mx-auto w-full flex items-center justify-between pt-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#13151c]/70 border border-[#232733]/80 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#84a98c] animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-[#a1a8b8] uppercase">
            Melbourne, AU &middot; Swinburne CS (AI)
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden md:flex items-center gap-3 text-xs font-mono text-zinc-500"
        >
          <span>Focus: Generative Systems &amp; Neural RAG</span>
        </motion.div>
      </div>

      {/* Center Calming Editorial Typography & Identity */}
      <div className="relative z-20 max-w-5xl mx-auto w-full my-auto text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="space-y-4"
        >
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.35em] text-[#84a98c] font-medium block">
            AI Developer &amp; Machine Learning Engineer
          </span>

          <h1 className="font-cormorant font-normal text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#e6ded2] leading-[0.95]">
            Matheesha <span className="italic font-light text-[#a8b5a0]">Ileperuma</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-cormorant italic text-lg sm:text-2xl md:text-3xl text-[#b8b3a7] max-w-2xl mx-auto mt-6 leading-relaxed font-light"
        >
          &ldquo;Cultivating quiet mathematical rigor into resilient, human-centered AI systems.&rdquo;
        </motion.p>

        {/* Peaceful Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-10"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-[#181c26]/90 hover:bg-[#202534] text-[#e6ded2] border border-[#2b3244] hover:border-[#84a98c]/70 text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 shadow-sm"
          >
            <span>Explore Works</span>
            <ArrowDown size={13} className="text-[#84a98c]" />
          </a>

          <button
            onClick={onOpenTerminal}
            className="px-5 py-3 rounded-full bg-[#13151c]/80 hover:bg-[#1c202b] text-[#9ca3af] hover:text-[#e6ded2] border border-[#232733] text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2"
          >
            <Terminal size={13} className="text-[#84a98c]" />
            <span>Interactive CLI</span>
          </button>

          <button
            onClick={onOpenVinylVibe}
            className="px-5 py-3 rounded-full bg-[#13151c]/80 hover:bg-[#1c202b] text-[#9ca3af] hover:text-[#e6ded2] border border-[#232733] text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2"
          >
            <Disc3 size={13} className="text-[#c8bca8] animate-spin" />
            <span>Ambient Audio Lounge</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Zen Architecture Pillars (Calm Bento Preview) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="relative z-20 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-[#1a1d26]/80"
      >
        <div className="p-4 rounded-xl bg-[#11131a]/60 border border-[#1e222e]/60 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-[#84a98c]">
            <Cpu size={14} />
            <span className="uppercase tracking-widest">Generative AI &amp; RAG</span>
          </div>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-light">
            Quantized SLMs, multi-index vector retrieval, and zero-hallucination structured agent pipelines.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#11131a]/60 border border-[#1e222e]/60 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c8bca8]">
            <Brain size={14} />
            <span className="uppercase tracking-widest">Deep Signal Research</span>
          </div>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-light">
            Biomedical respiration estimation with Bi-GRU neural networks (0.965 R²) and PE malware CNN graphs.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#11131a]/60 border border-[#1e222e]/60 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-[#94a3b8]">
            <Layers size={14} />
            <span className="uppercase tracking-widest">Resilient Engineering</span>
          </div>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-light">
            FastAPI, Dockerized orchestration, MLflow tracking, and deterministic end-to-end pipelines.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
