import musicImg from "@/assets/music-speakers.jpg";
import { Volume2, Radio, User, Disc } from "lucide-react";

const musicCards = [
  { icon: Volume2, title: "Paisaje sonoro urbano", desc: "El ruido como forma de desorden" },
  { icon: Radio, title: "Saturación acústica", desc: "Música impuesta, sin contexto" },
  { icon: User, title: "Impacto humano", desc: "Estrés y fragmentación ciudadana" },
  { icon: Disc, title: "Música crítica", desc: "Denuncia y conciencia sonora" },
];

const MusicSection = () => (
  <section id="musica" className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto relative">
      <div className="flex flex-col lg:flex-row">
        {/* Left watercolor illustration */}
        <div className="lg:w-[40%] relative min-h-[300px] lg:min-h-[500px]">
          <img
            src={musicImg}
            alt="Acuarela de altavoces y ruido urbano"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right content */}
        <div className="lg:w-[60%] px-6 lg:px-12 py-12 lg:py-16 relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            La música del perturbanismo 🎧
          </h2>
          <p className="font-serif italic text-lg text-[#C41E3A] mb-4">
            El ruido como desorden, saturación y síntoma urbano
          </p>

          {/* Gold separator */}
          <div className="flex justify-start mb-8">
            <div className="w-16 h-[2px] bg-foreground/30 rounded-full relative">
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground/40" />
            </div>
          </div>

          <p className="text-grey-text text-lg leading-[1.7] mb-3 max-w-xl">
            La <em className="text-primary font-semibold">distorsión</em> urbana no solo se ve. También se escucha.
          </p>
          <p className="text-foreground font-semibold text-lg mb-3">
            La saturación acústica es una forma de perturbanismo.
          </p>
          <p className="text-grey-text text-base leading-[1.7] mb-10 max-w-xl">
            Cuando el ruido invade la ciudad sin criterio ni control, el entorno
            se transforma en un lugar agresivo que afecta la convivencia,
            el descanso y el equilibrio mental.
          </p>

          {/* 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {musicCards.map((card) => (
              <div
                key={card.title}
                className="bg-secondary/60 border border-border rounded-md p-4 text-center hover:shadow-md transition-shadow"
              >
                <card.icon className="w-8 h-8 text-foreground mx-auto mb-2" />
                <h3 className="font-serif font-bold text-sm text-foreground mb-1">{card.title}</h3>
                <p className="text-xs text-grey-light leading-snug mb-2">{card.desc}</p>
                <a href="#" className="text-primary text-xs font-semibold hover:underline">Leer más</a>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#"
            className="inline-block border-2 border-primary text-primary font-serif font-bold text-sm tracking-widest px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors uppercase"
          >
            EXPLORAR EL RUIDO URBANO
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MusicSection;
