import React from 'react';
import { Mail, MapPin, Globe, Instagram, Facebook } from 'lucide-react';
import snopi from "../assets/snopi.png";

const ContactSection = () => {
    return (
        <section id="contacto" className="relative py-20 px-6 bg-[#f0f0f0] overflow-hidden min-h-screen flex flex-col items-center">
            {/* Texture Overlay (Recycled Paper Feel) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />

            <div className="relative z-10 w-full max-w-5xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="font-serif font-bold text-[#C41E3A] text-xl md:text-2xl mb-2 tracking-tight">
                        SI EL CAOS TIENE SOLUCIÓN,
                    </p>
                    <p className="font-sans font-medium text-xs md:text-sm text-[#C41E3A] uppercase tracking-widest mb-6">
                        EMPIEZA CON UNA CONVERSACIÓN.
                    </p>
                    <h2 className="font-serif font-black text-6xl md:text-8xl text-[#C41E3A] tracking-tighter">
                        CONTACTO
                    </h2>
                </div>

                {/* Main Grid: Form & Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Hand-drawn Form */}
                    <div className="space-y-8">
                        <form className="space-y-6">
                            <div className="flex flex-col">
                                <label className="font-sans font-bold text-xs uppercase tracking-widest mb-2">Nombre completo</label>
                                <input
                                    type="text"
                                    className="bg-white border-[1.5px] border-black p-3 outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-sans font-bold text-xs uppercase tracking-widest mb-2">Correo electrónico</label>
                                <input
                                    type="email"
                                    className="bg-white border-[1.5px] border-black p-3 outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-sans font-bold text-xs uppercase tracking-widest mb-2">Asunto</label>
                                <input
                                    type="text"
                                    className="bg-white border-[1.5px] border-black p-3 outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-sans font-bold text-xs uppercase tracking-widest mb-2">Mensaje</label>
                                <textarea
                                    rows={6}
                                    className="bg-white border-[1.5px] border-black p-3 outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#C41E3A] text-white font-sans font-black py-4 border-2 border-black hover:bg-red-700 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-widest text-sm"
                            >
                                ENVIAR-MENSAJE
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Information & Illustration */}
                    <div className="flex flex-col justify-between h-full">
                        <div className="space-y-12">
                            <div>
                                <h3 className="font-sans font-black text-2xl mb-6">INFORMACIÓN</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-center gap-4">
                                        <Mail className="w-5 h-5 text-black" />
                                        <span className="font-sans text-sm font-medium">info@perturbanismo.com</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <MapPin className="w-5 h-5 text-[#C41E3A]" />
                                        <span className="font-sans text-sm font-medium">Cajamarca – Perti</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <Globe className="w-5 h-5 text-black" />
                                        <span className="font-sans text-sm font-medium">www.perturbanismo.com</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="flex gap-2">
                                            <Instagram className="w-5 h-5 text-black" />
                                            <Facebook className="w-5 h-5 text-black" />
                                        </div>
                                        <span className="font-sans text-sm font-medium">@perturbanismo</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="font-sans text-sm leading-relaxed max-w-sm text-gray-600">
                                Perturbanismo está abierto a colaboraciones, entrevistas, poyeros, académicos y alianzas que promuevan la estética urbana.
                            </p>
                        </div>

                        {/* Illustration Area */}
                        <div className="relative mt-20 md:mt-0 flex justify-end items-end group">
                            <div className="relative w-72 h-72 flex items-end justify-end">
                                {/* Background Shadow Cityscape */}
                                <svg className="absolute bottom-4 right-0 w-full h-4/5 opacity-[0.15] pointer-events-none transition-opacity duration-500 group-hover:opacity-25" viewBox="0 0 200 150">
                                    <path d="M0 150 L0 120 L20 120 L20 100 L40 100 L40 130 L60 130 L60 90 L80 90 L80 140 L120 140 L120 110 L150 110 L150 150 Z" fill="currentColor" />
                                </svg>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <img
                                    src={snopi}
                                    alt="Snoopy"
                                    className="relative z-10 w-64 h-auto object-contain drop-shadow-[10px_10px_0px_rgba(0,0,0,0.05)] group-hover:drop-shadow-[15px_15px_0px_rgba(196,30,58,0.1)] transition-all duration-300 group-hover:-translate-y-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Signature */}
                <div className="mt-20 border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-end gap-4">
                    <div className="text-left">
                        <p className="font-serif italic text-xl md:text-2xl text-black">Maria Alguadín Pantsa Peralta</p>
                        <p className="font-sans text-xs uppercase tracking-widest font-bold text-gray-400">Arquitecta – Autora de Perturbanismo</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
