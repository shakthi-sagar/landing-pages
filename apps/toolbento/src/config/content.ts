import type { LandingPageContent } from "../../../../shared/landing/types";

export const toolBentoContent: LandingPageContent = {
  brand: "ToolBento",
  brandIcon: "/toolbento-icon.svg",
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
    headline: "Twelve daily utility tools,\nin one native workspace.",
    subheadline:
      "ToolBento bundles JSON, URL, Base64, regex, hashes, JWT, timestamps, image and PDF conversions, and more into one fast app you can customize.",
    ctaText: "Coming Soon",
    priceNote: "Launch details and pricing will be announced soon.",
    previewCards: [
      { title: "Data Utilities", subtitle: "JSON, Base64, Hash, JWT" },
      { title: "Text + URL", subtitle: "Escape, URL toolkit, Regex lab" },
      { title: "Media + Docs", subtitle: "Image convert, PDF convert, Color" },
    ],
  },
  demo: {
    id: "demo",
    eyebrow: "A compact utility suite for builders",
    headline: "Stop hunting for one-off web tools.",
    description:
      "Open ToolBento, pick the tool you need, run the conversion or inspection locally, and move on without context switching to random websites.",
    placeholderImage: "/screenshot.png",
  },
  comparison: {
    id: "features",
    eyebrow: "Why it matters",
    headline: "Utility work should be instant, not fragmented.",
    before: {
      title: "Without ToolBento",
      body: "Search for a site, paste sensitive data, wait for ads and popups, lose your flow between scattered tools.",
    },
    after: {
      title: "With ToolBento",
      body: "Use one desktop workspace, keep tools ordered your way, process common utility tasks faster with less noise.",
    },
  },
  howItWorks: {
    id: "how-it-works",
    eyebrow: "How it works",
    headline: "Utility flow in three steps.",
    steps: [
      {
        title: "1. Pick your tool",
        body: "Start from JSON formatter, URL toolkit, regex lab, timestamp studio, and more from one home grid.",
      },
      {
        title: "2. Run your transform",
        body: "Paste input, execute encode/decode/convert/query actions, and inspect output in the same workspace.",
      },
      {
        title: "3. Customize your home",
        body: "Choose visible tools, reorder them, and keep your most-used utilities first.",
      },
    ],
  },
  engineering: {
    eyebrow: "Built the right way",
    headline: "Practical tooling for daily technical work.",
    cards: [
      {
        title: "12 built-in tools",
        description: "Covers high-frequency workflows across data, web, text, media, design, security, and time conversions.",
      },
      {
        title: "Customizable tool library",
        description: "Enable/disable tools and reorder them with persistent preferences in the app.",
      },
      {
        title: "Desktop-first workflow",
        description: "No browser tab overhead for repetitive utility tasks and quick debugging operations.",
      },
      {
        title: "Signed auto-updates",
        description: "Sparkle-backed updates keep ToolBento current with improvements and fixes.",
      },
    ],
  },
  pricing: {
    id: "pricing",
    eyebrow: "Launch status",
    headline: "ToolBento is coming soon.",
    price: "Coming Soon",
    currency: "",
    subtitle: "Join the waitlist to get notified when ToolBento goes live.",
    ctaText: "Coming Soon",
    features: [
      "12 native utility workspaces",
      "Customizable home tool list",
      "No browser dependency for core tasks",
      "Lifetime updates",
    ],
  },
  faq: {
    id: "faq",
    headline: "Frequently asked questions",
    items: [
      {
        q: "Which tools are included?",
        a: "ToolBento includes JSON Formatter, URL Toolkit, Escape/Unescape, Base64, JSON Query, Image Convert, PDF Convert, Color Toolkit, Regex Lab, Hash Lab, JWT Inspector, and Timestamp Studio.",
      },
      {
        q: "Can I customize the home screen?",
        a: "Yes. You can pick visible tools, reorder them, and reset to defaults at any time.",
      },
      {
        q: "Does it require internet for every feature?",
        a: "Core utility workflows are designed to run locally in the app, reducing dependence on third-party tool sites.",
      },
      {
        q: "Is ToolBento subscription-based?",
        a: "No. ToolBento is a one-time purchase with updates.",
      },
    ],
  },
  footer: {
    productLine: "ToolBento",
    platformLine: "Built for macOS Sonoma & above",
    ctaLabel: "Buy on Gumroad",
  },
};
