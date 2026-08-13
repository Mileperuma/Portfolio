import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { CinematicCore3D, AIMode } from './CinematicCore3D';
import {
  Terminal,
  ArrowDown,
  Disc3,
  Sparkles,
  Cpu,
  Layers,
  Activity,
  Zap,
  Network,
  Binary,
  ShieldAlert,
  Sliders,
  Database,
  GitBranch
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CinematicHeroScrollProps {
  onOpenTerminal: () => void;
  onOpenVinylVibe: () => void;
}

export const CinematicHeroScroll: React.FC<CinematicHeroScrollProps> = ({
  onOpenTerminal,
  onOpenVinylVibe
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeStage, setActiveStage] = useState(0);
  const [aiMode, setAiMode] = useState<AIMode>('transformer');

  // Track scroll inside the multi-screen pinned container (320vh height)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollProgress(latest);
    if (latest < 0.33) setActiveStage(0);
    else if (latest < 0.68) setActiveStage(1);
    else setActiveStage(2);
  });

  // Track mouse coordinates for 3D parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const x = (e.clientX / clientWidth - 0.5) * 2;
    const y = (e.clientY / clientHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const scrollToStage = (stageIndex: number) => {
    if (!containerRef.current) return;
    const scrollContainerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerRef.current.offsetTop + (stageIndex / 2) * scrollContainerHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[320vh] bg-[#050507]"
    >
      {/* Sticky Fullscreen 3D Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center select-none">
        
        {/* Background Ambient Gradients & Cosmic Dynamic Neural Glow */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle AI Grid Matrix */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
          
          {/* Center Dynamic Neural Core Glow (reacts to AI Mode & Scroll) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 pointer-events-none filter blur-[100px]"
            style={{
              width: scrollProgress > 0.35 ? '800px' : '520px',
              height: scrollProgress > 0.35 ? '800px' : '520px',
              background:
                aiMode === 'transformer'
                  ? scrollProgress > 0.65
                    ? 'radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(236,72,153,0.28) 35%, rgba(201,168,76,0.18) 60%, transparent 80%)'
                    : 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(88,28,135,0.18) 50%, transparent 75%)'
                  : aiMode === 'biomedical'
                  ? 'radial-gradient(circle, rgba(16,185,129,0.38) 0%, rgba(6,182,212,0.25) 45%, transparent 75%)'
                  : 'radial-gradient(circle, rgba(244,63,94,0.35) 0%, rgba(245,158,11,0.22) 45%, transparent 75%)',
              transform: `translate(-50%, -50%) scale(${1 + scrollProgress * 0.8})`,
            }}
          />

          {/* Radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#050507_92%)]" />
        </div>

        {/* The 3D Three.js WebGL High-Tech TPU / Neural Core Canvas */}
        <CinematicCore3D scrollProgress={scrollProgress} mousePos={mousePos} aiMode={aiMode} />

        {/* Top HUD Telemetry Bar & AI Mode Switcher */}
        <div className="absolute top-20 left-0 w-full px-4 sm:px-10 flex flex-wrap items-center justify-between gap-3 z-30 pointer-events-auto">
          {/* Left: Core State */}
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-zinc-400 bg-[#0a0a10]/80 backdrop-blur-md px-3.5 py-1.5 border border-zinc-800/80 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-ping" />
            <span className="text-zinc-200">AI HARDWARE // QUANTUM TENSOR CORE</span>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:inline text-[#c9a84c]">SWINBURNE CS (AI)</span>
          </div>

          {/* Center/Right: Interactive AI Architecture Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-[#0a0a10]/90 backdrop-blur-md p-1 border border-zinc-800 rounded-sm">
            <span className="text-[9px] font-mono text-zinc-500 uppercase px-2 hidden sm:inline flex items-center gap-1">
              <Sliders size={10} /> Mode:
            </span>
            <button
              onClick={() => setAiMode('transformer')}
              className={`px-2.5 py-1 text-[10px] font-mono rounded transition-all duration-200 flex items-center gap-1.5 ${
                aiMode === 'transformer'
                  ? 'bg-purple-950/80 text-purple-200 border border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
            >
              <Cpu size={11} className={aiMode === 'transformer' ? 'text-purple-400' : 'text-zinc-500'} />
              <span>LLM & RAG</span>
            </button>

            <button
              onClick={() => setAiMode('biomedical')}
              className={`px-2.5 py-1 text-[10px] font-mono rounded transition-all duration-200 flex items-center gap-1.5 ${
                aiMode === 'biomedical'
                  ? 'bg-emerald-950/80 text-emerald-200 border border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
            >
              <Activity size={11} className={aiMode === 'biomedical' ? 'text-emerald-400' : 'text-zinc-500'} />
              <span>Bio-Deep Learning</span>
            </button>

            <button
              onClick={() => setAiMode('vision')}
              className={`px-2.5 py-1 text-[10px] font-mono rounded transition-all duration-200 flex items-center gap-1.5 ${
                aiMode === 'vision'
                  ? 'bg-rose-950/80 text-rose-200 border border-rose-500/50 shadow-[0_0_12px_rgba(244,63,94,0.4)]'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
            >
              <ShieldAlert size={11} className={aiMode === 'vision' ? 'text-rose-400' : 'text-zinc-500'} />
              <span>Edge & Malware</span>
            </button>
          </div>
        </div>

        {/* --- SCENARIO 1 (Scroll: 0% - 35%): AI ENGINEER HERO IDENTITY (Flanking Layout with Wide Gap) --- */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-12 z-20 pointer-events-none transition-all duration-700"
          style={{
            opacity: scrollProgress < 0.35 ? 1 - scrollProgress * 2.8 : 0,
            transform: `translateY(${-scrollProgress * 80}px) scale(${1 - scrollProgress * 0.15})`,
            visibility: scrollProgress < 0.4 ? 'visible' : 'hidden'
          }}
        >
          {/* Subtitle tag */}
          <div className="pt-24 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-[#0d0d14]/80 backdrop-blur-md text-[10px] font-mono tracking-[0.3em] text-[#c9a84c] uppercase">
              <Network size={12} className="text-[#c9a84c]" />
              AI Developer & Machine Learning Engineer
            </span>
          </div>

          {/* Wide Flanking Headline Framing the 3D Tech Core */}
          <div className="w-full max-w-[90rem] mx-auto flex items-center justify-between px-4 sm:px-12 md:px-16">
            {/* Left Headline */}
            <div className="text-left max-w-sm sm:max-w-md">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono text-zinc-400 tracking-[0.2em] uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                QUANTUM LATENT DIE
              </div>
              <h1 className="font-cinzel font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-none">
                MATHEESHA
              </h1>
              <p className="font-cormorant italic text-zinc-400 text-base sm:text-xl md:text-2xl mt-2 tracking-wide">
                Architecting Autonomous Intelligence
              </p>
            </div>

            {/* Right Headline */}
            <div className="text-right max-w-sm sm:max-w-md">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono text-[#c9a84c] tracking-[0.2em] uppercase mb-2">
                GYRO CO-PROCESSORS
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              </div>
              <h1 className="font-cinzel font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-600 leading-none">
                ILEPERUMA
              </h1>
              <p className="font-mono text-[11px] text-zinc-500 mt-2 tracking-widest uppercase">
                Melbourne, AU &middot; Swinburne
              </p>
            </div>
          </div>

          {/* Bottom tag & scroll prompt */}
          <div className="pb-8 text-center flex flex-col items-center gap-3">
            <p className="font-cormorant italic text-zinc-300 text-base sm:text-xl max-w-2xl bg-[#0a0a10]/80 backdrop-blur-sm px-5 py-2 border border-zinc-800/80 rounded">
              &ldquo;Transforming probabilistic tensors into deterministic, production-grade AI pipelines.&rdquo;
            </p>
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
              <span>Scroll down to inspect tensor acceleration</span>
              <ArrowDown size={12} className="animate-bounce text-[#c9a84c]" />
            </div>
          </div>
        </div>

        {/* --- SCENARIO 2 (Scroll: 35% - 70%): BORN OF SILICON // TRAINED ON LOSS --- */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-12 z-20 pointer-events-none transition-all duration-700"
          style={{
            opacity:
              scrollProgress >= 0.25 && scrollProgress <= 0.72
                ? Math.min((scrollProgress - 0.25) * 4, (0.72 - scrollProgress) * 4)
                : 0,
            transform: `scale(${0.9 + scrollProgress * 0.2})`,
            visibility: scrollProgress >= 0.25 && scrollProgress <= 0.75 ? 'visible' : 'hidden'
          }}
        >
          <div className="pt-24 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/40 bg-purple-950/30 backdrop-blur-md text-[10px] font-mono tracking-[0.3em] text-purple-300 uppercase">
              <Zap size={12} className="text-purple-400" />
              LAYER 02 // HARDWARE TENSOR ACCELERATION & LOSS REDUCTION
            </span>
          </div>

          {/* Split High-Fashion AI Editorial Typography */}
          <div className="w-full max-w-[90rem] mx-auto flex items-center justify-between px-4 sm:px-12 md:px-16">
            {/* Left Box */}
            <div className="text-left max-w-md bg-[#0a0a12]/85 backdrop-blur-md p-5 border border-zinc-800/80 rounded-sm">
              <span className="text-[10px] font-mono tracking-widest text-[#c9a84c] uppercase block mb-1 flex items-center gap-1.5">
                <Binary size={11} /> INPUT TENSORS
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.9]">
                BORN OF<br />
                <span className="font-cormorant italic font-normal text-purple-300">
                  Silicon
                </span>
              </h2>
              <div className="mt-4 pt-3 border-t border-zinc-800/80 space-y-1 text-xs font-mono text-zinc-400">
                <p className="text-zinc-300">&bull; RAG with Hybrid BM25 + Vector Search</p>
                <p>&bull; Phi-4, Llama 3.3, DeepSeek quantized inference</p>
                <p>&bull; pgvector & ChromaDB multi-index retrieval</p>
              </div>
            </div>

            {/* Right Box */}
            <div className="text-right max-w-md bg-[#0a0a12]/85 backdrop-blur-md p-5 border border-zinc-800/80 rounded-sm">
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase block mb-1 flex items-center justify-end gap-1.5">
                CONVERGENCE <Activity size={11} />
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.9]">
                TRAINED IN<br />
                <span className="font-cormorant italic font-normal text-[#c9a84c]">
                  Nature
                </span>
              </h2>
              <div className="mt-4 pt-3 border-t border-zinc-800/80 space-y-1 text-xs font-mono text-zinc-400">
                <p className="text-zinc-300">&bull; Biomedical Respiration & PPG Bi-GRU</p>
                <p>&bull; Static PE Malware Multi-Modal CNN Graph</p>
                <p>&bull; 0.965 R² Precision with 5-fold cross-validation</p>
              </div>
            </div>
          </div>

          {/* Bottom Live AI Engineering Telemetry HUD */}
          <div className="pb-8 w-full max-w-4xl mx-auto flex items-center justify-around text-center border-t border-zinc-800/80 pt-4 bg-[#08080e]/80 backdrop-blur-md px-6 rounded-sm">
            <div>
              <div className="text-[#c9a84c] font-cinzel text-xl sm:text-2xl font-bold">1536-D</div>
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Dense Latent Vectors</div>
            </div>
            <div className="w-[1px] h-8 bg-zinc-800" />
            <div>
              <div className="text-purple-400 font-cinzel text-xl sm:text-2xl font-bold">0.965 R²</div>
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Bio-Signal Precision</div>
            </div>
            <div className="w-[1px] h-8 bg-zinc-800" />
            <div>
              <div className="text-emerald-400 font-cinzel text-xl sm:text-2xl font-bold">&lt; 14ms</div>
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">P95 Inference Latency</div>
            </div>
            <div className="w-[1px] h-8 bg-zinc-800" />
            <div>
              <div className="text-pink-400 font-cinzel text-xl sm:text-2xl font-bold">4-bit GGUF</div>
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Edge Quantization</div>
            </div>
          </div>
        </div>

        {/* --- SCENARIO 3 (Scroll: 70% - 100%): ZERO-DRIFT PRODUCTION DEPLOYMENTS --- */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-12 z-20 transition-all duration-700"
          style={{
            opacity: scrollProgress >= 0.68 ? Math.min((scrollProgress - 0.68) * 3.5, 1) : 0,
            transform: `scale(${0.95 + (scrollProgress - 0.68) * 0.1})`,
            visibility: scrollProgress >= 0.65 ? 'visible' : 'hidden'
          }}
        >
          <div className="pt-24 text-center pointer-events-none">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 backdrop-blur-md text-[11px] font-mono tracking-[0.25em] text-[#c9a84c] uppercase">
              <Sparkles size={13} className="text-[#c9a84c]" />
              PRODUCTION-GRADE AI HARDWARE & AGENTS
            </span>
          </div>

          {/* Central AI Impact Banner */}
          <div className="w-full max-w-4xl mx-auto text-center pointer-events-none">
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight leading-tight">
              SCARS BORN OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-[#c9a84c]">NOISE</span>,<br />
              POWER BORN OF <span className="italic font-cormorant font-normal text-white">CONVERGENCE</span>.
            </h2>
            <p className="font-cormorant italic text-zinc-300 text-lg sm:text-2xl mt-4 max-w-2xl mx-auto">
              From mathematical loss formulation to Dockerized, zero-hallucination agentic systems.
            </p>

            {/* AI Architecture Stat Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mt-8">
              <div className="p-3 bg-[#0d0d14]/90 border border-purple-500/30 backdrop-blur-md rounded-sm text-left">
                <div className="font-cinzel font-bold text-2xl text-purple-300">14+</div>
                <div className="text-[9px] font-mono text-zinc-400 tracking-wider uppercase">AI Models Built</div>
                <div className="text-[8px] font-mono text-purple-400/80 mt-1">LLMs &middot; Vision &middot; RAG</div>
              </div>
              <div className="p-3 bg-[#0d0d14]/90 border border-[#c9a84c]/30 backdrop-blur-md rounded-sm text-left">
                <div className="font-cinzel font-bold text-2xl text-[#c9a84c]">96.5%</div>
                <div className="text-[9px] font-mono text-zinc-400 tracking-wider uppercase">Validation Accuracy</div>
                <div className="text-[8px] font-mono text-[#c9a84c]/80 mt-1">Biomedical Benchmark</div>
              </div>
              <div className="p-3 bg-[#0d0d14]/90 border border-emerald-500/30 backdrop-blur-md rounded-sm text-left">
                <div className="font-cinzel font-bold text-2xl text-emerald-400">100%</div>
                <div className="text-[9px] font-mono text-zinc-400 tracking-wider uppercase">Zero-Drift CI/CD</div>
                <div className="text-[8px] font-mono text-emerald-400/80 mt-1">MLflow &middot; Docker &middot; DVC</div>
              </div>
              <div className="p-3 bg-[#0d0d14]/90 border border-pink-500/30 backdrop-blur-md rounded-sm text-left">
                <div className="font-cinzel font-bold text-2xl text-pink-400">3.8 GPA</div>
                <div className="text-[9px] font-mono text-zinc-400 tracking-wider uppercase">Swinburne AI Major</div>
                <div className="text-[8px] font-mono text-pink-400/80 mt-1">Deep Learning & Systems</div>
              </div>
            </div>
          </div>

          {/* Interactive AI Engineering Action Hub */}
          <div className="pb-8 flex flex-wrap items-center justify-center gap-4 z-30 pointer-events-auto">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-gradient-to-r from-[#c9a84c] to-[#b3913b] hover:from-[#e0c068] hover:to-[#c9a84c] text-black font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(201,168,76,0.35)] flex items-center gap-2"
            >
              <span>Inspect AI Projects</span>
              <ArrowDown size={14} />
            </a>

            <button
              onClick={onOpenTerminal}
              className="px-6 py-3.5 bg-[#121218]/90 hover:bg-[#1a1a24] text-zinc-200 border border-[#2a2a38] text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-2 hover:border-[#c9a84c]"
            >
              <Terminal size={14} className="text-[#c9a84c]" />
              <span>Launch AI CLI ($)</span>
            </button>

            <button
              onClick={onOpenVinylVibe}
              className="px-5 py-3.5 bg-[#121218]/90 hover:bg-[#1a1a24] text-zinc-300 border border-[#2a2a38] text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-2 hover:border-purple-400"
            >
              <Disc3 size={14} className="text-purple-400 animate-spin" />
              <span>Vinyl Audio Vibe</span>
            </button>
          </div>
        </div>

        {/* Stage Timeline Navigation Dots (Right Side) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-30 pointer-events-auto">
          {[0, 1, 2].map((stageIdx) => (
            <button
              key={stageIdx}
              onClick={() => scrollToStage(stageIdx)}
              className="group flex items-center gap-3 p-1.5 focus:outline-none"
              aria-label={`Jump to stage ${stageIdx + 1}`}
            >
              <span className="hidden group-hover:block font-mono text-[9px] text-zinc-400 uppercase tracking-widest bg-[#0a0a0f] px-2 py-0.5 border border-zinc-800 rounded">
                {stageIdx === 0 ? '01 // TPU Core' : stageIdx === 1 ? '02 // Acceleration' : '03 // Production'}
              </span>
              <div
                className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                  activeStage === stageIdx
                    ? 'bg-[#c9a84c] border-[#c9a84c] scale-125 shadow-[0_0_10px_#c9a84c]'
                    : 'bg-transparent border-zinc-600 group-hover:border-zinc-400'
                }`}
              />
            </button>
          ))}
          <div className="w-[1px] h-12 bg-zinc-800 mt-2" />
        </div>

        {/* Scroll Progress Bar at Bottom of Screen */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-900 z-30 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-[#c9a84c] to-emerald-400 transition-all duration-150"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

      </div>
    </div>
  );
};
