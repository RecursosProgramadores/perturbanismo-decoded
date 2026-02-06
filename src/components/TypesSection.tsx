import visualImg from "@/assets/type-visual.jpg";
import structuralImg from "@/assets/type-structural.jpg";
import citizenImg from "@/assets/type-citizen.jpg";
import psychImg from "@/assets/type-psychological.jpg";
import institutionalImg from "@/assets/type-institutional.jpg";
import culturalImg from "@/assets/type-cultural.jpg";
import heroImg from "@/assets/hero-watercolor.jpg";
import { Eye, Building, AlertTriangle, Users, Brain, Headphones, MessageCircle } from "lucide-react";

const topCards = [
  { icon: Building, title: "Desorden funcional", desc: "Invasión y disfunción del espacio público" },
  { icon: AlertTriangle, title: "Normalización del caos", desc: "El desorden que deja de cuestionarse" },
  { icon: Users, title: "Responsabilidad compartida", desc: "El caos es responsabilidad de todos" },
  { icon: MessageCircle, title: "Distorsión mental", desc: "Entorno caótico y fragmentación" },
];

const bottomCards = [
  { img: structuralImg, title: "Distorsión mental", desc: "Entorno caótico y fragmentación mental" },
  { img: institutionalImg, title: "Pérdida de identidad", desc: "Paisaje urbano sin memoria ni carácter" },
  { img: culturalImg, icon: Headphones, title: "La música del perturbanismo", desc: "Ruido constante y saturación sonora." },
];

const TypesSection = () => (
  <section id="tipos" className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-center mb-3">
        Tipos de Perturbanismo
      </h2>
      <p className="font-serif italic text-lg text-muted-foreground text-center mb-4">
        Las siete manifestaciones del caos urbano
      </p>
      {/* Gold separator */}
      <div className="flex justify-center mb-8">
        <div className="w-16 h-[2px] bg-foreground/30 rounded-full relative">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground/40" />
        </div>
      </div>
      <p className="text-grey-text text-base md:text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        El perturbanismo se manifiesta de diversas formas en la ciudad. Estas son
        sus siete distorsiones y la responsabilidad colectiva.
      </p>

      {/* Bento grid layout matching reference */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
        {/* Left column - large watercolor card spanning 2 rows */}
        <div className="md:col-span-1 md:row-span-2 relative rounded-lg overflow-hidden min-h-[300px] md:min-h-0 border border-border shadow-sm">
          <img src={heroImg} alt="Distorsión visual" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Eye className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-serif font-bold text-primary-foreground text-lg">Distorsión visual</h3>
            <p className="text-primary-foreground/80 text-sm mt-1">Caos acumulado en el entorno urbano</p>
            <a href="#" className="text-primary text-sm font-semibold mt-2 inline-block hover:underline">Leer más</a>
          </div>
        </div>

        {/* Top row - 4 icon cards */}
        {topCards.map((card) => (
          <div
            key={card.title}
            className="bg-secondary/60 border border-border rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <card.icon className="w-9 h-9 text-foreground mx-auto mb-3" />
            <h3 className="font-serif font-bold text-sm text-foreground mb-1">{card.title}</h3>
            <p className="text-xs text-grey-light leading-snug mb-3">{card.desc}</p>
            <a href="#" className="text-primary text-xs font-semibold hover:underline">Leer más</a>
          </div>
        ))}

        {/* Bottom row - 3 image cards + 1 music card */}
        {bottomCards.map((card) => (
          <div
            key={card.title}
            className="relative rounded-lg overflow-hidden border border-border shadow-sm min-h-[200px]"
          >
            <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              {card.icon && <card.icon className="w-7 h-7 text-primary mb-1" />}
              <h3 className="font-serif font-bold text-primary-foreground text-sm">{card.title}</h3>
              <p className="text-primary-foreground/80 text-xs mt-1">{card.desc}</p>
              <a href="#" className="text-primary text-xs font-semibold mt-2 inline-block hover:underline">Leer más</a>
            </div>
          </div>
        ))}

        {/* Last card with CTA */}
        <div className="bg-secondary/40 border border-border rounded-lg p-5 flex flex-col items-center justify-center text-center">
          <a
            href="#galeria"
            className="inline-block border-2 border-primary text-primary font-serif font-bold text-xs tracking-widest px-6 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors uppercase"
          >
            VER EJEMPLOS
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default TypesSection;
