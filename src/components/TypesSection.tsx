import React from "react";
import imgStructural from "../assets/tipos/ESTRUCTURAL.jpg";
import imgVisual from "../assets/tipos/VISUAL.jpg";
import imgCitizen from "../assets/tipos/ciudadano.jpg";
import imgPsychological from "../assets/tipos/PSICOLOGICO.jpeg";
import imgInstitutional from "../assets/tipos/INSTITUCIONAL.jpeg";
import imgCultural from "../assets/tipos/cultura.png";
import imgVignette from "../assets/tipos/nacimiento.png";

const types = [
  {
    id: "01",
    title: "Perturbanismo estructural",
    subtitle: "Cuando el muro invade la calle, la ciudad deja de respirar.",
    desc: "Distorsión física del entorno urbano causada por errores constructivos, improvisación o invasión del espacio público.",
    recognize: [
      "Muros y columnas sobre la vereda",
      "Ampliaciones sin criterio arquitectónico",
      "Fachadas desalineadas",
      "Alturas y materiales incoherentes"
    ],
    effect: "El ciudadano ya no distingue dónde termina la casa y dónde empieza la ciudad. El espacio público pierde su sentido.",
    symbol: "El muro que avanza sobre la calle.",
    image: imgStructural,
  },
  {
    id: "02",
    title: "Perturbanismo visual",
    subtitle: "La ciudad también se contamina con los ojos.",
    desc: "Acumulación de elementos visuales que rompen la armonía estética del paisaje urbano.",
    recognize: [
      "Marañas de cables",
      "Publicidad excesiva",
      "Fachadas estridentes o incompatibles",
      "Saturación de señales y anuncios"
    ],
    effect: "Fatiga visual, pérdida de identidad y sensación constante de caos.",
    symbol: "La ciudad que grita desde cada fachada.",
    image: imgVisual,
  },
  {
    id: "03",
    title: "Perturbanismo ciudadano",
    subtitle: "Comienza cuando se deja de cuidar lo que es de todos.",
    desc: "Deterioro del espacio urbano producido por acciones cotidianas incívicas y falta de educación estética colectiva.",
    recognize: [
      "Basura y escombros en la vía pública",
      "Grafitis sin sentido y carteles improvisados",
      "Ocupación indebida de veredas",
      "Descuido del entorno común"
    ],
    effect: "La ciudad deja de ser territorio compartido y se fragmenta en apropiaciones individuales.",
    symbol: "El hábito que contamina lo visible.",
    image: imgCitizen,
    subPoint: {
      id: "3.1",
      title: "El Perturbanismo ciudadano: la forma más silenciosa",
      content: [
        "No nace de grandes obras, sino de pequeños actos repetidos.",
        "No siempre hay mala intención: hay costumbre, imitación e indiferencia.",
        "Combatirlo no es solo sancionar, sino educar y reprogramar la relación emocional con la ciudad.",
        "Una ciudad se cuida cuando sus habitantes sienten orgullo por ella."
      ]
    }
  },
  {
    id: "04",
    title: "Perturbanismo psicológico",
    subtitle: "El desorden visual también enferma la mente.",
    desc: "Impacto emocional y mental producido por el caos urbano constante.",
    recognize: [
      "Estrés visual",
      "Desorientación",
      "Apatía ciudadana",
      "Rechazo inconsciente al espacio urbano"
    ],
    effect: "La ciudad deja de inspirar y comienza a cansar y confundir.",
    symbol: "La ciudad que enferma la mirada.",
    image: imgPsychological,
  },
  {
    id: "05",
    title: "Perturbanismo institucional",
    subtitle: "El caos también nace en los escritorios.",
    desc: "Desorden urbano generado por la falta de planificación, control y criterios estéticos desde las instituciones.",
    recognize: [
      "Permisos sin control visual",
      "Ausencia de normas de color, altura o materialidad",
      "Falta de coordinación urbana",
      "Tolerancia al desorden"
    ],
    effect: "El caos se vuelve legal. El desorden se institucionaliza.",
    symbol: "La autoridad que deja que la ciudad se deforme.",
    image: imgInstitutional,
  },
  {
    id: "06",
    title: "Perturbanismo cultural",
    subtitle: "La costumbre de no ver es la forma más peligrosa.",
    desc: "Etapa avanzada en la que la sociedad normaliza el desorden urbano.",
    recognize: [
      "Indiferencia ante la fealdad",
      "Burla hacia la estética",
      "Falta de orgullo por la ciudad",
      "Rechazo a cualquier corrección visual"
    ],
    effect: "La fealdad deja de ser excepción y se convierte en cultura.",
    symbol: "La costumbre de no ver.",
    image: imgCultural,
  }
];

