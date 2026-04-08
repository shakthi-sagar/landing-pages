import { ArrowRight, Moon, Sun } from "lucide-react";
import type { NavLink } from "../types";

type HeaderProps = {
  brand: string;
  brandIcon: string;
  navLinks: NavLink[];
  gumroadUrl: string;
  ctaText: string;
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export function Header({ brand, brandIcon, navLinks, gumroadUrl, ctaText, theme, onToggleTheme }: HeaderProps) {
  const isComingSoon = ctaText.toLowerCase().includes("coming soon");

  return (
    <header className="fixed inset-x-0 top-4 z-[100] px-4 md:top-6 md:px-6">
      <nav className="theme-header-nav section-shell glass-card flex h-16 items-center justify-between px-3 sm:px-4 md:h-[72px] md:px-6">
        <div className="flex min-w-0 items-center gap-3 md:gap-8">
          <a href="#" className="flex min-w-0 items-center gap-2 transition-transform hover:scale-[1.02] md:gap-2.5">
            <img src={brandIcon} alt={`${brand} icon`} className="theme-brand-icon h-8 w-8 rounded-xl md:h-9 md:w-9" />
            <span className="text-primary truncate text-lg font-extrabold tracking-tight sm:text-xl">{brand}</span>
          </a>
          <div className="hidden gap-6 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                className="header-link group relative rounded-full px-2 py-1 text-sm font-semibold transition-colors"
                href={item.href}
              >
                {item.label}
                <span className="header-link-underline absolute inset-x-2 -bottom-0.5 h-0.5 scale-x-0 rounded transition-transform group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="theme-icon-button inline-flex h-9 w-9 items-center justify-center rounded-xl border transition-colors md:h-10 md:w-10"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" strokeWidth={2.2} aria-hidden />
            ) : (
              <Sun className="h-4 w-4" strokeWidth={2.2} aria-hidden />
            )}
          </button>

          {isComingSoon ? (
            <span className="btn-primary hidden cursor-not-allowed items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold opacity-70 sm:inline-flex md:px-6">
              {ctaText}
            </span>
          ) : (
            <a
              href={gumroadUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all active:scale-95 sm:inline-flex md:px-6"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
