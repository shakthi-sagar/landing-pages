import type { LandingPageContent } from "../../../../shared/landing/types";

export const lockInContent: LandingPageContent = {
  brand: "LockIn",
  brandIcon: "/lockin-icon.svg",
  gumroadUrl: "https://shakthisagar.gumroad.com",
  navLinks: [
    { label: "Demo", href: "#demo" },
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    badge: "Coming Soon",
    headline: "Stay in one app,\nor your session breaks.",
    subheadline:
      "LockIn tracks your frontmost app during a focus block. If you leave your chosen app, a blocker appears until you return or type your fail phrase.",
    ctaText: "Coming Soon",
    priceNote: "Launch details and pricing will be announced soon.",
    previewCards: [
      { title: "Focus Session", subtitle: "25-minute locked sprint" },
      { title: "Off-Track Blocker", subtitle: "Full-screen recovery overlay" },
      { title: "Timer Overlay", subtitle: "Always-visible countdown" },
    ],
  },
  demo: {
    id: "demo",
    eyebrow: "Focus guardrails that actually enforce",
    headline: "When attention drifts, LockIn interrupts it.",
    description:
      "Pick your focus app, set duration, and start. LockIn automatically detects context switches and pushes you back on track in real time.",
    placeholderImage: "/screenshot.png",
  },
  comparison: {
    id: "features",
    eyebrow: "Why it matters",
    headline: "Intent is not enough when distractions are one click away.",
    before: {
      title: "Without LockIn",
      body: "Start with intent, jump to one unrelated app, lose 10 minutes, restart your task with reduced momentum.",
    },
    after: {
      title: "With LockIn",
      body: "Choose one focus app, stay protected by active monitoring, see your timer at all times, finish blocks with clear outcomes.",
    },
  },
  howItWorks: {
    id: "how-it-works",
    eyebrow: "How it works",
    headline: "Set your rule once, then commit.",
    steps: [
      {
        title: "1. Select your focus app",
        body: "Choose the app you want to stay in, set session length, and define your fail phrase.",
      },
      {
        title: "2. Start your session",
        body: "LockIn activates tracking and opens your selected app so you can begin immediately.",
      },
      {
        title: "3. Recover from slips fast",
        body: "If you switch away, LockIn shows a blocker overlay until you return or intentionally end the session.",
      },
    ],
  },
  engineering: {
    eyebrow: "Built the right way",
    headline: "A strict focus system, implemented natively.",
    cards: [
      {
        title: "Frontmost app monitoring",
        description: "Tracks active app changes in real time so off-track moments are caught instantly.",
      },
      {
        title: "Full-screen blocker overlay",
        description: "Displays an unavoidable interruption layer when your session rules are violated.",
      },
      {
        title: "Floating timer overlay",
        description: "Shows remaining focus time in a persistent status panel across spaces and full-screen apps.",
      },
      {
        title: "Signed auto-updates",
        description: "Sparkle-powered update checks keep LockIn current with minimal friction.",
      },
    ],
  },
  pricing: {
    id: "pricing",
    eyebrow: "Launch status",
    headline: "LockIn is coming soon.",
    price: "Coming Soon",
    currency: "",
    subtitle: "Join the waitlist to get notified when LockIn goes live.",
    ctaText: "Coming Soon",
    features: [
      "Target-app focus enforcement",
      "Fail-phrase guarded exit flow",
      "Floating session timer overlay",
      "Lifetime updates",
    ],
  },
  faq: {
    id: "faq",
    headline: "Frequently asked questions",
    items: [
      {
        q: "Does LockIn block websites too?",
        a: "LockIn currently enforces focus at the app level by monitoring your active macOS application.",
      },
      {
        q: "Can I quit mid-session?",
        a: "Yes, but you need to type your fail phrase exactly while a session is active.",
      },
      {
        q: "What happens when I switch apps?",
        a: "LockIn moves to violated state and shows a blocker until you return to the selected app or fail the session intentionally.",
      },
      {
        q: "Is this subscription-based?",
        a: "No. LockIn is sold as a one-time purchase with updates.",
      },
    ],
  },
  footer: {
    productLine: "LockIn",
    platformLine: "Built for macOS Sonoma & above",
    ctaLabel: "Buy on Gumroad",
  },
};
