import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, GraduationCap, Briefcase, Award, CheckCircle, Mail, MapPin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-4xl bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="bg-[#11131a] px-6 py-4 border-b border-[#1e222e] flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#84a98c]" />
              <span>Curriculum Vitae &middot; Matheesha Ileperuma</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-full bg-[#181c26] hover:bg-[#202534] text-zinc-300 text-xs font-mono flex items-center gap-1.5 transition-colors border border-[#232738]"
              >
                <Printer size={13} className="text-[#84a98c]" />
                <span>Print / PDF</span>
              </button>
              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* CV Document Container */}
          <div className="p-6 md:p-10 overflow-y-auto flex-1 space-y-8 bg-[#090a0d] text-zinc-200">
            {/* Header / Identity */}
            <div className="border-b border-[#1e222e] pb-6">
              <h1 className="font-cormorant text-3xl sm:text-4xl font-normal tracking-tight text-[#e6ded2]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono text-[#84a98c] mt-1">
                {PERSONAL_INFO.role}
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1">
                  <MapPin size={13} className="text-[#c9a84c]" /> {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={13} className="text-[#c9a84c]" /> {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1">
                  <Github size={13} className="text-[#c9a84c]" /> github.com/{PERSONAL_INFO.githubHandle}
                </span>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#c9a84c] mb-3 flex items-center gap-2">
                <GraduationCap size={15} />
                Education
              </h2>
              <div className="bg-[#121212] p-4 rounded-lg border border-[#222]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-white text-sm sm:text-base">
                    Bachelor of Computer Science (Artificial Intelligence)
                  </span>
                  <span className="text-xs font-mono text-[#c9a84c]">2022 &mdash; 2025</span>
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  Swinburne University of Technology &middot; Melbourne, Australia
                </div>
                <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
                  Focus on Machine Learning, Deep Neural Networks, Natural Language Processing, Offline Edge Architectures, and Full-Stack Systems Design.
                </p>
              </div>
            </div>

            {/* Selected Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#c9a84c] mb-3 flex items-center gap-2">
                <Briefcase size={15} />
                Featured AI & Engineering Projects
              </h2>
              <div className="space-y-4">
                <div className="bg-[#121212] p-4 rounded-lg border border-[#222]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white text-sm">
                      Luminary &mdash; AI Cross-Media Recommender Engine
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">Deployed & Active</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-1 font-sans">
                    FastAPI, PostgreSQL 16 + pgvector, Claude 3.5 Sonnet, React 18, Docker, GitHub Actions CI/CD.
                  </p>
                  <ul className="text-xs text-zinc-400 mt-2 space-y-1 list-disc list-inside font-sans">
                    <li>Engineered conversational onboarding profiling user taste embeddings in 1536-dim vector space.</li>
                    <li>Integrated multi-source adapters across Google Books, TMDb, YouTube, and Guardian APIs.</li>
                    <li>Configured strict GitHub Actions CI/CD blocking PRs on failed lints or unit test regressions.</li>
                  </ul>
                </div>

                <div className="bg-[#121212] p-4 rounded-lg border border-[#222]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white text-sm">
                      TEK Climate System &mdash; Offline Local RAG Assistant
                    </span>
                    <span className="text-[11px] font-mono text-[#c9a84c]">University Capstone Lead</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-1 font-sans">
                    Phi-4 14B, Mistral 7B, Ollama, ChromaDB, all-MiniLM-L6-v2, Flask, Docker, SQLite.
                  </p>
                  <ul className="text-xs text-zinc-400 mt-2 space-y-1 list-disc list-inside font-sans">
                    <li>Designed 100% offline edge RAG assistant preserving indigenous ecological knowledge in remote Bangladesh.</li>
                    <li>Evaluated latency and hallucination trade-offs between quantized Mistral 7B and Phi-4 14B models.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#c9a84c] mb-3 flex items-center gap-2">
                <Award size={15} />
                Technical Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#121212] p-3 rounded border border-[#222]">
                  <span className="text-[#c9a84c] block mb-1">AI & Machine Learning</span>
                  <span className="text-zinc-300">PyTorch, TensorFlow, LangChain, RAG, Ollama, pgvector, scikit-learn, LSTM, GRU, ARIMA, Naive Bayes.</span>
                </div>
                <div className="bg-[#121212] p-3 rounded border border-[#222]">
                  <span className="text-[#c9a84c] block mb-1">Backend & DevOps</span>
                  <span className="text-zinc-300">Python (FastAPI, Flask), PostgreSQL, SQLite, Docker, GitHub Actions CI/CD, Linux/Bash, Vercel, Render.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
