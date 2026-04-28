import { Star, Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-[120px] pb-20 md:pt-[140px] md:pb-32 overflow-hidden"
    >
      {/* Decorative warm shape */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#F5E6DD] blur-3xl opacity-70 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -left-40 w-[380px] h-[380px] rounded-full bg-[#F3EFE9] blur-3xl opacity-80 pointer-events-none"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="lg:col-span-7 fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E0D8] text-xs md:text-sm font-medium text-[#0F3D5E] mb-7" data-testid="hero-badge">
              <ShieldCheck className="w-4 h-4 text-[#0F3D5E]" strokeWidth={2.2} />
              Implantología estratégica · Sedación consciente
            </div>

            <h1
              data-testid="hero-headline"
              className="font-serif text-[#0F3D5E] text-[40px] sm:text-5xl lg:text-[68px] leading-[1.05] tracking-tight font-semibold"
            >
              Tu sonrisa merece <span className="italic font-normal">expertos</span> que <em className="not-italic accent-underline">no se rinden</em>.
            </h1>

            <p
              data-testid="hero-subtitle"
              className="mt-7 text-base md:text-lg text-[#4B5563] max-w-xl leading-relaxed"
            >
              En Clínica Dental Azorín combinamos tecnología avanzada como el <strong className="text-[#0F3D5E] font-semibold">escáner intraoral</strong> con un trato humano insuperable. Especialistas en casos complejos e Implantología Estratégica en Burgos.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/34947649546?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20cita%20en%20Cl%C3%ADnica%20Dental%20Azor%C3%ADn."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#0F3D5E] text-white text-base font-medium hover:bg-[#175078] transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(15,61,94,0.18)]"
              >
                Pide tu Cita Ahora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#opiniones"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#0F3D5E] text-[#0F3D5E] text-base font-medium hover:bg-[#0F3D5E] hover:text-white transition-all"
              >
                Ver Casos de Éxito
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2" data-testid="hero-rating">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#E8C8B5] fill-[#E8C8B5]"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <span className="text-sm text-[#4B5563]">
                  <strong className="text-[#0F3D5E] font-semibold">4.8/5</strong> en Google
                </span>
              </div>
              <div className="h-4 w-px bg-[#E5E0D8] hidden sm:block" />
              <span className="text-sm text-[#4B5563]" data-testid="hero-experience">
                <strong className="text-[#0F3D5E] font-semibold">+20 años</strong> cuidando Burgos
              </span>
              <div className="h-4 w-px bg-[#E5E0D8] hidden sm:block" />
              <a
                href="tel:+34947649546"
                data-testid="hero-phone-link"
                className="inline-flex items-center gap-2 text-sm text-[#0F3D5E] font-medium hover:text-[#175078]"
              >
                <Phone className="w-4 h-4" strokeWidth={2.2} />
                947 64 95 46
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5 relative fade-up fade-up-delay-2">
            <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(15,61,94,0.25)]">
              <img
                src="https://images.unsplash.com/photo-1758653500342-5476c8ec3da6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwY29tZm9ydGluZyUyMHBhdGllbnQlMjBzbWlsaW5nfGVufDB8fHx8MTc3NzM3NDYxNHww&ixlib=rb-4.1.0&q=85"
                alt="Dentista atendiendo a paciente con cercanía"
                className="w-full h-full object-cover"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D5E]/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div
              data-testid="hero-stat-card"
              className="absolute -left-4 md:-left-10 bottom-8 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_rgba(15,61,94,0.18)] border border-[#E5E0D8] max-w-[240px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#F5E6DD] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#0F3D5E]" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-serif text-2xl text-[#0F3D5E] leading-none">+3.500</p>
                  <p className="text-xs text-[#4B5563] mt-1">sonrisas devueltas</p>
                </div>
              </div>
            </div>

            {/* Floating quote */}
            <div
              data-testid="hero-quote-card"
              className="hidden md:block absolute -right-2 top-10 bg-[#0F3D5E] text-white rounded-2xl px-5 py-4 max-w-[220px] shadow-[0_20px_50px_rgba(15,61,94,0.25)]"
            >
              <p className="font-serif italic text-sm leading-snug">
                "Me hicieron olvidar el miedo al dentista."
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] mt-2 text-[#E8C8B5]">
                — Paciente real
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
