import snopi from "../assets/snopi.png";

const Footer = () => (
  <footer className="bg-navbar border-t border-muted-foreground/10 pt-12 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="18" fill="white" stroke="hsl(350, 73%, 44%)" strokeWidth="3" />
                <text x="20" y="26" textAnchor="middle" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif" fill="black">P</text>
                <line x1="8" y1="32" x2="32" y2="8" stroke="hsl(350, 73%, 44%)" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-serif text-navbar-foreground font-bold text-xl tracking-tight">
              PERTURBANISMO
            </span>
          </div>
          <p className="text-navbar-foreground/70 text-sm leading-relaxed max-w-xs font-sans">
            Descodificando el caos urbano para construir ciudades más humanas y sostenibles.
          </p>
        </div>

        {/* Links Column */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-navbar-foreground font-bold text-sm uppercase tracking-widest mb-4">Navegación</h4>
            <ul className="flex flex-col gap-2">
              {["INICIO", "QUÉ ES", "GALERÍA"].map((label) => (
                <li key={label}>
                  <a href={`#${label.toLowerCase().replace(" ", "-")}`} className="text-navbar-foreground/60 hover:text-primary text-sm transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>

          </div>
          <div>
            <h4 className="text-navbar-foreground font-bold text-sm uppercase tracking-widest mb-4">Recursos</h4>
            <ul className="flex flex-col gap-2">
              {["BLOG", "EL LIBRO", "LA MÚSICA", "AUTORA"].map((label) => (
                <li key={label}>
                  <a href={`#${label.toLowerCase().replace(" ", "-")}`} className="text-navbar-foreground/60 hover:text-primary text-sm transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact/Image Column */}
        <div className="flex flex-col gap-6 md:items-end">
          <div className="text-left md:text-right">
            <h4 className="text-navbar-foreground font-bold text-sm uppercase tracking-widest mb-4">Contacto</h4>
            <a href="mailto:info@perturbanismo.com" className="text-primary hover:text-primary/80 font-medium transition-colors">
              info@perturbanismo.com
            </a>
            <p className="text-navbar-foreground/60 text-sm mt-1">Cajamarca, Perú</p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={snopi}
              alt="Contacto"
              className="relative w-48 h-auto object-contain rounded-lg opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-muted-foreground/10 text-center">
        <p className="text-navbar-foreground/40 text-xs font-sans tracking-wide">
          Perturbanismo © 2024–2026 | Todos los derechos reservados
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

