import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { LandingPageContent } from "../types";

type DemoSectionProps = {
  section: LandingPageContent["demo"];
};

export function DemoSection({ section }: DemoSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncState = () => {
      setIsPlaying(!video.paused && !video.ended);
    };

    video.addEventListener("play", syncState);
    video.addEventListener("pause", syncState);
    video.addEventListener("ended", syncState);

    return () => {
      video.removeEventListener("play", syncState);
      video.removeEventListener("pause", syncState);
      video.removeEventListener("ended", syncState);
    };
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }
    video.pause();
  };

  return (
    <section id={section.id} className="section-shell py-20 md:py-28">
      <div className="mb-14 text-center">
        <span className="eyebrow mb-5">{section.eyebrow}</span>
        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
          {section.headline}
        </h2>
        <p className="text-muted mx-auto mt-5 max-w-2xl text-lg">
          {section.description}
        </p>
      </div>

      <motion.div
        className="relative mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          className="block aspect-video w-full rounded-3xl border border-slate-200 bg-slate-950 object-cover shadow-2xl shadow-slate-900/24"
          preload="metadata"
          poster={section.placeholderImage}
          playsInline
        >
          {section.videoUrl ? <source src={section.videoUrl} type="video/mp4" /> : null}
          Your browser does not support embedded videos.
        </video>

        <motion.button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause demo video" : "Play demo video"}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-colors"
        >
          {isPlaying ? <Pause className="h-4 w-4" strokeWidth={2.6} /> : <Play className="ml-0.5 h-4 w-4" strokeWidth={2.6} />}
        </motion.button>
      </motion.div>
    </section>
  );
}
