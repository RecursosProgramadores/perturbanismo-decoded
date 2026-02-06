import React from "react";
import { Eye, Building2, Brain, Headphones } from "lucide-react";
import heroImg from "@/assets/hero-watercolor.jpg";

const distortionCards = [
  {
    icon: <Eye className="w-8 h-8 text-red-700" />,
    title: "Distorsión visual",
    desc: "Caos urbano acumulado",
  },
  {
    icon: <Building2 className="w-8 h-8 text-slate-800" />,
    title: "Desorden funcional",
    desc: "Invasión del espacio público",
  },
  {
    icon: <Brain className="w-8 h-8 text-slate-800" />,
    title: "Distorsión mental",
    desc: "Caos y ansiedad normalizados",
  },
  {
    icon: <Headphones className="w-8 h-8 text-slate-800" />,
    title: "Música y ruido",
    desc: "Paisaje sonoro saturado",
  },
];

const IntroSection = () => {
  return (
    <section id="que-es" className="relative py-20 px-6 bg-[#f4ece1] overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-4">
            ¿Qué es el perturbanismo?
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-[#947454] max-w-2xl px-4">
            La distorsión del entorno urbano que todos ven, <br className="hidden md:block" />
            pero nadie había definido.
          </p>
          <div className="flex items-center gap-2 text-[#947454] opacity-50 mt-6 mb-12">
            <span className="h-[1px] w-12 bg-current" />
            <span className="w-2 h-2 rounded-full bg-current" />
            <span className="h-[1px] w-12 bg-current" />
          </div>
        </div>

        {/* Main Content Area: Image Left | [Text + Horizontal Cards] Right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-20">

          {/* Left: Watercolor Image (Matching height) */}
          <div className="lg:w-[42%] flex">
            <div className="relative w-full h-full rounded-sm overflow-hidden shadow-sm min-h-[300px]">
              <img
                src={heroImg}
                alt="Perturbanismo city illustration"
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.1] brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Definition + Horizontal Cards */}
          <div className="lg:w-[58%] flex flex-col justify-between py-2">
            <div>
              <p className="font-serif text-lg md:text-xl lg:text-2xl text-slate-900 leading-relaxed mb-8">
                El <span className="font-bold underline decoration-red-600/20">perturbanismo</span> es un concepto que define la distorsión visual, funcional, mental y sonora del entorno urbano provocada por construcciones, intervenciones y comportamientos que alteran la coherencia de la ciudad.
              </p>
            </div>

            {/* Inner row of 4 cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
              {distortionCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white/40 backdrop-blur-sm border border-black/5 p-4 flex flex-col items-center text-center rounded-sm hover:translate-y-[-2px] transition-all duration-300"
                >
                  <div className="mb-3">
                    {/* Sizing down the icons slightly for the tighter space */}
                    {React.cloneElement(card.icon as React.ReactElement, { className: "w-6 h-6 text-slate-800" })}
                  </div>
                  <h3 className="font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-widest text-black mb-1 leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[8px] md:text-[9px] text-slate-600 leading-tight">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-8">
          <p className="font-serif text-2xl md:text-3xl text-slate-900 max-w-4xl mx-auto leading-tight italic">
            El perturbanismo no solo se ve ni se vive, también se escucha.
          </p>

          <a
            href="#tipos"
            className="inline-block border border-[#C41E3A] text-[#C41E3A] font-sans font-bold px-10 py-3 hover:bg-[#C41E3A] hover:text-white transition-all uppercase tracking-widest text-xs"
          >
            VER LAS DIFERENCIAS
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
