import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Code, GitBranch, Linkedin, Trophy, Terminal, Award } from 'lucide-react';
import { CODING_PROFILES, CodingProfile } from '../data/portfolioData';

export const CodingPlatforms: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyHandle = (username: string, idx: number) => {
    navigator.clipboard.writeText(username);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getPlatformIcon = (platform: CodingProfile['platform']) => {
    switch (platform) {
      case 'LeetCode':
        return <Code className="w-5 h-5 text-amber-400" />;
      case 'GitHub':
        return <GitBranch className="w-5 h-5 text-slate-200" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5 text-blue-400" />;
      case 'HackerRank':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'CodeChef':
        return <Trophy className="w-5 h-5 text-purple-400" />;
      default:
        return <Code className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="coding-hub" className="py-20 border-b border-indigo-950/60 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            <span>Problem Solving & Coding Ecosystem</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>5 Active Platforms</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Competitive Coding & Open-Source Profiles
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Consistent algorithmic practice, data structures, open-source repositories, and competitive contest problem solving across global programming platforms.
          </p>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CODING_PROFILES.map((profile, idx) => (
            <div
              key={profile.platform}
              className={`rounded-2xl border border-indigo-500/20 bg-[#090d19]/80 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all hover:-translate-y-1 group relative ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#0e1426]/90 to-[#090d19]/80 border-indigo-500/35 shadow-[0_0_35px_rgba(99,102,241,0.15)]' : ''
              }`}
            >
              <div>
                {/* Card Top: Platform Icon + Direct Link Action */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                      {getPlatformIcon(profile.platform)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {profile.name}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">
                        @{profile.username}
                      </span>
                    </div>
                  </div>

                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit Yumna's ${profile.name} profile`}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Focus Area */}
                <div className="text-xs font-medium text-indigo-400/90 mb-2.5">
                  {profile.focus}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {profile.description}
                </p>
              </div>

              {/* Bottom Actions & Stat Strip */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white font-mono tabular-nums">
                    {profile.statHighlight}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {profile.statLabel}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyHandle(profile.username, idx)}
                    className="px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700 rounded-md transition-colors flex items-center gap-1.5"
                    title={`Copy username @${profile.username}`}
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-[11px] text-emerald-400 font-mono">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-500" />
                        <span className="text-[11px] font-mono">Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors inline-flex items-center gap-1"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Quick Problem Solving Statement Card */}
          <div className="rounded-2xl border border-indigo-900/40 bg-gradient-to-br from-indigo-950/30 to-slate-900/50 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4 text-indigo-400" />
                <span>Continuous Practice</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Algorithmic Rigor & Growth
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Emphasizing foundational data structures (Arrays, Linked Lists, Binary Trees, Graphs) and runtime complexity optimization (Big-O analysis) to write clean, production-ready code.
              </p>
            </div>

            <div className="pt-4 border-t border-indigo-900/40 text-xs text-slate-400 flex items-center justify-between">
              <span>Goal: SDE & AI Intern '26</span>
              <a
                href="https://github.com/yumnashujauddin-a20y"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1"
              >
                <span>View GitHub Repos</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
