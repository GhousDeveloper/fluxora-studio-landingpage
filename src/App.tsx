/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InquiryModal, StatDetailModal } from './components/InquiryModal';
import { HERO_BG_VIDEO_URL, StatItem } from './utils/fluxoraData';

const NAV_DESCRIPTIONS: Record<string, string> = {
  'how-it-works': 'How It Works: 01. Behavioral Research · 02. Rapid AI Prototyping · 03. Accessible Design Systems',
  about: 'About Fluxora® Studio: 1,000+ designers, strategists, and engineers across 12 countries.',
  products: 'Fluxora Products: Adaptive UI Kit, Accessibility Auditor, and Human-AI Pattern Library.',
  blogs: 'Latest Insights: Designing for Human Intuition in the Age of Generative Interfaces.',
};

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryScope, setInquiryScope] = useState('AI Product Experience');
  const [selectedStat, setSelectedStat] = useState<StatItem | null>(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeNavInfo, setActiveNavInfo] = useState<string | null>(null);
  const [highContrastMode, setHighContrastMode] = useState(false);
  const [recentInquiries, setRecentInquiries] = useState<
    Array<{ name: string; email: string; projectScope: string }>
  >([]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.muted = true;
      videoEl.defaultMuted = true;
      videoEl.play().catch(() => {
        // Ignore autoplay rejection if browser policy blocks before interaction
      });
    }
  }, []);

  const handleOpenInquiry = (defaultScope?: string) => {
    if (defaultScope) {
      setInquiryScope(defaultScope);
    }
    setInquiryOpen(true);
  };

  const handleSelectNav = (section: string) => {
    setActiveSection(section);
    if (section === 'hero') {
      setActiveNavInfo(null);
    } else {
      setActiveNavInfo(NAV_DESCRIPTIONS[section] || null);
    }
  };

  return (
    <div
      className={`relative min-h-screen bg-transparent text-white transition-colors duration-200 overflow-x-hidden ${
        highContrastMode ? 'contrast-125' : ''
      }`}
    >
      {/* Background Video Layer (Looping & Muted, No Opaque Black Overlay) */}
      <video
        ref={videoRef}
        src={HERO_BG_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        data-testid="hero-bg-video"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src={HERO_BG_VIDEO_URL} type="video/mp4" />
      </video>

      {/* Foreground Content Layer with Transparent Background */}
      <div className="relative z-10 bg-transparent">
        <Navbar
          onOpenInquiry={handleOpenInquiry}
          activeSection={activeSection}
          onSelectNav={handleSelectNav}
        />

        <HeroSection
          onOpenInquiry={handleOpenInquiry}
          onSelectStat={(stat) => setSelectedStat(stat)}
          highContrastMode={highContrastMode}
          onToggleContrast={() => setHighContrastMode((prev) => !prev)}
          activeNavInfo={activeNavInfo}
        />

        {recentInquiries.length > 0 && (
          <div className="max-w-[1240px] mx-auto px-6 md:px-10 pb-8">
            <div className="rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-sm px-4 py-3 text-xs text-white/80 flex items-center justify-between">
              <span>
                Active inquiry logged for <strong>{recentInquiries[recentInquiries.length - 1].name}</strong> (
                {recentInquiries[recentInquiries.length - 1].projectScope})
              </span>
              <span className="text-[#FF3B00]">Studio Pod Assigned</span>
            </div>
          </div>
        )}
      </div>

      <InquiryModal
        isOpen={inquiryOpen}
        defaultScope={inquiryScope}
        onClose={() => setInquiryOpen(false)}
        onSuccessSubmit={(submission) =>
          setRecentInquiries((prev) => [...prev, submission])
        }
      />

      <StatDetailModal
        stat={selectedStat}
        onClose={() => setSelectedStat(null)}
        onBookCall={(scope) => handleOpenInquiry(scope)}
      />
    </div>
  );
}
