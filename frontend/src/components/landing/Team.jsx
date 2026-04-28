const team = [
  {
    name: "Dr. Alberto",
    role: "Director clínico · Implantología",
    bio: "Especialista en casos complejos e Implantología Estratégica. Tu primera consulta empieza siempre con él.",
    image:
      "https://images.unsplash.com/photo-1756699279298-c89cdef354ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDB8fHx8MTc3NzM3NDYxM3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Jennifer",
    role: "Higienista dental · Periodoncia",
    bio: "Cuida tus encías y mantenimiento. Hace que las revisiones dejen de ser una obligación.",
    image:
      "https://images.unsplash.com/photo-1729162128021-f37dca3ff30d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDB8fHx8MTc3NzM3NDYxM3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Teresa",
    role: "Atención al paciente · Coordinación",
    bio: "La voz al teléfono y la sonrisa al entrar. Te acompaña en cada paso del tratamiento.",
    image:
      "https://images.unsplash.com/photo-1674775372058-c4c8813c6611?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDB8fHx8MTc3NzM3NDYxM3ww&ixlib=rb-4.1.0&q=85",
  },
];

export default function Team() {
  return (
    <section
      id="equipo"
      data-testid="team-section"
      className="relative py-20 md:py-32 bg-[#F3EFE9]/70"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[#0F3D5E] font-medium mb-5" data-testid="section-label-equipo">
              · Nuestro equipo
            </p>
            <h2 className="font-serif text-[#0F3D5E] text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tight font-semibold">
              Las caras detrás de cada <span className="italic font-normal">sonrisa</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
              Aquí no rotará un dentista distinto cada vez. Conoces a tu equipo desde el primer día y se queda contigo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((m, idx) => (
            <article
              key={m.name}
              data-testid={`team-card-${idx}`}
              className={`group relative bg-white border border-[#E5E0D8] rounded-3xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(15,61,94,0.18)] ${
                idx === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={m.image}
                  alt={`Retrato de ${m.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-testid={`team-image-${idx}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D5E]/40 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-[#4B5563]">
                  0{idx + 1}
                </p>
                <h3 className="font-serif text-[#0F3D5E] text-2xl mt-2">
                  {m.name}
                </h3>
                <p className="text-sm text-[#0F3D5E]/70 font-medium mt-1">
                  {m.role}
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mt-4">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
