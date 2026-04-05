import { ArrowRight, Minus, Plus } from "lucide-react";
import type { LandingPageContent } from "../types";

type ComparisonSectionProps = {
  section: LandingPageContent["comparison"];
};

export function ComparisonSection({ section }: ComparisonSectionProps) {
  const beforePoints = section.before.body.split(",").map((point) => point.trim()).filter(Boolean);
  const afterPoints = section.after.body.split(",").map((point) => point.trim()).filter(Boolean);

  return (
    <section id={section.id} className="section-shell py-20 md:py-28">
      <div className="mb-14 text-center">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
          {section.headline}
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <article className="glass-card relative overflow-hidden rounded-[1.7rem] p-7 md:p-8">
          <p className="text-xs font-semibold tracking-wide text-slate-500">Before</p>
          <h3 className="mt-3 text-2xl font-bold text-slate-900">{section.before.title}</h3>
          <p className="text-muted mt-3 text-base leading-relaxed">{section.before.body}</p>
          <div className="mt-6 space-y-3">
            {(beforePoints.length > 1 ? beforePoints : ["Tab overload", "Repeated searching", "Frequent context switching"]).map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-slate-50/5 p-3 backdrop-blur-sm transition-all hover:bg-slate-50/10">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-900 shadow-sm keep-light">
                  <Minus className="h-3.5 w-3.5" strokeWidth={4} />
                </span>
                <span className="text-sm font-medium text-slate-700">{point.replace(/\.$/, "")}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="icon-dark-chip mx-auto flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-slate-900/20 md:h-14 md:w-14">
          <ArrowRight className="h-6 w-6" strokeWidth={2.4} />
        </div>

        <article className="compare-after-card relative overflow-hidden rounded-[1.7rem] p-7 text-white md:p-8">
          <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/3 rounded-full bg-white/20 blur-2xl" />
          <p className="text-xs font-bold tracking-wide text-white/90 uppercase">After</p>
          <h3 className="mt-3 text-2xl font-extrabold">{section.after.title}</h3>
          <p className="mt-3 text-base font-medium leading-relaxed text-white">{section.after.body}</p>
          <div className="mt-6 space-y-3">
            {(afterPoints.length > 1 ? afterPoints : ["One click access", "Native menu bar workflow", "Smoother deep work"]).map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-xl border border-white/30 bg-white/15 px-4 py-2.5 backdrop-blur-md transition-all hover:bg-white/20">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">
                  <Plus className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold text-white">{point.replace(/\.$/, "")}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
