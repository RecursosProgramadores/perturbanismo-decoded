import React from "react";
import heroImg from "@/assets/hero-watercolor.jpg";

const AuthorSection = () => {
    return (
        <section id="autora" className="relative py-24 px-6 bg-[#f4ece1] overflow-hidden min-h-screen">
            {/* Texture Layer */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

            {/* Urban Silhouette Background (blurred) */}
            <div className="absolute inset-x-0 bottom-0 z-0 h-1/2 opacity-[0.04] blur-md pointer-events-none">
                <img src={heroImg} alt="city silhouette" className="w-full h-full object-cover grayscale" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left Column: Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-8">
                    <div className="space-y-2">
                        <h2 className="font-serif text-5xl md:text-6xl font-black text-black uppercase tracking-tight">
                            Autora
                        </h2>
                        <div className="space-y-1">
                            <h3 className="font-serif text-2xl md:text-3xl text-slate-900 leading-tight">
                                Alejandra Pastor Peralta
                            </h3>
                            <p className="font-serif italic text-[#C41E3A] text-sm md:text-base">
                                Arquitecta creadora del concepto del Perturbanismo
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-[#C41E3A] opacity-40 pt-4">
                            <span className="h-[1px] w-12 bg-current" />
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            <span className="h-[1px] w-12 bg-current" />
                        </div>
                    </div>

                    <blockquote className="font-serif italic text-xl md:text-2xl text-slate-800 leading-relaxed border-l-2 border-[#C41E3A]/20 pl-6 py-2">
                        “Soy Alejandra Pastor Peralta, una arquitecta critica que desafía la normalización del caos urbano. Comprender la cidaid tànseré implica come una posición ética frenta a cómo la hemos perturbaazo.”
                    </blockquote>

                    <a
                        href="#libro"
                        className="w-fit bg-[#2d1b11] text-white font-sans font-black py-4 px-10 hover:bg-black transition-all uppercase tracking-[0.2em] text-[10px] shadow-lg"
                    >
                        VER EL LIBRO
                    </a>

                    <div className="space-y-6 pt-8 border-t border-black/5">
                        <div className="space-y-1">
                            <p className="font-serif font-black text-slate-900 text-lg">
                                Autora del libro Perturbanismo:
                            </p>
                            <p className="font-serif italic text-slate-700">
                                La distorsión visual de nuestras ciudades
                            </p>
                        </div>

                        <p className="font-serif text-slate-800 leading-relaxed max-w-lg">
                            Arquitecta critica que observa, secrité y expone la responsabiliatión compansida de la distorsión urbana.
                        </p>

                        <p className="font-serif font-black text-red-800 italic text-lg leading-tight">
                            Porcjue viviri perturbattoriamente no es una opicón inevitable.
                        </p>
                    </div>
                </div>

                {/* Right Column: Portrait */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                    <div className="relative aspect-[3/4] w-full max-w-md shadow-2xl rounded-sm overflow-hidden border-8 border-white group">
                        {/* 
                NOTE: Placeholder image as generation quota is exhausted. 
                Matches description: Latina professional woman in dark suit.
            */}
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                            alt="Alejandra Pastor Peralta"
                            className="w-full h-full object-cover grayscale-[0.1] contrast-110 brightness-95"
                        />

                        {/* Watercolor overlay hints */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply opacity-50" />
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

                        {/* Subtle decorative frame */}
                        <div className="absolute inset-4 border border-white/30 pointer-events-none" />
                    </div>

                    {/* Decorative watercolor blobs behind portrait */}
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#B8860B]/10 blur-3xl -z-10 rounded-full" />
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#C41E3A]/5 blur-3xl -z-10 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default AuthorSection;
