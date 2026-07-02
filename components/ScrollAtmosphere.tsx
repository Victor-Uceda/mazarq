"use client";

import { useEffect, useRef } from "react";
import { subscribe } from "@/lib/scrollManager";

export default function ScrollAtmosphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return subscribe((scrollY, viewportH, docH) => {
      const progress = Math.min(scrollY / docH, 1);
      
      if (containerRef.current) {
        containerRef.current.style.setProperty("--scroll", progress.toFixed(4));
      }
    });
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true" className="atmosphere pointer-events-none fixed inset-0 z-0">
      <div className="atmosphere-field absolute inset-0" />
      <div className="cloud-form cloud-form-a" />
      <div className="cloud-form cloud-form-b" />
      <div className="cloud-form cloud-form-c" />
    </div>
  );
}
