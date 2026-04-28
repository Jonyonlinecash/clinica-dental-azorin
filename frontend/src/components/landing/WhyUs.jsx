import { Sparkles, HeartPulse, ScanLine, Users } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Donde otros se rinden, nosotros empezamos.",
    text: "Expertos en falta de hueso para implantes y soluciones de Second Smile. Estudiamos cada caso con humildad y precisión.",
    tag: "Implantología compleja",
  },
  {
    icon: HeartPulse,
    title: "Adiós al pánico dental.",
    text: "Especialistas en Sedación Consciente para que tu única preocupación sea elegir qué música escuchar durante el tratamiento.",
    tag: "Sedación consciente",
  },
  {
    icon: ScanLine,
    title: "Precisión digital sin moldes molestos.",
    text: "Escáner intraoral 3D para diagnósticos exactos, tratamientos más rápidos y resultados predecibles.",
    tag: "Tecnología 3D",
  },
  {
    icon: Users,
    title: "Equipo con nombres y apellidos.",
    text: "No somos una franquicia. Aquí te atienden Alberto, Jennifer y Teresa — siempre las mismas caras de confianza.",
    tag: "Trato cercano",
  },
];

export default function WhyUs() {
  return (
    <section
      id="por-que"
      data-testid="why-us-section"
      className="relative py-20 md:py-32 bg-[#F3EFE9]/70"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[#0F3D5E] font-medium mb-5" data-testid="section-label-por-que">
              · Por qué Azorín
            </p>
            <h2 className="font-serif text-[#0F3D5E] text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tight font-semibold">
              Cuatro razones por las que <span className="italic font-normal">los pacientes</span> nos eligen.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
              No somos una clínica más. Combinamos tecnología puntera con un trato personal que se nota desde la primera visita.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            // Asymmetric bento: 0,3 wide; 1,2 narrow
            const span =
              idx === 0
                ? "md:col-span-7"
                : idx === 1
                ? "md:col-span-5"
                : idx === 2
                ? "md:col-span-5"
                : "md:col-span-7";
            return (
              <article
                key={idx}
                data-testid={`why-card-${idx}`}
                className={`${span} group relative bg-white border border-[#E5E0D8] rounded-3xl p-8 md:p-10 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(15,61,94,0.18)] overflow-hidden`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5E6DD] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#E8C8B5]">
                    <Icon className="w-6 h-6 text-[#0F3D5E]" strokeWidth={2} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#4B5563] font-medium pt-2">
                    0{idx + 1} · {r.tag}
                  </span>
                </div>

                <h3 className="font-serif text-[#0F3D5E] text-2xl md:text-[28px] leading-tight mt-7 max-w-md">
                  {r.title}
                </h3>
                <p className="text-[#4B5563] text-base leading-relaxed mt-4 max-w-lg">
                  {r.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
