import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Disc, Music, Sparkles, Volume2, VolumeX, Play, Pause, Waves, CloudRain, Wind } from 'lucide-react';

interface VinylVibeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VinylVibeModal: React.FC<VinylVibeModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeAmbiance, setActiveAmbiance] = useState<'lofi' | 'rain' | 'waves'>('lofi');

  if (!isOpen) return null;

  const tracks = [
    { title: 'Late Night Latent Spaces', artist: 'Deep Learning Lo-Fi', time: '3:24', vibe: '45 RPM Vinyl' },
    { title: 'Melbourne 2 AM Highway', artist: 'Tranquil Night Session', time: '4:10', vibe: 'Analogue Tape' },
    { title: 'Vector Harmonic in C Minor', artist: 'Serene Ambient Synthesis', time: '2:58', vibe: 'Warm Sine Waves' }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-md bg-[#11131a] border border-[#1e222e] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-[#e6ded2]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-zinc-400 hover:text-[#e6ded2] p-1.5 rounded-full hover:bg-[#181c26] transition-colors"
          >
            <X size={18} />
          </button>

          <div className="text-center space-y-4">
            {/* Spinning Minimalist Vinyl Visual */}
            <div className="relative w-36 h-36 mx-auto my-2">
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full rounded-full bg-[#0a0b0e] border-4 border-[#1e222e] shadow-[0_0_30px_rgba(132,169,140,0.12)] flex items-center justify-center relative overflow-hidden"
              >
                {/* Grooves */}
                <div className="absolute inset-2 rounded-full border border-zinc-800/80" />
                <div className="absolute inset-4 rounded-full border border-zinc-800/80" />
                <div className="absolute inset-6 rounded-full border border-zinc-800/80" />
                
                {/* Center Label */}
                <div className="w-14 h-14 rounded-full bg-[#84a98c] flex flex-col items-center justify-center text-[8px] font-mono text-[#090a0d] font-bold">
                  <span>ZENITH</span>
                  <span>45 RPM</span>
                </div>
              </motion.div>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#84a98c]">
                Mindful Audio &middot; Coding Lounge
              </span>
              <h3 className="font-cormorant font-normal text-2xl text-[#e6ded2] mt-1">
                Tranquil Coding Frequencies
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Matheesha's curated mindful ambient playlist
              </p>
            </div>

            {/* Ambiance Mood Switcher */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <button
                onClick={() => setActiveAmbiance('lofi')}
                className={`px-3 py-1 text-[11px] font-mono rounded-full border flex items-center gap-1.5 transition-all ${
                  activeAmbiance === 'lofi'
                    ? 'bg-[#84a98c]/20 border-[#84a98c] text-[#84a98c]'
                    : 'bg-[#151824] border-[#232738] text-zinc-400 hover:text-[#e6ded2]'
                }`}
              >
                <Music size={12} />
                <span>Lo-Fi</span>
              </button>
              <button
                onClick={() => setActiveAmbiance('rain')}
                className={`px-3 py-1 text-[11px] font-mono rounded-full border flex items-center gap-1.5 transition-all ${
                  activeAmbiance === 'rain'
                    ? 'bg-[#84a98c]/20 border-[#84a98c] text-[#84a98c]'
                    : 'bg-[#151824] border-[#232738] text-zinc-400 hover:text-[#e6ded2]'
                }`}
              >
                <CloudRain size={12} />
                <span>Rain Focus</span>
              </button>
              <button
                onClick={() => setActiveAmbiance('waves')}
                className={`px-3 py-1 text-[11px] font-mono rounded-full border flex items-center gap-1.5 transition-all ${
                  activeAmbiance === 'waves'
                    ? 'bg-[#84a98c]/20 border-[#84a98c] text-[#84a98c]'
                    : 'bg-[#151824] border-[#232738] text-zinc-400 hover:text-[#e6ded2]'
                }`}
              >
                <Waves size={12} />
                <span>Ocean Calm</span>
              </button>
            </div>

            {/* Tracklist */}
            <div className="space-y-2 text-left pt-2">
              {tracks.map((track, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border text-xs font-mono flex items-center justify-between transition-colors ${
                    i === 0 ? 'bg-[#161924] border-[#84a98c]/40 text-[#e6ded2]' : 'bg-[#13151f] border-[#1e222e] text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Music size={13} className={i === 0 ? 'text-[#84a98c]' : 'text-zinc-500'} />
                    <div>
                      <div className="font-medium text-[#e6ded2]">{track.title}</div>
                      <div className="text-[10px] text-zinc-500">{track.artist}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-500">{track.time}</span>
                </div>
              ))}
            </div>

            {/* Audio State Toggle */}
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-6 py-2.5 rounded-full bg-[#84a98c] hover:bg-[#97bba0] text-[#090a0d] font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? 'Turntable Active' : 'Turntable Paused'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
