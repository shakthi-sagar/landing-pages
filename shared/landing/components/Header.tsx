import { ArrowRight, Moon, Sun } from "lucide-react";
import type { NavLink } from "../types";

type HeaderProps = {
  brand: string;
  brandIcon: string;
  navLinks: NavLink[];
  gumroadUrl: string;
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export function Header({ brand, brandIcon, navLinks, gumroadUrl, theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-4 z-[100] px-4 md:top-6 md:px-6">
      <nav className="theme-header-nav section-shell glass-card flex h-16 items-center justify-between px-4 md:h-[72px] md:px-6">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
            <img src={brandIcon} alt={`${brand} icon`} className="theme-brand-icon h-9 w-9 rounded-xl" />
            <span className="text-primary text-xl font-extrabold tracking-tight">{brand}</span>
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
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="theme-icon-button inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" strokeWidth={2.2} aria-hidden />
            ) : (
              <Sun className="h-4 w-4" strokeWidth={2.2} aria-hidden />
            )}
          </button>

          <a
            href={gumroadUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all active:scale-95 md:px-6"
          >
            {`Get ${brand}`}
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </a>
        </div>
      </nav>
    </header>
  );
}
