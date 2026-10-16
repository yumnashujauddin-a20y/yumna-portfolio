import React from 'react';
import { GraduationCap, Briefcase, FileText, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface AboutProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume, onOpenContact }) => {
  const { photoUrl } = useProfilePhoto();

  return (
    <section id="about" className="py-20 border-b border-indigo-950/60 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            <span>Academic Background & Practical Journey</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>BBD University</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Bridging rigorous artificial intelligence theory with practical full-stack software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6 text-sm text-slate-300 leading-relaxed">
            <p className="text-base text-slate-200">
              I am an undergraduate Computer Science student specializing in Artificial Intelligence at <strong className="text-white">Babu Banarasi Das (BBD) University</strong>, Lucknow. My passion lies at the intersection of mathematical reasoning, machine learning pipelines, and elegant, high-performance web software.
            </p>

            <p>
              Throughout my academic journey and practical engineering associations—notably with <strong className="text-white">CodSoft</strong>—I focus on solving non-trivial problems through clean, modular code. Whether developing end-to-end classification and regression models in Scikit-learn, extracting exploratory statistical trends with Pandas and NumPy, or engineering responsive web applications with semantic HTML5, CSS3, and JavaScript, I prioritize clarity, performance, and user value.
            </p>

            <p>
              I believe great developers are perpetual students. I reinforce my algorithmic intuition by solving problems on LeetCode, CodeChef, and HackerRank, and participating in hackathons and competitive tech quizzes such as the TATA Crucible Campus Quiz and Unstop Daily Quiz (where I ranked <strong className="text-indigo-400 font-mono">89th</strong> nationally in the October Series).
            </p>

            {/* Core Competencies Checklist */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Predictive ML & Scikit-learn Pipelines</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Exploratory Data Analysis (EDA) & Cleaning</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Data Structures & Big-O Optimization</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Responsive Modern Web Design (HTML5/CSS/JS)</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Structured Resume</span>
              </button>
              <button
                onClick={onOpenContact}
                className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-colors"
              >
                Inquire for Internships
              </button>
            </div>
          </div>

          {/* Education & Experience Side Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Student Identity Card */}
            <div className="rounded-2xl border border-indigo-500/25 bg-[#090d19]/80 backdrop-blur-xl p-4 sm:p-5 flex items-center gap-4 shadow-[0_0_25px_rgba(99,102,241,0.12)]">
              <img
                src={photoUrl}
                alt="Yumna"
                className="w-16 h-16 rounded-xl object-cover border border-cyan-400/40 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
              />
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-white truncate">{PERSONAL_INFO.fullName}</h4>
                <p className="text-xs text-cyan-400 font-mono">B.Tech-CS-AI Undergraduate</p>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate">Babu Banarasi Das University · CGPA 9.05/10</p>
              </div>
            </div>

            {/* University Card */}
            <div className="rounded-2xl border border-indigo-500/20 bg-[#090d19]/80 backdrop-blur-xl p-6 relative overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-cyan-400 font-bold block tabular-nums">
                    GPA: {EDUCATION_DATA.gpa}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {EDUCATION_DATA.duration}
                  </span>
                </div>
              </div>

              <h3 className="text-base font-bold text-white mb-1">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-xs font-medium text-indigo-300 mb-2">
                {EDUCATION_DATA.branch}
              </p>
              <p className="text-xs text-slate-400 mb-4 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{EDUCATION_DATA.institution}, {EDUCATION_DATA.location}</span>
              </p>

              <div className="pt-3 border-t border-indigo-900/40">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Key Coursework
                </div>
                <div className="text-xs text-slate-400 space-y-1 font-mono">
                  {EDUCATION_DATA.coursework.slice(0, 4).map((course, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Association Card */}
            <div className="rounded-2xl border border-indigo-500/20 bg-[#090d19]/80 backdrop-blur-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Practical Experience
                </span>
              </div>

              <h3 className="text-base font-bold text-white">
                CodSoft
              </h3>
              <p className="text-xs font-medium text-slate-300 mb-2">
                Software Development & Machine Learning Associate
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hands-on practical development focusing on algorithmic problem statements, modular Python development, data manipulation, and software engineering life cycle best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
