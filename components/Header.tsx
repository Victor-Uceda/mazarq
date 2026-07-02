"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { subscribe } from "@/lib/scrollManager";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyecto" },
  { label: "Contacto", href: "#contacto" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return subscribe((scrollY, viewportH, docH) => {
      setScrolled(scrollY > 24);
      if (headerRef.current) {
        headerRef.current.style.setProperty("--scroll", Math.min(scrollY / docH, 1).toFixed(4));
      }
    });
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500 sm:px-6 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-[1760px]">
        <div ref={headerRef} className="header-glass relative flex items-center rounded-full px-6 py-3.5 sm:px-8">
          <div className="flex flex-1 items-center gap-3 sm:gap-3">
            <a href="#" aria-label="Inicio" className="flex items-center gap-2.5 sm:gap-3">
              <Image
                src="/brand/masarq-logo.jpg"
                alt="mazarq"
                width={40}
                height={40}
                className="h-9 w-9 rounded-full border border-black/10 object-cover shadow-[0_12px_35px_rgba(20,26,32,.1)] sm:h-10 sm:w-10"
              />
              <span className="leading-tight">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-[10px] sm:tracking-[0.38em]">
                  mazarq
                </span>
                <span className="mt-0.5 hidden text-sm text-black/62 sm:block">
                  3D Modeler / Arch Viz Enthusiast
                </span>
              </span>
            </a>
          </div>

          <nav className="hidden items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-3">
            <a
              href="#contacto"
              className="liquid-button hidden rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-black sm:inline-flex"
            >
              Contratar
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 flex h-9 w-9 items-center justify-center md:hidden"
              aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              <span className={`block h-0.5 w-5 rounded-full bg-black/80 transition-all duration-300 ${menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-black/80 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-black/80 transition-all duration-300 ${menuOpen ? "-translate-y-0 -rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 z-30 bg-black/20 md:hidden"
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="glass-surface fixed inset-x-0 top-0 z-40 flex flex-col items-center gap-6 rounded-b-[2.5rem] pb-10 pt-28 md:hidden"
              >
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/10"
                  aria-label="Cerrar menu"
                >
                  <span className="block h-0.5 w-4 rotate-45 rounded-full bg-black/70" />
                  <span className="absolute block h-0.5 w-4 -rotate-45 rounded-full bg-black/70" />
                </button>
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-semibold uppercase tracking-[0.28em] text-black/70 transition hover:text-black"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="liquid-button mt-2 rounded-full px-8 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-black"
                >
                  Contratar
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
