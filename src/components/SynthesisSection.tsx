const layers = [
  "Distorsión visual que fatiga la mirada",
  "Distorsión funcional que dificulta el tránsito",
  "Distorsión sonora que agota el oído",
  "Distorsión psicológica que erosiona el bienestar",
  "Distorsión institucional que perpetúa el caos",
  "Distorsión cultural que borra la memoria",
];

const SynthesisSection = () => (
  <section className="py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
        EL PERTURBANISMO ACTÚA COMO CAPAS SUPERPUESTAS
      </h2>
      <p className="text-grey-text text-lg leading-[1.7] mb-8">
        No se trata de un solo problema, sino de múltiples capas de distorsión que se acumulan y refuerzan mutuamente, creando un entorno que agrede los sentidos, la convivencia y la identidad.
      </p>
      <div className="space-y-3">
        {layers.map((layer, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-card border border-primary/15 rounded-md px-5 py-3 shadow-sm"
          >
            <span className="text-primary font-bold text-lg font-serif">{i + 1}</span>
            <span className="text-grey-text text-base">{layer}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SynthesisSection;
