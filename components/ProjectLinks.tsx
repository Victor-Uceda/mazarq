import Image from "next/image";
import Reveal from "@/components/Reveal";

type Project = { title: string; href: string; src: string };

const projects: Project[] = [
  { title: "Proyecto 01", href: "https://www.instagram.com/mazarq.pe/", src: "/img/proyecto01.jpg" },
  { title: "Proyecto 02", href: "https://www.instagram.com/mazarq.pe/", src: "/img/proyecto02.jpg" }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="scroll-card h-full">
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-full min-h-[20rem] overflow-hidden rounded-[2.8rem] bg-white/30 p-3 shadow-[0_35px_110px_rgba(20,26,32,.1)] backdrop-blur-2xl sm:min-h-[34rem] sm:rounded-[4.2rem] sm:p-4"
      >
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="!relative h-full min-h-[18rem] w-full rounded-[2rem] object-cover brightness-[1.08] contrast-[.92] saturate-[.82] transition duration-700 group-hover:scale-[1.04] sm:min-h-[32rem] sm:rounded-[3.3rem]"
        />
        <div className="absolute inset-3 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,.22),rgba(255,255,255,.04)_46%,rgba(0,0,0,.2))] sm:inset-4 sm:rounded-[3.3rem]" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="glass-surface rounded-[1.6rem] p-4 sm:rounded-[2.6rem] sm:p-6">
            <div className="flex items-end justify-between gap-5">
              <h3 className="display text-3xl leading-none text-[#111] sm:text-5xl">
                {project.title}
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/48">
                Abrir
              </span>
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function ProjectLinks() {
  return (
    <section id="proyecto" className="relative z-10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1760px]">
        <Reveal className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-black/42">
              Proyectos reales
            </p>
            <h2 className="display mt-5 max-w-5xl text-[clamp(3.4rem,7vw,8rem)] leading-[0.82] text-[#111]">
              Trabajos recientes de mazarq.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/mazarq.pe/"
            target="_blank"
            rel="noreferrer"
            className="liquid-button w-fit rounded-full px-7 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-black"
          >
            Ver Instagram
          </a>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
