import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0F3D5E] text-white pt-20 pb-10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand + map */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-9 h-9 rounded-full bg-white text-[#0F3D5E] flex items-center justify-center font-serif text-lg">
                A
              </span>
              <span className="font-serif text-xl tracking-tight">
                Clínica <span className="italic">Azorín</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Más de 20 años cuidando las sonrisas de Burgos. Especialistas en implantología compleja, sedación consciente y trato cercano.
            </p>

            <div className="mt-8 rounded-3xl overflow-hidden border border-white/15" data-testid="footer-map">
              <iframe
                title="Ubicación Clínica Dental Azorín"
                src="https://maps.google.com/maps?q=C.%20Azor%C3%ADn%2C%201%2C%2009005%20Burgos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="240"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[#E8C8B5] font-medium mb-6">
              · Contacto
            </p>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3" data-testid="footer-address">
                <MapPin className="w-5 h-5 mt-0.5 text-[#E8C8B5] shrink-0" strokeWidth={1.8} />
                <span className="text-white/85">
                  C. Azorín, 1
                  <br />
                  09005 Burgos, España
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-[#E8C8B5] shrink-0" strokeWidth={1.8} />
                <a
                  href="tel:+34947649546"
                  data-testid="footer-phone"
                  className="text-white/85 hover:text-white transition-colors"
                >
                  947 64 95 46
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-[#E8C8B5] shrink-0" strokeWidth={1.8} />
                <a
                  href="mailto:info@clinicadentalazorin.es"
                  data-testid="footer-email"
                  className="text-white/85 hover:text-white transition-colors"
                >
                  info@clinicadentalazorin.es
                </a>
              </li>
              <li className="flex items-start gap-3" data-testid="footer-hours">
                <Clock className="w-5 h-5 mt-0.5 text-[#E8C8B5] shrink-0" strokeWidth={1.8} />
                <span className="text-white/85">
                  L–V: 9:00 — 22:00
                  <br />
                  Sábado: 10:00 — 14:00
                </span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#E8C8B5] font-medium mb-6">
              · Tratamientos
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Implantes dentales",
                "Implantología Estratégica",
                "Ortodoncia invisible",
                "Carillas estéticas",
                "Sedación consciente",
                "Urgencias dentales",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#servicios"
                    data-testid={`footer-link-${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-testid="footer-social-instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0F3D5E] transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={2} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                data-testid="footer-social-facebook"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0F3D5E] transition-colors"
              >
                <Facebook className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/60">
          <p data-testid="footer-copyright">
            © {new Date().getFullYear()} Clínica Dental Azorín · Burgos
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-link-privacy">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-link-cookies">
              Cookies
            </a>
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-link-legal">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
