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
    badge: "macOS menu bar utility • built for fast checks",

    headline:
      "Open any site in a second,\nthen get right back to work.",

    subheadline:
      "QuickPeek gives you a keyboard-first panel for saved sites plus a temporary popup for one-off links. Check dashboards, docs, and inboxes without opening a full browser session.",

    ctaText: "Buy QuickPeek for $8",
    secondaryCtaText: "Download Trial",
    secondaryCtaUrl: "https://updates.shakthisagar.dev/QuickPeek/latest/QuickPeek-macos.dmg",
    priceNote: "One-time purchase. Includes in-app 7-day trial.",

    previewCards: [
      { title: "Saved Site Panel", subtitle: "Open → check → close" },
      { title: "Cmd+Shift+V Popup", subtitle: "Paste URL or search" },
      { title: "7-Day Trial", subtitle: "Activate anytime in-app" },
    ],
  },

  demo: {
    id: "demo",
    eyebrow: "Your browser is overkill",

    headline:
      "You don’t need a full browser\nfor 2-second tasks.",

    description:
      "Use your global shortcut for saved sites, or open the temporary popup, paste a link/search, and close. Back/forward/reload controls are there when you need them.",

    videoUrl: "/demo.mp4",
  },

  comparison: {
    id: "features",
    eyebrow: "The real problem",

    headline:
      "Your quick checks should stay quick.",

    before: {
      title: "Browser detour",
      body:
        "Cmd+Tab → open browser → find tab → get distracted by other tabs and notifications.",
      points: [
        "Slow startup for tiny tasks",
        "Tabs/notifications steal attention",
        "Hard to jump in and out quickly",
      ],
    },

    after: {
      title: "QuickPeek flow",
      body:
        "Shortcut → check saved site or open temporary popup → close. Done in seconds.",
      points: [
        "Global shortcut from anywhere",
        "Cmd+Shift+V temporary popup with URL/search bar",
        "Built-in back, forward, reload, and open-in-browser",
      ],
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
        title: "Set up your sites",
        body: "Add dashboards, docs, and inboxes. Reorder them and set your startup tab behavior.",
      },
      {
        title: "Use both quick flows",
        body: "Use the main panel for saved sites, and Cmd+Shift+V for one-off links or search queries.",
      },
    ],
  },

  engineering: {
    eyebrow: "Why it feels fast",

    headline: "Built like a tool, not a browser.",

    cards: [
      {
        title: "Main panel + temporary popup",
        description:
          "Use persistent saved sites in the main panel and a separate temporary popup for ad-hoc browsing.",
      },
      {
        title: "Keyboard-first controls",
        description:
          "Global toggle, Cmd+1..9 site switching, Cmd+Shift+V popup, plus quick focus and close actions.",
      },
      {
        title: "Navigation tools built in",
        description:
          "Temporary popup includes URL/search input, back/forward/reload, loading progress, and open-in-browser.",
      },
      {
        title: "7-day trial + license unlock",
        description:
          "One build for everyone: trial starts on first launch, then activate with Gumroad license key in-app.",
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
      "One-time purchase. 7-day in-app trial included before activation.",

    ctaText: "Get QuickPeek",

    features: [
      "Unlimited sites",
      "Global shortcut",
      "Temporary popup (Cmd+Shift+V)",
      "License activation in-app",
      "Lifetime updates",
    ],
  },

  faq: {
    id: "faq",
    headline: "FAQ",

    items: [
      {
        q: "Does it include a trial?",
        a:
          "Yes. Every install starts with a 7-day trial, and activation happens in-app with your Gumroad license key.",
      },
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
        q: "Can I open links that are not in my saved list?",
        a: "Yes. Use the temporary popup (Cmd+Shift+V), paste a URL or type a search query, and go.",
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
