"use client";

import { useEffect } from "react";

export function useLazyVideo(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  containerRef: React.RefObject<HTMLElement | null>,
  src: string
) {
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let loaded = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded) {
          loaded = true;
          video.setAttribute("src", src);
          video.load();
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [src]);
}
