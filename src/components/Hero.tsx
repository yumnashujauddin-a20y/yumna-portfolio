import React, { useState } from 'react';
import { ArrowDown, Copy, Check, ExternalLink, Terminal, MapPin, GraduationCap, Award, Camera, RotateCcw, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { photoUrl, updatePhoto, resetPhoto, isCustomPhoto } = useProfilePhoto();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          updatePhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-indigo-950/60 overflow-hidden">
      {/* Glow elements mimicking the neon workstation ambiance */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-purple-600/15 via-indigo-600/15 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Terminal prompt kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-cyan-300 bg-slate-900/80 border border-cyan-500/30 rounded-lg w-fit mb-5 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>~/bbdu/ai-lab $ python3 -m yumna.engineer</span>
              <span className="w-1.5 h-3 bg-cyan-400 inline-block animate-pulse" />
            </div>

            {/* Clean unboxed kicker metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-3">
              <span>B.Tech CS (AI)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Babu Banarasi Das University</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-cyan-400 font-mono">Class of 2028</span>
            </div>

            {/* Headline with cyber-neon text gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 [text-wrap:balance]">
              Turning ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">intelligent solutions</span> through machine learning & code.
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6">
              Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. A Computer Science student specializing in Artificial Intelligence. I engineer predictive machine learning pipelines, build responsive full-stack applications, and solve algorithmic challenges across competitive platforms.
            </p>

            {/* Quick credentials strip in glass bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-300 mb-8 border border-indigo-500/20 bg-slate-900/60 backdrop-blur-md rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>CGPA: <strong className="font-mono text-white">9.05 / 10</strong></span>
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Lucknow, Uttar Pradesh</span>
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-indigo-300">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                <span>CodSoft Developer Associate</span>
              </span>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] inline-flex items-center gap-2"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/yumna-shujauddin-50675a335"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-indigo-500/25 hover:border-indigo-500/50 rounded-lg transition-all inline-flex items-center gap-2"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-500 rounded-lg transition-colors inline-flex items-center gap-2"
                title="Copy primary email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Container with Photo in Developer Cockpit */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative group mx-auto w-full max-w-md lg:max-w-none">
              {/* Outer Cockpit Frame with Neon Rim */}
              <div className="relative rounded-2xl overflow-hidden border border-indigo-500/30 bg-[#090d19]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                {/* Code Window Titlebar */}
                <div className="px-4 py-2.5 bg-slate-950/80 border-b border-indigo-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400">yumna_profile.py</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>AI/ML Core</span>
                  </span>
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />

                <div className="aspect-square w-full relative overflow-hidden bg-slate-950">
                  <img
                    src={photoUrl}
                    alt="Yumna - Computer Science and AI/ML Developer"
                    className="w-full h-full object-cover object-center filter contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle contrast scrim at bottom for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-transparent to-transparent opacity-80" />

                  {/* Top action controls: Upload / Change Photo */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                    {isCustomPhoto && (
                      <button
                        onClick={resetPhoto}
                        className="px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md border border-slate-700/80 rounded-md transition-colors flex items-center gap-1"
                        title="Reset to default portrait"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    )}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1 text-[11px] font-medium text-white bg-indigo-600/90 hover:bg-indigo-600 backdrop-blur-md rounded-md transition-colors flex items-center gap-1.5 shadow-sm"
                      title="Upload or change with your original photo"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{isCustomPhoto ? "Replace Photo" : "Upload Your Pic"}</span>
                    </button>
                  </div>
                </div>

                {/* Information overlay inside bottom of container */}
                <div className="p-5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent text-white border-t border-indigo-500/15">
                  <div className="flex items-center justify-between text-xs text-indigo-300 mb-1 font-mono">
                    <span className="text-cyan-400">B.Tech-CS-AI @ BBDU</span>
                    <span className="text-purple-400">2024 – 2028</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white flex items-center justify-between">
                    <span>{PERSONAL_INFO.fullName}</span>
                    <span className="text-xs font-mono font-normal text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available</span>
                    </span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-2 font-mono">
                    <span>Python · ML · Full Stack</span>
                    <span aria-hidden="true" className="text-slate-600">/</span>
                    <span>Lucknow, India</span>
                  </p>
                </div>
              </div>

              {/* Floating tech stack indicator on side */}
              <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-cyan-400/90">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Python 3.x · Scikit-learn · C · JS</span>
                </span>
                <span className="text-purple-300/80">Summer '26 Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column metric strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-indigo-500/20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight text-cyan-400">
              9.05 <span className="text-sm font-normal text-slate-400">/ 10</span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
              BBDU CGPA
            </span>
            <span className="text-xs text-slate-400 mt-0.5">Top-tier academic consistency</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight text-purple-400">
              89th <span className="text-sm font-normal text-slate-400">Rank</span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
              Unstop Daily Quiz
            </span>
            <span className="text-xs text-slate-400 mt-0.5">National October Series</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight text-indigo-400">
              5+ <span className="text-sm font-normal text-slate-400">Projects</span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
              Engineering Work
            </span>
            <span className="text-xs text-slate-400 mt-0.5">ML, EDA & Full-Stack Apps</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight text-emerald-400">
              5 <span className="text-sm font-normal text-slate-400">Platforms</span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
              Coding Profiles
            </span>
            <span className="text-xs text-slate-400 mt-0.5">LeetCode, CodeChef, HackerRank</span>
          </div>
        </div>
      </div>
    </section>
  );
};
