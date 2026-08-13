import React, { useState, useEffect } from 'react';
import { Terminal, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 md:px-12 py-4 md:py-5 flex items-center justify-between ${
        scrolled
          ? 'bg-[#090a0d]/85 backdrop-blur-xl border-b border-[#1c202a] shadow-xl py-3.5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Brand Monogram */}
      <a
        href="#hero"
        className="group flex items-center gap-2.5 text-[#e6ded2] no-underline"
      >
        <span className="font-cormorant font-bold text-2xl sm:text-3xl tracking-tight text-[#e6ded2] group-hover:text-[#84a98c] transition-colors">
          {PERSONAL_INFO.initials}
        </span>
        <div className="hidden sm:flex flex-col">
          <span className="text-[11px] font-mono text-zinc-400 tracking-wider group-hover:text-zinc-200 transition-colors uppercase">
            Matheesha Ileperuma
          </span>
          <span className="text-[9px] font-mono text-[#84a98c]/90 tracking-widest uppercase">
            AI Developer &middot; Melbourne
          </span>
        </div>
      </a>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        <li>
          <a
            href="#about"
            className={`text-xs font-mono tracking-widest uppercase transition-colors ${
              activeSection === 'about' ? 'text-[#84a98c]' : 'text-zinc-400 hover:text-[#e6ded2]'
            }`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`text-xs font-mono tracking-widest uppercase transition-colors ${
              activeSection === 'projects' ? 'text-[#84a98c]' : 'text-zinc-400 hover:text-[#e6ded2]'
            }`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={`text-xs font-mono tracking-widest uppercase transition-colors ${
              activeSection === 'skills' ? 'text-[#84a98c]' : 'text-zinc-400 hover:text-[#e6ded2]'
            }`}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`text-xs font-mono tracking-widest uppercase transition-colors ${
              activeSection === 'contact' ? 'text-[#84a98c]' : 'text-zinc-400 hover:text-[#e6ded2]'
            }`}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Right Actions: Terminal button & Resume */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={onOpenTerminal}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#13151c] hover:bg-[#1c202b] text-zinc-300 hover:text-[#84a98c] border border-[#232733] text-xs font-mono transition-all duration-200"
          title="Open Interactive Terminal"
        >
          <Terminal size={13} className="text-[#84a98c]" />
          <span>CLI</span>
        </button>

        <button
          onClick={onOpenResume}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#84a98c]/15 hover:bg-[#84a98c]/25 text-[#d8e2dc] border border-[#84a98c]/40 hover:border-[#84a98c] text-xs font-mono transition-all duration-200"
        >
          <FileText size={13} className="text-[#84a98c]" />
          <span>Resume</span>
        </button>
      </div>
    </nav>
  );
};
