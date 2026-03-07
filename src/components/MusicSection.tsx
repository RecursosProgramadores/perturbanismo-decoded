import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronUp, ChevronDown } from "lucide-react";
import musicImg from "@/assets/music-speakers.jpg";
import songImg from "@/assets/cancion.png";

const songs = [
  { title: "El Perturbanismo", desc: "Nombra y expone la distorsión visual y espacial de la ciudad contemporánea. Habla del crecimiento desordenado, la superposición sin criterio y la intervención constante que rompe la lectura del paisaje urbano." },
  { title: "Memoria del Lugar", desc: "Reflexiona sobre cómo los espacios pierden identidad cuando se construyen sin escuchar su historia. La canción muestra una memoria que no desaparece, sino que resiste bajo el ruido y la prisa." },
  { title: "El silencio Perdido", desc: "Evoca la desaparición de la calma urbana. Denuncia cómo el bullicio y la modernización reemplazaron el silencio, afectando nuestra percepción y relación con la ciudad." },
  { title: "Para que lo entiendas", desc: "Acerca la arquitectura a quienes no manejan lenguaje técnico. Traduce conceptos urbanos complejos a emociones y situaciones cotidianas para que todos puedan comprender y cuestionar su entorno." },
  { title: "Hacerla Sentir", desc: "Propone la música como otro lenguaje de la arquitectura. Cuando el dibujo y la palabra no bastan, el pensamiento urbano se transforma en sonido para sentir y escuchar la ciudad." },
  { title: "Nos Acostumbramos", desc: "Habla de la resignación urbana. Muestra cómo el cuerpo aprende a tolerar el mal diseño, la incomodidad y la falta de cuidado hasta normalizarlos." },
  { title: "Ciudad Perturbada", desc: "Critica la ciudad convertida en espectáculo. Denuncia una modernidad que prioriza la imagen, el consumo y la fachada por encima del bienestar humano y la identidad del lugar." },
  { title: "Diseñar es Amar", desc: "Celebra el acto de proyectar como un gesto vital. La arquitectura aparece como una forma de cuidado, donde técnica, emoción y arte se unen para dar sentido al espacio." },
  { title: "El Espacio También Siente", desc: "Plantea la ciudad como un organismo fragmentado. Reflexiona sobre un crecimiento que privilegia la competencia formal y el exceso, anulando el silencio y la experiencia del habitar." },
  { title: "Lo que Nadie Ve", desc: "Habla de la mirada atenta y crítica. Retrata a quien observa la ciudad más allá de la superficie, leyendo errores, silencios y deterioros como información y posibilidad." },
  { title: "Supermarket", desc: "Dialoga con la obra de Velarde (1964) para mostrar que el perturbanismo no es nuevo. Denuncia una ciudad que confunde modernidad con exceso y progreso con ruido." },
  { title: "Territorio MAP", desc: "Es una declaración de identidad. La ciudad es observada sin filtros, el trazo se convierte en protesta y el diseño en lenguaje crítico. Aquí la ciudad se cuestiona, se escucha y se transforma." },
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
