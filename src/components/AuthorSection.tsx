import React from "react";
import portraitImg from "@/assets/autora/portrait.png";
import signatureImg from "@/assets/autora/signature.png";
import fondoAutora from "@/assets/autora/fondoautora.png";

const AuthorSection = () => {
    return (
        <section id="autora" className="relative py-24 md:py-32 px-6 bg-[#F3EFEA] overflow-hidden min-h-screen flex flex-col items-center">
            {/* Editorial Texture Layer (Subtle paper feel) */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col space-y-16">

                {/* 1. Master Header (Centered) */}
                <header className="text-center space-y-2">
                    <h2 className="font-serif text-6xl md:text-8xl tracking-tight font-black text-slate-900 uppercase m-0">
                        LA AUTORA
                    </h2>
                    <p className="font-serif italic text-xl md:text-2xl text-slate-700">
                        La arquitecta que nombró el caos
                    </p>
                </header>

                {/* 2. Main Grid: Portrait and Vision */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Portrait (Left) with fondoAutora as localized background */}
                    <div className="relative flex justify-center lg:justify-end min-h-[450px]">
                        {/* Urban Artwork Background placed at the top-left of the portrait area */}
                        <div className="absolute -left-12 lg:-left-24 -top-8 lg:-top-16 z-0 opacity-40 pointer-events-none w-[110%] h-[100%] overflow-hidden">
                            <img
                                src={fondoAutora}
                                className="w-full h-full object-contain object-left-top"
                                alt=""
                            />
                        </div>

                        <div className="relative z-10 max-w-sm w-full">
                            {/* Portrait Image (Sin contenedor, solo la imagen) */}
                            <img
                                src={portraitImg}
                                alt="María Alejandra Pastor Peralta"
                                className="w-full h-auto grayscale brightness-105 contrast-110 mix-blend-multiply"
                            />
                        </div>
                    </div>

                    {/* Vision & Legacy (Right) */}
                    <div className="space-y-8 flex flex-col justify-center h-full">
                        <h3 className="font-serif text-[rgb(110,44,44)] text-3xl md:text-4xl font-bold tracking-tight">
                            Visión y legado
                        </h3>
                        <blockquote className="font-serif text-xl md:text-2xl text-slate-800 leading-relaxed max-w-lg">
                            <span className="italic font-bold text-black font-serif">"La belleza no es un lujo urbano. es una necesidad humana."</span>
                            <p className="mt-4 text-lg md:text-xl font-serif">
                                Con esa premisa, María Alejandra impulsa una nueva generación de arquitectos, ciudadanos y autoridades que entienden la ciudad como un reflejo de su cultura visual.
                            </p>
                        </blockquote>
                    </div>
                </div>

                {/* 3. Bottom Grid: Bio and List */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Bio & Signature (Left) */}
                    <div className="space-y-10">
                        <p className="font-serif text-lg text-slate-700 leading-bold text-justify">
                            <strong className="text-black font-bold font-serif">María Alejandra Pastor Peralta</strong>, (Cajamarca, Perú) es arquitecta, investigadora y creadora del término <span className="italic">Perturbanismo</span>, un concepto que redefine la relación entre el ciudadano y la estética urbana. Su trabajo buscó devolverle a la ciudad su dignidad visual, combinando crítica, arte y conciencia colectiva.
                        </p>

                        {/* Signature */}
                        <div className="flex flex-col items-start pt-4">
                            <img
                                src={signatureImg}
                                alt="Firma"
                                className="w-56 h-auto grayscale brightness-50 contrast-125 -ml-4"
                            />
                        </div>
                    </div>

                    {/* Achievement List (Right) - Aligned to top with Bio */}
                    <div className="flex flex-col pt-1">
                        <ul className="space-y-6">
                            {[
                                { label: "Fundadora de", value: "MAP Arquitectos" },
                                { label: "Autora del concepto", value: "Perturbanismo." },
                                { label: "Conferencista internacional", value: "sobre estetica urbana y educación ciudadana" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(110,44,44)] mt-2 flex-shrink-0" />
                                    <p className="font-serif text-lg leading-tight">
                                        <span className="text-gray-400 font-sans text-xs uppercase tracking-widest mr-2">{item.label}</span>
                                        <strong className="text-slate-900 group-hover:text-[rgb(110,44,44)] transition-colors">{item.value}</strong>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AuthorSection;
