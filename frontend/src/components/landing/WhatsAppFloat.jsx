import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3" data-testid="whatsapp-float">
      {open && (
        <div
          className="bg-white border border-[#E5E0D8] rounded-3xl shadow-[0_24px_48px_-20px_rgba(15,61,94,0.25)] p-5 w-[300px] animate-[fadeUp_0.3s_ease-out]"
          data-testid="whatsapp-float-card"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <div>
                <p className="font-serif text-base text-[#0F3D5E] leading-tight">
                  Clínica Azorín
                </p>
                <p className="text-[11px] text-[#4B5563] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  En línea ahora
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              data-testid="whatsapp-float-close"
              className="text-[#4B5563] hover:text-[#0F3D5E]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-[#4B5563] leading-relaxed">
            Hola 👋 Estamos aquí para resolver tus dudas sin compromiso. ¿Te ayudamos?
          </p>
          <a
            href="https://wa.me/34947649546?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20cita%20o%20resolver%20una%20duda."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="whatsapp-float-start"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm hover:bg-[#1FB957] transition-colors"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2.2} />
            Iniciar conversación
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        data-testid="whatsapp-float-button"
        aria-label="Abrir chat de WhatsApp"
        className={`w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:bg-[#1FB957] transition-all hover:-translate-y-0.5 ${
          !open ? "whatsapp-pulse" : ""
        }`}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" strokeWidth={2.2} />}
      </button>
    </div>
  );
}
