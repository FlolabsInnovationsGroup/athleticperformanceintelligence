"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const VIDEO_SRC = "/media/hero-background.mp4";

export function HeroBackgroundVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    el.defaultPlaybackRate = 1;
    el.playbackRate = 1;
    el.muted = true;
    void el.play().catch(() => {});
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-slate-950 via-background to-slate-900",
          className,
        )}
        aria-hidden
      />
    );
  }

  return (
    <video
      ref={ref}
      className={cn(
        "absolute inset-0 h-full w-full object-cover object-center",
        className,
      )}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    >
      <source src={VIDEO_SRC} type="video/mp4" />
    </video>
  );
}
