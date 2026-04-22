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
    badge: "macOS menu bar • built for instant checks",

    headline:
      "Check any site in seconds.\nStay in your flow.",

    subheadline:
      "QuickPeek is a native menu bar panel for dashboards, docs, inboxes, and admin pages. Open, check, close, continue working. No full browser detour.",

    ctaText: "Buy QuickPeek for $8",
    secondaryCtaText: "Download Trial",
    secondaryCtaUrl: "https://updates.shakthisagar.dev/QuickPeek/latest/QuickPeek-macos.dmg",
    priceNote: "One-time purchase. Includes in-app 7-day trial.",

    previewCards: [
      { title: "Saved Sites + Cmd+1..9", subtitle: "Switch instantly" },
      { title: "Cmd+Shift+T Popup", subtitle: "Paste URL or search" },
      { title: "7-Day Trial Included", subtitle: "Activate in-app" },
    ],
  },

  demo: {
    id: "demo",
    eyebrow: "Built for speed",

    headline:
      "You don’t need a full browser\nfor a quick check.",

    description:
      "Use your global shortcut for saved sites, or hit Cmd+Shift+T for a temporary popup. Paste a link or type a query, check what you need, and close.",

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
      points: [
        "Slow startup for tiny tasks",
        "Notifications and tabs pull attention",
        "Hard to jump in and out quickly",
      ],
    },

    after: {
      title: "QuickPeek flow",
      body:
        "Shortcut → panel opens → check → close. Back to work in seconds.",
      points: [
        "Global shortcut opens from anywhere",
        "Cmd+Shift+T temporary popup for one-off links",
        "Back/forward/reload controls built in",
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
        title: "Add your sites",
        body: "Save dashboards, docs, inboxes, and internal tools. Reorder and switch with Cmd+1..9.",
      },
      {
        title: "Use main panel + temporary popup",
        body: "Main panel for repeat checks. Cmd+Shift+T popup for one-off URLs or searches.",
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
          "QuickPeek opens as a native panel in milliseconds instead of launching a full browser session.",
      },
      {
        title: "Persistent sessions",
        description:
          "Cookies and session state stay intact, so sites reopen where you left off.",
      },
      {
        title: "Keyboard-first",
        description:
          "Custom global toggle plus configurable app shortcuts for tabs, popup, navigation, reload, and zoom.",
      },
      {
        title: "Temporary popup workflow",
        description:
          "Cmd+Shift+T opens a separate popup with URL/search input and quick navigation controls.",
      },
      {
        title: "Flexible search providers",
        description:
          "Choose Google, DuckDuckGo, Bing, or Brave for query input that is not a direct URL.",
      },
      {
        title: "Trial + license gate",
        description:
          "One build for everyone: 7-day trial on first launch, then activate with your Gumroad key in-app.",
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
      "Custom global shortcut",
      "Configurable app shortcuts",
      "Cmd+1..9 site switching",
      "Temporary popup (Cmd+Shift+T)",
      "URL/search bar + navigation controls",
      "Session persistence",
      "In-app 7-day trial and activation",
      "Lifetime updates",
    ],
  },

  faq: {
    id: "faq",
    headline: "FAQ",

    items: [
      {
        q: "Does QuickPeek include a trial?",
        a:
          "Yes. Every install starts with a 7-day trial, and you can activate anytime using your Gumroad license key in-app.",
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
        q: "Can I add any site?",
        a: "Yes. Anything with a URL.",
      },
      {
        q: "What is the temporary popup for?",
        a:
          "Use Cmd+Shift+T to open a separate popup for one-off links or searches, without changing your saved site list.",
      },
      {
        q: "Can I customize shortcuts?",
        a:
          "Yes. You can configure the global toggle plus app shortcuts for tab switching, popup, navigation, reload, and zoom.",
      },
      {
        q: "Can I navigate inside the popup?",
        a:
          "Yes. The popup includes back, forward, reload, URL/search input, and open-in-browser actions.",
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
