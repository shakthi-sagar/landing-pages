import type { LandingPageContent } from "../../../../shared/landing/types";

export const swiftGPTContent: LandingPageContent = {
  brand: "SwiftGPT",
  brandIcon: "/swiftgpt-icon.svg",
  gumroadUrl: "https://shakthisagar.gumroad.com/l/swiftgpt",

  navLinks: [
    { label: "Demo", href: "#demo" },
    { label: "Why", href: "#features" },
    { label: "Setup", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    badge: "macOS menu bar app for ChatGPT, Claude, Gemini",

    headline:
      "Use AI in 2 seconds,\nwithout context switching.",

    subheadline:
      "SwiftGPT keeps your AI tools one shortcut away in a lightweight menu bar panel. Ask, get what you need, and close it without leaving your coding, writing, or design flow.",

    ctaText: "Get SwiftGPT for $5",
    priceNote: "One-time purchase. Free updates.",

    previewCards: [
      { title: "No app hopping", subtitle: "Ask from any workspace" },
      { title: "Fast loop", subtitle: "Open -> ask -> close" },
      { title: "Keep momentum", subtitle: "Less context loss, more output" },
    ],
  },

  demo: {
    id: "demo",
    eyebrow: "AI without interruption",

    headline:
      "Stop paying the context-switch tax.",

    description:
      "Most AI questions take 10 seconds. The app switching around them takes longer and breaks focus. SwiftGPT removes that overhead so your work stays uninterrupted.",

    videoUrl: "/demo.mp4",
  },

  comparison: {
    id: "features",
    eyebrow: "The real problem",

    headline:
      "Your brain pays for every tab switch.",

    before: {
      title: "Without SwiftGPT",
      body:
        "Leave your work -> open browser -> find AI tab -> get distracted by tabs/notifications -> lose your train of thought.",
    },

    after: {
      title: "With SwiftGPT",
      body:
        "Hit shortcut -> ask -> close panel -> keep shipping. Same context, less friction.",
    },
  },

  howItWorks: {
    id: "how-it-works",
    eyebrow: "Setup",

    headline: "Set up once, use all day.",

    steps: [
      {
        title: "Add your favorite AI sites",
        body:
          "Starts with ChatGPT, Gemini, and Claude. Add any other AI site you rely on.",
      },
      {
        title: "Pick one global shortcut",
        body:
          "Open SwiftGPT instantly from anywhere in macOS.",
      },
      {
        title: "Ask, close, continue",
        body:
          "Keep AI nearby for quick questions without turning it into a browsing session.",
      },
    ],
  },

  engineering: {
    eyebrow: "Why it feels fast",

    headline: "Engineered for speed and focus.",

    cards: [
      {
        title: "Persistent sessions",
        description:
          "Your tabs stay warm so AI tools are ready without constant reloads.",
      },
      {
        title: "Instant open",
        description:
          "Panel opens from the menu bar in milliseconds.",
      },
      {
        title: "Keyboard-first",
        description:
          "Global shortcut plus quick tab switching. Built for fast hands.",
      },
      {
        title: "Minimal surface area",
        description:
          "Only the UI you need for fast AI lookups, not another heavy browser workflow.",
      },
    ],
  },

  pricing: {
    id: "pricing",
    eyebrow: "Pricing",

    headline: "One tiny purchase, daily time back.",

    price: "$5",
    currency: "USD",

    subtitle:
      "If AI is part of your daily workflow, SwiftGPT pays for itself quickly in recovered focus and time.",

    ctaText: "Buy SwiftGPT",

    features: [
      "AI tools in one panel",
      "Custom AI site support",
      "Global shortcut",
      "Fast tab switching",
      "One-time payment, no subscription",
    ],
  },

  faq: {
    id: "faq",
    headline: "FAQ",

    items: [
      {
        q: "Why not just pin AI in my browser?",
        a:
          "You still have to app-switch, find the right tab, and re-focus. SwiftGPT removes those micro-interruptions by keeping AI one shortcut away.",
      },
      {
        q: "Which AI tools are supported?",
        a:
          "ChatGPT, Gemini, and Claude are included by default, and you can add any AI website.",
      },
      {
        q: "Can I customize the shortcut and tabs?",
        a:
          "Yes. Set your own global shortcut and organize multiple AI sites as tabs.",
      },
      {
        q: "Is it a one-time purchase?",
        a:
          "Yes. Pay once and use it without a recurring subscription.",
      },
    ],
  },

  footer: {
    productLine: "SwiftGPT",
    platformLine: "macOS Sonoma+",
    ctaLabel: "Buy on Gumroad",
  },
};
