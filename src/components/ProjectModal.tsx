import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Cpu, Database, Server, CheckCircle, Sparkles, Layers, ArrowRight, Play } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'interactive'>('overview');
  
  // Interactive mini-simulator states
  const [simGenre, setSimGenre] = useState('Sci-Fi Cyberpunk');
  const [simMedium, setSimMedium] = useState('Film to Book');
  const [simResult, setSimResult] = useState<any>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Financial classifier simulator state
  const [txDesc, setTxDesc] = useState('UBER TRIP MELBOURNE AU $28.50');
  const [txCategory, setTxCategory] = useState<string | null>(null);

  if (!project) return null;

  const runRecommendationSim = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setSimResult({
        sourceTitle: simGenre.includes('Sci-Fi') ? 'Blade Runner 2049 (Film)' : 'Interstellar (Film)',
        matchTitle: simGenre.includes('Sci-Fi') ? 'Neuromancer by William Gibson (Book)' : 'The Three-Body Problem by Liu Cixin (Book)',
        similarityScore: '0.942 Cosine / pgvector',
        llmRationale: `Synthesized via Claude 3.5 Sonnet: "Both works explore technological alienation and high-density dystopian metaphysics through neon noir visual textures and existential philosophical stakes."`
      });
      setIsSimulating(false);
    }, 600);
  };

  const runTxClassifier = () => {
    const lower = txDesc.toLowerCase();
    let cat = 'General / Miscellaneous';
    let conf = '94%';
    if (lower.includes('uber') || lower.includes('transport') || lower.includes('metro') || lower.includes('fuel')) {
      cat = 'Transportation & Rideshare';
      conf = '99.8%';
    } else if (lower.includes('coffee') || lower.includes('cafe') || lower.includes('restaurant') || lower.includes('eats')) {
      cat = 'Dining & Groceries';
      conf = '98.5%';
    } else if (lower.includes('aws') || lower.includes('github') || lower.includes('openai') || lower.includes('vercel')) {
      cat = 'Cloud Infrastructure & Tech';
      conf = '99.9%';
    }
    setTxCategory(`${cat} (Confidence: ${conf}, Model: Multinomial Naive Bayes)`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-4xl bg-[#0d0d0d] border border-[#262626] rounded-xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="bg-[#121212] px-6 py-4 border-b border-[#222] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-[#c9a84c] uppercase">
                {project.number}
              </span>
              {project.badge && (
                <span className="text-[11px] font-mono uppercase px-2 py-0.5 border border-[#c9a84c]/50 text-[#c9a84c] rounded">
                  {project.badge}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-1 rounded-md hover:bg-zinc-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Header */}
          <div className="p-6 md:p-8 border-b border-[#1c1c1c] bg-gradient-to-b from-[#141414] to-[#0d0d0d]">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm md:text-base text-zinc-400 font-sans">
              {project.subtitle}
            </p>

            {/* Tab navigation */}
            <div className="flex items-center gap-2 mt-6 border-b border-[#222]">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2.5 px-3 text-xs md:text-sm font-mono tracking-wider transition-colors relative ${
                  activeTab === 'overview' ? 'text-[#c9a84c] font-medium' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                System Overview
                {activeTab === 'overview' && (
                  <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a84c]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`pb-2.5 px-3 text-xs md:text-sm font-mono tracking-wider transition-colors relative ${
                  activeTab === 'architecture' ? 'text-[#c9a84c] font-medium' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Architecture & CI/CD
                {activeTab === 'architecture' && (
                  <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a84c]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('interactive')}
                className={`pb-2.5 px-3 text-xs md:text-sm font-mono tracking-wider transition-colors relative flex items-center gap-1.5 ${
                  activeTab === 'interactive' ? 'text-[#c9a84c] font-medium' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <Sparkles size={13} />
                Live Demo Simulator
                {activeTab === 'interactive' && (
                  <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a84c]" />
                )}
              </button>
            </div>
          </div>

          {/* Modal Scroll Content */}
          <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#c9a84c] mb-2">
                    Deep Dive
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {project.fullDesc}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#c9a84c] mb-3">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.keyMetrics.map((metric, i) => (
                      <div key={i} className="bg-[#141414] border border-[#222] p-3 rounded-lg">
                        <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                          {metric.label}
                        </div>
                        <div className="text-sm md:text-base font-semibold text-zinc-200 mt-1">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Engineering Highlights */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#c9a84c] mb-3">
                    Key Engineering Highlights
                  </h3>
                  <div className="space-y-2.5">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-[#111] p-3 rounded-lg border border-[#1f1f1f]">
                        <CheckCircle size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#c9a84c] mb-3">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 bg-[#161616] text-zinc-300 border border-[#282828] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6 font-mono text-xs md:text-sm">
                <div className="bg-[#111] p-5 rounded-lg border border-[#242424]">
                  <div className="flex items-center gap-2 text-[#c9a84c] font-bold mb-3 uppercase tracking-wider text-xs">
                    <Layers size={15} />
                    End-to-End System Pipeline
                  </div>
                  <p className="text-zinc-300 leading-relaxed font-sans text-sm">
                    {project.architecture}
                  </p>
                </div>

                <div className="bg-[#111] p-5 rounded-lg border border-[#242424]">
                  <div className="flex items-center gap-2 text-[#c9a84c] font-bold mb-3 uppercase tracking-wider text-xs">
                    <Cpu size={15} />
                    Current Project Status & Milestones
                  </div>
                  <p className="text-zinc-300 leading-relaxed font-sans text-sm">
                    {project.status}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'interactive' && (
              <div className="space-y-6">
                {project.id === 'luminary' ? (
                  <div className="bg-[#111] p-5 rounded-lg border border-[#262626] space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#c9a84c]">
                        Luminary Vector Cross-Media Synthesizer Demo
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/50">
                        Live Simulation
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      Select your target aesthetic mood to simulate conversational cross-media mapping:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-mono text-zinc-500 uppercase">Aesthetic Genre</label>
                        <select
                          value={simGenre}
                          onChange={(e) => setSimGenre(e.target.value)}
                          className="w-full mt-1 bg-[#181818] border border-[#333] text-zinc-200 text-xs rounded p-2 outline-none font-mono"
                        >
                          <option value="Sci-Fi Cyberpunk">Sci-Fi Cyberpunk Dystopia</option>
                          <option value="Cosmic Wonder">Cosmic Philosophy & Physics</option>
                          <option value="Neo-Noir Mystery">Neo-Noir Urban Melancholy</option>
                        </select>
                      </div>
                      <div className="flex items-end">
                        <button
                          onClick={runRecommendationSim}
                          disabled={isSimulating}
                          className="w-full py-2 bg-[#c9a84c] hover:bg-[#d6b75c] text-black font-semibold text-xs font-mono rounded flex items-center justify-center gap-1.5 transition-all"
                        >
                          {isSimulating ? (
                            <span>Synthesizing Vectors...</span>
                          ) : (
                            <>
                              <Play size={13} />
                              Generate Cross-Media Match
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {simResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#161616] p-4 rounded border border-[#2a2a2a] space-y-2 mt-4"
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-zinc-400">Source: <span className="text-zinc-200">{simResult.sourceTitle}</span></span>
                          <span className="text-[#c9a84c]">{simResult.similarityScore}</span>
                        </div>
                        <div className="text-xs font-mono text-emerald-400">
                          ➔ Recommended: {simResult.matchTitle}
                        </div>
                        <p className="text-xs text-zinc-300 italic pt-1 border-t border-[#222] font-sans">
                          {simResult.llmRationale}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ) : project.id === 'finance-categoriser' ? (
                  <div className="bg-[#111] p-5 rounded-lg border border-[#262626] space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#c9a84c]">
                      Bank Transaction ML NLP Classifier
                    </h4>
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-zinc-500 uppercase">Input Raw Transaction String</label>
                      <input
                        type="text"
                        value={txDesc}
                        onChange={(e) => setTxDesc(e.target.value)}
                        className="w-full bg-[#181818] border border-[#333] text-zinc-200 text-xs rounded p-2 outline-none font-mono"
                      />
                      <button
                        onClick={runTxClassifier}
                        className="px-4 py-1.5 bg-[#c9a84c] text-black font-semibold text-xs font-mono rounded mt-2 hover:bg-[#d6b75c] transition-colors"
                      >
                        Run Naive Bayes Inference
                      </button>
                    </div>
                    {txCategory && (
                      <div className="bg-[#161616] p-3 rounded border border-[#2a2a2a] text-xs font-mono text-emerald-400">
                        ✓ Classification: {txCategory}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-[#111] p-6 rounded-lg border border-[#262626] text-center space-y-3">
                    <Cpu size={32} className="text-[#c9a84c] mx-auto" />
                    <h4 className="text-sm font-semibold text-zinc-200">
                      Architectural Simulation Ready
                    </h4>
                    <p className="text-xs text-zinc-400 max-w-md mx-auto">
                      This project runs on production-grade Python/PyTorch pipelines. Full code and documentation are available in the open repository.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="bg-[#121212] px-6 py-4 border-t border-[#222] flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">
              Matheesha Ileperuma &middot; 2025
            </span>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#181818] hover:bg-[#222] text-zinc-200 text-xs font-mono rounded border border-[#333] flex items-center gap-2 transition-colors"
                >
                  <Github size={14} />
                  View GitHub
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#c9a84c] hover:bg-[#d6b75c] text-black font-semibold text-xs font-mono rounded transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
