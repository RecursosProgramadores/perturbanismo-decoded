import heroImg from "@/assets/hero-watercolor.jpg";
import { Eye, Building, Brain, Headphones } from "lucide-react";

const miniCards = [
  { icon: Eye, title: "Distorsión visual", desc: "Caos urbano acumulado" },
  { icon: Building, title: "Desorden funcional", desc: "Invasión del espacio público" },
  { icon: Brain, title: "Distorsión mental", desc: "Caos y ansiedad normalizados" },
  { icon: Headphones, title: "Música y ruido", desc: "Paisaje sonoro saturado" },
];

const HeroSection = () => (
  <section id="inicio" className="relative pt-20 overflow-hidden">
    {/* Thin red line under navbar */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/30" />

    <div className="max-w-7xl mx-auto relative">
      {/* Layout: watercolor left + content right */}
      <div className="flex flex-col lg:flex-row">
        {/* Left watercolor illustration - bleeds from left */}
        <div className="lg:w-[45%] relative min-h-[300px] lg:min-h-[600px]">
          <img
            src={heroImg}
            alt="Acuarela de paisaje urbano caótico en Cajamarca"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right content */}
        <div className="lg:w-[55%] px-6 lg:px-12 py-12 lg:py-20 relative z-10">
          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 text-shadow-subtle">
            ¿Qué es el perturbanismo?
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            La distorsión del entorno urbano que todos ven,
            <br className="hidden md:block" />
            pero nadie había definido.
          </p>

          {/* Gold separator */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="w-16 h-[2px] bg-foreground/30 rounded-full relative">
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground/40" />
            </div>
          </div>

          {/* Intro paragraph */}
          <p className="text-grey-text text-base md:text-lg leading-[1.7] mb-10 max-w-xl">
            El <strong className="text-foreground">perturbanismo</strong> es un concepto que define la distorsión
            visual, funcional, mental y sonora del entorno urbano provocada
            por construcciones, intervenciones y comportamientos que
            alteran la coherencia de la ciudad.
          </p>

          {/* 4 mini icon cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {miniCards.map((card) => (
              <div
                key={card.title}
                className="bg-secondary/60 border border-border rounded-md p-4 text-center hover:shadow-md transition-shadow"
              >
                <card.icon className="w-8 h-8 text-foreground mx-auto mb-2" />
                <h3 className="font-serif font-bold text-sm text-foreground mb-1">{card.title}</h3>
                <p className="text-xs text-grey-light leading-snug">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom tagline */}
          <p className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6">
            El perturbanismo no solo se ve ni se vive, también se escucha.
          </p>

          {/* CTA button */}
          <a
            href="#tipos"
            className="inline-block border-2 border-primary text-primary font-serif font-bold text-sm tracking-widest px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors uppercase"
          >
            VER LAS DIFERENCIAS
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
