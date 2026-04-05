import type { LandingPageContent } from "../../../../shared/landing/types";

export const quickPeekContent: LandingPageContent = {
  brand: "QuickPeek",
  brandIcon: "/quickpeek-icon.svg",
  gumroadUrl: "https://shakthisagar.gumroad.com/l/quickpeek",
  navLinks: [
    { label: "Demo", href: "#demo" },
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    badge: "Built for macOS",
    headline: "Open your key sites instantly,\nwithout switching windows.",
    subheadline:
      "QuickPeek gives you one-click access from the menu bar so you can check dashboards, docs, and inboxes without opening a browser or breaking flow.",
    ctaText: "Get QuickPeek for $10",
    priceNote: "One-time purchase. Lifetime updates.",
    previewCards: [
      { title: "Team Inbox", subtitle: "support.yourcompany.com" },
      { title: "Product Dashboard", subtitle: "analytics.yourcompany.com" },
      { title: "Docs & Notes", subtitle: "notion.so/workspace" },
    ],
  },
  demo: {
    id: "demo",
    eyebrow: "Productivity, not tab juggling",
    headline: "No browser window switching. Just quick access.",
    description:
      "QuickPeek runs as a native menu bar panel with per-site shortcuts, zoom controls, and instant context switching for the sites you check most.",
    videoUrl: "/demo.mp4",
    placeholderImage: "/screenshot.png",
  },
  comparison: {
    id: "features",
    eyebrow: "Why it matters",
    headline: "Every context switch costs focus.",
    before: {
      title: "Without QuickPeek",
      body: "Open a browser just to check one thing, jump across tabs and windows, get distracted and lose momentum.",
    },
    after: {
      title: "With QuickPeek",
      body: "Open exactly one site from the menu bar, jump by keyboard shortcuts, adjust zoom quickly, return to your main task with focus intact.",
    },
  },
  howItWorks: {
    id: "how-it-works",
    eyebrow: "How it works",
    headline: "Set up in under a minute.",
    steps: [
      {
        title: "1. Install",
        body: "Download QuickPeek and move it to your Applications folder.",
      },
      {
        title: "2. Add your sites",
        body: "Save the sites you check most often, pick icons, and reorder them for faster access.",
      },
      {
        title: "3. Launch instantly",
        body: "Open from your menu bar or hotkey, check quickly, and stay in your workflow.",
      },
    ],
  },
  engineering: {
    eyebrow: "Built the right way",
    headline: "Built for fast, uninterrupted work.",
    cards: [
      {
        title: "Native performance",
        description: "Swift-based macOS panel tuned for instant launch and low resource usage.",
      },
      {
        title: "Per-site zoom memory",
        description: "Zoom settings persist per site so readability stays exactly how you like it.",
      },
      {
        title: "Global shortcuts",
        description: "Cmd + 1..9 for site switching plus keyboard zoom controls while the panel is open.",
      },
      {
        title: "Auto updates",
        description: "Sparkle-powered signed updates keep improvements and fixes coming automatically.",
      },
    ],
  },
  pricing: {
    id: "pricing",
    eyebrow: "Simple pricing",
    headline: "A simple productivity upgrade.",
    price: "$10",
    currency: "USD",
    subtitle: "Pay once. Use it daily. Keep lifetime updates.",
    ctaText: "Get QuickPeek Now",
    features: [
      "Unlimited saved site shortcuts",
      "Global keyboard shortcut",
      "Per-site zoom controls",
      "Lifetime updates",
    ],
  },
  faq: {
    id: "faq",
    headline: "Frequently asked questions",
    items: [
      {
        q: "Is QuickPeek a subscription?",
        a: "No. QuickPeek is a one-time purchase on Gumroad.",
      },
      {
        q: "Can I add my own websites?",
        a: "Yes. You can add, reorder, and manage custom sites directly in settings or quick-add flows.",
      },
      {
        q: "What keyboard controls are supported?",
        a: "QuickPeek supports global open shortcut, Cmd+1..9 tab switching, and panel zoom shortcuts.",
      },
      {
        q: "Which macOS versions are supported?",
        a: "QuickPeek is built for macOS Sonoma and newer.",
      },
    ],
  },
  footer: {
    productLine: "QuickPeek",
    platformLine: "Built for macOS Sonoma & above",
    ctaLabel: "Buy on Gumroad",
  },
};
