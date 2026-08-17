import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);

      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 sm:px-10 lg:px-16 flex items-center justify-between ${
        scrolled
          ? 'py-4 bg-[var(--paper)]/85 backdrop-blur-md border-b border-[var(--line)]'
          : 'py-7 border-b border-transparent'
      }`}
    >
      <a href="#hero" className="font-serif text-xl tracking-tight text-[var(--ink)] no-underline">
        {PERSONAL_INFO.initials}
      </a>

      <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
        {LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`text-[13px] tracking-wide transition-colors duration-300 ${
                activeSection === link.id ? 'text-[var(--ink)]' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={onOpenResume}
        className="text-[13px] tracking-wide text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors duration-300"
      >
        Résumé
      </button>
    </nav>
  );
};
