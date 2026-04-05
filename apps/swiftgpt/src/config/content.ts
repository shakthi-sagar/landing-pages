import type { LandingPageContent } from "../../../../shared/landing/types";

export const quickPeekContent: LandingPageContent = {
  brand: "SwiftGPT",
  brandIcon: "/swiftgpt-icon.svg",
  gumroadUrl: "https://shakthisagar.gumroad.com",
  navLinks: [
    { label: "Demo", href: "#demo" },
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    badge: "Built for macOS",
    headline: "Your AI tabs in one panel,\none shortcut away.",
    subheadline:
      "SwiftGPT opens ChatGPT, Gemini, Claude, and your custom AI sites in a focused menu bar panel so you can prompt, switch, and continue work without browser clutter.",
    ctaText: "Get SwiftGPT for $12",
    priceNote: "One-time purchase. Lifetime updates.",
    previewCards: [
      { title: "ChatGPT", subtitle: "Default tab, always ready" },
      { title: "Gemini + Claude", subtitle: "Cmd+1..9 instant switching" },
      { title: "Custom AI Sites", subtitle: "Add and reorder your stack" },
    ],
  },
  demo: {
    id: "demo",
    eyebrow: "AI workflows without the browser maze",
    headline: "Open, ask, and switch models in seconds.",
    description:
      "Launch SwiftGPT from the menu bar or global shortcut, jump between AI tabs, and keep prompts flowing from a compact native panel.",
    placeholderImage: "/screenshot.png",
  },
  comparison: {
    id: "features",
    eyebrow: "Why it matters",
    headline: "Browser-tab overhead kills fast AI iteration.",
    before: {
      title: "Without SwiftGPT",
      body: "Find the right tab, wait for reloads, lose your prompt context, repeat across multiple AI tools.",
    },
    after: {
      title: "With SwiftGPT",
      body: "Use one always-ready panel, switch models with keyboard shortcuts, keep your working context while iterating faster.",
    },
  },
  howItWorks: {
    id: "how-it-works",
    eyebrow: "How it works",
    headline: "Set once, use all day.",
    steps: [
      {
        title: "1. Configure your tabs",
        body: "Start with default sites like ChatGPT, Gemini, and Claude, then add or reorder any custom AI site.",
      },
      {
        title: "2. Set your global shortcut",
        body: "Define the hotkey that opens SwiftGPT instantly from anywhere in macOS.",
      },
      {
        title: "3. Prompt and switch quickly",
        body: "Use Cmd+1..9 for tab switching, keep output focused, and close the panel when done.",
      },
    ],
  },
  engineering: {
    eyebrow: "Built the right way",
    headline: "Native panel architecture for low-friction AI use.",
    cards: [
      {
        title: "Persistent web views",
        description: "Each tab uses a managed WKWebView so sessions stay warm and context switches feel instant.",
      },
      {
        title: "Custom panel sizing",
        description: "Tune width and height with presets or manual values to match your workflow and display.",
      },
      {
        title: "Global hotkey system",
        description: "Carbon-based shortcut registration opens SwiftGPT from anywhere without Accessibility friction.",
      },
      {
        title: "Signed auto-updates",
        description: "Sparkle-backed update checks keep the app current with secure delivery.",
      },
    ],
  },
  pricing: {
    id: "pricing",
    eyebrow: "Simple pricing",
    headline: "A focused AI copilot for your menu bar.",
    price: "$12",
    currency: "USD",
    subtitle: "Pay once. Ship faster. Keep lifetime updates.",
    ctaText: "Get SwiftGPT Now",
    features: [
      "Default + custom AI site tabs",
      "Global launch shortcut",
      "Cmd+1..9 quick tab switching",
      "Lifetime updates",
    ],
  },
  faq: {
    id: "faq",
    headline: "Frequently asked questions",
    items: [
      {
        q: "Which AI tools are supported?",
        a: "SwiftGPT starts with ChatGPT, Gemini, and Claude tabs, and you can add any AI web app URL you use.",
      },
      {
        q: "Can I customize the shortcut?",
        a: "Yes. Shortcut recording is built into settings so you can define your preferred key combo.",
      },
      {
        q: "Can I reorder or remove tabs?",
        a: "Yes. Tabs are fully editable in settings, including add, move up/down, and delete actions.",
      },
      {
        q: "Is it a one-time purchase?",
        a: "Yes. SwiftGPT is sold as a one-time license with updates.",
      },
    ],
  },
  footer: {
    productLine: "SwiftGPT",
    platformLine: "Built for macOS Sonoma & above",
    ctaLabel: "Buy on Gumroad",
  },
};
