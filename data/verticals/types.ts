export interface RevenuePotentialData {
  label: string;
  heading: string;
  description: string;
  ctaText: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  highlight: {
    label: string;
    sublabel: string;
    value: string;
  };
}

export interface VerticalPageData {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    stat: string;
    subhead: string;
    ctaText: string;
    heroImage: string;
    heroImageAlt: string;
  };
  socialProof: {
    statement: string;
    logos?: { src: string; alt: string }[];
  };
  problem: {
    statement: string;
  };
  threePillars: {
    equipment: { outcome: string; detail: string };
    training: { outcome: string; detail: string };
    support: { outcome: string; detail: string };
  };
  useCases: Array<{
    title: string;
    description: string;
    image?: string;
  }>;
  testimonial: {
    quote: string;
    name: string;
    title: string;
    facility: string;
    avatar?: string;
  };
  revenuePotential: RevenuePotentialData;
  visualProof: {
    thumbnailUrl: string;
    videoUrl: string;
    title: string;
    description?: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  trustSignals: {
    badges: string[];
    microcopy: string[];
  };
  finalCta: {
    heading: string;
    subheading: string;
    ctaText: string;
    microcopy: string;
  };
}
