import { Heart } from "lucide-react";

export default function Authority() {
  return (
    <section
      data-testid="authority-section"
      className="relative py-20 md:py-32 bg-[#0F3D5E] text-white overflow-hidden"
    >
      {/* warm decorative blob */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E8C8B5]/10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.4)]">
              <img
                src="https://images.pexels.com/photos/4269276/pexels-photo-4269276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720"
                alt="Interior cálido de la Clínica Dental Azorín"
                className="w-full h-full object-cover"
                data-testid="authority-image"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-[#E8C8B5] mb-7">
              <Heart className="w-4 h-4" strokeWidth={2.2} />
              Nos importas tú
            </div>

            <h2
              data-testid="authority-headline"
              className="font-serif text-white text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tight font-semibold"
            >
              Tratamos personas, <span className="italic font-normal text-[#E8C8B5]">no bocas</span>.
            </h2>

            <p
              data-testid="authority-text"
              className="mt-7 text-base md:text-lg text-white/80 max-w-xl leading-relaxed"
            >
              Sabemos que ir al dentista puede generar ansiedad. Por eso, nuestro enfoque es diferente: estudiamos tu caso de forma exhaustiva y con humildad. Ya sea que te hayan dicho que <em className="text-white">"no tienes hueso"</em> o que simplemente busques mejorar tu estética, tenemos los medios para ayudarte.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl">
              <div data-testid="authority-stat-0">
                <p className="font-serif text-4xl md:text-5xl text-white">+20</p>
                <p className="text-xs uppercase tracking-[0.18em] text-white/60 mt-2">
                  Años de experiencia
                </p>
              </div>
              <div data-testid="authority-stat-1">
                <p className="font-serif text-4xl md:text-5xl text-white">+3.500</p>
                <p className="text-xs uppercase tracking-[0.18em] text-white/60 mt-2">
                  Pacientes tratados
                </p>
              </div>
              <div data-testid="authority-stat-2">
                <p className="font-serif text-4xl md:text-5xl text-white">22h</p>
                <p className="text-xs uppercase tracking-[0.18em] text-white/60 mt-2">
                  Cierre, ideal trabajadores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
