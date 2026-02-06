import structuralImg from "@/assets/type-structural.jpg";
import visualImg from "@/assets/type-visual.jpg";
import citizenImg from "@/assets/type-citizen.jpg";
import psychImg from "@/assets/type-psychological.jpg";
import institutionalImg from "@/assets/type-institutional.jpg";
import culturalImg from "@/assets/type-cultural.jpg";

const types = [
  {
    title: "Perturbanismo estructural",
    img: structuralImg,
    recognize: "Muros que invaden calles, ampliaciones sin permiso, edificaciones que ignoran retiros.",
    effect: "Reduce espacio público, genera inseguridad peatonal, fragmenta la trama urbana.",
    symbol: "El muro que se come la vereda.",
  },
  {
    title: "Perturbanismo visual",
    img: visualImg,
    recognize: "Maraña de cables aéreos, publicidad invasiva, fachadas sin armonía cromática.",
    effect: "Contaminación visual permanente, pérdida del paisaje, fatiga sensorial.",
    symbol: "El cielo cubierto de cables.",
  },
  {
    title: "Perturbanismo ciudadano",
    img: citizenImg,
    recognize: "Basura en la vía pública, grafitis sin criterio, vehículos en veredas, comercio informal invadiendo pasos.",
    effect: "Deterioro de la convivencia, sensación de abandono, normalización del desorden.",
    symbol: "La vereda convertida en depósito.",
    subnote: "Incluye los actos pequeños: la maceta que bloquea, el cartel casero, la reja improvisada. Cada uno parece insignificante, pero la suma transforma el paisaje.",
  },
  {
    title: "Perturbanismo psicológico",
    img: psychImg,
    recognize: "Sensación constante de caos, estrés al caminar, incapacidad de relajarse en el espacio público.",
    effect: "Ansiedad urbana, desapego del ciudadano con su ciudad, migración emocional.",
    symbol: "La persona que cruza la calle con los ojos cerrados.",
  },
  {
    title: "Perturbanismo institucional",
    img: institutionalImg,
    recognize: "Obras públicas inconclusas, señalización contradictoria, permisos irregulares, cableado sin regulación.",
    effect: "Desconfianza en las instituciones, impunidad visual, perpetuación del desorden.",
    symbol: "La obra abandonada con el cartel de \"próximamente\".",
  },
  {
    title: "Perturbanismo cultural",
    img: culturalImg,
    recognize: "Monumentos vandalizados, indiferencia ante patrimonio, pérdida de identidad arquitectónica local.",
    effect: "Erosión de memoria colectiva, homogeneización del paisaje, desconexión con la historia.",
    symbol: "La casona colonial convertida en estacionamiento.",
  },
];

const TypesSection = () => (
  <section id="tipos" className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
        TIPOS DE PERTURBANISMO
      </h2>
      <p className="text-grey-text text-lg text-center max-w-3xl mx-auto mb-14 leading-relaxed">
        El perturbanismo no es un fenómeno monolítico. Se manifiesta en múltiples dimensiones que se superponen y refuerzan mutuamente. Estos son sus tipos principales:
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {types.map((t) => (
          <div
            key={t.title}
            className="bg-card border border-primary/20 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <img src={t.img} alt={t.title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">{t.title}</h3>
              <div className="space-y-3 text-sm text-grey-text">
                <p>
                  <span className="font-semibold text-foreground">Se reconoce por: </span>
                  {t.recognize}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Efecto: </span>
                  {t.effect}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Símbolo: </span>
                  <em className="text-primary">{t.symbol}</em>
                </p>
                {t.subnote && (
                  <p className="text-xs italic text-grey-light border-t border-border pt-3 mt-3">
                    {t.subnote}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TypesSection;
