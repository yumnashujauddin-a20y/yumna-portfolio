import React, { useState } from 'react';
import { ExternalLink, Github, Code, ArrowUpRight, X, Check, Copy } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI & ML' | 'Full Stack' | 'Data Science'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  const handleCopySnippet = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="projects" className="py-20 border-b border-indigo-950/60 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
              <span>Selected Works & Technical Deployments</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Real-world implementations spanning scikit-learn predictive pipelines, exploratory data science engines, and interactive web applications.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-[#090d19]/80 border border-indigo-500/25 rounded-lg shrink-0 overflow-x-auto max-w-full">
            {(['All', 'AI & ML', 'Full Stack', 'Data Science'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {category === 'All' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Equal Width Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl border border-indigo-500/20 bg-[#090d19]/80 backdrop-blur-xl overflow-hidden hover:border-indigo-400/50 transition-all hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(99,102,241,0.18)] flex flex-col justify-between w-full"
              >
                {/* Media Container with Image & Scrim */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = '/bg-workspace.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category unboxed tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-mono text-indigo-300 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 rounded-md">
                    {project.category}
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 text-slate-400 group-hover:text-white bg-slate-900/80 backdrop-blur-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                      <span>{project.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.timeline}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Clean unboxed technology items */}
                    <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-400">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {i < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Action prompt */}
                    <div className="mt-4 flex items-center justify-between text-xs text-indigo-400 font-medium">
                      <span>Inspect Details & Code</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Lightbox & Deep-Dive Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in"
        >
          <div className="relative w-full max-w-3xl rounded-2xl border border-slate-800 bg-[#090d16] p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2">
                <span>{selectedProject.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.date}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Project Image Banner with Resilient Fallback */}
            <div className="rounded-xl overflow-hidden border border-indigo-500/20 aspect-video mb-6 bg-slate-950 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/bg-workspace.jpg';
                  }
                }}
              />
            </div>

            {/* Deep-Dive Narrative */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Architecture & Scope
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedProject.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Snippet Viewer if available */}
            {selectedProject.codeSnippet && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{selectedProject.codeSnippet.title}</span>
                  </span>
                  <button
                    onClick={() => handleCopySnippet(selectedProject.codeSnippet!.code)}
                    className="px-2.5 py-1 text-xs text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 rounded-md transition-colors flex items-center gap-1 font-mono"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{selectedProject.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {/* Tech Stack Unboxed */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500">Technologies:</span>
                {selectedProject.technologies.join(' · ')}
              </div>

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository on GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
