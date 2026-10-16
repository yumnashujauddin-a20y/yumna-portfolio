import React from 'react';
import { ArrowUp, Code, GitBranch, Linkedin, Terminal, Trophy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060d]/90 backdrop-blur-xl border-t border-indigo-950/80 text-slate-400 py-12 text-xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <div className="text-base font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
              <span>{PERSONAL_INFO.fullName}</span>
            </div>
            <p className="mt-1 text-slate-400 max-w-sm text-xs">
              Computer Science & AI Student · Babu Banarasi Das University, Lucknow
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://leetcode.com/u/Yumna_shujauddin/"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-amber-400 bg-slate-900 rounded-lg transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/yumnashujauddin-a20y"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <GitBranch className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/yumna-shujauddin-50675a335"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 bg-slate-900 rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/9801yumna"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-emerald-400 bg-slate-900 rounded-lg transition-colors"
              aria-label="HackerRank Profile"
            >
              <Terminal className="w-4 h-4" />
            </a>
            <a
              href="https://www.codechef.com/users/yumna_9801"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-purple-400 bg-slate-900 rounded-lg transition-colors"
              aria-label="CodeChef Profile"
            >
              <Trophy className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <span>·</span>
            <a href="#skills" className="hover:text-slate-300 transition-colors">Skills</a>
            <span>·</span>
            <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
            <span>·</span>
            <a href="#coding-hub" className="hover:text-slate-300 transition-colors">Coding Hub</a>
            <span>·</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
