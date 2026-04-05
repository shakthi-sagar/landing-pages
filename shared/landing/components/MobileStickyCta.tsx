import { ArrowRight } from "lucide-react";

type MobileStickyCtaProps = {
  gumroadUrl: string;
  text: string;
};

export function MobileStickyCta({ gumroadUrl, text }: MobileStickyCtaProps) {
  return (
    <div className="fixed inset-x-4 bottom-4 z-[200] md:hidden">
      <a
        href={gumroadUrl}
        target="_blank"
        rel="noreferrer"
        className="btn-primary flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-center text-base font-extrabold shadow-[0_24px_45px_rgba(15,23,42,0.35)] ring-1 ring-[color:var(--brand-soft)] backdrop-blur-xl transition-transform active:scale-95"
      >
        {text}
        <ArrowRight className="h-5 w-5" strokeWidth={3} />
      </a>
    </div>
  );
}
