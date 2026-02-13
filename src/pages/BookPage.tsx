import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const indexItems = [
    { id: 1, title: "Prólogo", desc: "Reflexión crítica sobre la pérdida progresiva de coherencia visual en la ciudad contemporánea." },
    { id: 2, title: "Dedicatoria", desc: "Declaración de intención dirigida a quienes observan y creen en ciudades más humanas." },
    { id: 3, title: "El nacimiento del Perturbanismo", desc: "Origen del término a partir de la observación directa del paisaje urbano." },
    { id: 4, title: "Diferencias entre Perturbanismo y otros conceptos", desc: "Clarificación conceptual que diferencia el Perturbanismo del mal urbanismo." },
    { id: 5, title: "Impacto psicológico y ambiental", desc: "Análisis de los efectos emocionales y mentales del caos visual constante." },
    { id: 6, title: "Ejemplos de Perturbanismo", desc: "Casos reales que evidencian cómo el Perturbanismo se manifiesta en calles cotidianas." },
    { id: 7, title: "El Perturbanismo ciudadano", desc: "Exposición del rol del ciudadano como agente activo del deterioro." },
    { id: 8, title: "Responsabilidad ciudadana", desc: "Reflexión sobre la ética urbana y la necesidad de conciencia colectiva." },
    { id: 9, title: "Comparaciones: Disfuncional, Grotesco, Disruptivo", desc: "Análisis comparativo que distingue el Perturbanismo de otros estados." },
    { id: 10, title: "Cómo combatir el Perturbanismo", desc: "Propuestas integrales que combinan educación, normativa y cultura." },
    { id: 11, title: "De Townscape al Perturbanismo", desc: "Vínculo teórico entre la tradición del Townscape y la lectura crítica." },
    { id: 12, title: "Derechos de autor y protección", desc: "Justificación de la protección intelectual del término Perturbanismo." },
    { id: 13, title: "Comentario final", desc: "Cierre reflexivo que reafirma el valor del concepto como herramienta." },
    { id: 14, title: "Defensa de la autora", desc: "Posicionamiento intelectual y ético desde el cual se desarrolla la obra." },
    { id: 15, title: "Conclusiones", desc: "Síntesis del fenómeno como enfermedad urbana de origen cultural." },
    { id: 16, title: "Biografía profesional de la autora", desc: "Contextualización del recorrido profesional que sustenta la mirada." },
    { id: 17, title: "Glosario del Perturbanismo", desc: "Definiciones clave que consolidan el Perturbanismo como campo conceptual." },
];

const BookPage = () => {
    return (
        <div className="min-h-screen bg-[#FDFCFB]">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

                        {/* Left: 3D Book Layout */}
                        <div className="flex flex-col items-center lg:items-start order-2 lg:order-1">
                            <h1 className="font-serif text-4xl md:text-6xl font-black text-black mb-8 uppercase tracking-tighter">
                                PERTURBANISMO
                            </h1>
                            <p className="font-serif text-xl text-slate-500 italic mb-8 border-l-4 border-[#C41E3A] pl-6">
                                Resumen editorial del libro
                            </p>

                            <div className="space-y-4 text-slate-700 font-serif">
                                <p className="text-xl font-bold">María Alejandra Pastor Peralta</p>
                                <p className="text-sm tracking-widest text-slate-400 uppercase">Cajamarca, Perú</p>
                            </div>

                            {/* 3D Book Visual */}
                            <div className="mt-16 relative group perspective-1000 hidden md:block">
                                <div className="relative w-64 h-96 bg-white shadow-2xl transition-transform duration-500 transform group-hover:rotate-y-[-20deg] rotate-y-[-10deg] border-r-4 border-black/10 origin-left flex flex-col p-8 items-center justify-between text-center overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/5" />
                                    <div>
                                        <h3 className="text-3xl font-black text-black leading-tight mb-2">
                                            PERTUR- <br />
                                            BANISMO
                                        </h3>
                                        <p className="text-[10px] text-slate-800 font-serif leading-tight mt-4">
                                            La distorsión visual <br />
                                            de nuestras ciudades
                                        </p>
                                    </div>
                                    <div className="w-full h-[1px] bg-black/10 my-4" />
                                    <p className="text-[8px] font-sans font-black tracking-widest text-black/60 uppercase">
                                        MARÍA ALEJANDRA <br />
                                        PASTOR PERALTA
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Intro Quote */}
                        <div className="flex flex-col justify-center order-1 lg:order-2">
                            <blockquote className="text-3xl md:text-5xl lg:text-6xl text-slate-900 leading-tight font-serif italic text-right lg:text-left">
                                “Nombrar el caos fue el primer paso para <span className="text-[#C41E3A]">devolverle sentido</span> a la ciudad.”
                            </blockquote>

                            <div className="mt-12 bg-black/[0.03] p-8">
                                <p className="text-slate-700 text-lg leading-relaxed font-serif">
                                    Perturbanismo es más que una palabra: es una nueva forma de leer la ciudad. En estas páginas, María Alejandra Pastor Peralta revela cómo la pérdida del sentido estético colectivo ha transformado nuestras urbes en paisajes distorsionados.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Index Section */}
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row items-center justify-between border-b-2 border-black pb-8">
                            <h2 className="font-serif text-3xl font-black uppercase tracking-tighter">Índice Editorial</h2>
                            <p className="text-slate-400 text-sm font-sans tracking-widest uppercase mt-4 md:mt-0">17 Capítulos / Reflexiones</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 py-12">
                            {indexItems.map((item) => (
                                <div key={item.id} className="group border-b border-black/5 pb-8 hover:border-[#C41E3A]/30 transition-colors">
                                    <div className="flex items-baseline gap-4 mb-4">
                                        <span className="font-serif text-4xl text-slate-200 group-hover:text-[#C41E3A]/20 transition-colors duration-500 tabular-nums">
                                            {String(item.id).padStart(2, '0')}
                                        </span>
                                        <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#C41E3A] transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed pl-12">
                                        {item.desc}
                                    </p>
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
                                href="#"
                                className="bg-black text-white px-10 py-5 font-sans font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#C41E3A] transition-all"
                            >
                                Descargar Muestra
                            </a>
                            <a
                                href="#"
                                className="border-2 border-black text-black px-10 py-5 font-sans font-black text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
                            >
                                Comprar en Amazon
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
