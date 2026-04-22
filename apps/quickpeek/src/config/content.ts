import type { LandingPageContent } from "../../../../shared/landing/types";

export const quickPeekContent: LandingPageContent = {
  brand: "QuickPeek",
  brandIcon: "/quickpeek-icon.svg",
  gumroadUrl: "https://shakthisagar.gumroad.com/l/quickpeek",

  navLinks: [
    { label: "Demo", href: "#demo" },
    { label: "Why", href: "#features" },
    { label: "Setup", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    badge: "macOS only • built for dev workflows",

    headline:
      "Stop opening a full browser\njust to check one thing.",

    subheadline:
      "QuickPeek turns your menu bar into a command center for the sites you live in — dashboards, docs, inboxes. Open, check, close. No tabs. No context loss.",

    ctaText: "Buy QuickPeek for $8",
    secondaryCtaText: "Download Trial",
    secondaryCtaUrl: "https://updates.shakthisagar.dev/QuickPeek/latest/QuickPeek-macos.dmg",
    priceNote: "One-time purchase. Includes in-app 7-day trial.",

    previewCards: [
      { title: "Support Inbox", subtitle: "Check → close" },
      { title: "Analytics", subtitle: "Quick glance" },
      { title: "Docs", subtitle: "Jump → copy → back" },
    ],
  },

  demo: {
    id: "demo",
    eyebrow: "Your browser is overkill",

    headline:
      "You don’t need 20 tabs\nfor 2-second checks.",

    description:
      "Opening Chrome → finding the tab → getting distracted → forgetting why you opened it. QuickPeek cuts that loop. One shortcut. One panel. Done.",

    videoUrl: "/demo.mp4",
  },

  comparison: {
    id: "features",
    eyebrow: "The real problem",

    headline:
      "Every browser check breaks your flow.",

    before: {
      title: "Browser flow",
      body:
        "Cmd+Tab → Chrome → find tab → open → see notifications → 5 minutes gone.",
    },

    after: {
      title: "QuickPeek flow",
      body:
        "Shortcut → panel opens → check → close. Back to work in seconds.",
    },
  },

  howItWorks: {
    id: "how-it-works",
    eyebrow: "Setup",

    headline: "Takes less than a minute.",

    steps: [
      {
        title: "Install",
        body: "Download and drop into Applications. That’s it.",
      },
      {
        title: "Add your tools",
        body: "Paste links to dashboards, docs, inboxes. Reorder however you think.",
      },
      {
        title: "Use like muscle memory",
        body: "Hit a shortcut, jump instantly, get out. No browsing.",
      },
    ],
  },

  engineering: {
    eyebrow: "Why it feels fast",

    headline: "Built like a tool, not a browser.",

    cards: [
      {
        title: "Instant open",
        description:
          "Menu bar panel launches in milliseconds. No heavy browser startup.",
      },
      {
        title: "State preserved",
        description:
          "Everything stays exactly where you left it. No reloads, no lost context.",
      },
      {
        title: "Keyboard-first",
        description:
          "Global shortcut + Cmd+1..9 switching. Jump between sites without touching the mouse.",
      },
      {
        title: "Lightweight by design",
        description:
          "Runs as a minimal native panel, not a full browser. Low memory, no tab bloat.",
      },
    ],
  },

  pricing: {
    id: "pricing",
    eyebrow: "Pricing",

    headline: "Pay once. Use it every day.",

    price: "$8",
    currency: "USD",

    subtitle:
      "If it saves you even 2 minutes a day, it pays for itself fast.",

    ctaText: "Get QuickPeek",

    features: [
      "Unlimited sites",
      "Global shortcut",
      "Session persistence",
      "Lifetime updates",
    ],
  },

  faq: {
    id: "faq",
    headline: "FAQ",

    items: [
      {
        q: "Is this just a browser?",
        a:
          "No. It’s a lightweight menu bar panel optimized for quick access — not browsing.",
      },
      {
        q: "Why not just use Chrome?",
        a:
          "Because Chrome is built for sessions. QuickPeek is built for checks.",
      },
      {
        q: "Can I add any site?",
        a: "Yes. Anything with a URL.",
      },
      {
        q: "Will this slow my system?",
        a:
          "No. It’s designed to stay lightweight and out of your way.",
      },
    ],
  },

  footer: {
    productLine: "QuickPeek",
    platformLine: "macOS Sonoma+",
    ctaLabel: "Buy on Gumroad",
  },
};
