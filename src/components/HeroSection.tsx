import React, { useState, useEffect, useRef } from "react";
import heroImg from "@/assets/hero.png";
import logoImg from "@/assets/logos/logo.jpeg";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center cursor-none md:cursor-default"
    >
      {/* Background Layer 1: Grayscale (Base) */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src={heroImg}
          alt="Perturbanismo Base"
          className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700"
        />
      </div>

      {/* Background Layer 2: Color Reveal Overlay - Enhanced circle size for impact */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          clipPath: isHovering
            ? `circle(200px at ${mousePos.x}% ${mousePos.y}%)`
            : `circle(0px at 50% 50%)`,
          WebkitClipPath: isHovering
            ? `circle(200px at ${mousePos.x}% ${mousePos.y}%)`
            : `circle(0px at 50% 50%)`,
          transition: "clip-path 0.15s ease-out, -webkit-clip-path 0.15s ease-out"
        }}
      >
        <img
          src={heroImg}
          alt="Perturbanismo Color"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay removed for more color impact */}
      </div>

      {/* Static Overlay for general contrast across both layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-0 pointer-events-none" />

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl px-6 pt-32 md:pt-40 flex flex-col items-center text-center pointer-events-none">

        {/* Re-enable pointer events for interactive elements */}
        <div className="pointer-events-auto flex flex-col items-center">
          {/* Central Logo */}
          <div className="mb-10 group cursor-default">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border-[6px] md:border-[8px] border-[#C41E3A] flex items-center justify-center relative shadow-2xl overflow-hidden">
              <img
                src={logoImg}
                alt="Logo Central"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Brand Name */}
          <div className="mb-4">
            <span className="font-serif text-xl md:text-2xl tracking-[0.3em] text-white uppercase drop-shadow-md">
              PERTURBANISMO
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl text-white mb-12 leading-[1.1] drop-shadow-lg">
            El Perturbanismo<br />
            se ve, se sufre y<br />
            se puede cambiar.
          </h1>

          {/* CTA Button & Labels */}
          <div className="w-full relative flex items-center justify-center mb-24 mt-8 px-4 md:px-0">
            <span className="absolute left-0 lg:-left-20 text-white font-sans font-bold text-sm md:text-base uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hidden md:block">
              CON PERTURBANISMO
            </span>

            <a
              href="#manifiesto"
              className="bg-white text-black font-sans font-bold py-4 px-12 border border-slate-200 hover:bg-slate-50 transition-all uppercase tracking-widest text-xs shadow-xl"
            >
              EXPLORA EL MANIFIESTO
            </a>

            <span className="absolute right-0 lg:-right-20 text-white font-sans font-bold text-sm md:text-base uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hidden md:block">
              SIN PERTURBANISMO
            </span>

            {/* Mobile Labels */}
            <div className="absolute -bottom-10 left-0 w-full flex justify-between md:hidden px-4">
              <span className="text-white font-sans font-bold text-xs uppercase tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">CON</span>
              <span className="text-white font-sans font-bold text-xs uppercase tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">SIN</span>
            </div>
          </div>
        </div>

      </div>

      {/* Vertical Split indicator line */}
      <div className="absolute top-0 left-1/2 w-[2px] h-full bg-white/10 z-0 pointer-events-none hidden md:block" />
    </section>
  );
};

export default HeroSection;
