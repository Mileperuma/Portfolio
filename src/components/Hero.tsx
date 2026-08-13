import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Terminal, Code2, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FloatingObjects } from './FloatingObjects';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenVinylVibe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenVinylVibe }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Floating Animated Vectors */}
      <FloatingObjects
        onOpenTerminal={onOpenTerminal}
        onOpenVinylVibe={onOpenVinylVibe}
      />

      {/* Center Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212]/90 border border-[#262626] backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase">
            AI Developer &nbsp;&middot;&nbsp; Melbourne
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-[11px] font-mono text-[#c9a84c] tracking-wider">
            Open to 2025 Roles
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.88] text-white"
        >
          MATHEESHA<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
            ILEPERUMA
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display italic text-lg sm:text-2xl md:text-3xl text-zinc-400 mt-6 max-w-2xl"
        >
          &ldquo;{PERSONAL_INFO.tagline}&rdquo;
        </motion.p>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs sm:text-sm font-mono text-zinc-500 mt-3 max-w-lg tracking-wide"
        >
          B.Comp.Sc. (AI) @ Swinburne University &middot; LLM Systems, RAG Pipelines & Recommendation Engines
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-none bg-transparent hover:bg-[#c9a84c]/10 text-zinc-200 hover:text-[#c9a84c] border border-zinc-700 hover:border-[#c9a84c] text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-2 group"
          >
            <span>See my work</span>
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenTerminal}
            className="px-6 py-3 rounded-none bg-[#121212] hover:bg-[#1a1a1a] text-zinc-400 hover:text-zinc-200 border border-[#262626] text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-2"
          >
            <Terminal size={14} className="text-[#c9a84c]" />
            <span>Launch CLI</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-zinc-500/50 to-transparent animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};
