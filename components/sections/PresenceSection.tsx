import Reveal from "@/components/Reveal";

/** Presence – short brand pitch and the target audience statement. */
export default function PresenceSection() {
  return (
    <section className="relative z-10 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1760px] gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-black/42">Presencia</p>
          <h2 className="display mt-5 max-w-4xl text-[clamp(2.6rem,7vw,8rem)] leading-[0.82] text-[#111]">
            Del plano a una imagen que convence.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="glass-surface rounded-[2.4rem] p-7 sm:rounded-[3.4rem] sm:p-10">
          <p className="text-lg leading-8 text-black/62 sm:text-xl sm:leading-9">
            Para inmobiliarias, marcas, arquitectos y eventos que necesitan
            mostrar una idea antes de ejecutarla: espacios modelados con
            precision, luz cuidada y una presentacion que se siente premium.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
