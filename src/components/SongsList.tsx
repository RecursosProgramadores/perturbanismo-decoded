const songs = [
  { title: "Cables al cielo", desc: "Cuando el cielo desaparece bajo una maraña de hilos negros." },
  { title: "Vereda rota", desc: "El camino del peatón convertido en obstáculo." },
  { title: "Gris sobre gris", desc: "La monotonía del concreto sin alma ni color pensado." },
  { title: "Bocinas", desc: "El lenguaje del tráfico que reemplaza toda señal." },
  { title: "Muro ciego", desc: "La pared que se tragó la vereda y el paisaje." },
  { title: "Anuncio sobre anuncio", desc: "Cuando la publicidad grita más que la arquitectura." },
  { title: "Plaza fantasma", desc: "Espacios públicos que nadie usa porque nadie puede." },
  { title: "La casona partida", desc: "El patrimonio dividido, vendido, olvidado." },
  { title: "Esquina sin nombre", desc: "Donde antes hubo historia, ahora hay un estacionamiento." },
  { title: "Basura de las cinco", desc: "El ritual diario que nadie quiere ver." },
  { title: "Caminar con miedo", desc: "La ciudad que dejó de ser para el peatón." },
  { title: "Nombrar para cambiar", desc: "Porque lo que no tiene nombre no se discute ni se transforma." },
];

const SongsList = () => (
  <section id="musica" className="py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
        LISTA DE CANCIONES
      </h2>
      <p className="text-grey-text text-lg mb-10 leading-relaxed">
        Doce composiciones que narran, en música y palabra, las distintas caras del perturbanismo.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {songs.map((song, i) => (
          <div key={i} className="flex items-start gap-4 py-3 border-b border-border/50">
            <span className="text-primary font-bold font-serif text-lg w-8 flex-shrink-0 text-right">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="font-serif font-bold text-primary text-base">{song.title}</h4>
              <p className="text-grey-text text-sm mt-0.5">{song.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SongsList;
