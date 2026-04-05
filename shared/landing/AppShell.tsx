import { useEffect, useMemo, useState } from "react";
import { ComparisonSection } from "./components/ComparisonSection";
import { DemoSection } from "./components/DemoSection";
import { EngineeringSection } from "./components/EngineeringSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { MobileStickyCta } from "./components/MobileStickyCta";
import { PricingSection } from "./components/PricingSection";
import type { LandingPageContent } from "./types";

type ThemeMode = "light" | "dark";

type LandingPageAppProps = {
  content: LandingPageContent;
  themeStorageKey: string;
};

export function LandingPageApp({ content, themeStorageKey }: LandingPageAppProps) {
  const preferredTheme = useMemo<ThemeMode>(() => {
    if (typeof window === "undefined") return "light";
    const saved = window.localStorage.getItem(themeStorageKey);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, [themeStorageKey]);
  const [theme, setTheme] = useState<ThemeMode>(preferredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme, themeStorageKey]);

  return (
    <main className="app-root relative overflow-x-hidden antialiased">
      <div className="theme-grid pointer-events-none absolute inset-0 -z-20 bg-[size:40px_40px] opacity-70" />
      <div className="theme-top-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-96" />

      <Header
        brand={content.brand}
        brandIcon={content.brandIcon}
        navLinks={content.navLinks}
        gumroadUrl={content.gumroadUrl}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
      />
      <HeroSection hero={content.hero} gumroadUrl={content.gumroadUrl} />

      <DemoSection section={content.demo} />
      <ComparisonSection section={content.comparison} />
      <HowItWorksSection section={content.howItWorks} />
      <EngineeringSection section={content.engineering} />

      <div className="py-16 md:py-24">
        <PricingSection section={content.pricing} gumroadUrl={content.gumroadUrl} />
      </div>

      <FaqSection section={content.faq} />
      <Footer section={content.footer} brandIcon={content.brandIcon} gumroadUrl={content.gumroadUrl} />
      <MobileStickyCta gumroadUrl={content.gumroadUrl} text={content.pricing.ctaText} />
    </main>
  );
}
