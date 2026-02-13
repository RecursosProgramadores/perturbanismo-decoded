import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronUp, ChevronDown } from "lucide-react";
import musicImg from "@/assets/music-speakers.jpg";
import songImg from "@/assets/cancion.png";

const songs = [
  { title: "El Perturbanismo", desc: "Esta canción surge de la necesidad de nombrar y analizar la distorsión visual presente en las ciudades y en el entorno urbano a lo largo del tiempo, producto del crecimiento desordenado, la superposición de elementos y la intervención humana constante en el paisaje." },
  { title: "Memoria del Lugar", desc: "Surge como una reflexión sobre la transformación de los espacios urbanos a lo largo del tiempo, como las decisiones modernas se han ido imponiendo sin respetar la historia ni la identidad de los espacios. Se evidencia la pérdida de significado de lugares que antes estaban cargados de memoria, equilibrio y sentido y que hoy aparecen transformados, fragmentados o desdibujados." },
  { title: "El silencio Perdido", desc: "Nace del deseo de resaltar la desaparición de la calma y la serenidad en el entorno urbano. Se busca comunicar cómo la modernización y el bullicio han reemplazado el silencio y la tranquilidad que alguna vez definieron esos espacios, un homenaje nostálgico a lo que se ha perdido y una invitación a reflexionar sobre el impacto del progreso en nuestra percepción del entorno." },
  { title: "Para que lo entiendas", desc: "Busca conectar con personas que no están familiarizadas con términos técnicos, haciendo que la arquitectura y sus conceptos sean comprensibles y relevantes para todos. A través de sus letras, la canción busca acercar el conocimiento y fomentar una mayor comprensión y aprecio por el entorno construido." },
  { title: "Hacerla Sentir", desc: "Esta canción nace de la necesidad de expresar la arquitectura desde otro lenguaje. Los arquitectos dibujamos, escribimos y hablamos, pero pocas veces convertimos la ciudad en sonido. Aquí, el pensamiento urbano se vuelve música para denunciar, sentir y escuchar el espacio." },
  { title: "Nos Acostumbramos", desc: "Esta canción reflexiona sobre el proceso silencioso mediante el cual las personas se adaptan a una ciudad que deja de cuidar a quienes la habitan. Habla de cómo el entorno urbano, cuando se construye sin criterio ni atención al detalle, termina educando al cuerpo a tolerar la incomodidad." },
  { title: "Ciudad Perturbada", desc: "Esta canción nace de una observación crítica de la ciudad convertida en espectáculo. Habla de un entorno urbano donde la imagen, el consumo y la saturación visual toman el control, desplazando el sentido original del espacio y debilitando su dimensión humana." },
  { title: "Diseñar es amar", desc: "Nace del acto de proyectar como un gesto vital. Habla del momento en que una idea deja de ser abstracta y comienza a transformarse en espacio habitable, donde la arquitectura aparece como un cruce entre técnica, arte y emoción." },
  { title: "El espacio también siente", desc: "Plantea la ciudad como un organismo fragmentado, donde las partes ya no dialogan entre sí; reflexiona sobre un crecimiento que privilegia la altura, la visibilidad y la competencia formal, olvidando la relación con el suelo, el entorno y la experiencia cotidiana del espacio." },
  { title: "Lo que nadie ve", desc: "Nace desde la mirada crítica y sensible de quien observa la ciudad más allá de lo evidente. Habla de una forma de recorrer el espacio urbano con atención, leyendo sus marcas, sus fallas y sus silencios, allí donde la mayoría solo percibe superficie." },
  { title: "Supermarket", desc: "Esta canción nace de la lectura de Supermarket de Velarde, donde ya se denunciaba el perturbanismo y el irrespeto por la ciudad a través de fachadas saturadas y letreros invasivos. Parte de la idea de una urbe que confunde progreso con ruido y modernidad con exceso." },
  { title: "Territorio Map", desc: "Nace de una ciudad observada sin filtros, es una mirada crítica al caos urbano y a la estética impuesta, usando el trazo como protesta y el diseño como lenguaje. Aquí la ciudad no solo se construye: se escucha, se cuestiona es parte de Territorio Map." },
];

const MusicSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="musica" className="py-20 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

          {/* Left Side: Large Artistic Illustration */}
          <div className="lg:w-[35%] xl:w-[40%] flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <div className="relative group">
                <div className="absolute -inset-4 border border-black/5 rounded-sm -rotate-1" />
                <div className="relative bg-white p-4 shadow-2xl rotate-1">
                  <img
                    src={musicImg}
                    alt="Acuarela de altavoces y ruido urbano"
                    className="w-full h-auto grayscale-[0.3] contrast-125 transition-all duration-700 group-hover:grayscale-0"
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

          {/* Right Side: Content & Vertical Carousel */}
          <div className="lg:w-[65%] xl:w-[60%] flex flex-col pt-4">
            <header className="mb-12">
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 tracking-tight uppercase">
                La música del <span className="text-[#C41E3A]">perturbanismo</span> 🎧
              </h2>
              <p className="font-serif italic text-lg md:text-xl text-[#C41E3A] mb-8">
                El ruido como desorden, saturación y síntoma urbano
              </p>

              <div className="flex justify-start mb-10">
                <div className="w-16 h-[2.5px] bg-[#C41E3A] relative">
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C41E3A]/20" />
                </div>
              </div>

              <div className="space-y-6 max-w-2xl bg-white/30 backdrop-blur-sm p-6 -mx-6 md:p-8 md:-mx-8 lg:bg-transparent lg:p-0 lg:mx-0">
                <p className="font-serif text-xl text-slate-800 leading-relaxed">
                  La <strong className="text-[#C41E3A]">distorsión</strong> urbana no solo se ve. <span className="italic font-normal">También se escucha.</span>
                </p>
                <p className="font-serif text-xl text-slate-800 font-bold leading-tight">
                  La saturación acústica es una forma de perturbanismo.
                </p>
              </div>
            </header>

            {/* Vertical Carousel Controls */}
            <div className="flex items-center justify-between mb-4 px-4 border-b border-black/[0.05] pb-4">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Listado de pistas</span>
              <div className="flex gap-2">
                <button
                  onClick={scrollPrev}
                  className="p-2 rounded-full hover:bg-black/5 transition-colors border border-black/5"
                  aria-label="Previous song"
                >
                  <ChevronUp className="w-4 h-4 text-slate-600" />
                </button>
                <button
                  onClick={scrollNext}
                  className="p-2 rounded-full hover:bg-black/5 transition-colors border border-black/5"
                  aria-label="Next song"
                >
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Vertical Carousel Container */}
            <div className="relative overflow-hidden h-[450px]" ref={emblaRef}>
              <div className="flex flex-col h-full">
                {songs.map((song, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_auto] min-h-[160px] flex flex-col sm:flex-row gap-8 items-start py-8 border-b border-black/[0.1] last:border-0 hover:bg-black/[0.015] transition-all duration-300 group px-2 sm:px-4"
                  >
                    {/* Fixed size image on the left */}
                    <div className="w-24 sm:w-32 flex-shrink-0">
                      <div className="relative group/thumb">
                        <div className="absolute -inset-1 border border-black/5 rounded-sm transition-transform duration-500 group-hover/thumb:rotate-2" />
                        <div className="relative bg-white p-1.5 shadow-lg transition-transform duration-500 group-hover/thumb:-rotate-1">
                          <img
                            src={songImg}
                            alt={song.title}
                            className="w-full aspect-square object-cover grayscale-[0.2] group-hover/thumb:grayscale-0 transition-all duration-700"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text on the right, top-aligned */}
                    <div className="flex-1 space-y-2 pt-1">
                      <h3 className="font-serif text-xl md:text-xl font-bold text-slate-900 uppercase tracking-tight leading-none group-hover:text-[#C41E3A] transition-colors">
                        {song.title}
                      </h3>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                        {song.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-black/5 text-center lg:text-left">
              <a
                href="#"
                className="inline-block border-2 border-[#C41E3A] text-[#C41E3A] font-serif font-bold text-sm tracking-[0.2em] px-10 py-4 hover:bg-[#C41E3A] hover:text-white transition-all uppercase shadow-lg shadow-[#C41E3A]/5 hover:shadow-[#C41E3A]/20"
              >
                INVESTIGAR EL CAOS SONORO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
