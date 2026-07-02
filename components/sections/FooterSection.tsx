export default function FooterSection() {
  return (
    <footer className="relative z-10 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1760px] flex-col gap-5 border-t border-black/10 pt-8 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between">
        <p>2026 Miguel Angel | mazarq. 3D Modeler / Arch Viz Enthusiast.</p>
        <div className="flex gap-5 uppercase tracking-[0.22em]">
          <a
            className="transition hover:text-black"
            href="https://www.instagram.com/mazarq.pe/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a className="transition hover:text-black" href="#">
            Behance
          </a>
          <a
            href="https://www.linkedin.com/in/mazarq/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
