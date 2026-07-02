"use client";

import { useEffect, useRef } from "react";
import { subscribe } from "@/lib/scrollManager";

/** Ambient background layer – drives CSS custom properties for clouds and
 *  atmosphere based on scroll progress. Disabled on mobile. */
export default function ScrollAtmosphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return subscribe((scrollY, viewportH, docH) => {
      if (window.innerWidth <= 768) {
        if (containerRef.current) {
          containerRef.current.style.setProperty("--scroll", "0");
        }
        return;
      }

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
