import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "Por qué Azorín", href: "#por-que" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FDFBF7]/85 border-b border-[#E5E0D8] shadow-[0_2px_20px_rgba(15,61,94,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-[72px]">
        <a
          href="#top"
          data-testid="header-logo"
          className="flex items-center gap-2 group"
          aria-label="Clínica Dental Azorín - Inicio"
        >
          <span className="w-9 h-9 rounded-full bg-[#0F3D5E] text-[#FDFBF7] flex items-center justify-center font-serif text-lg leading-none">
            A
          </span>
          <span className="font-serif text-[#0F3D5E] text-xl tracking-tight leading-tight">
            Clínica <span className="italic">Azorín</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.href.replace("#", "")}`}
              className="text-sm font-medium text-[#4B5563] hover:text-[#0F3D5E] transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#0F3D5E] hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+34947649546"
            data-testid="header-call-button"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#0F3D5E] hover:text-[#175078] transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={2.2} />
            947 64 95 46
          </a>
          <a
            href="https://wa.me/34947649546?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20cita%20en%20Cl%C3%ADnica%20Dental%20Azor%C3%ADn."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-cta-button"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#0F3D5E] text-white text-sm font-medium hover:bg-[#175078] transition-colors"
          >
            Pide tu cita
          </a>
          <button
            onClick={() => setOpen(!open)}
            data-testid="header-mobile-toggle"
            aria-label="Abrir menú"
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#0F3D5E]"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#FDFBF7] border-t border-[#E5E0D8]" data-testid="mobile-menu">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${item.href.replace("#", "")}`}
                className="font-serif text-2xl text-[#0F3D5E]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+34947649546"
              data-testid="mobile-call-link"
              className="mt-3 inline-flex items-center gap-2 text-base font-medium text-[#0F3D5E]"
            >
              <Phone className="w-4 h-4" /> 947 64 95 46
            </a>
            <a
              href="https://wa.me/34947649546"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-cta-link"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#0F3D5E] text-white font-medium"
            >
              Pide tu cita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
