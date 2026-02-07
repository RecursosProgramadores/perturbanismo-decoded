import speakersImg from "../assets/music-speakers.jpg";

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
  <section id="musica" className="py-16 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
    {/* Texture Overlay */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Text & List */}
        <div className="lg:col-span-7">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              LISTA DE CANCIONES
            </h2>
            <div className="w-20 h-1 bg-[#C41E3A] mb-8" />
            <p className="font-serif italic text-lg md:text-xl text-[#C41E3A] leading-relaxed max-w-2xl">
              Doce composiciones que narran, en música y palabra, las distintas caras del perturbanismo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-2">
            {songs.map((song, i) => (
              <div key={i} className="group flex items-start gap-4 py-4 border-b border-black/5 hover:border-black/10 transition-colors">
                <span className="text-[#C41E3A] font-bold font-serif text-lg w-6 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-base leading-tight group-hover:text-black transition-colors">{song.title}</h4>
                  <p className="text-slate-500 text-sm mt-1 leading-snug">{song.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Decorative Image */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-black/5 rounded-sm -rotate-1 pointer-events-none" />
            <div className="absolute -inset-2 border border-black/10 rounded-sm rotate-1 pointer-events-none" />

            <div className="bg-white p-4 shadow-2xl relative overflow-hidden rounded-sm rotate-1">
              <img
                src={speakersImg}
                alt="Altavoces urbanos - La música del Perturbanismo"
                className="w-full h-auto grayscale-[0.5] contrast-125 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="mt-4 flex justify-between items-center text-[10px] font-sans tracking-[0.2em] text-slate-400 uppercase">
                <span>Ref. Audio 00-12</span>
                <span>Registro Urbano</span>
              </div>
            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white px-6 py-3 font-sans font-black text-xs tracking-tighter shadow-xl -rotate-2">
              LA MÚSICA DEL CAOS
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default SongsList;

