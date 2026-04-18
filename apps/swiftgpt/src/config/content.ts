import type { LandingPageContent } from "../../../../shared/landing/types";

/**
 * SwiftGPT product messaging source of truth.
 *
 * Purpose:
 * - Give macOS users instant AI access without leaving their active app.
 * - Reduce context switching cost during coding/writing/research workflows.
 *
 * Product philosophy:
 * - AI should behave like a utility surface, not a full browser destination.
 * - Prioritize fast open -> ask -> close loops over passive browsing.
 * - Keep onboarding and pricing simple (one-time purchase).
 *
 * Full feature inventory (current app behavior):
 *
 * 1) Core access model
 * - Menu bar app with floating panel UI.
 * - Global shortcut to open/hide from anywhere in macOS.
 * - Panel can be shown/hidden via status bar icon or keyboard.
 *
 * 2) Multi-site AI tabs
 * - Default tabs: ChatGPT, Gemini, Claude.
 * - User-managed site list: add custom AI sites, remove sites, reorder sites.
 * - Horizontal tab strip with active selection state.
 * - Per-tab quick switch shortcuts (Cmd+1..Cmd+9 by default, customizable).
 *
 * 3) Navigation and browsing controls
 * - Back / Forward / Home controls.
 * - Reload and hard reload.
 * - Temporary "Browser" tab for ad-hoc searches.
 * - Browser tab search provider options: Google, DuckDuckGo, Brave, Perplexity.
 * - Off-domain indicator banner with actions:
 *   return to site root and open current page in external browser.
 *
 * 4) Shortcut system
 * - Customizable global toggle shortcut.
 * - Customizable action shortcuts for:
 *   screenshot-to-chat, back, forward, home, open/focus browser tab,
 *   reload, hard reload, and switch-to-tab 1..9.
 *
 * 5) Screenshot-to-chat workflow
 * - Keyboard action captures active window screenshot to clipboard.
 * - Refocuses current web input and auto-pastes screenshot.
 *
 * 6) Performance and persistence
 * - Performance modes: Fast, Balanced, Memory Saver.
 * - Mode controls tab cache size and inactive tab eviction timing.
 * - Last visited URL persisted per site.
 * - Navigation history stack persisted per site (back/forward continuity).
 * - Uses default WebKit data store (cookies/session persistence).
 *
 * 7) Window and app settings
 * - Adjustable window width/height + quick presets.
 * - Selected preset state reflects current dimensions.
 * - Window size persisted between launches.
 * - Panel origin coordinates persisted for reopen behavior.
 *
 * 8) Platform integrations
 * - Built-in update checks via Sparkle ("Check for Updates...").
 * - In-app feedback entry point from status menu/settings.
 * - Accessory app mode (menu bar first, no dock-heavy workflow).
 *
 * Copy guidance for this file:
 * - Sell outcome: less context loss, faster execution, cleaner focus.
 * - Keep claims concrete and aligned to the implemented features above.
 * - Avoid generic AI hype; emphasize practical daily workflow gains.
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
    badge: "macOS menu bar • keyboard-first AI access",

    headline:
      "One shortcut to any AI.\nZero app switching.",

    subheadline:
      "SwiftGPT is a native menu bar panel that keeps ChatGPT, Gemini, Claude, and any AI site one keystroke away — so you stay in your editor, your doc, your terminal. Open, ask, close, keep working.",

    ctaText: "Buy for $5",
    priceNote: "One-time purchase. No subscription.",

    previewCards: [
      { title: "Screenshot → AI", subtitle: "Capture, paste, ask — one shortcut" },
      { title: "Cmd+1..9", subtitle: "Switch AI tools instantly" },
      { title: "Sessions stay warm", subtitle: "Fast reopen with fewer interruptions" },
    ],
  },

  demo: {
    id: "demo",
    eyebrow: "See it in action",

    headline:
      "Your screen never changes.\nThe answer just appears.",

    description:
      "Hit your shortcut, type a question, close the panel. Your editor, your doc, your terminal — whatever you were doing stays exactly where you left it. Need to send a screenshot? One shortcut captures your window and pastes it straight into the chat.",

    videoUrl: "/demo.mp4",
  },

  comparison: {
    id: "features",
    eyebrow: "The real cost of a browser tab",

    headline:
      "Every Cmd+Tab is a tiny derailment.",

    before: {
      title: "Without SwiftGPT",
      body:
        "Cmd+Tab to browser → hunt for the right tab → wait for it to reload → ask your question → notice three other tabs → check Slack → forget what you were doing. Repeat 20+ times a day.",
      points: [
        "Frequent Cmd+Tab context switching",
        "Time lost finding the right AI tab",
        "Reloads and session interruptions",
        "More distractions from unrelated tabs",
        "Broken flow and slower execution",
      ],
    },

    after: {
      title: "With SwiftGPT",
      body:
        "Press one shortcut → panel appears over your work → ask across ChatGPT, Gemini, or Claude with Cmd+1..9 → close → you never left. Sessions persist, tabs stay warm, history carries forward.",
      points: [
        "Global shortcut opens over your current app",
        "ChatGPT, Gemini, and Claude in one panel",
        "Cmd+1..9 instant tab switching",
        "Screenshot-to-chat in one keystroke",
        "Close panel and continue without app switching",
      ],
    },
  },

  howItWorks: {
    id: "how-it-works",
    eyebrow: "Running in under a minute",

    headline: "Three steps. Ready in under a minute.",

    steps: [
      {
        title: "Pick your AI tools",
        body:
          "Starts with ChatGPT, Gemini, and Claude. Add any AI site you use — Perplexity, Mistral, HuggingChat, anything with a URL. Reorder tabs to match how you think.",
      },
      {
        title: "Set your shortcuts",
        body:
          "Choose a global shortcut to toggle the panel from anywhere in macOS. Assign per-tab shortcuts, screenshot-to-chat, navigation — every action is bindable.",
      },
      {
        title: "Use it like a utility",
        body:
          "Open, ask, close. Your sessions stay logged in, your scroll position persists, your conversation history carries over between launches. It's always warm and ready.",
      },
    ],
  },

  engineering: {
    eyebrow: "Why it feels instant",

    headline: "A native utility, not another Electron wrapper.",

    cards: [
      {
        title: "Always-warm sessions",
        description:
          "Tabs stay warm while active and recover quickly after idle eviction. Pick up work with less waiting and fewer interruptions.",
      },
      {
        title: "Screenshot → paste → ask",
        description:
          "One shortcut captures your active window, switches to the chat input, and pastes the screenshot. Ask about code, UI, errors — visually.",
      },
      {
        title: "Three performance modes",
        description:
          "Fast keeps every tab alive. Balanced evicts idle tabs. Memory Saver aggressively frees RAM. You choose the trade-off.",
      },
      {
        title: "Full keyboard control",
        description:
          "Global toggle, Cmd+1..9 tab switching, back/forward/home, reload, browser tab — every action has a customizable shortcut.",
      },
      {
        title: "Built-in browser tab",
        description:
          "Need a quick search? A dedicated browser tab with Google, DuckDuckGo, Brave, or Perplexity — no need to leave the panel.",
      },
      {
        title: "Persistent everything",
        description:
          "Last URL, navigation history, window size, window position, cookies — all saved across launches. SwiftGPT remembers so you don't have to.",
      },
    ],
  },

  pricing: {
    id: "pricing",
    eyebrow: "Pricing",

    headline: "Five dollars. Every day, forever.",

    price: "$5",
    currency: "USD",

    subtitle:
      "You context-switch to AI dozens of times a day. At $5 once, SwiftGPT pays for itself the first morning.",

    ctaText: "Get SwiftGPT",

    features: [
      "ChatGPT, Gemini, Claude in one panel",
      "Add any AI site with a URL",
      "Customizable global shortcut",
      "Cmd+1..9 instant tab switching",
      "Screenshot-to-chat in one keystroke",
      "Three performance modes",
      "Session & cookie persistence",
      "Resizable window with quick presets",
      "Built-in browser tab for searches",
      "Native macOS menu bar app",
      "Auto-updates via Sparkle",
      "Works with your existing AI accounts",
    ],
  },

  faq: {
    id: "faq",
    headline: "FAQ",

    items: [
      {
        q: "Why not just use a browser tab?",
        a:
          "Because a browser tab lives inside a browser — surrounded by other tabs, bookmarks, and notifications. SwiftGPT is a floating panel that appears over whatever you're working in and disappears when you're done. You never leave your current app.",
      },
      {
        q: "Which AI tools come built in?",
        a:
          "ChatGPT, Gemini, and Claude are set up by default. You can add, remove, and reorder any AI site — Perplexity, Mistral, HuggingChat, or anything else with a web interface.",
      },
      {
        q: "What's the screenshot-to-chat feature?",
        a:
          "One shortcut captures your active window, focuses the chat input in the current tab, and pastes the screenshot. Useful for asking about code, UI bugs, error messages, or anything visual.",
      },
      {
        q: "Do I have to log into my AI accounts again?",
        a:
          "No. SwiftGPT uses macOS WebKit's default data store, so cookies and sessions persist across launches. Log in once and stay logged in.",
      },
      {
        q: "Will it slow down my Mac?",
        a:
          "It's a native menu bar app with three performance modes. Memory Saver aggressively evicts idle tabs. Fast keeps them all warm. Choose the mode that fits your machine.",
      },
      {
        q: "How customizable are the shortcuts?",
        a:
          "Every action is bindable: the global toggle, per-tab switching (Cmd+1..9 by default), screenshot-to-chat, back, forward, home, reload, and browser tab focus. Set them all in settings.",
      },
      {
        q: "Is it a subscription?",
        a:
          "No. It's a one-time $5 purchase with updates available through the built-in updater.",
      },
      {
        q: "What macOS versions are supported?",
        a:
          "macOS Sonoma and later.",
      },
    ],
  },

  footer: {
    productLine: "SwiftGPT",
    platformLine: "macOS Sonoma+",
    ctaLabel: "Buy on Gumroad",
  },
};
