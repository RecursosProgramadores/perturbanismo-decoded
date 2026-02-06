const DefinitionBox = () => (
  <section className="py-12 md:py-16">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-8 md:p-10 shadow-md">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center gap-3">
          <span className="text-3xl">🟥</span> DEFINICIÓN
        </h2>
        <p className="text-foreground text-lg font-semibold leading-relaxed mb-6">
          El Perturbanismo es la distorsión progresiva del paisaje urbano provocada por malas decisiones acumuladas que degradan la calidad visual, funcional y emocional de las ciudades.
        </p>
        <p className="text-grey-text text-base mb-4">
          Estas malas decisiones pueden ser:
        </p>
        <ul className="space-y-2 text-grey-text text-base">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-0.5">●</span>
            <span><strong className="text-foreground">Arquitectónicas:</strong> construcciones sin proporción, materiales incompatibles, fachadas que ignoran el contexto histórico y estético.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-0.5">●</span>
            <span><strong className="text-foreground">Ciudadanas:</strong> ocupación de veredas, basura arrojada en la vía pública, grafitis sin criterio, ruido excesivo.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-0.5">●</span>
            <span><strong className="text-foreground">Administrativas:</strong> falta de planificación, permisos irregulares, cableado aéreo caótico, ausencia de fiscalización.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default DefinitionBox;
