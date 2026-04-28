import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Llevo mucho tiempo con ellos y el trato es insuperable. Han conseguido alinear mis dientes (algo que parecía inimaginable).",
    author: "Raquel González",
    initials: "RG",
    detail: "Paciente de Ortodoncia",
  },
  {
    text: "Alberto es un dentista magnífico y el equipo (Jennifer y Teresa) siempre está pendiente de todo. Resultados de 10.",
    author: "Teodoro Campos",
    initials: "TC",
    detail: "Paciente de Implantes",
  },
  {
    text: "Me ofrecieron una solución cuando otras clínicas me dijeron que no había hueso suficiente. Volví a sonreír sin miedo.",
    author: "María L.",
    initials: "ML",
    detail: "Paciente de Implantología Estratégica",
  },
];

export default function SocialProof() {
  return (
    <section
      id="opiniones"
      data-testid="social-proof-section"
      className="relative py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[#0F3D5E] font-medium mb-5" data-testid="section-label-opiniones">
              · La voz de nuestros pacientes
            </p>
            <h2 className="font-serif text-[#0F3D5E] text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight font-semibold">
              Lo que se dice <span className="italic font-normal">sobre nosotros</span> en Burgos.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
              Nuestra mayor recompensa es ver a un paciente entrar con miedo y salir con una sonrisa. Estas son algunas de sus historias reales.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#E8C8B5] fill-[#E8C8B5]" strokeWidth={1.5} />
                ))}
              </div>
              <span className="text-sm font-medium text-[#0F3D5E]">
                4.8 / 5 en Google · +180 reseñas
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              data-testid={`testimonial-card-${idx}`}
              className={`group relative bg-white border border-[#E5E0D8] rounded-3xl p-7 md:p-8 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(15,61,94,0.22)] ${
                idx === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <Quote className="w-9 h-9 text-[#E8C8B5]" strokeWidth={1.5} />
              <p className="font-serif text-[#0F3D5E] text-lg md:text-xl leading-snug mt-5">
                "{t.text}"
              </p>
              <div className="mt-7 pt-5 border-t border-[#E5E0D8] flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#F5E6DD] text-[#0F3D5E] flex items-center justify-center font-serif font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F3D5E]">{t.author}</p>
                  <p className="text-xs text-[#4B5563]">{t.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
