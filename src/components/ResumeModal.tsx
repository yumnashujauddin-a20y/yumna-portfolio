import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATES, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
YUMNA
Software Engineer | Aspiring AI/ML & Full Stack Developer
Email: ${PERSONAL_INFO.primaryEmail} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
Profiles:
- LeetCode: https://leetcode.com/u/Yumna_shujauddin/
- GitHub: https://github.com/yumnashujauddin-a20y
- LinkedIn: https://www.linkedin.com/in/yumna-shujauddin-50675a335
- HackerRank: https://www.hackerrank.com/profile/9801yumna
- CodeChef: https://www.codechef.com/users/yumna_9801

SUMMARY:
${PERSONAL_INFO.bio}

EDUCATION:
${EDUCATION_DATA.institution}
${EDUCATION_DATA.degree} - ${EDUCATION_DATA.branch}
Duration: ${EDUCATION_DATA.duration} | CGPA: ${EDUCATION_DATA.gpa}

SKILLS:
- Languages: Python, C, JavaScript, HTML5, CSS3, Basic SQL
- AI/ML & Data Science: Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, EDA, Model Evaluation
- Core CS: Data Structures & Algorithms, OOP, SDLC, Git, Problem Solving

EXPERIENCE:
CodSoft - Software Development & Machine Learning Associate
- Worked on practical software development and machine learning assignments using Python.
- Implemented data manipulation pipelines and modular algorithms following best practices.

PROJECTS:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

CERTIFICATIONS & HONORS:
${CERTIFICATES.map(c => `- ${c.title} (${c.issuer}, ${c.date})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl rounded-2xl border border-slate-800 bg-[#090d16] shadow-2xl my-6 flex flex-col max-h-[92vh]">
        {/* Top bar modal control */}
        <div className="p-4 sm:px-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase text-indigo-400 font-bold">Curriculum Vitae</span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-300 font-medium">ATS-Formatted View</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-slate-300 space-y-6">
          {/* Header */}
          <div className="text-center border-b border-slate-800 pb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {PERSONAL_INFO.fullName}
            </h2>
            <div className="text-xs sm:text-sm font-medium text-indigo-400 mt-1">
              {PERSONAL_INFO.role}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-2 font-mono">
              <a href={`mailto:${PERSONAL_INFO.primaryEmail}`} className="hover:text-white transition-colors">{PERSONAL_INFO.primaryEmail}</a>
              <span>·</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors">{PERSONAL_INFO.phone}</a>
              <span>·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-400 mt-2 font-mono">
              <a href="https://leetcode.com/u/Yumna_shujauddin/" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">LeetCode</a>
              <span>·</span>
              <a href="https://github.com/yumnashujauddin-a20y" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">GitHub</a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/yumna-shujauddin-50675a335" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">LinkedIn</a>
              <span>·</span>
              <a href="https://www.hackerrank.com/profile/9801yumna" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">HackerRank</a>
              <span>·</span>
              <a href="https://www.codechef.com/users/yumna_9801" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">CodeChef</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 border-b border-slate-800 pb-1 mb-2">
              Professional Summary
            </h3>
            <p className="text-xs leading-relaxed text-slate-300">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 border-b border-slate-800 pb-1 mb-2">
              Education
            </h3>
            <div className="flex justify-between items-baseline text-xs mb-1">
              <div>
                <strong className="text-white font-semibold">{EDUCATION_DATA.institution}</strong>
                <div className="text-slate-400">{EDUCATION_DATA.degree} — {EDUCATION_DATA.branch}</div>
              </div>
              <div className="text-right font-mono text-[11px]">
                <div className="text-white font-bold">GPA: {EDUCATION_DATA.gpa}</div>
                <div className="text-slate-500">{EDUCATION_DATA.duration}</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 border-b border-slate-800 pb-1 mb-2">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><strong className="text-white">Programming:</strong> Python, C, JavaScript (ES6+), HTML5, CSS3, SQL</div>
              <div><strong className="text-white">AI & Data Science:</strong> Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, EDA</div>
              <div><strong className="text-white">Core Computer Science:</strong> Data Structures, Algorithms, OOP, SDLC</div>
              <div><strong className="text-white">Developer Tools:</strong> Git, GitHub, VS Code, Jupyter Notebook, Linux CLI</div>
            </div>
          </div>

          {/* Practical Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 border-b border-slate-800 pb-1 mb-2">
              Experience
            </h3>
            <div className="flex justify-between items-baseline text-xs mb-1">
              <strong className="text-white font-semibold">CodSoft</strong>
              <span className="text-[11px] font-mono text-slate-500">Jul 2025 – Present</span>
            </div>
            <div className="text-xs text-indigo-300 mb-1.5">Software Development & Machine Learning Associate</div>
            <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
              <li>Developed practical Python machine learning pipelines and data preprocessing scripts.</li>
              <li>Collaborated on algorithmic problem solutions, implementing clean object-oriented architecture.</li>
            </ul>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 border-b border-slate-800 pb-1 mb-2">
              Featured Projects
            </h3>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-white">{proj.title}</span>
                    <span className="text-[11px] font-mono text-slate-500">{proj.date}</span>
                  </div>
                  <div className="text-[11px] text-indigo-300/80 mb-0.5">
                    {proj.technologies.join(' · ')}
                  </div>
                  <p className="text-slate-400">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 border-b border-slate-800 pb-1 mb-2">
              Certifications & Awards
            </h3>
            <ul className="text-xs text-slate-400 space-y-1.5">
              {CERTIFICATES.map((cert) => (
                <li key={cert.id} className="flex justify-between items-start">
                  <span>
                    <strong className="text-slate-200">{cert.title}</strong> — {cert.issuer}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 shrink-0 ml-2">{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
