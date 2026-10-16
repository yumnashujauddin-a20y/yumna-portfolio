import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Simulate reliable dispatch & formulate mailto
    const subject = encodeURIComponent(formState.subject || `Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    
    // Set UI success state
    setSubmitted(true);
    
    // Also provide mailto trigger
    window.location.href = `mailto:${PERSONAL_INFO.primaryEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 border-b border-indigo-950/60 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            <span>Direct Outreach & Opportunities</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Let's Connect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            I am actively seeking software engineering and AI/ML internship opportunities. Let's discuss projects, hackathons, or potential collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Communication Info */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email */}
            <div className="rounded-2xl border border-indigo-500/20 bg-[#090d19]/80 backdrop-blur-xl p-5 flex items-start justify-between shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:border-indigo-400/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Primary Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.primaryEmail}`}
                    className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                  >
                    {PERSONAL_INFO.primaryEmail}
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Quickest response time</span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.primaryEmail, 'primary-email')}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Copy primary email"
              >
                {copiedKey === 'primary-email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Alternate Email */}
            <div className="rounded-2xl border border-indigo-500/20 bg-[#090d19]/80 backdrop-blur-xl p-5 flex items-start justify-between shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:border-indigo-400/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Alternate Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.secondaryEmail}`}
                    className="text-sm font-semibold text-white hover:text-purple-300 transition-colors"
                  >
                    {PERSONAL_INFO.secondaryEmail}
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5 font-mono">Academic / direct platform channel</span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.secondaryEmail, 'secondary-email')}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Copy secondary email"
              >
                {copiedKey === 'secondary-email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-indigo-500/20 bg-[#090d19]/80 backdrop-blur-xl p-5 flex items-start justify-between shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:border-emerald-500/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Phone & WhatsApp</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-semibold font-mono text-white hover:text-emerald-300 transition-colors tabular-nums"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5 font-mono">Direct phone call or messaging</span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Copy phone number"
              >
                {copiedKey === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-indigo-500/20 bg-[#090d19]/80 backdrop-blur-xl p-5 flex items-center gap-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Location</span>
                <span className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.location}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Open to on-site in India & remote globally</span>
              </div>
            </div>
          </div>

          {/* Interactive Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-indigo-500/25 bg-[#090d19]/85 backdrop-blur-xl p-6 sm:p-8 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Send a Direct Message</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Start a Conversation
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-indigo-950/40 border border-indigo-800/60 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your default mail client has been opened with your inquiry. You can also write directly to <strong className="text-white">{PERSONAL_INFO.primaryEmail}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Summer 2026 Internship Opportunity / Collaboration"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Share details regarding your team, role expectations, or project..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
