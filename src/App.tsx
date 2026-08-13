import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CalmHero } from './components/CalmHero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';
import { ResumeModal } from './components/ResumeModal';
import { VinylVibeModal } from './components/VinylVibeModal';
import { AmbientCanvas } from './components/AmbientCanvas';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isVinylOpen, setIsVinylOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0d] text-[#e6ded2] selection:bg-[#84a98c]/30 selection:text-[#d8e2dc] relative overflow-x-hidden">
      {/* Gentle Ambient Particle Canvas */}
      <AmbientCanvas />

      {/* Sticky Minimalist Navigation Bar */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Peaceful Portfolio Content */}
      <main className="relative z-10">
        <CalmHero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenVinylVibe={() => setIsVinylOpen(true)}
        />
        <AboutSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <InteractiveTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <VinylVibeModal
        isOpen={isVinylOpen}
        onClose={() => setIsVinylOpen(false)}
      />
    </div>
  );
}
