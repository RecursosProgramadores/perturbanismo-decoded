import React from "react";
import { Eye, Building2, Brain, Headphones } from "lucide-react";
import heroImg from "@/assets/inicio/perturbanismo.png";

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

        {/* origin Section: Image + 3 Context Points */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          {/* Left: Image + Stylized List of Elements */}
          <div className="lg:w-1/2 space-y-12 lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -inset-4 border border-black/5 rounded-sm -rotate-1" />
              <img
                src={heroImg}
                alt="Perturbanismo illustration"
                className="relative z-10 w-full h-auto shadow-2xl grayscale-[0.2] contrast-110 rotate-1"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C41E3A]/5 rounded-full blur-2xl z-0" />
            </div>

            {/* Stylized List Callout */}
            <div className="relative bg-white/40 p-8 border-l-4 border-[#C41E3A] shadow-sm backdrop-blur-sm">
              <span className="block text-[#C41E3A] font-sans font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Evidencias del caos</span>
              <p className="font-serif text-lg text-slate-800 leading-relaxed italic">
                Cables cruzando el cielo, fachadas inconclusas, ladrillo expuesto, carteles invasivos, postes mal ubicados, colores sin criterio, basura normalizada.
              </p>
            </div>
          </div>

          {/* Right: Top 3 Points */}
          <div className="lg:w-1/2 space-y-12">
            {/* Definición directa */}
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#C41E3A] font-sans font-bold text-xs tracking-[0.3em] uppercase">Definición directa</span>
                <div className="h-px flex-1 bg-black/5" />
              </div>
              <p className="font-serif text-xl md:text-2xl text-slate-800 leading-tight mb-4">
                <strong>El Perturbanismo</strong> es la acumulación de desorden visual en la ciudad.
              </p>
              <p className="font-serif text-lg text-slate-600 leading-relaxed">
                Es aquello que rompe la armonía del entorno urbano y que, repetido todos los días, termina deformando la identidad de una ciudad.
              </p>
            </div>

            {/* Qué no es */}
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#C41E3A] font-sans font-bold text-xs tracking-[0.3em] uppercase">Qué no es</span>
                <div className="h-px flex-1 bg-black/5" />
              </div>
              <p className="font-serif text-lg text-slate-800 leading-relaxed mb-4">
                No es una teoría más sobre el mal urbanismo. Es un <strong>diagnóstico visual</strong> de una enfermedad estética contemporánea.
              </p>
              <p className="font-serif text-lg text-slate-700 leading-relaxed italic">
                El Perturbanismo identifica una patología urbana silenciosa: la normalización del desorden como parte del paisaje cotidiano.
              </p>
              <p className="font-serif text-sm text-slate-600 mt-4 leading-relaxed">
                Es la enfermedad que aparece cuando la improvisación reemplaza a la planificación, cuando el interés individual supera al bien común y cuando la estética deja de considerarse parte del desarrollo.
              </p>
            </div>

            {/* Qué revela */}
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#C41E3A] font-sans font-bold text-xs tracking-[0.3em] uppercase">Qué revela</span>
                <div className="h-px flex-1 bg-black/5" />
              </div>
              <p className="font-serif text-lg text-slate-800 leading-relaxed">
                El Perturbanismo no habla solo de edificios. Habla de cultura e indiferencia. Habla de la costumbre de aceptar el desorden como paisaje.
              </p>
              <p className="font-serif text-sm text-slate-600 italic mt-4">
                Cada cable sin planificación, cada muro sin terminar, cada intervención sin criterio es una pequeña fractura en la imagen colectiva de la ciudad.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Row: Su origen & Por qué importa */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {/* Su origen */}
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C41E3A] opacity-10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity" />
            <span className="block text-[#C41E3A] font-sans font-bold text-[10px] tracking-[0.3em] uppercase mb-6">Su origen</span>
            <h4 className="font-serif text-2xl md:text-3xl mb-6">
              La combinación de <strong>Perturbar</strong> (alterar, desordenar) y <strong>Urbanismo</strong>.
            </h4>
            <div className="h-px bg-white/10 w-24 mb-6" />
            <p className="font-serif text-lg italic text-slate-300 leading-relaxed">
              "Un concepto que va más allá del descuido: el reflejo de una sociedad que ha normalizado la distorsión."
            </p>
          </div>

          {/* Por qué importa */}
          <div className="bg-[#f9f5f0] p-8 md:p-12 border border-black/5 rounded-sm shadow-sm relative group">
            <span className="block text-[#C41E3A] font-sans font-bold text-[10px] tracking-[0.3em] uppercase mb-6">Por qué importa</span>
            <h4 className="font-serif text-2xl md:text-3xl text-slate-900 mb-6 italic">
              "La ciudad no solo se habita. <span className="text-[#C41E3A]">La ciudad también educa</span>."
            </h4>
            <div className="h-px bg-black/5 w-24 mb-6" />
            <p className="font-serif text-lg text-slate-700 leading-relaxed">
              Cuando el desorden se vuelve paisaje, la distorsión se vuelve cultura. No busca condenar, busca despertar conciencia.
            </p>
          </div>
        </div>

        {/* RESTORED: Definition Block */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-32 bg-slate-900 text-white p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C41E3A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="md:col-span-12 lg:col-span-7 relative z-10">
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
          <div className="md:col-span-12 lg:col-span-5 border-l border-white/10 pl-0 lg:pl-12 py-4">
            <p className="font-serif italic text-xl opacity-80 leading-relaxed">
              No es solo una ciudad "fea" o descuidada. Es una pérdida de coherencia que afecta directamente la forma en que las personas viven, sienten y habitan su ciudad.
            </p>
          </div>
        </div>

        {/* RESTORED: Manifestations Grid */}
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

        {/* RESTORED: Philosophy Section */}
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
