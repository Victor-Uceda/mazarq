"use client";

import { useEffect, useState } from "react";

/** Returns `true` when the viewport is narrower than 768 px.
 *  Used to disable scroll‑driven effects on mobile devices. */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}
