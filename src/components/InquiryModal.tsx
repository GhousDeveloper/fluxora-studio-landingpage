import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { validateInquiry, StatItem } from '../utils/fluxoraData';

interface InquiryModalProps {
  isOpen: boolean;
  defaultScope: string;
  onClose: () => void;
  onSuccessSubmit: (submission: { name: string; email: string; projectScope: string }) => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  defaultScope,
  onClose,
  onSuccessSubmit,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectScope, setProjectScope] = useState(defaultScope || 'AI Product Experience');
  const [errors, setErrors] = useState<{ name?: string; email?: string; projectScope?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (defaultScope) {
      setProjectScope(defaultScope);
    }
    setErrors({});
    setSubmitted(false);
  }, [defaultScope, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiry({ name, email, projectScope });
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    onSuccessSubmit({ name: name.trim(), email: email.trim(), projectScope: projectScope.trim() });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[#0A0A0A] p-6 text-white shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#FF3B00] mx-auto" />
            <h3 id="inquiry-modal-title" className="text-xl font-medium text-white">
              Discovery Request Received
            </h3>
            <p className="text-sm text-white/70">
              Thank you, <span className="text-white font-medium">{name}</span>. Our design &amp; strategy leads will respond to{' '}
              <span className="text-white font-medium">{email}</span> within 24 hours regarding{' '}
              <span className="text-[#FF3B00]">{projectScope}</span>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-white/90 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <div className="text-xs text-[#FF3B00] font-medium">Fluxora® Studio</div>
              <h3 id="inquiry-modal-title" className="text-xl font-normal tracking-tight text-white mt-1">
                Start Your Project With Us
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Share your goals and our multidisciplinary team will prepare a tailored roadmap.
              </p>
            </div>

            <div>
              <label htmlFor="inquiry-name" className="block text-xs text-white/80 mb-1.5">
                Full Name
              </label>
              <input
                id="inquiry-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Elena Vance"
                className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#FF3B00] focus:outline-none"
              />
              {errors.name && <p className="text-xs text-[#FF3B00] mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="inquiry-email" className="block text-xs text-white/80 mb-1.5">
                Work Email
              </label>
              <input
                id="inquiry-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="elena@company.com"
                className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#FF3B00] focus:outline-none"
              />
              {errors.email && <p className="text-xs text-[#FF3B00] mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="inquiry-scope" className="block text-xs text-white/80 mb-1.5">
                Project Focus
              </label>
              <input
                id="inquiry-scope"
                type="text"
                value={projectScope}
                onChange={(e) => setProjectScope(e.target.value)}
                placeholder="AI Product Design & Strategy"
                className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#FF3B00] focus:outline-none"
              />
              {errors.projectScope && (
                <p className="text-xs text-[#FF3B00] mt-1">{errors.projectScope}</p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-white/15 text-xs text-white/80 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF3B00] text-white text-xs font-semibold hover:brightness-110 transition-all cursor-pointer"
              >
                <span>Submit Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface StatModalProps {
  stat: StatItem | null;
  onClose: () => void;
  onBookCall: (scope: string) => void;
}

export const StatDetailModal: React.FC<StatModalProps> = ({ stat, onClose, onBookCall }) => {
  if (!stat) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="stat-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[#0A0A0A] p-6 text-white shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close metric details"
          className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-3xl font-normal text-[#FF3B00] tabular-nums">{stat.value}</div>
        <h3 id="stat-modal-title" className="text-lg font-medium text-white mt-1">
          {stat.detailTitle}
        </h3>
        <p className="text-xs text-white/70 leading-relaxed mt-2">{stat.detailDescription}</p>

        <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
          {stat.highlights.map((item) => (
            <li key={item} className="text-xs text-white/85 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-white/15 text-xs text-white/80 hover:text-white cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              const scope = stat.detailTitle;
              onClose();
              onBookCall(scope);
            }}
            className="px-5 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-white/90 cursor-pointer"
          >
            Request Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};
