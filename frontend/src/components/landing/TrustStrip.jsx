const items = [
  "Implantología Estratégica",
  "Sedación Consciente",
  "Escáner Intraoral 3D",
  "Ortodoncia Invisible",
  "Carillas Estéticas",
  "Periodoncia Avanzada",
  "Cirugía Regenerativa",
  "Urgencias Dentales",
];

export default function TrustStrip() {
  return (
    <section
      data-testid="trust-strip"
      aria-label="Tratamientos destacados"
      className="border-y border-[#E5E0D8] bg-[#F3EFE9]/60 overflow-hidden py-5"
    >
      <div className="flex whitespace-nowrap marquee-track">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 px-8"
            data-testid={`trust-item-${i}`}
          >
            <span className="font-serif italic text-[#0F3D5E] text-lg md:text-xl">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C8B5]" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
