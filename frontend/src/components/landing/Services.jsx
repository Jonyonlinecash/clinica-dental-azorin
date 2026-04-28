import { useState } from "react";
import { Smile, Sparkles, Leaf, ShieldAlert, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "recuperar",
    need: "Recuperar tus dientes",
    headline: "Volver a morder, hablar y reír sin pensar.",
    description:
      "Implantología avanzada incluso en casos donde te han dicho que 'no hay hueso suficiente'. Devolvemos la sonrisa a quien la dio por perdida.",
    items: [
      "Implantes dentales unitarios y múltiples",
      "Implantología Estratégica (sin injerto)",
      "Cirugía Regenerativa Ósea",
      "Rehabilitaciones completas Second Smile",
    ],
    icon: Smile,
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "estetica",
    need: "Una sonrisa perfecta",
    headline: "La estética que te mereces, sin parecer artificial.",
    description:
      "Diseñamos tu sonrisa con criterio clínico y sensibilidad estética. Resultados naturales que respetan tu carácter.",
    items: [
      "Ortodoncia invisible (alineadores)",
      "Brackets estéticos",
      "Carillas de porcelana",
      "Blanqueamiento profesional",
    ],
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "salud",
    need: "Salud y mantenimiento",
    headline: "Una boca sana es la mejor inversión.",
    description:
      "Prevención y conservación. Llegar a tiempo es la diferencia entre una limpieza y un tratamiento mayor.",
    items: [
      "Periodoncia (cuidado de encías)",
      "Endodoncia indolora",
      "Limpiezas avanzadas",
      "Revisiones digitales con escáner",
    ],
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "dolor",
    need: "Eliminar el dolor",
    headline: "Cuando duele, no esperamos al lunes.",
    description:
      "Atendemos urgencias y disfunciones complejas: ATM, bruxismo, dolor orofacial. Buscamos la causa, no solo silenciar el síntoma.",
    items: [
      "Urgencias dentales",
      "Tratamiento de bruxismo y férulas",
      "Oclusión y ATM",
      "Dolor orofacial",
    ],
    icon: ShieldAlert,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active);
  const Icon = current.icon;

  return (
    <section
      id="servicios"
      data-testid="services-section"
      className="relative py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[#0F3D5E] font-medium mb-5" data-testid="section-label-servicios">
              · Soluciones por necesidad
            </p>
            <h2 className="font-serif text-[#0F3D5E] text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tight font-semibold">
              Dinos qué <span className="italic font-normal">necesitas</span>. Te decimos cómo lo resolvemos.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
              Hablamos tu idioma, no en términos médicos. Elige tu situación y descubre el camino para resolverla.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Selecciona tu necesidad"
        >
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              data-testid={`service-tab-${s.id}`}
              role="tab"
              aria-selected={active === s.id}
              className={`px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all border ${
                active === s.id
                  ? "bg-[#0F3D5E] text-white border-[#0F3D5E]"
                  : "bg-white text-[#0F3D5E] border-[#E5E0D8] hover:border-[#0F3D5E]"
              }`}
            >
              {s.need}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch"
          data-testid={`service-panel-${current.id}`}
        >
          <div className="lg:col-span-7 bg-white border border-[#E5E0D8] rounded-3xl p-8 md:p-12">
            <div className="w-14 h-14 rounded-2xl bg-[#F5E6DD] flex items-center justify-center mb-7">
              <Icon className="w-6 h-6 text-[#0F3D5E]" strokeWidth={2} />
            </div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#4B5563] mb-3">
              Si buscas {current.need.toLowerCase()}
            </p>
            <h3 className="font-serif text-[#0F3D5E] text-3xl md:text-[40px] leading-[1.1] font-semibold">
              {current.headline}
            </h3>
            <p className="text-base md:text-lg text-[#4B5563] mt-5 leading-relaxed max-w-xl">
              {current.description}
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[#0F3D5E] text-sm md:text-base"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E8C8B5] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/34947649546?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20tratamientos."
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`service-cta-${current.id}`}
              className="group mt-9 inline-flex items-center gap-2 text-[#0F3D5E] font-medium hover:text-[#175078] transition-colors"
            >
              Cuéntanos tu caso
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[320px] lg:min-h-0">
            <img
              src={current.image}
              alt={current.headline}
              className="absolute inset-0 w-full h-full object-cover"
              data-testid={`service-image-${current.id}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D5E]/70 via-[#0F3D5E]/10 to-transparent" />
            <div className="relative h-full flex items-end p-8 md:p-10">
              <p className="font-serif italic text-white text-2xl md:text-3xl leading-snug max-w-sm">
                "{current.need} no es un lujo. Es calidad de vida."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
