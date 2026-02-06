import React from "react";
import heroImg from "@/assets/hero-watercolor.jpg";

const blogPosts = [
    {
        id: 1,
        category: "DIAGNÓSTICO URBANO",
        title: "¿Vivimos sobre la distorsión visual?",
        desc: "Cómo el caos visual acumulado impacta en nuestra percepción y bienestar urbano...",
        date: "22 de abril 2024",
        readTime: "5 min de lectura",
        imgClass: "grayscale-[0.2] brightness-105"
    },
    {
        id: 2,
        category: "MÚSICA Y RUIDO",
        title: "El ruido padece",
        desc: "El ruido urbano como perturbanismo invisible que enferma la convivencia.",
        date: "5 de abril 2024",
        readTime: "4 min de lectura",
        imgClass: "sepia-[0.3] brightness-90 saturate-50"
    },
    {
        id: 3,
        category: "DIAGNÓSTICO URBANO",
        title: "La estética del desorden",
        desc: "Caos normalizado en la ciudad contemporánea.",
        date: "25 de marzo 2024",
        readTime: "6 min de lectura",
        imgClass: "grayscale-[0.4] contrast-125"
    },
    {
        id: 4,
        category: "REFLEXIÓN CIUDADANA",
        title: "Por qué dejamos de ver el caos",
        desc: "Sobre el cansancio visual y la aceptación del desorden.",
        date: "17 de marzo 2024",
        readTime: "4 min de lectura",
        imgClass: "brightness-75 saturate-150 grayscale-[0.1]"
    }
];

const BlogSection = () => {
    return (
        <section id="blog" className="relative py-24 px-6 bg-[#f4ece1] overflow-hidden">
            {/* Texture Layer */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Main Header */}
                <div className="text-center mb-12 flex flex-col items-center">
                    <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-4 whitespace-nowrap">
                        Blog de Perturbanismo
                    </h2>
                    <p className="font-serif italic text-lg md:text-xl text-[#947454] max-w-2xl px-4">
                        Diagnósticos, análisis y reflexiones sobre la ciudad
                    </p>
                    <div className="flex items-center gap-2 text-[#947454] opacity-50 mt-6 mb-12">
                        <span className="h-[1px] w-12 bg-current" />
                        <span className="w-2 h-2 rounded-full bg-current" />
                        <span className="h-[1px] w-12 bg-current" />
                    </div>
                    <p className="font-serif text-slate-800 text-center max-w-3xl text-lg leading-relaxed">
                        El blog del <strong>Perturbanismo</strong> analiza y reflexiona sobre la ciudad desde un enfoque crítico y un periodismo arquitectónico.
                    </p>
                </div>

                {/* Section Subtitle */}
                <div className="flex flex-col items-center mb-16 px-4">
                    <h3 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">
                        Blog de Perturbanismo
                    </h3>
                    <div className="flex items-center gap-2 text-[#947454] opacity-30">
                        <span className="h-[1px] w-12 bg-current" />
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        <span className="h-[1px] w-12 bg-current" />
                    </div>
                </div>

                {/* Content Layout: 2 Columns + Sidebar */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Main Grid: 2 Columns of Posts */}
                    <div className="lg:w-[75%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {blogPosts.map((post) => (
                                <article key={post.id} className="group cursor-pointer">
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-4 shadow-sm">
                                        <div className="absolute top-0 left-0 z-20 bg-[#2d1b11]/90 text-white text-[10px] font-sans font-bold py-2 px-6 uppercase tracking-widest">
                                            {post.category}
                                        </div>
                                        <img
                                            src={heroImg}
                                            alt={post.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${post.imgClass}`}
                                        />
                                        {/* Texture overlay on image */}
                                        <div className="absolute inset-0 z-10 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')] pointer-events-none" />
                                    </div>

                                    {/* Post Content */}
                                    <div className="space-y-3">
                                        <h4 className="font-serif text-xl md:text-2xl text-slate-900 group-hover:text-red-800 transition-colors leading-tight">
                                            {post.title}
                                        </h4>
                                        <p className="font-sans text-sm text-slate-600 leading-relaxed line-clamp-2">
                                            {post.desc}
                                        </p>
                                        <div className="flex items-center gap-4 pt-2">
                                            <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                                            <span className="h-3 w-[1px] bg-slate-200" />
                                            <span className="font-sans italic text-[10px] text-slate-400">{post.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar: DESTACADO */}
                    <aside className="lg:w-[25%] sticky top-24">
                        <div className="border border-[#2d1b11]/10 p-8 flex flex-col items-center bg-white/30 backdrop-blur-sm rounded-sm">
                            <span className="font-sans text-[10px] font-black text-[#947454] uppercase tracking-[0.3em] mb-8">
                                DESTACADO
                            </span>

                            {/* Book Illustration Placeholder */}
                            <div className="relative aspect-[3/4] w-full max-w-[200px] mb-8 shadow-2xl group transition-all duration-500 hover:rotate-[-2deg]">
                                <img
                                    src={heroImg}
                                    alt="Libro Perturbanismo"
                                    className="w-full h-full object-cover grayscale-[0.2] brightness-90 border-r-4 border-black/20"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-white/90">
                                    <p className="font-serif font-black text-center text-xs text-black">PERTURBANISMO</p>
                                </div>
                            </div>

                            <p className="font-serif text-sm text-slate-800 text-center leading-relaxed mb-10 px-2">
                                El diagnóstico visual sobre la deformación caótica de nuestras ciudades.
                            </p>

                            <button className="w-full border border-[#C41E3A] text-[#C41E3A] font-sans font-black py-4 hover:bg-[#C41E3A] hover:text-white transition-all uppercase tracking-[0.2em] text-[10px]">
                                CONOCE EL LIBRO
                            </button>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="font-serif italic text-slate-500 tracking-[0.3em] text-[10px] uppercase">
                                Guías visuales de perturbanismo
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
