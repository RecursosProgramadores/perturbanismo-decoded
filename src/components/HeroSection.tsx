import heroImg from "@/assets/hero-watercolor.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Perturbanismo Split Illustration"
          className="w-full h-full object-cover"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full max-w-5xl px-6 pt-32 md:pt-40 flex flex-col items-center text-center">

        {/* Central Symbol (Prohibited P) */}
        <div className="mb-10 group cursor-default">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#C41E3A] border-[6px] md:border-[10px] border-white flex items-center justify-center relative shadow-2xl">
            <span className="text-white font-serif font-black text-5xl md:text-7xl mb-1">P</span>
            {/* Diagonal Slash - Cross out effect */}
            <div className="absolute w-[110%] h-[15%] bg-[#C41E3A] rounded-full -rotate-45 border-y-2 border-white shadow-md" />
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

        {/* CTA Button */}
        <a
          href="#manifiesto"
          className="bg-white text-black font-sans font-bold py-4 px-12 border border-slate-200 hover:bg-slate-50 transition-all uppercase tracking-widest text-xs shadow-xl mb-12"
        >
          EXPLORA EL MANIFIESTO
        </a>

        {/* Bottom Labels */}
        <div className="absolute bottom-8 left-0 w-full flex justify-between px-8 md:px-12 pointer-events-none">
          <div className="flex flex-col items-start">
            <span className="text-white text-[10px] md:text-xs font-sans tracking-[0.2em] font-bold uppercase py-1">
              CON PERTURBANISMO
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-white text-[10px] md:text-xs font-sans tracking-[0.2em] font-bold uppercase py-1">
              SIN PERTURBANISMO
            </span>
          </div>
        </div>

      </div>

      {/* Vertical Split indicator line */}
      <div className="absolute top-0 left-1/2 w-[2px] h-full bg-white/10 z-0 pointer-events-none hidden md:block" />
    </section>
  );
};

export default HeroSection;
