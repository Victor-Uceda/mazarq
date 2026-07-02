type ScrollCallback = (scrollY: number, viewportH: number, docH: number) => void;

let subscribers = new Set<ScrollCallback>();
let raf = 0;

function notify() {
  const scrollY = window.scrollY;
  const viewportH = window.innerHeight;
  const docH = Math.max(document.documentElement.scrollHeight - viewportH, 1);
  subscribers.forEach((fn) => {
    fn(scrollY, viewportH, docH);
  });
}

function handleScroll() {
  if (raf) return;
  raf = requestAnimationFrame(() => {
    notify();
    raf = 0;
  });
}

export function subscribe(fn: ScrollCallback) {
  if (subscribers.size === 0) {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", notify);
  }
  subscribers.add(fn);
  fn(window.scrollY, window.innerHeight, Math.max(document.documentElement.scrollHeight - window.innerHeight, 1));
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0) {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", notify);
    }
  };
}
