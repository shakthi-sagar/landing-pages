import { Plus } from "lucide-react";
import type { LandingPageContent } from "../types";

type FaqSectionProps = {
  section: LandingPageContent["faq"];
};

export function FaqSection({ section }: FaqSectionProps) {
  return (
    <section id={section.id} className="section-shell py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">{section.headline}</h2>
        <div className="mt-8 space-y-3">
          {section.items.map((item, idx) => (
            <details
              key={item.q}
              className="group glass-card rounded-2xl bg-white/85 px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
              open={idx === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-left text-base font-bold text-slate-900 md:text-lg">{item.q}</h3>
                <span className="icon-dark-chip flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform group-open:rotate-45">
                  <Plus className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
              </summary>
              <p className="text-muted mt-3 pr-10 text-sm leading-relaxed md:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
