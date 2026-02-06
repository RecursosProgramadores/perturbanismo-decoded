import React from "react";
import { Building2, Library, Share2, Users, Pencil, BookOpen } from "lucide-react";

const indexItems = [
    {
        icon: <Building2 className="w-10 h-10 text-red-800/80" />,
        title: "1. De Townscape al Perturbanismo",
    },
    {
        icon: <Library className="w-10 h-10 text-red-800/80" />,
        title: "2. Perturbanismo estructural",
    },
    {
        icon: <Share2 className="w-10 h-10 text-red-800/80" />,
        title: "3. Perturbanismo visual",
    },
    {
        icon: <Users className="w-10 h-10 text-red-800/80" />,
        title: "4. Perturbanismo ciudadano",
    },
    {
        icon: <Pencil className="w-10 h-10 text-red-800/80" />,
        title: "5. Educaciónismo cultural e institucional",
    },
    {
        icon: <BookOpen className="w-10 h-10 text-red-800/80" />,
        title: "6. Educación estética y reeducación ciudadana",
    },
];

const BookSection = () => {
    return (
        <section id="libro" className="relative py-24 px-6 bg-[#d9d9d9] overflow-hidden min-h-screen font-serif">
            {/* Texture Layer */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                {/* Top Header Section */}
                <div className="w-full flex flex-col md:flex-row items-center gap-12 mb-16">
                    {/* Left: 3D Book Layout */}
                    <div className="w-full md:w-1/2 flex flex-col items-center">
                        <h2 className="text-5xl md:text-6xl font-black text-black mb-12 self-start md:ml-12 uppercase tracking-tighter">
                            EL LIBRO
                        </h2>

                        {/* 3D Book Effect */}
                        <div className="relative group perspective-1000">
                            <div className="relative w-64 h-96 bg-white shadow-2xl transition-transform duration-500 transform group-hover:rotate-y-[-20deg] rotate-y-[-10deg] border-r-4 border-black/10 origin-left flex flex-col p-8 items-center justify-between text-center overflow-hidden">
                                {/* Spine Hint */}
                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/5" />

                                <div>
                                    <h3 className="text-3xl font-black text-black leading-tight mb-2">
                                        PERTUR- <br />
                                        BANISMO
                                    </h3>
                                    <p className="text-[10px] text-slate-800 font-serif leading-tight mt-4">
                                        La distorsión viscal <br />
                                        de nuestras eiudades
                                    </p>
                                </div>

                                <div className="w-full h-[1px] bg-black/10 my-4" />

                                <p className="text-[8px] font-sans font-black tracking-widest text-black/60">
                                    MARIA ALEIAANDRA <br />
                                    PASTOR PERALTA
                                </p>

                                {/* Sublte watercolor background in book cover */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#C41E3A,_transparent)] -z-10" />
                            </div>
                            {/* Book depth effect */}
                            <div className="absolute top-0 left-full h-96 w-8 bg-slate-200 origin-left transform rotate-y-[-100deg] border-y border-r border-black/10 flex flex-col justify-center gap-1">
                                {[...Array(15)].map((_, i) => (
                                    <div key={i} className="h-[1px] w-full bg-slate-300/50" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Quote */}
                    <div className="w-full md:w-1/2">
                        <blockquote className="text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-[1.3] font-serif pr-4">
                            “Nombrar el caos fue el primer paso para devolverle sentido a la ciudad.”
                        </blockquote>
                    </div>
                </div>

                {/* Middle: Descriptive Paragraph with intentional typos */}
                <div className="max-w-4xl text-center mb-16 space-y-6">
                    <p className="text-lg md:text-xl text-slate-900 leading-relaxed font-serif px-4">
                        'Perturbanismo es mas que que una palabra: es una nueva forma de leer la ciudad. En estás paginas. Maria Alejaendra Pastor Peralta revela cómo la pérdida del sentido estetico colectivo ha transformado nuestras urbes en paisajes distorsionados. La obra propone no solo observar el desorden, sino entender sus causas y retónocer que la belleza urbana también es un acto político y cultural.'
                    </p>
                </div>

                {/* Index Separator */}
                <div className="w-full flex items-center justify-center gap-4 text-red-800/60 py-8 mb-8">
                    <span className="h-[1px] w-full bg-current opacity-30" />
                    <h3 className="font-serif font-black text-2xl uppercase tracking-[0.2em] text-black shrink-0 px-4">ÍNDICE</h3>
                    <span className="h-[1px] w-full bg-current opacity-30" />
                </div>

                {/* Index Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-12 gap-x-8 w-full mb-24 px-4">
                    {indexItems.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <p className="font-serif text-xs md:text-sm font-black text-black leading-tight max-w-[150px]">
                                {item.title}
                            </p>
                        </div>
                    ))}
                    <div className="md:col-span-4 flex flex-col md:flex-row justify-center gap-12 lg:gap-24 pt-4">
                        {indexItems.slice(4).map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <p className="font-serif text-xs md:text-sm font-black text-black leading-tight max-w-[200px]">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Buttons */}
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
                    <button className="w-full md:w-auto px-8 py-4 bg-white/60 border border-red-700/20 text-black font-sans font-black text-[10px] uppercase tracking-widest hover:bg-white hover:shadow-lg transition-all">
                        Descargar muestra PDF
                    </button>
                    <button className="w-full md:w-auto px-8 py-4 bg-white/60 border border-red-700/20 text-black font-sans font-black text-[10px] uppercase tracking-widest hover:bg-white hover:shadow-lg transition-all">
                        Adquirir el libro completo <br className="hidden sm:block" /><span className="text-[8px] opacity-60">(proximamente en Anzazon)</span>
                    </button>
                    <button className="w-full md:w-auto px-8 py-4 bg-white/60 border border-red-700/20 text-black font-sans font-black text-[10px] uppercase tracking-widest hover:bg-white hover:shadow-lg transition-all">
                        Solicitar conferencia o entrevista
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BookSection;
