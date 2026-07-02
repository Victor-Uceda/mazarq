"use client";

const inputClass =
  "w-full rounded-[1.8rem] border border-black/10 bg-white/38 px-5 py-4 text-black/80 outline-none transition placeholder:text-black/28 focus:border-black/30 focus:bg-white/65";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open("https://www.instagram.com/mazarq.pe/", "_blank");
      }}
      className="glass-surface grid gap-4 rounded-[2.4rem] p-5 sm:rounded-[3.4rem] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/42">
          Nombre
          <input className={inputClass} type="text" name="name" placeholder="Tu nombre" />
        </label>
        <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/42">
          Email
          <input className={inputClass} type="email" name="email" placeholder="tu@email.com" />
        </label>
      </div>
      <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/42">
        Tipo de proyecto
        <select className={inputClass} name="projectType" defaultValue="">
          <option value="" disabled>
            Selecciona una ruta
          </option>
          <option>Modelado Arquitectonico</option>
          <option>Renderizado Fotorrealista</option>
          <option>Visualizacion Interactiva</option>
          <option>Instalacion / Evento</option>
        </select>
      </label>
      <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/42">
        Mensaje
        <textarea
          className={`${inputClass} min-h-40 resize-y`}
          name="message"
          placeholder="Describe el espacio, objetivo y formato final."
        />
      </label>
      <button
        type="submit"
        className="liquid-button mt-2 rounded-full px-8 py-5 text-[11px] font-bold uppercase tracking-[0.26em] text-black/72"
      >
        Enviar briefing
      </button>
    </form>
  );
}
