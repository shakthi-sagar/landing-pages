import type { LandingPageContent } from "../types";

type HowItWorksSectionProps = {
  section: LandingPageContent["howItWorks"];
};

export function HowItWorksSection({ section }: HowItWorksSectionProps) {
  return (
    <section id={section.id} className="section-shell py-20 md:py-28">
      <div className="mb-14">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">{section.headline}</h2>
      </div>

      <div className="relative grid gap-6 lg:grid-cols-3">
        <div className="pointer-events-none absolute left-8 right-8 top-9 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--brand-soft)] to-transparent lg:block" />
        {section.steps.map((step, idx) => (
          <article key={step.title} className="glass-card relative rounded-[1.7rem] p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="icon-dark-chip flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base font-extrabold shadow-lg shadow-slate-900/20">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{step.title.replace(/^\d\.\s/, "")}</h3>
            </div>
            <p className="text-muted mt-4 text-base leading-relaxed">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
