import type { LandingPageContent } from "../../../../shared/landing/types";

/**
 * SwiftGPT product messaging source of truth.
 *
 * Purpose:
 * - Present SwiftGPT as a fast, distraction-free way to access AI on macOS.
 * - Emphasize workflow continuity: ask quickly, close quickly, keep shipping.
 *
 * Product philosophy:
 * - AI access should feel like a utility, not a separate browsing session.
 * - Minimize context switching and cognitive overhead.
 * - Keep pricing simple and approachable (one-time purchase).
 *
 * Core feature themes to reinforce in copy:
 * - Menu bar panel + global shortcut for instant access.
 * - Multi-site support (ChatGPT, Gemini, Claude, and custom AI sites).
 * - Keyboard-first, quick tab switching, and lightweight native feel.
 * - Fast ask-and-return loop for developers, creators, and knowledge work.
 */
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
    badge: "macOS • distraction-free AI access",

    headline:
      "Ask AI without\nleaving your window.",

    subheadline:
      "SwiftGPT opens ChatGPT, Gemini, Claude, and your AI tools in a fast menu bar panel — so you can ask something quickly and get back to work without switching apps.",

    ctaText: "Buy for $5",
    priceNote: "One-time. No subscriptions.",

    previewCards: [
      { title: "In VSCode?", subtitle: "Ask without switching apps" },
      { title: "Quick answer", subtitle: "Open → ask → close" },
      { title: "Stay focused", subtitle: "No browser distraction" },
    ],
  },

  demo: {
    id: "demo",
    eyebrow: "AI without interruption",

    headline:
      "Don’t break your flow\njust to ask something.",

    description:
      "Switching to a browser just to ask ChatGPT breaks your momentum. SwiftGPT lets you open a panel, ask, and close it — all without leaving your current window.",

    videoUrl: "/demo.mp4",
  },

  comparison: {
    id: "features",
    eyebrow: "The real problem",

    headline:
      "Switching apps kills focus.",

    before: {
      title: "Without SwiftGPT",
      body:
        "Cmd+Tab → open browser → find tab → ask → get distracted → lose flow.",
    },

    after: {
      title: "With SwiftGPT",
      body:
        "Shortcut → ask → close → continue working. No context loss.",
    },
  },

  howItWorks: {
    id: "how-it-works",
    eyebrow: "Setup",

    headline: "Takes less than a minute.",

    steps: [
      {
        title: "Add your AI tools",
        body:
          "Start with ChatGPT, Gemini, Claude, or add any AI site you use.",
      },
      {
        title: "Set your shortcut",
        body:
          "Open SwiftGPT instantly from anywhere in macOS.",
      },
      {
        title: "Ask and move on",
        body:
          "Open, ask, get your answer, and close. Stay in your workflow.",
      },
    ],
  },

  engineering: {
    eyebrow: "Why it feels fast",

    headline: "Built for quick access, not browsing.",

    cards: [
      {
        title: "Warm sessions",
        description:
          "Tabs stay alive. No reloads, no re-login, no waiting.",
      },
      {
        title: "Instant open",
        description:
          "Menu bar panel launches in milliseconds — always ready.",
      },
      {
        title: "Keyboard-first",
        description:
          "Global shortcut + Cmd+1..9 switching. No mouse needed.",
      },
      {
        title: "Lightweight panel",
        description:
          "Runs as a minimal native view, not a heavy browser window.",
      },
    ],
  },

  pricing: {
    id: "pricing",
    eyebrow: "Pricing",

    headline: "Pay once. Stay in flow every day.",

    price: "$5",
    currency: "USD",

    subtitle:
      "If you ask AI even a few times a day, this removes constant friction.",

    ctaText: "Get SwiftGPT",

    features: [
      "AI tools in one panel",
      "Custom AI site support",
      "Global shortcut",
      "Fast tab switching",
    ],
  },

  faq: {
    id: "faq",
    headline: "FAQ",

    items: [
      {
        q: "Why not just use a browser?",
        a:
          "Because switching apps breaks your flow. SwiftGPT lets you ask without leaving what you're doing.",
      },
      {
        q: "Which AI tools are supported?",
        a:
          "ChatGPT, Gemini, Claude by default. You can add any AI site.",
      },
      {
        q: "Can I customize shortcuts?",
        a:
          "Yes. You can define your own global shortcut in settings.",
      },
      {
        q: "Is it a one-time purchase?",
        a:
          "Yes. No subscriptions.",
      },
    ],
  },

  footer: {
    productLine: "SwiftGPT",
    platformLine: "macOS Sonoma+",
    ctaLabel: "Buy on Gumroad",
  },
};
