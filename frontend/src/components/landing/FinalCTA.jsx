import { Phone, MessageCircle, Clock } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      data-testid="final-cta-section"
      className="relative py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="relative bg-[#FDFBF7] border border-[#E5E0D8] rounded-[36px] p-8 md:p-16 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-[#F5E6DD] blur-3xl pointer-events-none"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.22em] text-[#0F3D5E] font-medium mb-5">
                · ¿Listo para empezar?
              </p>
              <h2 className="font-serif text-[#0F3D5E] text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tight font-semibold">
                ¿Dudas sobre tu tratamiento? <span className="italic font-normal">Hablemos.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                Llámanos, escríbenos por WhatsApp o ven a vernos. La primera consulta de valoración no compromete a nada.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://wa.me/34947649546?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20cita%20en%20Cl%C3%ADnica%20Dental%20Azor%C3%ADn."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="final-cta-whatsapp"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25D366] text-white text-base font-medium hover:bg-[#1FB957] transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(37,211,102,0.25)]"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                  Escribir por WhatsApp
                </a>
                <a
                  href="tel:+34947649546"
                  data-testid="final-cta-phone"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#0F3D5E] text-white text-base font-medium hover:bg-[#175078] transition-all"
                >
                  <Phone className="w-5 h-5" strokeWidth={2.2} />
                  947 64 95 46
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-[#E5E0D8] rounded-3xl p-7" data-testid="final-cta-hours-card">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#F5E6DD] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#0F3D5E]" strokeWidth={2} />
                  </div>
                  <p className="font-serif text-xl text-[#0F3D5E]">Horario amplio</p>
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  <li className="flex justify-between text-[#4B5563]">
                    <span>Lunes a Viernes</span>
                    <span className="text-[#0F3D5E] font-medium">9:00 — 22:00</span>
                  </li>
                  <li className="flex justify-between text-[#4B5563]">
                    <span>Sábado</span>
                    <span className="text-[#0F3D5E] font-medium">10:00 — 14:00</span>
                  </li>
                  <li className="flex justify-between text-[#4B5563]">
                    <span>Domingo</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
                <p className="mt-5 pt-5 border-t border-[#E5E0D8] text-xs text-[#4B5563]">
                  Abrimos hasta las 22:00 — pensado para quienes trabajan todo el día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
