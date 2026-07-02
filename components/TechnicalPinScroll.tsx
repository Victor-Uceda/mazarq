"use client";

import { useEffect, useRef, useState } from "react";
import { subscribe } from "@/lib/scrollManager";
import { useIsMobile } from "@/hooks/useIsMobile";

const frames = [
  {
    eyebrow: "Axonometria explotada",
    title: "Analisis constructivo",
    text: "Capas, estructura, cerramientos y lectura tecnica para explicar como se arma una propuesta."
  },
  {
    eyebrow: "Refugio-Taller",
    title: "Arquitectura ligera",
    text: "Volumen, sombra, vegetacion y escala humana para comunicar una idea con pocas lineas."
  },
  {
    eyebrow: "Arch Viz",
    title: "Presentacion comercial",
    text: "Imagenes listas para vender, sustentar decisiones y acelerar aprobaciones."
  }
];

function TechnicalContent({ active, modelRef, barRef, boardRef }: {
  active: number;
  modelRef: React.RefObject<HTMLDivElement>;
  barRef: React.RefObject<HTMLDivElement>;
  boardRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="mx-auto grid h-full w-full max-w-[1760px] gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
      <div ref={boardRef} className="technical-board relative h-[45dvh] overflow-hidden rounded-[2.4rem] border border-black/10 bg-white shadow-[0_35px_110px_rgba(20,26,32,.08)] sm:h-[min(68vh,46rem)] sm:rounded-[3.5rem]">
        <div className="absolute inset-0 technical-grid" />
        <div ref={modelRef} className="technical-model">
          <div className="model-plate model-roof" />
          <div className="model-plate model-frame" />
          <div className="model-plate model-base" />
          <div className="model-core" />
        </div>
        {[0, 1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="technical-callout"
            style={{
              top: `${18 + item * 13}%`,
              left: `${8 + item * 3}%`,
              opacity: active >= Math.min(item, 2) ? 1 : 0.25
            }}
          >
            <span>{String(item + 1).padStart(2, "0")}</span>
            <i />
          </div>
        ))}
        <div className="absolute bottom-4 left-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/35 sm:bottom-6 sm:left-6 sm:text-[10px] sm:tracking-[0.28em]">
              mazarq / Technical visualization
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-black/42">
          {frames[active].eyebrow}
        </p>
        <h2 className="display mt-5 text-[clamp(2.8rem,8vw,9rem)] leading-[0.78] text-[#111] sm:text-[clamp(4rem,8vw,9rem)]">
          {frames[active].title}
        </h2>
        <p className="mt-6 text-base leading-7 text-black/58 sm:mt-7 sm:text-lg sm:leading-8">
          {frames[active].text}
        </p>
        <div className="mt-8 h-1 max-w-sm overflow-hidden rounded-full bg-black/10 sm:mt-10">
          <div ref={barRef} className="h-full rounded-full bg-black/70" style={{ width: "7%" }} />
        </div>
      </div>
    </div>
  );
}

export default function TechnicalPinScroll() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [pinState, setPinState] = useState<"before" | "active" | "after">("before");
  const [active, setActive] = useState(0);

  const modelRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;

    return subscribe((scrollY, viewportH) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const total = Math.max(section.offsetHeight - viewportH, 1);
      const next = Math.min(Math.max(-rect.top / total, 0), 1);
      const newActive = Math.min(Math.floor(next * frames.length), frames.length - 1);

      setActive(newActive);

      if (rect.top > 0) {
        setPinState("before");
      } else if (rect.bottom <= viewportH) {
        setPinState("after");
      } else {
        setPinState("active");
      }

      if (barRef.current) {
        barRef.current.style.width = `${Math.max(next * 100, 7)}%`;
      }
      if (modelRef.current) {
        modelRef.current.style.transform = `translate3d(${next * 6}rem, ${next * -2.5}rem, 0) rotateX(58deg) rotateZ(${-38 + next * 18}deg) scale(${1 + next * 0.08})`;
      }
    });
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="relative z-10 bg-[#f8f8f5] px-5 py-24 sm:px-8 lg:px-12">
        <TechnicalContent
          active={active}
          modelRef={modelRef}
          barRef={barRef}
          boardRef={boardRef}
        />
      </section>
    );
  }

  const pinClass =
    pinState === "active"
      ? "fixed inset-0 z-20"
      : pinState === "after"
        ? "absolute inset-x-0 bottom-0"
        : "absolute inset-x-0 top-0";

  return (
    <section ref={sectionRef} className="relative z-10 h-[250vh]">
      <div className={`${pinClass} flex h-dvh items-center overflow-hidden bg-[#f8f8f5] px-5 py-24 sm:px-8 lg:px-12`}>
        <TechnicalContent
          active={active}
          modelRef={modelRef}
          barRef={barRef}
          boardRef={boardRef}
        />
      </div>
    </section>
  );
}
