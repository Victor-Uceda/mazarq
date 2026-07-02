/** Single RAF‑throttled scroll/resize subscription manager.
 *  All scroll‑driven components subscribe here instead of adding
 *  their own listeners, keeping the page at a single RAF loop. */

type ScrollCallback = (scrollY: number, viewportH: number, docH: number) => void;

let subscribers = new Set<ScrollCallback>();
let raf = 0;
let cachedViewportH = 0;
let cachedDocH = 1;

function updateDimensions() {
  cachedViewportH = window.innerHeight;
  cachedDocH = Math.max(document.documentElement.scrollHeight - cachedViewportH, 1);
}

function notify() {
  const scrollY = window.scrollY;
  subscribers.forEach((fn) => fn(scrollY, cachedViewportH, cachedDocH));
}

function handleScroll() {
  if (raf) return;
  raf = requestAnimationFrame(() => { notify(); raf = 0; });
}

function handleResize() {
  updateDimensions();
  notify();
}

export function subscribe(fn: ScrollCallback) {
  if (subscribers.size === 0) {
    updateDimensions();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
  }
  subscribers.add(fn);
  fn(window.scrollY, cachedViewportH, cachedDocH);
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0) {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    }
  };
}