const TypesSection = () => {
  return (
    <section id="tipos" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            TIPOS DE <span className="text-[#C41E3A]">PERTURBANISMO</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#C41E3A] mb-8" />
          <p className="font-serif text-xl md:text-2xl text-slate-700 leading-relaxed max-w-4xl italic">
            El Perturbanismo no es un fenómeno único. Se manifiesta de distintas formas que, al superponerse, deforman la ciudad y la manera en que la habitamos. Estos son los seis tipos principales.
          </p>
        </div>

        <div className="space-y-32">
          {types.map((type, idx) => (
            <div key={type.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              {/* Image Side */}
              <div className="lg:w-1/2 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 border border-black/5 rounded-sm group-hover:rotate-1 transition-transform duration-500" />
                  <div className="relative overflow-hidden bg-white p-3 shadow-xl transform group-hover:-rotate-1 transition-transform duration-500">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-[400px] object-cover grayscale-[0.3] contrast-110 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-6 left-6 bg-slate-900 text-white px-4 py-2 font-serif text-xl font-bold shadow-lg">
                      {type.id}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:w-1/2 w-full space-y-6">
                <header>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2">{type.title}</h3>
                  <p className="text-[#C41E3A] font-serif italic text-lg md:text-xl font-medium">{type.subtitle}</p>
                </header>

                <p className="text-slate-700 text-lg leading-relaxed">{type.desc}</p>

                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-slate-300" /> SE RECONOCE POR
                    </h4>
                    <ul className="space-y-2">
                      {type.recognize.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-[#C41E3A] mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">EFECTO</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{type.effect}</p>
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">SÍMBOLO</h4>
                      <p className="text-sm font-serif italic text-slate-800 font-bold underline decoration-[#C41E3A]/30 underline-offset-4">
                        {type.symbol}
                      </p>
                    </div>
                  </div>
                </div>

                {type.subPoint && (
                  <div className="mt-12 bg-white/70 border border-[#C41E3A]/10 p-1 relative">
                    <div className="bg-white p-8 shadow-inner text-center">
                      <h4 className="font-serif text-xl md:text-3xl font-bold text-slate-900 mb-6">
                        {type.subPoint.title}
                      </h4>
                      <div className="space-y-4 max-w-3xl mx-auto">
                        {type.subPoint.content.map((p, i) => (
                          <p key={i} className="text-slate-700 italic text-base md:text-lg leading-relaxed border-l-2 border-[#C41E3A]/20 pl-4 inline-block text-left">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Synthesis Section */}
        <div className="mt-40 bg-slate-900 text-white p-12 md:p-20 relative overflow-hidden rounded-sm">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C41E3A] opacity-10 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="relative z-10">
            <h3 className="font-serif text-3xl md:text-5xl mb-12 border-b border-white/10 pb-8">SÍNTESIS</h3>
            <p className="text-xl md:text-2xl font-serif italic text-slate-300 mb-12 max-w-3xl">
              El Perturbanismo actúa como capas superpuestas que deforman la ciudad gradualmente:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { label: "ESTRUCTURA", text: "Deforma la base física de la ciudad." },
                { label: "IMAGEN", text: "Contamina la percepción visual y estética." },
                { label: "ESPACIO COMÚN", text: "Degrada el territorio que es de todos." },
                { label: "MENTE", text: "Afecta el bienestar psicológico del habitante." },
                { label: "INSTITUCIONES", text: "Se legitima y legaliza desde el poder." },
                { label: "CULTURA", text: "Finalmente se normaliza y se vuelve costumbre." }
              ].map((item, i) => (
                <div key={i} className="group border-l border-white/20 pl-6 py-2 hover:border-[#C41E3A] transition-colors">
                  <h4 className="font-sans font-bold text-xs tracking-widest text-[#C41E3A] mb-2 uppercase">{item.label}</h4>
                  <p className="text-sm text-slate-400 group-hover:text-white transition-colors">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesSection;
