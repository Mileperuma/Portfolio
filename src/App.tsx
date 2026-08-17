import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { AmbientField } from './components/AmbientField';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] relative overflow-x-hidden">
      <AmbientField />

      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <SkillsSection />
        <ContactSection />
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
