import { ArrowRight } from "lucide-react";
import type { LandingPageContent } from "../types";

type HeroSectionProps = {
  hero: LandingPageContent["hero"];
  gumroadUrl: string;
};

export function HeroSection({ hero, gumroadUrl }: HeroSectionProps) {
  const lines = hero.headline.split("\n");

  return (
    <section className="section-shell relative pb-20 pt-32 md:pb-24 md:pt-44">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-primary mx-auto max-w-4xl text-5xl font-extrabold leading-[1.2] tracking-tight md:max-w-5xl md:text-7xl md:leading-[1.16]">
          <span className="block md:whitespace-nowrap">{lines[0]}</span>
          {lines[1] ? (
            <span className="accent-gradient-text mt-2 block bg-clip-text pb-[0.12em] text-transparent">
              {lines[1]}
            </span>
          ) : null}
        </h1>

        <p className="text-muted mx-auto mt-7 max-w-2xl text-lg leading-relaxed md:text-xl">
          {hero.subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={gumroadUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary group inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-lg font-bold transition-all"
          >
            {hero.ctaText}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
          <p className="text-secondary text-sm font-semibold">{hero.priceNote}</p>
        </div>
      </div>
    </section>
  );
}
