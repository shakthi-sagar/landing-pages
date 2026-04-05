import { Bolt, Keyboard, RefreshCw, ShieldCheck } from "lucide-react";
import type { LandingPageContent } from "../types";

type EngineeringSectionProps = {
  section: LandingPageContent["engineering"];
};

export function EngineeringSection({ section }: EngineeringSectionProps) {
  const icons = [Bolt, ShieldCheck, RefreshCw, Keyboard];
  const spanClasses = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2"];

  return (
    <section className="section-shell py-20 md:py-28">
      <div className="mb-14">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">{section.headline}</h2>
        <p className="text-muted mt-4 max-w-2xl text-lg">
          Built to reduce friction in your daily flow. Everything here exists to save context, clicks, and time.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {section.cards.map((item, idx) => {
          const Icon = icons[idx] ?? Bolt;
          const spanClass = spanClasses[idx] ?? "lg:col-span-1";

          return (
            <article
              key={item.title}
              className={`glass-card relative overflow-hidden rounded-[1.65rem] p-6 transition-transform hover:-translate-y-1 md:min-h-[180px] md:p-7 ${spanClass}`}
            >
              <div className="flex items-center gap-4">
                <div className="icon-dark-chip flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-lg shadow-slate-900/10">
                  <Icon className="h-4.5 w-4.5" strokeWidth={2.4} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">{item.title}</h3>
              </div>
              <p className="text-muted mt-4 text-base leading-relaxed">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
