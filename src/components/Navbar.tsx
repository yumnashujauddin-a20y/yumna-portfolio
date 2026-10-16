import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Monitor, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

export type BackgroundTheme = 'particles' | 'workspace' | 'minimal';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  bgTheme: BackgroundTheme;
  setBgTheme: (theme: BackgroundTheme) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenContact,
  bgTheme,
  setBgTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { photoUrl } = useProfilePhoto();

  const cycleBgTheme = () => {
    if (bgTheme === 'particles') setBgTheme('workspace');
    else if (bgTheme === 'workspace') setBgTheme('minimal');
    else setBgTheme('particles');
  };

  const getThemeIcon = () => {
    if (bgTheme === 'particles') return <Sparkles className="w-3.5 h-3.5 text-cyan-400" />;
    if (bgTheme === 'workspace') return <Monitor className="w-3.5 h-3.5 text-purple-400" />;
    return <Moon className="w-3.5 h-3.5 text-indigo-400" />;
  };

  const getThemeLabel = () => {
    if (bgTheme === 'particles') return 'Particle Flow';
    if (bgTheme === 'workspace') return 'Dev Desk';
    return 'Midnight';
  };

  return (
    <header className="sticky top-0 z-40 bg-[#050711]/85 backdrop-blur-xl border-b border-indigo-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark with authentic portrait avatar */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-white hover:text-indigo-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
          >
            <div className="relative">
              <img
                src={photoUrl}
                alt="Yumna"
                className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500/40 group-hover:border-indigo-400 transition-colors shadow-[0_0_12px_rgba(99,102,241,0.3)]"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#050711]" title="Available for Opportunities" />
            </div>
            <span className="font-extrabold tracking-tight">{PERSONAL_INFO.name}</span>
            <span className="text-indigo-400/80 font-mono text-xs ml-0.5 hidden sm:inline">.ai</span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
              Projects
            </a>
            <a href="#coding-hub" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
              Coding Profiles
            </a>
            <a href="#certifications" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
              Certificates & Awards
            </a>
          </nav>

          {/* Zone 3: 1 primary action + theme toggle */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={cycleBgTheme}
              className="px-2.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-indigo-500/20 hover:border-indigo-500/40 rounded-lg transition-all flex items-center gap-1.5"
              title="Toggle Ambient Background Atmosphere"
            >
              {getThemeIcon()}
              <span>{getThemeLabel()}</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-indigo-500/40 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Resume
            </button>
            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.35)] whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={cycleBgTheme}
              className="p-1.5 text-xs text-slate-300 border border-slate-800 rounded-md"
              title="Toggle Theme"
            >
              {getThemeIcon()}
            </button>
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-medium text-slate-300 border border-slate-700 rounded-md"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-indigo-900/30 bg-[#070914]/95 backdrop-blur-2xl px-4 pt-2 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-indigo-400"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-indigo-400"
          >
            Skills & ML Playground
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-indigo-400"
          >
            Projects
          </a>
          <a
            href="#coding-hub"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-indigo-400"
          >
            Coding Profiles (LeetCode, GitHub, etc.)
          </a>
          <a
            href="#certifications"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-indigo-400"
          >
            Certificates & Awards
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 shadow-md"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
