import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";

/** Hero – full‑screen intro with logo, heading, CTA and the auto‑playing video. */
export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-[92dvh] px-5 pt-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[calc(92dvh-6rem)] max-w-[1760px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="max-w-4xl py-6">
          <Image
            src="/brand/masarq-logo.jpg" alt="mazarq"
            width={68} height={68} priority
            className="mb-5 h-16 w-16 rounded-full border border-black/10 object-cover shadow-[0_22px_70px_rgba(20,26,32,.12)] sm:h-[4.25rem] sm:w-[4.25rem]"
          />
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.42em] text-black/45">Miguel Angel | mazarq</p>
          <h1 className="display text-balance text-[clamp(2.8rem,8.8vw,9.6rem)] leading-[0.8] text-[#111]">
            Visuales 3D para vender espacios.
          </h1>
          <div className="mt-6 grid max-w-3xl gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="text-[clamp(1rem,1.7vw,1.35rem)] leading-7 text-black/62 sm:leading-8">
              Modelado arquitectonico, render y direccion visual para
              proyectos que necesitan verse claros, deseables y listos para presentarse.
            </p>
            <a href="#contacto" className="liquid-button inline-flex justify-center rounded-full px-7 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-black">
              Solicitar propuesta
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <HeroVideo />
        </Reveal>
      </div>
    </section>
  );
}
