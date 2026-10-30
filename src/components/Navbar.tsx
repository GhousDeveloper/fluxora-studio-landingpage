import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, Check } from 'lucide-react';
import { FLUXORA_FEATURES, FeatureItem } from '../utils/fluxoraData';

interface NavbarProps {
  onOpenInquiry: (defaultScope?: string) => void;
  activeSection: string;
  onSelectNav: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  activeSection,
  onSelectNav,
}) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  const navItems = [
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'blogs', label: 'Blogs' },
  ];

  return (
    <header className="w-full pt-4 pb-1 relative z-40">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onSelectNav('hero');
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B00] rounded-lg"
        >
          {/* Exact Fluxora Stepped Geometric Orange Mark */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 transition-transform duration-200 group-hover:scale-105"
            aria-hidden="true"
          >
            {/* Upper-left stepped L-chevron */}
            <path
              d="M14 4H23V13H14V22H5V13H14V4Z"
              fill="#FF3B00"
            />
            {/* Lower-right stepped L-chevron */}
            <path
              d="M26 18H35V27H26V36H17V27H26V18Z"
              fill="#FF3B00"
            />
          </svg>
          <span className="text-[23px] font-semibold tracking-[-0.03em] text-white">
            Fluxora
          </span>
        </a>

        {/* Zone 2: Center Pill Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 px-6 py-2.5 rounded-[12px] border border-white/[0.15] bg-white/[0.02] relative"
        >
          <div className="relative">
            <button
              type="button"
              onClick={() => setFeaturesOpen((prev) => !prev)}
              aria-expanded={featuresOpen}
              className="flex items-center gap-1.5 text-[13px] font-normal text-white/90 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3B00] rounded"
            >
              <span>Features</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-white/75 transition-transform duration-200 ${
                  featuresOpen ? 'rotate-180 text-[#FF3B00]' : ''
                }`}
              />
            </button>

            {featuresOpen && (
              <div
                role="menu"
                aria-label="Fluxora Features"
                className="absolute left-0 top-full mt-3.5 w-[320px] rounded-2xl border border-white/15 bg-[#0A0A0A] p-3 shadow-2xl z-50"
              >
                <div className="text-[11px] text-white/45 px-2.5 py-1 font-medium">
                  Core Studio Capabilities
                </div>
                <div className="mt-1 space-y-1">
                  {FLUXORA_FEATURES.map((feat) => {
                    const isSelected = selectedFeature?.id === feat.id;
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setSelectedFeature(feat);
                          setFeaturesOpen(false);
                          onOpenInquiry(feat.title);
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors flex items-start justify-between gap-2 group cursor-pointer"
                      >
                        <div>
                          <div className="text-[13px] font-medium text-white group-hover:text-[#FF3B00] transition-colors flex items-center gap-1.5">
                            {feat.title}
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#FF3B00]" />}
                          </div>
                          <p className="text-[11.5px] text-white/60 leading-snug mt-0.5">
                            {feat.subtitle}
                          </p>
                          <span className="inline-block text-[10.5px] text-[#FF3B00] mt-1 font-medium">
                            {feat.metric}
                          </span>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white shrink-0 mt-0.5" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setFeaturesOpen(false);
                onSelectNav(item.id);
              }}
              className={`text-[13px] font-normal transition-colors whitespace-nowrap shrink-0 ${
                activeSection === item.id
                  ? 'text-[#FF3B00] font-medium'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => onOpenInquiry('General Studio Partnership')}
            className="px-5 py-2.5 rounded-[11px] bg-white text-black text-[13px] font-semibold tracking-[-0.01em] hover:bg-white/90 active:scale-[0.99] transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B00]"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};
