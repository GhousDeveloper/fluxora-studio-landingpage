export const HERO_BG_VIDEO_URL =
  'https://res.cloudinary.com/ti5wugi7/video/upload/v1793101880/Robot_eye_glow_animation_1080p_20261027162008.mp4';

export interface InquiryInput {
  name: string;
  email: string;
  projectScope: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: {
    name?: string;
    email?: string;
    projectScope?: string;
  };
}

export function validateInquiry(input: InquiryInput): ValidationResult {
  const errors: ValidationResult['errors'] = {};
  const trimmedName = input.name.trim();
  const trimmedEmail = input.email.trim();
  const trimmedScope = input.projectScope.trim();

  if (!trimmedName) {
    errors.name = 'Please enter your full name.';
  }

  if (!trimmedEmail) {
    errors.email = 'Please enter your work email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!trimmedScope) {
    errors.projectScope = 'Please select or describe a project focus.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  detailTitle: string;
  detailDescription: string;
  highlights: string[];
}

export const HERO_STATS: StatItem[] = [
  {
    id: 'projects',
    value: '150+',
    label: 'Projects delivered',
    detailTitle: '150+ Digital Products & Brand Systems Delivered',
    detailDescription:
      'From AI-native creative tools to global design systems, every engagement is engineered around measurable human adoption.',
    highlights: [
      '94% launched on or ahead of schedule',
      'Across 12 countries in North America, Europe & APAC',
      'Zero-friction accessibility compliance (WCAG AAA ready)',
    ],
  },
  {
    id: 'satisfaction',
    value: '98%',
    label: 'Client satisfaction*',
    detailTitle: '98% Verified Client Satisfaction & Retention',
    detailDescription:
      '*Based on post-launch executive reviews and multi-year product partnership renewals from 2022–2026.',
    highlights: [
      '4.9 / 5.0 average partner NPS score',
      '82% of clients return for subsequent product phases',
      'Dedicated design, strategy, and engineering pods',
    ],
  },
];

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
}

export const FLUXORA_FEATURES: FeatureItem[] = [
  {
    id: 'human-ai',
    title: 'Human-Centered AI Interfaces',
    subtitle: 'Adaptive workflows that amplify creative intuition without cognitive overload.',
    metric: '3.4x faster creative iteration',
  },
  {
    id: 'design-systems',
    title: 'Accessible Design Systems',
    subtitle: 'Tokenized multi-brand component architectures built for clarity and speed.',
    metric: '100% WCAG AA/AAA coverage',
  },
  {
    id: 'behavioral-ux',
    title: 'Behavioral UX Research',
    subtitle: 'Empirical interaction testing grounded in real human decision patterns.',
    metric: '+64% task completion rate',
  },
];
