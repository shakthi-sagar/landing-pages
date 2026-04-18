import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { LandingPageContent } from "../types";

type DemoSectionProps = {
  section: LandingPageContent["demo"];
};

export function DemoSection({ section }: DemoSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasStartedPlaybackRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlaybackState = () => {
      setIsPlaying(!video.paused && !video.ended);
    };
    const syncTime = () => {
      setCurrentTime(video.currentTime || 0);
      setDuration(Number.isFinite(video.duration) ? video.duration : 0);
    };
    const resetToStartOnInitialLoad = () => {
      if (hasStartedPlaybackRef.current) return;
      try {
        video.currentTime = 0;
      } catch {
        // Some browsers block immediate seeks before ready state settles.
      }
      setCurrentTime(0);
    };

    video.addEventListener("play", syncPlaybackState);
    video.addEventListener("pause", syncPlaybackState);
    video.addEventListener("ended", syncPlaybackState);
    video.addEventListener("timeupdate", syncTime);
    video.addEventListener("loadedmetadata", syncTime);
    video.addEventListener("loadedmetadata", resetToStartOnInitialLoad);

    return () => {
      video.removeEventListener("play", syncPlaybackState);
      video.removeEventListener("pause", syncPlaybackState);
      video.removeEventListener("ended", syncPlaybackState);
      video.removeEventListener("timeupdate", syncTime);
      video.removeEventListener("loadedmetadata", syncTime);
      video.removeEventListener("loadedmetadata", resetToStartOnInitialLoad);
    };
  }, []);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    hasStartedPlaybackRef.current = false;
    video.pause();
    try {
      video.currentTime = 0;
    } catch {
      // No-op for browsers that block seek before metadata is ready.
    }
    setCurrentTime(0);
    setIsPlaying(false);
  }, [section.videoUrl]);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      if (!hasStartedPlaybackRef.current) {
        try {
          video.currentTime = 0;
        } catch {
          // No-op for restricted seeks.
        }
      }
      if (video.ended || (video.duration > 0 && video.currentTime >= video.duration - 0.05)) {
        video.currentTime = 0;
      }
      try {
        await video.play();
        hasStartedPlaybackRef.current = true;
      } catch {
        setIsPlaying(false);
      }
      return;
    }
    video.pause();
  };
  
  const handleSeek = (value: string) => {
    const video = videoRef.current;
    if (!video) return;
    const next = Number(value);
    if (!Number.isFinite(next)) return;
    video.currentTime = next;
    setCurrentTime(next);
  };
  
  const formatTime = (seconds: number) => {
    const safe = Math.max(0, Math.floor(seconds));
    const mins = Math.floor(safe / 60);
    const secs = safe % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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
        className="relative mx-auto w-fit max-w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          className="block h-auto w-auto max-w-full rounded-3xl border border-slate-200 bg-slate-950 object-contain shadow-2xl shadow-slate-900/24"
          preload="metadata"
          poster={section.placeholderImage}
          playsInline
        >
          {section.videoUrl ? <source src={section.videoUrl} /> : null}
          Your browser does not support embedded videos.
        </video>

        <div className="absolute bottom-4 left-1/2 flex w-[min(92%,680px)] -translate-x-1/2 items-center gap-3 rounded-full border border-white/30 bg-slate-900/70 px-3 py-2 backdrop-blur-md">
          <motion.button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause demo video" : "Play demo video"}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-lg transition-colors"
          >
            {isPlaying ? <Pause className="h-4 w-4" strokeWidth={2.6} /> : <Play className="ml-0.5 h-4 w-4" strokeWidth={2.6} />}
          </motion.button>

          <span className="w-10 shrink-0 text-xs font-semibold tabular-nums text-white/90">
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.01}
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => handleSeek(event.target.value)}
            disabled={duration <= 0}
            aria-label="Seek demo video"
            className="h-1 w-full cursor-pointer accent-white disabled:cursor-not-allowed disabled:opacity-50"
          />

          <span className="w-10 shrink-0 text-right text-xs font-semibold tabular-nums text-white/90">
            {formatTime(duration)}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
