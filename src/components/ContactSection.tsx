import { Mail, MapPin, Globe, Instagram, Facebook } from 'lucide-react';
import signatureImg from "@/assets/autora/signature.png";
import bgContact from "@/assets/inicio/fondocontacto.png";

const ContactSection = () => {
    return (
        <section id="contacto" className="relative py-20 px-6 bg-[#fcfcfc] overflow-hidden min-h-screen flex flex-col items-center">
            {/* Background Image Layer - Bottom Half Only */}
            <div className="absolute inset-x-0 bottom-0 top-[50%] h-[50%] z-0">
                <img
                    src={bgContact}
                    alt="Fondo Contacto"
                    className="w-full h-full object-cover opacity-[0.1] grayscale mix-blend-multiply"
                />
            </div>

            {/* Texture Overlay (Recycled Paper Feel) */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')] z-[1]" />

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
                    </div>
                </div>

                {/* Footer Signature */}
                <div className="mt-20 border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-end gap-4 text-left">
                    <div>
                        <img
                            src={signatureImg}
                            alt="Firma María Alejandra"
                            className="h-16 md:h-20 w-auto object-contain mb-2 grayscale"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
