import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Terminal, Cpu, Play, Volume2, Sparkles } from 'lucide-react';

interface FloatingObjectsProps {
  onOpenTerminal?: () => void;
  onOpenVinylVibe?: () => void;
}

export const FloatingObjects: React.FC<FloatingObjectsProps> = ({
  onOpenTerminal,
  onOpenVinylVibe
}) => {
  const { scrollY } = useScroll();

  // Parallax offsets based on scroll
  const neuralY = useTransform(scrollY, [0, 800], [0, 140]);
  const circuitY = useTransform(scrollY, [0, 800], [0, 240]);
  const carY = useTransform(scrollY, [0, 800], [0, 180]);
  const terminalY = useTransform(scrollY, [0, 800], [0, 290]);
  const vinylY = useTransform(scrollY, [0, 800], [0, 110]);

  // Interactive mouse spring tracking for subtle 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX - innerWidth / 2) / 35);
      mouseY.set((e.clientY - innerHeight / 2) / 35);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* 1. Neural Network - Top Right */}
      <motion.div
        style={{ y: neuralY, x: springX }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
        className="absolute top-[6%] right-[3%] md:right-[5%] w-[180px] sm:w-[240px] md:w-[320px] pointer-events-auto group cursor-pointer"
        title="Neural Network Architecture — Click for AI insights"
      >
        <motion.div
          animate={{
            y: [0, 18, 0],
            rotate: [0, 3, 0]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative filter drop-shadow-[0_0_20px_rgba(201,168,76,0.06)] group-hover:drop-shadow-[0_0_25px_rgba(201,168,76,0.2)] transition-all duration-300"
        >
          <svg viewBox="0 0 280 270" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Input layer */}
            <circle cx="38" cy="68" r="9" stroke="rgba(210,210,210,0.35)" strokeWidth="1.2" fill="rgba(255,255,255,0.04)" className="group-hover:stroke-[#c9a84c] transition-colors" />
            <circle cx="38" cy="112" r="9" stroke="rgba(210,210,210,0.35)" strokeWidth="1.2" fill="rgba(255,255,255,0.04)" />
            <circle cx="38" cy="156" r="9" stroke="rgba(210,210,210,0.35)" strokeWidth="1.2" fill="rgba(255,255,255,0.04)" />
            <circle cx="38" cy="200" r="9" stroke="rgba(210,210,210,0.35)" strokeWidth="1.2" fill="rgba(255,255,255,0.04)" />

            {/* Hidden Layer 1 */}
            <circle cx="108" cy="50" r="9" stroke="rgba(201,168,76,0.35)" strokeWidth="1.2" fill="rgba(201,168,76,0.06)" />
            <circle cx="108" cy="100" r="9" stroke="rgba(201,168,76,0.4)" strokeWidth="1.2" fill="rgba(201,168,76,0.08)" />
            <circle cx="108" cy="150" r="9" stroke="rgba(201,168,76,0.35)" strokeWidth="1.2" fill="rgba(201,168,76,0.06)" />
            <circle cx="108" cy="200" r="9" stroke="rgba(201,168,76,0.35)" strokeWidth="1.2" fill="rgba(201,168,76,0.06)" />
            <circle cx="108" cy="245" r="9" stroke="rgba(201,168,76,0.3)" strokeWidth="1.2" fill="rgba(201,168,76,0.05)" />

            {/* Hidden Layer 2 */}
            <circle cx="178" cy="50" r="9" stroke="rgba(210,210,210,0.25)" strokeWidth="1.2" fill="rgba(255,255,255,0.03)" />
            <circle cx="178" cy="100" r="9" stroke="rgba(210,210,210,0.3)" strokeWidth="1.2" fill="rgba(255,255,255,0.04)" />
            <circle cx="178" cy="150" r="9" stroke="rgba(210,210,210,0.3)" strokeWidth="1.2" fill="rgba(255,255,255,0.04)" />
            <circle cx="178" cy="200" r="9" stroke="rgba(210,210,210,0.25)" strokeWidth="1.2" fill="rgba(255,255,255,0.03)" />
            <circle cx="178" cy="245" r="9" stroke="rgba(210,210,210,0.2)" strokeWidth="1.2" fill="rgba(255,255,255,0.03)" />

            {/* Output Layer */}
            <circle cx="248" cy="90" r="9" stroke="rgba(201,168,76,0.5)" strokeWidth="1.4" fill="rgba(201,168,76,0.12)" />
            <circle cx="248" cy="148" r="9" stroke="rgba(201,168,76,0.6)" strokeWidth="1.4" fill="rgba(201,168,76,0.15)" />
            <circle cx="248" cy="206" r="9" stroke="rgba(201,168,76,0.5)" strokeWidth="1.4" fill="rgba(201,168,76,0.12)" />

            {/* Pulsing Synapse Connections */}
            <line x1="47" y1="68" x2="99" y2="50" stroke="rgba(200,200,200,0.16)" strokeWidth="0.8" />
            <line x1="47" y1="68" x2="99" y2="100" stroke="rgba(201,168,76,0.25)" strokeWidth="1" />
            <line x1="47" y1="68" x2="99" y2="150" stroke="rgba(200,200,200,0.12)" strokeWidth="0.8" />
            <line x1="47" y1="112" x2="99" y2="100" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
            <line x1="47" y1="112" x2="99" y2="150" stroke="rgba(200,200,200,0.15)" strokeWidth="0.8" />
            <line x1="47" y1="156" x2="99" y2="150" stroke="rgba(201,168,76,0.28)" strokeWidth="1" />
            <line x1="47" y1="200" x2="99" y2="200" stroke="rgba(200,200,200,0.16)" strokeWidth="0.8" />
            <line x1="47" y1="200" x2="99" y2="245" stroke="rgba(200,200,200,0.12)" strokeWidth="0.8" />

            {/* Hidden to Hidden */}
            <line x1="117" y1="100" x2="169" y2="100" stroke="rgba(201,168,76,0.35)" strokeWidth="1.2" />
            <line x1="117" y1="100" x2="169" y2="150" stroke="rgba(200,200,200,0.15)" strokeWidth="0.8" />
            <line x1="117" y1="150" x2="169" y2="150" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
            <line x1="117" y1="200" x2="169" y2="200" stroke="rgba(200,200,200,0.16)" strokeWidth="0.8" />

            {/* Hidden to Output */}
            <line x1="187" y1="100" x2="239" y2="90" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
            <line x1="187" y1="100" x2="239" y2="148" stroke="rgba(201,168,76,0.4)" strokeWidth="1.2" />
            <line x1="187" y1="150" x2="239" y2="148" stroke="rgba(201,168,76,0.35)" strokeWidth="1.2" />
            <line x1="187" y1="200" x2="239" y2="206" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
          </svg>
          <div className="absolute -bottom-2 right-2 text-[10px] tracking-widest font-mono text-[#c9a84c]/60 uppercase bg-[#080808]/80 px-2 py-0.5 rounded border border-[#1c1c1c]">
            RAG / Embeddings
          </div>
        </motion.div>
      </motion.div>

      {/* 2. Interactive Terminal Window - Top Left */}
      <motion.div
        style={{ y: terminalY, x: springX }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.35 }}
        className="absolute top-[8%] left-[2%] sm:left-[5%] w-[200px] sm:w-[280px] md:w-[320px] pointer-events-auto cursor-pointer group"
        onClick={onOpenTerminal}
        title="Click to launch interactive terminal"
      >
        <motion.div
          animate={{
            y: [0, 14, 0],
            rotate: [0, -2.5, 0]
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative bg-[#0d0d0d]/90 backdrop-blur-md border border-[#222] hover:border-[#c9a84c]/50 rounded-lg p-3 shadow-2xl transition-all duration-300 group-hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between border-b border-[#1c1c1c] pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider flex items-center gap-1">
              <Terminal size={10} className="text-[#c9a84c]" />
              train.py --phi4
            </span>
          </div>
          <div className="space-y-1 font-mono text-[10px] sm:text-[11px] leading-relaxed text-zinc-400">
            <p className="text-zinc-500">$ python train.py --epochs 10</p>
            <p className="text-[#c9a84c]/80">Loading Phi-4 14B weights...</p>
            <p className="text-zinc-400">Epoch 10/10 <span className="text-emerald-400">loss=0.0812</span></p>
            <p className="text-zinc-300 font-medium">Validation R² = <span className="text-emerald-400">0.9650</span></p>
            <div className="flex items-center justify-between pt-1 border-t border-[#1c1c1c]/80 mt-1">
              <span className="text-[9px] text-[#c9a84c] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Click to open CLI
              </span>
              <span className="text-[9px] text-zinc-600">80x24</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 3. JDM Sports Car Silhouette - Middle Right */}
      <motion.div
        style={{ y: carY, x: springX }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
        className="hidden md:block absolute top-[44%] right-[1%] lg:right-[4%] w-[280px] lg:w-[380px] pointer-events-auto group cursor-default"
        title="JDM Enthusiast & Precision Engineering"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, 1.5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative filter drop-shadow-[0_0_15px_rgba(201,168,76,0.05)] group-hover:drop-shadow-[0_0_20px_rgba(201,168,76,0.18)] transition-all"
        >
          <svg viewBox="0 0 420 155" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Body outline */}
            <path
              d="M 28 120 L 28 100 Q 30 88 42 80 L 100 58 Q 118 50 142 46 L 215 44 Q 238 44 255 52 L 298 72 Q 316 82 322 98 L 326 120"
              stroke="rgba(220,220,220,0.38)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="group-hover:stroke-[#c9a84c] transition-colors duration-500"
            />
            {/* Front fascia */}
            <path
              d="M 326 120 L 360 120 Q 374 118 380 110 L 392 96 Q 395 90 390 84"
              stroke="rgba(220,220,220,0.35)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Ground sill with gaps */}
            <path d="M 18 120 L 64 120 M 136 120 L 238 120 M 308 120 L 360 120" stroke="rgba(200,200,200,0.35)" strokeWidth="1.5" strokeLinecap="round" />
            {/* Rear wheel */}
            <circle cx="100" cy="122" r="29" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" fill="#080808" />
            <circle cx="100" cy="122" r="19" stroke="rgba(200,200,200,0.22)" strokeWidth="1" fill="#080808" />
            <circle cx="100" cy="122" r="8" stroke="rgba(201,168,76,0.5)" strokeWidth="1" fill="#080808" />
            {/* Front wheel */}
            <circle cx="273" cy="122" r="29" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" fill="#080808" />
            <circle cx="273" cy="122" r="19" stroke="rgba(200,200,200,0.22)" strokeWidth="1" fill="#080808" />
            <circle cx="273" cy="122" r="8" stroke="rgba(201,168,76,0.5)" strokeWidth="1" fill="#080808" />
            {/* Windows */}
            <path d="M 118 72 L 148 54 Q 162 48 176 47 L 208 46 L 206 70 Z" stroke="rgba(200,200,200,0.24)" strokeWidth="1" fill="rgba(255,255,255,0.04)" />
            <path d="M 214 46 L 240 46 Q 258 48 274 62 L 285 72 L 216 72 Z" stroke="rgba(200,200,200,0.24)" strokeWidth="1" fill="rgba(255,255,255,0.04)" />
            {/* Headlight & Taillight glow */}
            <rect x="376" y="86" width="16" height="10" rx="2" stroke="rgba(201,168,76,0.6)" strokeWidth="1.2" fill="rgba(201,168,76,0.2)" />
            <rect x="18" y="90" width="10" height="16" rx="1" stroke="rgba(239,68,68,0.6)" strokeWidth="1.2" fill="rgba(239,68,68,0.2)" />
          </svg>
          <div className="absolute -bottom-1 left-8 text-[9px] tracking-widest font-mono text-zinc-500 uppercase">
            JDM Aero &middot; Twin-Scroll Boost
          </div>
        </motion.div>
      </motion.div>

      {/* 4. Circuit Board Fragment - Bottom Left */}
      <motion.div
        style={{ y: circuitY, x: springX }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.45 }}
        className="hidden sm:block absolute bottom-[8%] left-[2%] md:left-[4%] w-[160px] md:w-[220px] pointer-events-auto group cursor-default"
      >
        <motion.div
          animate={{
            y: [0, 16, 0],
            rotate: [0, -4, 0]
          }}
          transition={{
            duration: 5.6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative filter drop-shadow-[0_0_15px_rgba(201,168,76,0.04)] group-hover:drop-shadow-[0_0_20px_rgba(201,168,76,0.15)] transition-all"
        >
          <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <rect x="4" y="4" width="232" height="192" rx="4" stroke="rgba(200,200,200,0.18)" strokeWidth="1" fill="rgba(13,13,13,0.7)" />
            {/* PCB Traces */}
            <polyline points="22,45 90,45 90,70 165,70" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
            <polyline points="22,90 50,90 50,130 200,130" stroke="rgba(200,200,200,0.25)" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
            <polyline points="140,45 140,22 210,22" stroke="rgba(200,200,200,0.22)" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
            {/* Junction pads */}
            <circle cx="90" cy="45" r="3.5" fill="rgba(201,168,76,0.7)" />
            <circle cx="90" cy="70" r="3.5" fill="rgba(201,168,76,0.7)" />
            <circle cx="165" cy="70" r="3.5" fill="rgba(201,168,76,0.7)" />
            <circle cx="50" cy="90" r="3.5" fill="rgba(200,200,200,0.4)" />
            {/* IC Chip */}
            <rect x="100" y="100" width="60" height="44" rx="2" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2" fill="rgba(201,168,76,0.08)" />
            <text x="130" y="125" fill="rgba(201,168,76,0.8)" fontSize="8" fontFamily="monospace" textAnchor="middle">MCU / NPU</text>
          </svg>
        </motion.div>
      </motion.div>

      {/* 5. Spinning Vinyl Record - Bottom Right */}
      <motion.div
        style={{ y: vinylY, x: springX }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.6 }}
        className="hidden md:block absolute bottom-[5%] right-[18%] lg:right-[22%] w-[120px] lg:w-[160px] pointer-events-auto cursor-pointer group"
        onClick={onOpenVinylVibe}
        title="Click for Vinyl Lo-Fi Sound Vibe"
      >
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, 360]
          }}
          transition={{
            y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 18, repeat: Infinity, ease: 'linear' }
          }}
          className="relative filter drop-shadow-[0_0_15px_rgba(201,168,76,0.08)] group-hover:drop-shadow-[0_0_25px_rgba(201,168,76,0.25)] transition-all"
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <circle cx="100" cy="100" r="96" stroke="rgba(200,200,200,0.3)" strokeWidth="1.4" fill="#0a0a0a" />
            <circle cx="100" cy="100" r="84" stroke="rgba(200,200,200,0.12)" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="72" stroke="rgba(200,200,200,0.12)" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="60" stroke="rgba(200,200,200,0.1)" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="48" stroke="rgba(200,200,200,0.1)" strokeWidth="0.8" />
            {/* Center Label */}
            <circle cx="100" cy="100" r="34" stroke="rgba(201,168,76,0.6)" strokeWidth="1.2" fill="rgba(201,168,76,0.15)" />
            <text x="100" y="97" fontFamily="monospace" fontSize="7" fill="rgba(201,168,76,0.9)" textAnchor="middle" letterSpacing="1">SIDE A</text>
            <text x="100" y="108" fontFamily="monospace" fontSize="5.5" fill="rgba(200,200,200,0.5)" textAnchor="middle" letterSpacing="1">45 RPM</text>
            <circle cx="100" cy="100" r="5" stroke="rgba(200,200,200,0.5)" strokeWidth="1" fill="#080808" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
