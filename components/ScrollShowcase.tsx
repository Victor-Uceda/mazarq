"use client";

import { useState } from "react";

/** Service cards (Recepciones / Interiores / Instalaciones) presented as a
 *  vertical stack on the right, with a sticky heading on the left.
 *  Active card is highlighted on click; no card is selected by default. */
const scenes = [
  { title: "Recepciones",  text: "Primera impresion, recorrido y escala para espacios comerciales o eventos.",  metric: "01" },
  { title: "Interiores",   text: "Materiales, iluminacion y composicion para presentar ambientes con decision.",  metric: "02" },
  { title: "Instalaciones", text: "Volumenes efimeros, piezas espaciales y visuales para propuestas memorables.", metric: "03" }
];

export default function ScrollShowcase() {
  const [active, setActive] = useState(-1);

  return (
    <section id="servicios" className="relative z-10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1760px] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        {/* Left – heading */}
        <div className="max-w-4xl lg:sticky lg:top-[10rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-black/42">Servicios</p>
          <h2 className="display mt-5 text-[clamp(2.6rem,8vw,9rem)] leading-[0.78] text-[#111] sm:text-[clamp(3.8rem,8vw,9rem)]">
            Espacios que se entienden antes de construirse.
          </h2>
          <p className="mt-6 text-base leading-7 text-black/58 sm:mt-7 sm:text-lg sm:leading-8">
            Modelado, render y direccion visual para presentar propuestas con claridad, atmosfera y valor comercial.
          </p>
        </div>

        {/* Right – service cards */}
        <div className="grid gap-4">
          {scenes.map((scene, index) => (
            <button
              key={scene.title}
              type="button"
              onClick={() => setActive(index)}
              className={`cursor-pointer overflow-hidden rounded-[1.8rem] border p-4 text-left transition-all duration-500 ease-out sm:rounded-[2.4rem] sm:p-5 ${
                active === index
                  ? "border-black/18 bg-white shadow-[0_20px_70px_rgba(20,26,32,.1)]"
                  : "border-black/8 bg-white/30 shadow-[0_8px_30px_rgba(20,26,32,.04)] hover:-translate-y-1 hover:scale-[1.02] hover:border-black/14 hover:bg-white/60 hover:shadow-[0_28px_80px_rgba(20,26,32,.14)]"
              } active:scale-[0.98]`}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/38 sm:text-[10px]">{scene.metric}</p>
              <h3 className={`display mt-1 text-xl leading-none transition-colors duration-500 sm:text-2xl ${
                active === index ? "text-[#111]" : "text-black/60 hover:text-[#111]"
              }`}>
                {scene.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-black/55 sm:text-sm sm:leading-6">{scene.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
