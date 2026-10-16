import React, { useState } from 'react';
import { Award, Trophy, BookmarkCheck, Calendar, ShieldCheck, X } from 'lucide-react';
import { CERTIFICATES, Certificate } from '../data/portfolioData';

export const CertificatesAwards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Certifications' | 'Competitions' | 'Awards'>('All');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredCerts = activeTab === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => {
        if (activeTab === 'Certifications') return c.category === 'Certification';
        if (activeTab === 'Competitions') return c.category === 'Hackathon' || c.category === 'Competition';
        if (activeTab === 'Awards') return c.category === 'Award';
        return true;
      });

  return (
    <section id="certifications" className="py-20 border-b border-indigo-950/60 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
              <span>Verified Qualifications & Competitive Honors</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Certificates & Awards
            </h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Formal accreditations, national competition ranks, and hackathon participation validating technical competency.
            </p>
          </div>

          {/* Segmented filter */}
          <div className="flex items-center gap-1 p-1 bg-[#090d19]/80 border border-indigo-500/25 rounded-lg shrink-0">
            {(['All', 'Certifications', 'Competitions', 'Awards'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer rounded-2xl border border-indigo-500/20 bg-[#090d19]/80 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all group"
            >
              <div>
                {/* Header: Icon & Category label */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {cert.category === 'Award' ? (
                      <Trophy className="w-5 h-5 text-amber-400" />
                    ) : cert.category === 'Hackathon' ? (
                      <Award className="w-5 h-5 text-indigo-400" />
                    ) : (
                      <BookmarkCheck className="w-5 h-5 text-emerald-400" />
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <div className="text-xs font-medium text-indigo-400 mb-1">
                  {cert.issuer}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer: Unboxed badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{cert.badge}</span>
                </span>
                <span className="text-slate-400 group-hover:text-indigo-400 transition-colors text-[11px]">
                  View Details →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
        >
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-[#090d16] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2">
              <span>{selectedCert.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedCert.date}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              {selectedCert.title}
            </h3>
            <p className="text-xs text-indigo-300 mb-4">
              Issued by {selectedCert.issuer}
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-6 text-xs text-slate-300 leading-relaxed">
              {selectedCert.description}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span className="font-mono text-slate-300">
                Status: Verified Academic / Competitive Record
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
