import heroWatercolor from "../assets/hero-watercolor.jpg";
import typeVisual from "../assets/type-visual.jpg";
import typeStructural from "../assets/type-structural.jpg";
import typeCultural from "../assets/type-cultural.jpg";
import typeCitizen from "../assets/type-citizen.jpg";

const GallerySection = () => {
    return (
        <section className="py-20 px-6 bg-[#f4ece1] relative overflow-hidden border-y border-black/5">
            {/* Texture Layer */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-slate-800 mb-2 tracking-tighter">
                        Galería de Perturbanismo
                    </h2>
                    <p className="font-serif italic text-lg md:text-xl text-[#C41E3A] tracking-wide mb-6">
                        La ciudad comparada: con y sin caos
                    </p>

                    <div className="flex items-center justify-center gap-4 text-[#C41E3A] opacity-40 mb-10 font-serif">
                        <span className="h-[1px] w-32 bg-current" />
                        <span className="w-2 h-2 rounded-full bg-current" />
                        <span className="h-[1px] w-32 bg-current" />
                    </div>

                    <p className="max-w-4xl mx-auto font-serif text-slate-700 text-lg md:text-xl leading-relaxed mb-6">
                        La galeria de <span className="font-bold">Perturbanismo</span> no solo muestra: argumenta visualmente el problema urbano.
                    </p>
                </div>

                {/* Main Comparison: side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Con Perturbanismo */}
                    <div className="flex flex-col gap-4">
                        <div className="relative border border-black/10 shadow-lg group overflow-hidden bg-white p-1 rounded-sm">
                            <div className="absolute top-4 left-4 z-20">
                                <span className="bg-[#8B2323] text-white font-sans font-black px-4 py-1.5 text-xs md:text-sm uppercase tracking-widest shadow-md">
                                    CON PERTURBANISMO
                                </span>
                            </div>
                            <img
                                src={heroWatercolor}
                                alt="Con Perturbanismo"
                                className="w-full h-64 md:h-80 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 filter contrast-125 saturate-150"
                            />
                        </div>
                        <div className="flex items-center gap-3 text-slate-900/60 font-serif italic text-sm md:text-base justify-center md:justify-start">
                            <span>Con Perturbanismo</span>
                            <span className="h-[1px] flex-grow bg-slate-300" />
                            <span className="shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-slate-400 rotate-45" />
                                Lectura visual
                            </span>
                        </div>
                    </div>

                    {/* Sin Perturbanismo */}
                    <div className="flex flex-col gap-4">
                        <div className="relative border border-black/10 shadow-lg group overflow-hidden bg-white p-1 rounded-sm">
                            <div className="absolute top-4 right-4 z-20">
                                <span className="bg-slate-400 text-white font-sans font-black px-4 py-1.5 text-xs md:text-sm uppercase tracking-widest shadow-md">
                                    SIN PERTURBANISMO
                                </span>
                            </div>
                            <img
                                src={typeVisual}
                                alt="Sin Perturbanismo"
                                className="w-full h-64 md:h-80 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 brightness-110"
                            />
                        </div>
                        <div className="flex items-center gap-3 text-slate-900/60 font-serif italic text-sm md:text-base justify-center md:justify-end">
                            <span className="h-[1px] flex-grow bg-slate-300 order-2 md:order-1" />
                            <span className="shrink-0 flex items-center gap-2 order-3 md:order-2">
                                Sin Perturbanismo
                            </span>
                        </div>
                    </div>
                </div>

                {/* Gallery CTA */}
                <div className="flex justify-center mb-16">
                    <button className="border-2 border-[#C41E3A] text-[#C41E3A] font-sans font-black py-4 px-12 hover:bg-[#C41E3A] hover:text-white transition-all uppercase tracking-[0.3em] text-xs shadow-md hover:shadow-2xl">
                        VER TODA LA GALERÍA
                    </button>
                </div>

                {/* Bottom gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-80 hover:opacity-100 transition-opacity duration-700">
                    {[typeStructural, typeCultural, typeCitizen].map((img, i) => (
                        <div key={i} className="relative aspect-video sm:aspect-square overflow-hidden border border-black/5 bg-white p-1 shadow-sm hover:shadow-md transition-shadow group">
                            <img src={img} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
