import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgCover from "@/assets/libro/libroportadaperturbanismo.png";
import imgBg from "@/assets/libro/fondolibro.png";
import imgTex from "@/assets/libro/fondotex.png";

import icon1 from "@/assets/libro/uno.png";
import icon2 from "@/assets/libro/dos.png";
import icon3 from "@/assets/libro/tres.png";
import icon4 from "@/assets/libro/cuatro.png";
import icon5 from "@/assets/libro/cinco.png";
import icon6 from "@/assets/libro/seis.png";

const conceptItems = [
    { id: 1, title: "De Townscape al Perturbanismo", icon: icon1 },
    { id: 2, title: "Perturbanismo estructural", icon: icon2 },
    { id: 3, title: "Perturbanismo visual", icon: icon3 },
    { id: 4, title: "Perturbanismo ciudadano", icon: icon4 },
    { id: 5, title: "Educaciónismo cultural e institucional", icon: icon5 },
    { id: 6, title: "Educación estética y reeducación ciudadana", icon: icon6 },
];

const BookPage = () => {
    return (
        <div className="min-h-screen bg-[#FDFCFB]">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 relative">
                        {/* Left: Book Cover & Texture */}
                        <div className="relative flex flex-col items-center lg:items-center justify-center">
                            {/* Texture Overlay overlapping from the left */}
                            <div className="absolute -left-32 top-1/2 -translate-y-1/2 z-20 opacity-40 pointer-events-none w-[100%] h-[120%] overflow-hidden">
                                <img
                                    src={imgTex}
                                    className="w-full h-full object-contain object-left"
                                    alt=""
                                />
                            </div>

                            <div className="relative z-10 group max-w-sm w-full lg:ml-4">
                                <div className="absolute -inset-4 border border-black/5 rounded-sm group-hover:rotate-1 transition-transform duration-500" />
                                <div className="relative overflow-hidden bg-white p-4 shadow-2xl transform group-hover:-rotate-1 transition-transform duration-500">
                                    <img
                                        src={imgCover}
                                        alt="Perturbanismo Libro Portada"
                                        className="w-full h-auto shadow-inner"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Intro Quote with Background */}
                        <div className="relative min-h-[350px] flex flex-col justify-center items-center lg:items-start lg:-mt-20">
                            {/* Bg Artwork */}
                            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
                                <img
                                    src={imgBg}
                                    className="w-full h-full object-contain object-right"
                                    alt=""
                                />
                            </div>

                            <blockquote className="relative z-10 text-3xl md:text-5xl lg:text-6xl text-slate-900 leading-tight font-serif italic text-right lg:text-left max-w-xl">
                                “Nombrar el caos fue el primer paso para <span className="text-[#C41E3A]">devolverle sentido</span> a la ciudad.”
                            </blockquote>
                        </div>
                    </div>

                    {/* NEW: Full Description Section below the fold */}
                    <div className="max-w-4xl mx-auto space-y-12 mb-32 border-t border-slate-100 pt-16">
                        <div className="space-y-8">
                            <h2 className="font-sans font-black text-xs tracking-[0.3em] text-slate-400 uppercase text-center lg:text-left">
                                EL LIBRO · PERTURBANISMO
                            </h2>
                            <div className="space-y-6 text-slate-700 text-lg md:text-xl leading-relaxed font-serif text-justify">
                                <p>
                                    Perturbanismo no es solo un libro de architecture: es una lectura crítica de la ciudad contemporánea. A partir del concepto que nombra la distorsión visual, funcional y simbólica de nuestras urbes, la autora analiza cómo el crecimiento desordenado, la saturación de elementos y la pérdida de criterio estético han transformado el paisaje urbano en un entorno que deja de cuidar a quienes lo habitan.
                                </p>
                                <p>
                                    A lo largo de sus páginas, María Alejandra Pastor Peralta propone mirar la ciudad con nuevos ojos: no para normalizar el caos, sino para comprender sus causas, reconocer sus efectos y recuperar el sentido colectivo de la belleza urbana. El libro recorre temas como el paso del townscape al perturbanismo, la distorsión estructural y visual, la responsabilidad ciudadana y el papel de la educación estética como herramienta de transformación.
                                </p>
                                <p>
                                    Perturbanismo plantea que nombrar el caos fue el primer paso para devolverle sentido a la ciudad. La obra invita a arquitectos, ciudadanos y autoridades a asumir que la estética urbana no es un lujo, sino un acto cultural, político y profundamente humano.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Index Section */}
                    <div className="space-y-16">
                        <div className="flex flex-col md:flex-row items-center justify-between border-b-2 border-black pb-8">
                            <h2 className="font-serif text-3xl font-black uppercase tracking-tighter">Índice Editorial</h2>
                            <p className="text-slate-400 text-sm font-sans tracking-widest uppercase mt-4 md:mt-0 font-bold">6 Conceptos Clave</p>
                        </div>

                        {/* Visual Concepts Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 py-8">
                            {conceptItems.slice(0, 4).map((item) => (
                                <div key={item.id} className="flex flex-col items-center text-center group">
                                    <div className="relative mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-32 h-32 md:w-40 md:h-40 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <h3 className="font-serif text-lg md:text-xl font-bold text-slate-900 leading-tight max-w-[200px]">
                                        {item.id}. {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Centered Bottom Row */}
                        <div className="flex flex-wrap justify-center gap-x-12 lg:gap-x-24 gap-y-16">
                            {conceptItems.slice(4).map((item) => (
                                <div key={item.id} className="flex flex-col items-center text-center group w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-6rem)]">
                                    <div className="relative mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-32 h-32 md:w-40 md:h-40 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <h3 className="font-serif text-lg md:text-xl font-bold text-slate-900 leading-tight max-w-[240px]">
                                        {item.id}. {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final Message */}
                    <div className="mt-24 pt-16 border-t-2 border-black/5 flex flex-col items-center text-center">
                        <p className="font-serif text-3xl md:text-4xl text-slate-900 italic max-w-4xl mb-12">
                            “El Perturbanismo se ve en los muros, pero <span className="text-[#C41E3A]">se cura en la conciencia</span>.”
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="https://heyzine.com/flip-book/1514ec0824.html#page"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-10 py-5 font-sans font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#C41E3A] transition-all"
                            >
                                Descargar muestra PDF
                            </a>
                            <a
                                href="https://wa.me/?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20conferencia%20o%20entrevista%20sobre%20Perturbanismo."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-black text-black px-10 py-5 font-sans font-black text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all text-center"
                            >
                                Solicitar conferencia o entrevista
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BookPage;
