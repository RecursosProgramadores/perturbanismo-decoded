import cajamarcaImg from "@/assets/cajamarca-vignette.jpg";

const IntroSection = () => (
  <section id="que-es" className="py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-6">
      <div className="md:flex gap-10 items-start">
        <div className="md:flex-1 space-y-6 text-grey-text text-lg leading-[1.7]">
          <p>
            El concepto de <strong className="text-foreground">Perturbanismo</strong> nace en las calles de{" "}
            <strong className="text-primary">Cajamarca, Perú</strong>, una ciudad donde la herencia colonial convive — y a menudo choca — con el crecimiento urbano desordenado del siglo XXI. Fue allí donde la observación cotidiana de un paisaje cada vez más distorsionado dio lugar a un término que faltaba: una palabra para describir aquello que todos ven, que a todos afecta, pero que durante años careció de nombre.
          </p>
          <p>
            <strong className="text-foreground">Perturbanismo</strong> es un neologismo que combina las palabras{" "}
            <em className="text-primary">"perturbar"</em> y <em className="text-primary">"urbanismo"</em>. Describe la distorsión visual, funcional, psicológica y cultural del espacio urbano causada por decisiones —o ausencia de decisiones— que degradan progresivamente la calidad del entorno construido.
          </p>
          <p>
            No es solo urbanismo mal hecho. Es un fenómeno más profundo: un diagnóstico visual, sensorial y emocional del deterioro que sufre una ciudad cuando se construye sin visión, se tolera sin criterio y se normaliza sin conciencia.
          </p>
          <p>
            Es la maraña de cables que cubre el cielo, el muro que invade la vereda, el anuncio que grita más fuerte que la fachada colonial, la bocina que reemplaza al silencio. Es la ciudad que dejó de verse como espacio compartido y se convirtió en un collage involuntario de improvisaciones.
          </p>
        </div>
        <div className="md:w-72 mt-8 md:mt-0 flex-shrink-0">
          <img
            src={cajamarcaImg}
            alt="Acuarela de la plaza de Cajamarca"
            className="w-full rounded-lg shadow-lg border border-border"
          />
          <p className="text-sm text-grey-light text-center mt-3 italic font-serif">
            Cajamarca, Perú — donde nació el concepto
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
