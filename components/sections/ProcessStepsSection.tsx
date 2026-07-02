import Image from "next/image";
import Reveal from "@/components/Reveal";

/** Process / methodology cards – 4 steps (Brief → Entrega) with cover images
 *  and a gradient overlay matching the site aesthetic. */
const steps = [
  { title: "Brief",    text: "Objetivo, referencias, publico y formato final.",        img: "/models/brief.jpg" },
  { title: "Volumen",  text: "Modelado limpio con escala y lectura espacial.",         img: "/models/volumen.jpg" },
  { title: "Atmosfera", text: "Luz, materialidad y encuadres de alto impacto.",         img: "/models/atmosfera.jpg" },
  { title: "Entrega",  text: "Imagenes, video o assets listos para presentar.",         img: "/models/entrega.jpg" }
];

export default function ProcessStepsSection() {
  return (
    <section className="relative z-10 px-5 pb-24 pt-0 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1760px]">
        <Reveal className="mb-14 max-w-5xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-black/42">Miguel Angel / mazarq</p>
          <h2 className="display mt-5 text-[clamp(2.6rem,7vw,8rem)] leading-[0.82] text-[#111]">
            3D Modeler. Arch Viz Enthusiast.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.06}
              className="group scroll-card glass-surface overflow-hidden rounded-[2.8rem] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_32px_90px_rgba(20,26,32,.16)] active:scale-[0.98] sm:rounded-[3.4rem]"
            >
              <div className="relative h-44 overflow-hidden sm:h-52">
                <Image
                  src={step.img} alt={step.title} fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay – white‑to‑dark with a radial light spot */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,.12)_48%,rgba(0,0,0,.38)),radial-gradient(circle_at_50%_18%,rgba(255,255,255,.45),transparent_45%)]" />
              </div>
              <div className="p-6 sm:p-7">
                <span className="text-sm text-black/32">0{index + 1}</span>
                <h3 className="display mt-2 text-4xl leading-none text-[#111] sm:mt-3 sm:text-5xl">{step.title}</h3>
                <p className="mt-4 leading-7 text-black/58">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
