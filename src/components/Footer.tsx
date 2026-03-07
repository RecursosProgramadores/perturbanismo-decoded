import { Link } from "react-router-dom";
import logoImg from "@/assets/logos/logo.jpeg";
import snopi from "../assets/snopi.png";

const Footer = () => (
  <footer className="bg-navbar border-t border-muted-foreground/10 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-4 group w-fit">
            <div className="relative w-12 h-12 overflow-hidden rounded-sm">
              <img
                src={logoImg}
                alt="Perturbanismo Logo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="font-serif text-navbar-foreground font-bold text-xl tracking-wider group-hover:text-primary transition-colors uppercase">
              PERTURBANISMO
            </span>
          </Link>
          <p className="text-navbar-foreground/70 text-sm leading-relaxed max-w-xs font-sans">
            Descodificando el caos urbano para devolverle a la ciudad su dignidad visual y humana.
          </p>
        </div>

        {/* Navigation Column 1 */}
        <div className="flex flex-col gap-6">
          <h4 className="text-navbar-foreground font-black text-xs uppercase tracking-[0.2em] mb-2 border-l-2 border-primary pl-3">Explorar</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "INICIO", href: "/" },
              { label: "TIPOS DE PERTURBANISMO", href: "/tipos" },
              { label: "GALERÍA", href: "/galeria" },
              { label: "BLOG", href: "/blog" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="text-navbar-foreground/60 hover:text-primary text-xs font-bold transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Column 2 */}
        <div className="flex flex-col gap-6">
          <h4 className="text-navbar-foreground font-black text-xs uppercase tracking-[0.2em] mb-2 border-l-2 border-primary pl-3">Conocimiento</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "EL LIBRO", href: "/libro" },
              { label: "LA MÚSICA", href: "/musica" },
              { label: "AUTORA", href: "/autora" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="text-navbar-foreground/60 hover:text-primary text-xs font-bold transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Action Column */}
        <div className="flex flex-col gap-8 md:items-end">
          <div className="text-left md:text-right">
            <h4 className="text-navbar-foreground font-black text-xs uppercase tracking-[0.2em] mb-4 border-r-0 md:border-r-2 md:border-primary md:pr-3">Conectar</h4>
            <a href="mailto:manolo.alvareznovoa@gmail.com" className="text-primary hover:text-primary/80 font-black text-sm transition-colors block mb-2 tracking-tight">
              manolo.alvareznovoa@gmail.com
            </a>
            <p className="text-navbar-foreground/60 text-xs font-bold uppercase tracking-widest">Cajamarca, Perú</p>
          </div>
          <div className="relative group grayscale hover:grayscale-0 transition-all duration-500">
            <img
              src={snopi}
              alt="Contacto"
              className="relative w-32 md:w-40 h-auto object-contain transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-muted-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-navbar-foreground/40 text-[10px] font-sans font-bold tracking-[0.15em] uppercase">
          Perturbanismo © 2024–2026 | Descodificando la Ciudad
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-navbar-foreground/40 hover:text-primary text-[10px] font-bold transition-colors uppercase tracking-widest">Privacidad</a>
          <a href="#" className="text-navbar-foreground/40 hover:text-primary text-[10px] font-bold transition-colors uppercase tracking-widest">Términos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
