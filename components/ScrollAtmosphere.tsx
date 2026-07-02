"use client";

import { useEffect } from "react";
import { subscribe } from "@/lib/scrollManager";

export default function ScrollAtmosphere() {
  useEffect(() => {
    return subscribe((scrollY, viewportH, docH) => {
      const progress = Math.min(scrollY / docH, 1);
      const hero = Math.min(scrollY / (viewportH * 1.1), 1);

      document.documentElement.style.setProperty("--scroll", progress.toFixed(4));
      document.documentElement.style.setProperty("--hero-progress", hero.toFixed(4));
    });
  }, []);

  return (
    <div aria-hidden="true" className="atmosphere pointer-events-none fixed inset-0 z-0">
      <div className="atmosphere-field absolute inset-0" />
      <div className="cloud-form cloud-form-a" />
      <div className="cloud-form cloud-form-b" />
      <div className="cloud-form cloud-form-c" />
    </div>
  );
}
