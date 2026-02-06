import { Eye, Building, AlertCircle, Users, Brain, Info, Layout, Volume2 } from "lucide-react";
import heroImg from "@/assets/hero-watercolor.jpg";

const tiposItems = [
  {
    icon: <Eye className="w-10 h-10 text-red-600" />,
    title: "Distorsión visual",
    desc: "Caos acumulado en el entorno urbano",
    highlight: true,
  },
  {
    icon: <Building className="w-10 h-10 text-slate-800" />,
    title: "Desorden funcional",
    desc: "Invasión y disfunción del espacio público",
  },
  {
    icon: <AlertCircle className="w-10 h-10 text-red-600" />,
    title: "Normalización del caos",
    desc: "El desorden que deja de cuestionarse",
  },
  {
    icon: <Users className="w-10 h-10 text-slate-600" />,
    title: "Responsabilidad compartida",
    desc: "El caos es responsabilidad de todos",
  },
  {
    icon: <Brain className="w-10 h-10 text-slate-800" />,
    title: "Distorsión mental",
    desc: "Entorno caóco y fragmentación",
  },
  {
    icon: <Info className="w-10 h-10 text-slate-800" />,
    title: "Distorsión mental",
    desc: "Entorno caótico y fragmentación mental",
    variant: true
  },
  {
    icon: <Layout className="w-10 h-10 text-slate-800" />,
    title: "Pérdida de identidad",
    desc: "Paisaje urbano sin memoriuni carácter",
  },
  {
    icon: <Volume2 className="w-10 h-10 text-red-700" />,
    title: "La música del perturbanismo",
    desc: "Ruido constante y saturación sonora.",
  },
];

const DefinitionBox = () => (
  <section className="relative py-24 px-6 bg-[#f4ede1] overflow-hidden min-h-screen flex flex-col items-center">
    {/* Texture layer */}
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

    {/* Distant skyline blurred background */}
    <div className="absolute inset-x-0 top-[20%] z-0 h-[60%] opacity-[0.05] blur-xl pointer-events-none">
      <img src={heroImg} alt="skiline hint" className="w-full h-full object-cover grayscale" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-serif text-5xl md:text-6xl font-black text-black tracking-tight font-serif uppercase">
          Tipos de Perturbanismo
        </h2>
        <p className="font-serif italic text-lg md:text-xl text-[#B8860B] font-medium tracking-wide">
          Las siete manifestaciones del caos urbano
        </p>
        <div className="flex items-center justify-center gap-4 text-[#B8860B] opacity-60 py-4">
          <span className="h-[1px] w-24 bg-current" />
          <span className="w-2 h-2 rounded-full bg-current" />
          <span className="h-[1px] w-24 bg-current" />
        </div>
        <p className="max-w-2xl mx-auto font-serif text-slate-900 text-lg leading-relaxed pt-4">
          El perturbanismo se manifiesta de diversas formas en la ciudad. Estas son sus siete distorsiones y la responsabilidad colectiva.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 w-full mb-20">
        {tiposItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 space-y-4 group transition-all duration-500`}
          >
            {/* Card Content with Watercolor Hint */}
            <div className="relative mb-6">
              {/* Watercolor blob effect */}
              <div className={`absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-tr ${index % 2 === 0 ? 'from-[#C41E3A]' : 'from-[#B8860B]'} to-transparent`} />
              <div className="relative z-10 p-2 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
            </div>

            <h3 className="font-serif font-black text-lg md:text-xl text-black leading-tight drop-shadow-sm">
              {item.title}
            </h3>
            <p className="font-sans text-sm text-slate-700 leading-snug px-4">
              {item.desc}
            </p>
            <button className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[#B8860B] group-hover:text-red-700 transition-colors pt-4">
              Leer más
            </button>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="flex flex-col items-center gap-12 mt-8">
        <button className="bg-[#C41E3A] text-white font-sans font-black py-4 px-14 shadow-[0_10px_30px_rgba(196,30,58,0.3)] hover:shadow-[0_15px_40px_rgba(196,30,58,0.5)] hover:translate-y-[-2px] transition-all uppercase tracking-[0.3em] text-xs">
          VER EJEMPLOS
        </button>

        <p className="font-serif italic text-slate-500 tracking-[0.4em] text-[10px] md:text-xs">
          GUÍAS VISUALES DE PERTURBANISMO
        </p>
      </div>
    </div>
  </section>
);

export default DefinitionBox;
