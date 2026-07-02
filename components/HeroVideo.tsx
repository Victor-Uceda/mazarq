"use client";

import { useEffect, useRef } from "react";
import { subscribe } from "@/lib/scrollManager";

/** Hero video with scroll‑driven scale / opacity / border‑radius animation.
 *  Disabled on mobile. Video plays once then pauses (no loop). */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return subscribe((scrollY, viewportH) => {
      if (window.innerWidth <= 768) {
        if (videoRef.current) { videoRef.current.style.transform = "none"; videoRef.current.style.opacity = "1"; }
        if (shellRef.current) { shellRef.current.style.transform = "none"; shellRef.current.style.borderRadius = ""; }
        return;
      }

      const progress = Math.min(scrollY / (viewportH * 1.15), 1);
      const heroProgress = Math.min(scrollY / (viewportH * 1.1), 1);
      const scale = 1.04 + progress * 0.12;
      const translateY = progress * 18;
      const opacity = 1 - progress * 0.28;

      if (videoRef.current) {
        videoRef.current.style.transform = `scale(${scale}) translateY(${translateY}px) translateZ(0)`;
        videoRef.current.style.opacity = `${opacity}`;
      }
      if (shellRef.current) {
        shellRef.current.style.transform = `translate3d(0, ${heroProgress * 18}px, 0) scale(${1 - heroProgress * 0.018})`;
        shellRef.current.style.borderRadius = `${7 + progress * 5}rem ${7 + progress * 5}rem ${2.4 + progress * 2}rem ${2.4 + progress * 2}rem`;
      }
    });
  }, []);

  return (
    <div
      ref={shellRef}
      className="hero-media relative h-[20rem] overflow-hidden rounded-[5rem] bg-white/30 shadow-[0_40px_110px_rgba(20,26,32,.12)] sm:h-[28rem] sm:rounded-[7rem] xl:h-[40rem]"
    >
      <video
          ref={videoRef}
          autoPlay muted playsInline preload="metadata"
          onEnded={(e) => (e.target as HTMLVideoElement).pause()}
          className="absolute inset-0 h-full w-full object-cover brightness-[1.08] contrast-[0.92] saturate-[0.82]"
        >
        <source src="/models/video.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.42),rgba(255,255,255,.08)_48%,rgba(0,0,0,.12)),radial-gradient(circle_at_50%_18%,rgba(255,255,255,.48),transparent_30%)]" />
    </div>
  );
}
