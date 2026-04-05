import type { LandingPageContent } from "../types";

type FooterProps = {
  section: LandingPageContent["footer"];
  brandIcon: string;
  gumroadUrl: string;
};

export function Footer({ section, brandIcon, gumroadUrl }: FooterProps) {
  return (
    <footer className="theme-footer border-t py-16 backdrop-blur-sm">
      <div className="section-shell flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="flex items-center gap-2">
            <img src={brandIcon} alt={`${section.productLine} icon`} className="theme-brand-icon h-8 w-8 rounded-lg" />
            <span className="text-primary text-xl font-extrabold tracking-tight">{section.productLine}</span>
          </div>
          <p className="text-secondary text-sm font-medium">{section.platformLine}</p>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <a className="text-secondary text-sm font-semibold transition-colors hover:text-[color:var(--brand)]" href={gumroadUrl} target="_blank" rel="noreferrer">
            {section.ctaLabel}
          </a>
          <div className="text-secondary text-sm">
            © 2026{" "}
            <a
              href="https://shakthisagar.dev"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-[color:var(--brand)] hover:underline underline-offset-4"
            >
              Shakthi Sagar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
