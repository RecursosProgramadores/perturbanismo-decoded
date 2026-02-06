const sections = [
  {
    title: "MÁS QUE URBANISMO MAL HECHO",
    text: "El perturbanismo no se reduce a una mala obra o a un edificio feo. Es un fenómeno sistémico: la acumulación de decisiones —grandes y pequeñas— que distorsionan el espacio urbano hasta convertirlo en un entorno que agrede los sentidos, dificulta la convivencia y erosiona la identidad de un lugar. Es la diferencia entre una ciudad que crece y una ciudad que se deforma.",
  },
  {
    title: "UN CONCEPTO QUE NACE DE LA CIUDAD REAL",
    text: "El término surge en Cajamarca, una ciudad peruana cuyo centro histórico colonial convive con ampliaciones informales, cables aéreos, muros que invaden veredas y una señalética caótica. Pero el perturbanismo no es exclusivo de Cajamarca: es reconocible en Lima, en Bogotá, en Ciudad de México, en cualquier urbe donde el crecimiento ha ido más rápido que la planificación.",
  },
  {
    title: "NOMBRAR EL PROBLEMA ES EL PRIMER PASO",
    text: "Antes de que existiera la palabra, el fenómeno era invisible a pesar de estar frente a nuestros ojos todos los días. El perturbanismo le da nombre a una realidad urbana que afecta a millones, y ese acto de nombrar es en sí mismo un acto de resistencia: porque lo que no tiene nombre no se discute, no se cuestiona, no se transforma. Nombrar el problema es el primer paso para imaginar la solución.",
  },
];

const ConceptSections = () => (
  <section className="py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-6 space-y-16">
      {sections.map((s, i) => (
        <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-5">
            {s.title}
          </h2>
          <p className="text-grey-text text-lg leading-[1.7]">{s.text}</p>
          {i < sections.length - 1 && (
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-0.5 bg-primary/30 rounded-full" />
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default ConceptSections;
