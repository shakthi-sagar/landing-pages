export type NavLink = {
  label: string;
  href: string;
};

export type PreviewCard = {
  title: string;
  subtitle: string;
};

export type ComparisonCard = {
  title: string;
  body: string;
  points?: string[];
};

export type Step = {
  title: string;
  body: string;
};

export type FeatureCard = {
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type LandingPageContent = {
  brand: string;
  brandIcon: string;
  gumroadUrl: string;
  navLinks: NavLink[];
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaText: string;
    priceNote: string;
    previewCards: PreviewCard[];
  };
  demo: {
    id: string;
    eyebrow: string;
    headline: string;
    description: string;
    videoUrl?: string;
    placeholderImage?: string;
  };
  comparison: {
    id: string;
    eyebrow: string;
    headline: string;
    before: ComparisonCard;
    after: ComparisonCard;
  };
  howItWorks: {
    id: string;
    eyebrow: string;
    headline: string;
    steps: Step[];
  };
  engineering: {
    eyebrow: string;
    headline: string;
    cards: FeatureCard[];
  };
  pricing: {
    id: string;
    eyebrow: string;
    headline: string;
    price: string;
    currency: string;
    subtitle: string;
    ctaText: string;
    features: string[];
  };
  faq: {
    id: string;
    headline: string;
    items: FaqItem[];
  };
  footer: {
    productLine: string;
    platformLine: string;
    ctaLabel: string;
  };
};
