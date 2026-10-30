import React from 'react';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { HERO_STATS, StatItem } from '../utils/fluxoraData';

interface HeroSectionProps {
  onOpenInquiry: (defaultScope?: string) => void;
  onSelectStat: (stat: StatItem) => void;
  highContrastMode: boolean;
  onToggleContrast: () => void;
  activeNavInfo: string | null;
}

const WireframeGlobe: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.25" />
    <ellipse cx="12" cy="12" rx="4.6" ry="9.25" stroke="currentColor" strokeWidth="1.25" />
    <path d="M3.2 9H20.8" stroke="currentColor" strokeWidth="1.25" />
    <path d="M3.2 15H20.8" stroke="currentColor" strokeWidth="1.25" />
    <path d="M12 2.75V21.25" stroke="currentColor" strokeWidth="1.25" />
  </svg>
);

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenInquiry,
  onSelectStat,
  highContrastMode,
  onToggleContrast,
  activeNavInfo,
}) => {
  return (
    <main id="top" className="w-full pt-7 pb-6 overflow-hidden bg-transparent">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Top Kicker Row */}
        <div className="flex items-center gap-2.5 text-white/85">
          <WireframeGlobe className="w-[22px] h-[22px] text-white/85 shrink-0" />
          <div className="text-[11px] leading-[1.3] font-normal text-white/85 tracking-[-0.01em]">
            <div>AI-powered creativity</div>
            <div>for the next era</div>
          </div>
        </div>

        {/* Main Hero Display Headline */}
        <h1 className="mt-3.5 text-[50px] sm:text-[62px] lg:text-[72px] font-normal leading-[1.01] tracking-[-0.035em] text-white select-none">
          <span className="block">Technology</span>
          <span className="block">Crafted for All</span>
          <span className="block">
            Not{' '}
            <span className="font-serif-italic text-[#FF3B00] font-normal tracking-[-0.015em] pr-2">
              Machines
            </span>
          </span>
        </h1>

        {/* Subheadline Prose */}
        <p className="mt-4 text-[15px] sm:text-[15.5px] leading-[1.48] text-white/80 font-normal max-w-[375px] tracking-[-0.01em]">
          We create clear, intuitive, and accessible digital experiences shaped by real human behavior.
        </p>

        {/* Primary CTA Button & 60k+ Social Proof Row */}
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <button
            type="button"
            onClick={() => onOpenInquiry('Start a Human-Centered AI Project')}
            className="group relative inline-flex items-center gap-5 rounded-full bg-gradient-to-r from-[#FF3B00] via-[#FF4608] to-[#FF581B] p-[5px] pl-7 text-white shadow-[0_6px_28px_rgba(255,59,0,0.3)] hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="text-[14px] font-medium tracking-[-0.01em] whitespace-nowrap">
              Get started
            </span>
            <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
              <ArrowRight className="w-4 h-4 stroke-[1.75]" />
            </span>
          </button>

          {/* 60k+ People Trust Us Cluster */}
          <div className="flex items-center gap-3">
            <div className="flex items-center -space-x-2.5" aria-hidden="true">
              {/* Avatar 1: Crimson/Orange Portrait */}
              <div className="w-8 h-8 rounded-full ring-1 ring-black/60 overflow-hidden bg-gradient-to-br from-[#FF2A00] to-[#990F00] flex items-center justify-center relative">
                <img
                  src="/assets/profile-1.png"
                  alt="Fluxora creator profile 1"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              {/* Avatar 2: Deep Violet/Magenta Portrait */}
              <div className="w-8 h-8 rounded-full ring-1 ring-black/60 overflow-hidden bg-gradient-to-br from-[#7B2CBF] to-[#240046] flex items-center justify-center relative">
                <img
                  src="/assets/profile-2.png"
                  alt="Fluxora creator profile 2"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              {/* Avatar 3: Electric Cyan/Aqua Portrait */}
              <div className="w-8 h-8 rounded-full ring-1 ring-black/60 overflow-hidden bg-gradient-to-br from-[#00F5D4] to-[#0077B6] flex items-center justify-center relative">
                <img
                  src="/assets/profile-3.png"
                  alt="Fluxora creator profile 3"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>

            <div className="text-[12px] leading-[1.25]">
              <div className="font-medium text-white">60k+ people</div>
              <div className="text-white/55 font-normal">trust us</div>
            </div>
          </div>
        </div>

        {/* Stat Cards + Our Partners Band */}
        <div className="mt-7 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Left: 150+ & 98% Stat Cards */}
          <div className="flex items-center gap-3.5">
            {HERO_STATS.map((stat) => (
              <button
                key={stat.id}
                type="button"
                onClick={() => onSelectStat(stat)}
                aria-label={`${stat.value} ${stat.label} — View proof details`}
                className="w-[172px] sm:w-[178px] rounded-[15px] border border-white/[0.15] bg-white/[0.03] backdrop-blur-[2px] hover:bg-white/[0.08] hover:border-white/30 px-4 py-3.5 text-left transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B00]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[29px] leading-none font-normal tracking-[-0.03em] text-white tabular-nums">
                    {stat.value}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all mt-1" />
                </div>
                <div className="mt-3.5 text-[11px] text-white/65 font-normal">
                  {stat.label}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Our Partners Logo Strip */}
          <div className="lg:pb-3 flex flex-col lg:items-end">
            <div className="text-[11.5px] text-white/75 font-normal mb-3.5 lg:text-right">
              Our Partners
            </div>

            <div className="relative flex items-center gap-7 sm:gap-9 overflow-x-auto no-scrollbar">
              {/* 1. BookStore */}
              <div className="flex items-center gap-1.5 text-white/85 whitespace-nowrap shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M3 4.5C3 3.67 3.67 3 4.5 3H9.5V11.5H4.5C3.67 11.5 3 10.83 3 10V4.5Z" />
                  <path d="M10.5 8.5H15.5C16.33 8.5 17 9.17 17 10V15.5C17 16.33 16.33 17 15.5 17H10.5V8.5Z" />
                </svg>
                <span className="text-[13.5px] font-medium tracking-[-0.01em]">BookStore</span>
              </div>

              {/* 2. zantic */}
              <div className="flex items-center gap-1.5 text-white/90 whitespace-nowrap shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <rect x="3" y="3" width="5.5" height="5.5" rx="1.2" />
                  <rect x="11.5" y="3" width="5.5" height="5.5" rx="1.2" />
                  <rect x="7.25" y="7.25" width="5.5" height="5.5" rx="1" />
                  <rect x="3" y="11.5" width="5.5" height="5.5" rx="1.2" />
                  <rect x="11.5" y="11.5" width="5.5" height="5.5" rx="1.2" />
                </svg>
                <span className="text-[15px] font-semibold tracking-[-0.02em]">zantic</span>
              </div>

              {/* 3. Crona */}
              <div className="flex items-center gap-1.5 text-white/80 whitespace-nowrap shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M15.5 6.5L10 3.2L4.5 6.5V13.5L10 16.8L15.5 13.5"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[13.5px] font-normal tracking-[-0.01em]">Crona</span>
              </div>

              {/* 4. Mercury */}
              <div className="flex items-center gap-1.5 text-white/80 whitespace-nowrap shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 22 18" fill="none" aria-hidden="true">
                  <path
                    d="M2 15V8C2 5.2 4.2 3 7 3C9.2 3 10.5 4.5 11 6.2C11.5 4.5 12.8 3 15 3C17.8 3 20 5.2 20 8V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="7" cy="12.5" r="1.5" fill="currentColor" />
                  <circle cx="15" cy="12.5" r="1.5" fill="currentColor" />
                </svg>
                <span className="text-[13.5px] font-medium tracking-[-0.01em]">Mercury</span>
              </div>

              {/* 5. Wagir (with subtle right-edge fade matching reference) */}
              <div className="flex items-center gap-1.5 text-white/60 whitespace-nowrap shrink-0 relative">
                <svg className="w-4 h-4 text-white/80" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 2L13 6L10 10L7 6L10 2Z" />
                  <path d="M10 10L13 14L10 18L7 14L10 10Z" />
                  <path d="M5 6.5L8 10L5 13.5L2 10L5 6.5Z" />
                  <path d="M15 6.5L18 10L15 13.5L12 10L15 6.5Z" />
                </svg>
                <span className="text-[13.5px] font-normal tracking-[-0.01em] bg-gradient-to-r from-white/75 via-white/40 to-transparent bg-clip-text text-transparent">
                  Wagir
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Optional contextual banner when user clicks top nav items */}
        {activeNavInfo && (
          <div className="mt-4 rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-sm px-4 py-2.5 flex items-center justify-between text-xs text-white/80">
            <span>{activeNavInfo}</span>
            <button
              type="button"
              onClick={() => onOpenInquiry(activeNavInfo)}
              className="text-[#FF3B00] font-medium hover:underline cursor-pointer whitespace-nowrap ml-4"
            >
              Book a session →
            </button>
          </div>
        )}

        {/* Second Section: Why choose us / Meet The Minds Behind The Work */}
        <section
          id="about"
          aria-labelledby="minds-heading"
          className="mt-10 pt-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Why choose us + Meet The Minds Behind The Work + Dark Card */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3B00] inline-block" aria-hidden="true" />
              <span className="text-[13px] font-normal text-white/90 tracking-[-0.01em]">
                Why choose us
              </span>
            </div>

            <h2
              id="minds-heading"
              className="mt-2 text-[38px] sm:text-[44px] font-normal leading-[1.06] tracking-[-0.03em]"
            >
              <span className="block text-white">Meet The Minds</span>
              <span className="block text-white/45">Behind The Work</span>
            </h2>

            {/* Bottom-left rounded showcase container with transparent background */}
            <button
              id="products"
              type="button"
              onClick={() => onOpenInquiry('Dedicated Studio Pod Inquiry')}
              aria-label="Explore Fluxora Studio multidisciplinary pods"
              className="mt-5 w-full max-w-[490px] h-[88px] rounded-t-[18px] border border-b-0 border-white/[0.15] bg-white/[0.02] backdrop-blur-[1px] hover:border-white/30 transition-colors block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B00]"
            />
          </div>

          {/* Right Column: Social/Theme Controls + Studio Manifesto + Globe & +12 Team Avatars */}
          <div
            id="how-it-works"
            className="lg:col-span-6 flex flex-col justify-between pt-2"
          >
            <div className="w-full max-w-[465px] lg:ml-auto">
              {/* Top-right X, Sun/Theme circle, LinkedIn cluster */}
              <div className="flex items-center justify-end gap-4">
                <a
                  href="#social-x"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenInquiry('Connect via X / Social');
                  }}
                  aria-label="Fluxora on X"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/85 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <button
                  type="button"
                  onClick={onToggleContrast}
                  aria-label={highContrastMode ? 'Switch to standard studio mode' : 'Toggle studio contrast mode'}
                  className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B00]"
                >
                  {highContrastMode ? (
                    <Moon className="w-4 h-4 stroke-[2]" />
                  ) : (
                    <Sun className="w-4 h-4 stroke-[2]" />
                  )}
                </button>

                <a
                  href="#social-linkedin"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenInquiry('Connect via LinkedIn');
                  }}
                  aria-label="Fluxora on LinkedIn"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/85 hover:text-white transition-colors text-[13px] font-semibold"
                >
                  in
                </a>
              </div>

              {/* Studio Description Copy */}
              <p className="mt-6 text-[16.5px] sm:text-[17.5px] leading-[1.38] text-white/90 font-normal tracking-[-0.015em] max-w-[430px]">
                At Fluxora® Studio, we bring together designers, strategists, and makers to craft bold, thoughtful digital experiences made with care and curiosity.
              </p>

              {/* Bottom Globe + 1000+ Folks & Team Avatars (+12) Row */}
              <div id="blogs" className="mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <WireframeGlobe className="w-7 h-7 text-white/85 shrink-0" />
                  <div className="text-[11px] leading-[1.35]">
                    <div className="text-white/80 font-normal">Over 1000+ folks</div>
                    <div className="text-white/55 font-normal">12 Countries Over World</div>
                  </div>
                </div>

                {/* Team Avatar Stack + +12 Badge */}
                <button
                  type="button"
                  onClick={() => onOpenInquiry('Meet the 15+ Senior Studio Leads')}
                  aria-label="View all 15+ Fluxora Studio team members"
                  className="flex items-center -space-x-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B00] rounded-full"
                >
                  {/* Team Member 1 */}
                  <div className="w-9 h-9 rounded-full ring-1 ring-black overflow-hidden bg-[#D8E2DC] flex items-end justify-center">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <rect width="36" height="36" fill="#C9D6DF" />
                      <circle cx="18" cy="13.5" r="5.5" fill="#D4A373" />
                      <path d="M12.5 11.5C13 8 23 8 23.5 11.5C23 8.5 21 6.5 18 6.5C15 6.5 13 8.5 12.5 11.5Z" fill="#3D2C2E" />
                      <path d="M14 13H22" stroke="#1D1D1D" strokeWidth="1.3" />
                      <path d="M8 35C8 26.8 12.2 22.5 18 22.5C23.8 22.5 28 26.8 28 35" fill="#1E2022" />
                    </svg>
                  </div>
                  {/* Team Member 2 */}
                  <div className="w-9 h-9 rounded-full ring-1 ring-black overflow-hidden bg-[#52616B] flex items-end justify-center">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <rect width="36" height="36" fill="#6C757D" />
                      <circle cx="18" cy="14" r="5.4" fill="#8D5524" />
                      <path d="M13 12C13 8.5 23 8.5 23 12C23 9 20.8 7 18 7C15.2 7 13 9 13 12Z" fill="#1B1B1B" />
                      <path d="M8.5 35C8.5 27 12.5 22.5 18 22.5C23.5 22.5 27.5 27 27.5 35" fill="#343A40" />
                    </svg>
                  </div>
                  {/* Team Member 3 */}
                  <div className="w-9 h-9 rounded-full ring-1 ring-black overflow-hidden bg-[#E9ECEF] flex items-end justify-center">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <rect width="36" height="36" fill="#DEE2E6" />
                      <circle cx="18" cy="13.5" r="5.4" fill="#F1C27D" />
                      <path d="M12.5 12C12.5 8.5 23.5 8.5 23.5 12C23.5 9 21 6.8 18 6.8C15 6.8 12.5 9 12.5 12Z" fill="#4A3728" />
                      <path d="M8.5 35C8.5 27 12.5 22.5 18 22.5C23.5 22.5 27.5 27 27.5 35" fill="#F8F9FA" />
                    </svg>
                  </div>
                  {/* +12 Dark Circle Badge */}
                  <div className="w-9 h-9 rounded-full bg-[#0A0A0A] border border-white/25 flex items-center justify-center text-[11px] font-medium text-white group-hover:border-[#FF3B00] transition-colors">
                    +12
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
