import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgBody, setMsgBody] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.85 },
      colors: ['#84a98c', '#e6ded2', '#c8bca8']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgName || !msgBody) return;
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${msgName}`);
    const body = encodeURIComponent(`Hi Matheesha,\n\n${msgBody}\n\nFrom: ${msgName} (${msgEmail || 'No email provided'})`);
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');

    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="py-28 border-t border-[#1a1d26] bg-[#090a0d] relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-mono tracking-[0.25em] text-[#84a98c] uppercase mb-4">
          04 // Contact &middot; Collaboration
        </p>

        <h2 className="font-cormorant font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#e6ded2] leading-[0.92] mb-6">
          Let's create something<br />
          <span className="italic text-[#84a98c]">truly thoughtful.</span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-12 font-light">
          Open to graduate roles, AI/ML research internships, and collaborative engineering problems &mdash; Melbourne or remote.
        </p>

        {/* Primary Contact Options */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          {/* Email button with copy + mailto */}
          <div className="flex items-center gap-2 bg-[#11131a] border border-[#1e222e] rounded-full p-2 sm:p-2.5">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 text-zinc-200 hover:text-[#84a98c] text-xs sm:text-sm font-mono px-3 py-1 transition-colors"
            >
              <Mail size={16} className="text-[#84a98c]" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-full bg-[#181c26] hover:bg-[#84a98c] hover:text-[#090a0d] text-zinc-300 text-xs font-mono transition-all duration-200"
              title="Copy Email Address"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </div>

          {/* GitHub link */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#11131a] hover:bg-[#181c26] border border-[#1e222e] hover:border-[#84a98c]/50 rounded-full px-5 py-3 text-zinc-200 hover:text-[#84a98c] text-xs sm:text-sm font-mono transition-all duration-200"
          >
            <Github size={16} className="text-[#84a98c]" />
            <span>github.com/{PERSONAL_INFO.githubHandle}</span>
          </a>

          {/* LinkedIn link */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#11131a] hover:bg-[#181c26] border border-[#1e222e] hover:border-[#84a98c]/50 rounded-full px-5 py-3 text-zinc-200 hover:text-[#84a98c] text-xs sm:text-sm font-mono transition-all duration-200"
          >
            <Linkedin size={16} className="text-[#84a98c]" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        {/* Quick Direct Message Composer */}
        <div className="max-w-xl mx-auto bg-[#11131a]/90 border border-[#1e222e] rounded-2xl p-6 sm:p-8 text-left shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1a1d26]">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#84a98c] flex items-center gap-1.5">
              <Send size={13} />
              Quick Dispatch Note
            </h3>
            <span className="text-[10px] font-mono text-zinc-500">
              Direct Mailto Link
            </span>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1 uppercase">Your Name</label>
                <input
                  type="text"
                  required
                  value={msgName}
                  onChange={(e) => setMsgName(e.target.value)}
                  placeholder="Alex Mercer"
                  className="w-full bg-[#161924] border border-[#232738] text-zinc-200 text-xs rounded-xl p-2.5 outline-none focus:border-[#84a98c] font-sans"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1 uppercase">Your Email</label>
                <input
                  type="email"
                  value={msgEmail}
                  onChange={(e) => setMsgEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full bg-[#161924] border border-[#232738] text-zinc-200 text-xs rounded-xl p-2.5 outline-none focus:border-[#84a98c] font-sans"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono text-zinc-400 block mb-1 uppercase">Message / Project Details</label>
              <textarea
                required
                rows={4}
                value={msgBody}
                onChange={(e) => setMsgBody(e.target.value)}
                placeholder="Hi Matheesha, let's discuss an AI / ML role or project..."
                className="w-full bg-[#161924] border border-[#232738] text-zinc-200 text-xs rounded-xl p-2.5 outline-none focus:border-[#84a98c] font-sans resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-[#84a98c] h-5 flex items-center">
                {sentSuccess && 'Opening your mail client...'}
              </span>

              <button
                type="submit"
                className="px-6 py-2.5 bg-[#84a98c] hover:bg-[#97bba0] text-[#090a0d] font-mono text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm"
              >
                <span>Send Note</span>
                <Send size={12} />
              </button>
            </div>
          </form>
        </div>

        {/* Footer info */}
        <div className="pt-16 mt-16 border-t border-[#1a1d26] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Matheesha Ileperuma</span>
            <span>&middot;</span>
            <span className="text-[#84a98c]">Crafted with quiet intention</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-[#e6ded2] transition-colors">Back to top ↑</a>
          </div>
        </div>
      </div>
    </section>
  );
};
