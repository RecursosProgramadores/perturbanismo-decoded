import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logos/logo.jpeg";

const NAV_ITEMS = [
  { label: "INICIO", href: "/#inicio" },
  { label: "QUÉ ES", href: "/#que-es" },
  { label: "GALERÍA", href: "/#galeria" },
  { label: "BLOG", href: "/#blog" },
  { label: "EL LIBRO", href: "/libro" },
  { label: "LA MÚSICA", href: "/#musica" },
  { label: "AUTORA", href: "/autora" },
];


const Logo = () => (
  <Link to="/" className="flex items-center gap-4 group">
    <div className="relative w-12 h-12 overflow-hidden rounded-sm">
      <img
        src={logoImg}
        alt="Perturbanismo Logo"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <span className="font-serif text-navbar-foreground font-bold text-xl hidden sm:block tracking-wider group-hover:text-primary transition-colors uppercase">
      PERTURBANISMO
    </span>
  </Link>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navbar">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              {item.href.startsWith("/#") ? (
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }
                  }}
                  className="text-navbar-foreground text-sm font-sans font-medium tracking-wider hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="text-navbar-foreground text-sm font-sans font-medium tracking-wider hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button aria-label="Buscar" className="text-navbar-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Menú"
            className="lg:hidden text-navbar-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navbar border-t border-muted-foreground/20 px-6 pb-6 shadow-xl">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("/#") ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (location.pathname === "/") {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      } else {
                        setOpen(false);
                      }
                    }}
                    className="text-navbar-foreground text-base font-sans font-medium tracking-wider hover:text-primary transition-colors block py-2"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="text-navbar-foreground text-base font-sans font-medium tracking-wider hover:text-primary transition-colors block py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
