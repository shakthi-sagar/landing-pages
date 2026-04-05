import { ArrowRight, Check } from "lucide-react";
import type { LandingPageContent } from "../types";

type PricingSectionProps = {
  section: LandingPageContent["pricing"];
  gumroadUrl: string;
};

export function PricingSection({ section, gumroadUrl }: PricingSectionProps) {
  const numericPrice = section.price.replace(/[^0-9]/g, "") || "10";

  return (
    <section id={section.id} className="section-shell">
      <div className="pricing-surface relative overflow-hidden rounded-[2rem] px-6 py-12 text-center shadow-2xl shadow-slate-900/35 md:px-10 md:py-16">
        <div className="pricing-glow-a absolute -left-16 top-4 h-56 w-56 rounded-full blur-3xl" />
        <div className="pricing-glow-b absolute -right-14 bottom-0 h-56 w-56 rounded-full blur-3xl" />

        <div className="relative z-10">
          <span className="chip-accent inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-widest">{section.eyebrow}</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">{section.headline}</h2>

          <div className="mt-8 flex items-end justify-center gap-1">
            <span className="text-3xl font-bold text-slate-300">$</span>
            <span className="text-7xl font-black tracking-tight text-white md:text-8xl">{numericPrice}</span>
            <span className="mb-3 ml-2 text-xs font-semibold text-slate-400">{section.currency}</span>
          </div>
          <p className="mt-2 text-base font-medium text-slate-300 md:text-lg">{section.subtitle}</p>

          <a
            href={gumroadUrl}
            target="_blank"
            rel="noreferrer"
            className="keep-light group mt-9 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-extrabold text-slate-950 transition-all hover:bg-[color:var(--brand-soft)]"
          >
            {section.ctaText}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.8} />
          </a>

          <div className="mx-auto mt-9 grid max-w-4xl gap-3 text-left md:grid-cols-2">
            {section.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/18 text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.8} />
                </div>
                <span className="text-sm font-semibold text-slate-200">{feature}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs font-medium text-slate-500">Secured checkout via Gumroad</p>
        </div>
      </div>
    </section>
  );
}
