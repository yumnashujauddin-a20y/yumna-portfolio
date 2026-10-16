import React, { useState } from 'react';
import { Navbar, BackgroundTheme } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CodingPlatforms } from './components/CodingPlatforms';
import { CertificatesAwards } from './components/CertificatesAwards';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [bgTheme, setBgTheme] = useState<BackgroundTheme>('particles');

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ProfilePhotoProvider>
      <div className="min-h-screen bg-[#050711] text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white relative overflow-x-hidden">
        {/* Atmospheric Developer Background System matching reference image */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {bgTheme === 'particles' && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen filter contrast-125 transition-opacity duration-1000"
              style={{ backgroundImage: `url('/bg-particles.jpg')` }}
            />
          )}
          {bgTheme === 'workspace' && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen filter contrast-110 transition-opacity duration-1000"
              style={{ backgroundImage: `url('/bg-workspace.jpg')` }}
            />
          )}

          {/* Luminous neon radial glows (Purple, Cyan, Indigo) */}
          <div className="absolute top-0 left-1/4 w-[750px] h-[550px] bg-purple-600/12 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[650px] h-[550px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/3 w-[800px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />

          {/* Gradient scrim for guaranteed readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050711]/60 via-[#050711]/85 to-[#050711]" />
        </div>

        {/* Navigation Header */}
        <div className="relative z-40">
          <Navbar
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={handleOpenContact}
            bgTheme={bgTheme}
            setBgTheme={setBgTheme}
          />
        </div>

        {/* Main Content Sections */}
        <main className="flex-1 relative z-10">
          {/* Hero Section */}
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={handleOpenContact}
          />

          {/* Coding & Competitive Programming Hub */}
          <CodingPlatforms />

          {/* About & Academic Journey */}
          <About
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={handleOpenContact}
          />

          {/* Technical Skills & Interactive ML Sandbox */}
          <Skills />

          {/* Featured Projects & Code Lightbox */}
          <Projects />

          {/* Verified Certificates & Competitive Honors */}
          <CertificatesAwards />

          {/* Direct Contact & Outreach */}
          <Contact />
        </main>

        {/* Footer */}
        <div className="relative z-20">
          <Footer />
        </div>

        {/* ATS Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ProfilePhotoProvider>
  );
}
