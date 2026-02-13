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
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="font-serif text-5xl md:text-7xl text-slate-900 mb-6 uppercase tracking-tight">
            ¿QUÉ ES EL <span className="text-[#C41E3A]">PERTURBANISMO</span>?
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-[#C41E3A] max-w-3xl px-4 leading-relaxed">
            "La distorsión del paisaje urbano que todos ven, <br className="hidden md:block" />
            pero que durante años nadie supo nombrar."
          </p>
          <div className="flex items-center gap-2 text-[#C41E3A] opacity-30 mt-8">
            <span className="h-[1px] w-24 bg-current" />
            <span className="w-2 h-2 rounded-full border border-current" />
            <span className="h-[1px] w-24 bg-current" />
          </div>
        </div>

        {/* Origin Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-32">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 border border-black/5 rounded-sm -rotate-1" />
              <img
                src={heroImg}
                alt="Perturbanismo illustration"
                className="relative z-10 w-full h-auto shadow-2xl grayscale-[0.2] contrast-110 rotate-1"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C41E3A] text-white px-6 py-4 font-sans font-bold text-xs tracking-widest shadow-xl -rotate-2">
                ORIGEN: CAJAMARCA, PERÚ
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <p className="font-serif text-lg md:text-xl text-slate-800 leading-relaxed">
              El término <strong>Perturbanismo</strong> surge de una observación profunda y dolorosa: la transformación desordenada de las ciudades, especialmente en aquellas donde la historia, el patrimonio y la identidad cultural han sido reemplazados por la improvisación.
            </p>
            <p className="font-serif text-lg text-slate-700 leading-relaxed">
              No es una teoría más sobre el mal urbanismo; es un <strong>diagnóstico visual</strong> de la enfermedad estética contemporánea. Representa las acciones humanas —voluntarias o no— que generan una distorsión visual en el entorno urbano, rompiendo su coherencia, ritmo y belleza natural.
            </p>
            <div className="bg-white/30 backdrop-blur-sm border-l-4 border-[#C41E3A] p-6 mt-8 italic font-serif text-slate-700">
              "Su raíz etimológica combina la palabra <strong>perturbar</strong> (alterar, desordenar, inquietar) con <strong>urbanismo</strong>. De esta unión nace un concepto que va más allá del simple descuido: el reflejo de una sociedad perturbada en sus valores."
            </div>
          </div>
        </div>

        {/* Definition Block */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-32 bg-slate-900 text-white p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C41E3A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="md:col-span-7 relative z-10">
            <span className="block text-[#C41E3A] font-sans font-bold tracking-[0.3em] uppercase mb-6 text-sm">
              🟥 DEFINICIÓN
            </span>
            <h3 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
              La distorsión visual provocada por la acumulación de malas decisiones.
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {['Arquitectónicas', 'Ciudadanas', 'Administrativas'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-sans text-sm tracking-widest uppercase opacity-80">
                  <span className="w-4 h-[1px] bg-[#C41E3A]" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5 border-l border-white/10 pl-12 py-4">
            <p className="font-serif italic text-xl opacity-80 leading-relaxed">
              No es solo una ciudad "fea" o descuidada. Es una pérdida de coherencia que afecta directamente la forma en que las personas viven, sienten y habitan su ciudad.
            </p>
          </div>
        </div>

        {/* Manifestations Grid */}
        <div className="mb-32">
          <h3 className="font-serif text-4xl text-center mb-16 uppercase tracking-tight">
            Un problema que se ve... <br />
            <span className="italic text-[#C41E3A]">pero también se siente</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {distortionCards.map((card, index) => (
              <div key={index} className="group bg-white/40 p-8 border border-black/5 hover:border-[#C41E3A]/20 transition-all duration-500">
                <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                  {React.cloneElement(card.icon as React.ReactElement, { className: "w-10 h-10 text-[#C41E3A]" })}
                </div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-4">{card.title}</h4>
                <ul className="space-y-2">
                  {index === 0 && ["Fachadas sin proporción", "Cables colgantes", "Saturación de anuncios"].map(s => <li key={s} className="text-[10px] text-slate-500 uppercase tracking-tighter">• {s}</li>)}
                  {index === 1 && ["Espacios invadidos", "Veredas intransitables", "Ciudad para sobrevivir"].map(s => <li key={s} className="text-[10px] text-slate-500 uppercase tracking-tighter">• {s}</li>)}
                  {index === 2 && ["Caos normalizado", "Desorden aceptado", '"Siempre fue así"'].map(s => <li key={s} className="text-[10px] text-slate-500 uppercase tracking-tighter">• {s}</li>)}
                  {index === 3 && ["Ruido constante", "Paisaje saturado", "Silencio perdido"].map(s => <li key={s} className="text-[10px] text-slate-500 uppercase tracking-tighter">• {s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Card 1: Philosophy */}
            <div className="bg-white/40 p-10 border border-black/5 flex flex-col justify-center rounded-sm">
              <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-6 uppercase tracking-tight">
                MÁS QUE URBANISMO MAL HECHO
              </h3>
              <p className="font-serif text-lg text-slate-700 leading-relaxed">
                Es el reflejo de una sociedad que ha perdido criterios estéticos. Aparece cuando se construye sin pensar en el conjunto, se normaliza el desorden y se deja de exigir calidad urbana. <strong>La ciudad no se degrada de golpe; se perturba poco a poco.</strong>
              </p>
            </div>

            {/* Card 2: Naming */}
            <div className="bg-white/40 p-10 border border-black/5 flex flex-col justify-center rounded-sm">
              <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-6 uppercase tracking-tight">
                NOMBRAR EL PROBLEMA ES EL PRIMER PASO
              </h3>
              <p className="font-serif text-lg text-slate-700 leading-relaxed">
                El Perturbanismo no busca señalar culpables individuales. Busca hacer visible aquello que fue ignorado. Comprenderlo permite identificar el caos, analizarlo con criterio y abrir el camino para transformar la ciudad.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-12 max-w-4xl mx-auto text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-[#C41E3A] mb-12">
            "Porque una ciudad no debería perturbar a quien la habita. <br /> Debería cuidarlo."
          </p>

          <a
            href="#tipos"
            className="inline-block border border-[#C41E3A] text-[#C41E3A] font-sans font-bold px-12 py-4 hover:bg-[#C41E3A] hover:text-white transition-all uppercase tracking-[0.3em] text-xs shadow-lg hover:shadow-red-900/10"
          >
            INVESTIGAR EL CAOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
