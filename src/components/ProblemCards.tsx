import { Eye, Building, Brain, Volume2 } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Distorsión visual",
    items: [
      "Fachadas sin proporción ni armonía",
      "Cables que cubren el cielo",
      "Colores estridentes sin criterio",
      "Saturación de anuncios publicitarios",
    ],
  },
  {
    icon: Building,
    title: "Distorsión funcional",
    items: [
      "Edificios que invaden el espacio público",
      "Veredas intransitables",
      "Accesibilidad nula para personas con discapacidad",
      "Infraestructura improvisada",
    ],
  },
  {
    icon: Brain,
    title: "Distorsión mental",
    items: [
      "Estrés por caos visual constante",
      "Sensación de abandono y desorden",
      "Ansiedad urbana crónica",
      "Desconexión del ciudadano con su entorno",
    ],
  },
  {
    icon: Volume2,
    title: "Distorsión sonora",
    items: [
      "Bocinas reemplazando señalización",
      "Altavoces comerciales invadiendo calles",
      "Ruido de construcción sin horario",
      "Ausencia de espacios de silencio",
    ],
  },
];

const ProblemCards = () => (
  <section className="py-16 md:py-24">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
        UN PROBLEMA QUE SE VE…
      </h2>
      <p className="font-serif text-xl italic text-primary text-center mb-12">
        …pero también se siente
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-card border border-primary/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <card.icon className="w-7 h-7 text-primary" />
              <h3 className="font-serif text-xl font-bold text-primary">{card.title}</h3>
            </div>
            <ul className="space-y-2">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-grey-text text-base">
                  <span className="text-primary mt-1.5 text-xs">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemCards;
