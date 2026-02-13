import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-watercolor.jpg";
import signatureImg from "@/assets/snopi.png"; // Placeholder for signature as mentioned in plan

const AuthorPage = () => {
    return (
        <div className="min-h-screen bg-[#FDFCFB]">
            <Navbar />

            <main className="pt-24 lg:pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 h-full">
                    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-200px)] gap-12 lg:gap-0">

                        {/* LEFT COLUMN: Editorial Content (45-50%) */}
                        <div className="w-full lg:w-[45%] flex flex-col space-y-10 lg:pr-16 border-r border-black/[0.03]">

                            {/* TEXT 1 – TÍTULO DE SECCIÓN */}
                            <div className="space-y-1">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C41E3A] font-bold">
                                    Sección
                                </span>
                                <h1 className="font-serif text-3xl md:text-5xl font-black text-black uppercase tracking-tighter">
                                    Autora
                                </h1>
                            </div>

                            {/* TEXT 2 – NOMBRE (DESTACADO) */}
                            <div className="space-y-4">
                                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tight">
                                    Alejandra <br />
                                    <span className="text-black">Pastor Peralta</span>
                                </h2>

                                {/* TEXT 3 – FRASE DE POSICIONAMIENTO */}
                                <p className="font-serif italic text-xl md:text-2xl text-[#C41E3A] border-l-2 border-[#C41E3A] pl-6 py-1">
                                    La arquitecta que nombró el caos
                                </p>
                            </div>

                            {/* TEXT 4 – SUBTÍTULO & TEXTO 5 – MANIFIESTO */}
                            <div className="space-y-6">
                                <h3 className="font-serif text-2xl font-bold text-slate-800 uppercase tracking-widest border-b border-black/5 pb-2 w-fit">
                                    Visión y legado
                                </h3>
                                <p className="font-serif text-lg md:text-xl text-slate-700 leading-relaxed italic">
                                    “La belleza no es un lujo urbano, es una necesidad humana.”
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed antialiased">
                                    Con esa premisa, María Alejandra impulsa una nueva generación de arquitectos, ciudadanos y autoridades que entienden la ciudad como un reflejo de su cultura visual.
                                </p>
                            </div>

                            {/* TEXT 6 – TEXTO BIOGRÁFICO PRINCIPAL */}
                            <div className="bg-black/[0.02] p-8 -mx-8 lg:mx-0">
                                <p className="text-slate-800 text-lg leading-relaxed antialiased">
                                    María Alejandra Pastor Peralta (Cajamarca, Perú) es arquitecta, investigadora y creadora del término <strong>Perturbanismo</strong>, un concepto que redefine la relación entre el ciudadano y la estética urbana.
                                    <br /><br />
                                    Su trabajo busca devolverle a la ciudad su dignidad visual, combinando crítica, arte y conciencia colectiva.
                                </p>
                            </div>

                            {/* TEXT 7 – LISTA DE CREDENCIALES */}
                            <div className="space-y-4">
                                <ul className="space-y-3">
                                    {[
                                        "Fundadora de MAP Arquitectos",
                                        "Autora del concepto Perturbanismo",
                                        "Conferencista internacional sobre estética urbana y educación ciudadana"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-slate-700 font-sans tracking-wide">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] shrink-0 mt-2.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* TEXT 8 – FIRMA (MUY IMPORTANTE) */}
                            <div className="pt-6 space-y-4">
                                <div className="w-48 opacity-90">
                                    {/* NOTE: signatureImg is a placeholder as discussed. Please replace with actual signature file. */}
                                    <img
                                        src={signatureImg}
                                        alt="Firma Alejandra Pastor Peralta"
                                        className="w-full h-auto grayscale brightness-125 contrast-125"
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                                        Arquitecta – Autora de Perturbanismo
                                    </p>
                                </div>
                            </div>

                            {/* TEXT 9 – BOTÓN */}
                            <div className="pt-4">
                                <a
                                    href="/#libro"
                                    className="inline-block border-2 border-slate-900 text-slate-900 font-sans font-black py-4 px-12 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-[0.2em] text-[10px] shadow-sm transform hover:-translate-y-1"
                                >
                                    VER EL LIBRO
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Portrait Image (50-55%) */}
                        <div className="w-full lg:w-[55%] flex flex-col justify-start lg:pl-16">
                            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[85vh] sticky top-32 overflow-hidden shadow-2xl grayscale-[0.1] hover:grayscale-0 transition-all duration-1000 group">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                                    alt="Retrato Alejandra Pastor Peralta"
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                />

                                {/* Decorative Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply opacity-50" />
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

                                {/* Corner Label */}
                                <div className="absolute bottom-12 right-0 bg-white/90 backdrop-blur-md px-8 py-4 border-l-4 border-[#C41E3A] shadow-xl translate-x-4 group-hover:translate-x-0 transition-transform duration-700">
                                    <p className="font-serif italic text-slate-800 text-sm">
                                        Registro de Autoría, 2024
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AuthorPage;
