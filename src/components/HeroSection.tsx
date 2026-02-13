import heroImg from "@/assets/hero.png";
import logoImg from "@/assets/logos/logo.jpeg";

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

        {/* CTA Button & Labels at the same height */}
        <div className="w-full relative flex items-center justify-center mb-24 mt-8 px-10 md:px-16">
          <span className="absolute left-0 text-white font-sans font-bold text-sm md:text-base uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hidden md:block">
            CON PERTURBANISMO
          </span>

          <a
            href="#manifiesto"
            className="bg-white text-black font-sans font-bold py-4 px-12 border border-slate-200 hover:bg-slate-50 transition-all uppercase tracking-widest text-xs shadow-xl"
          >
            EXPLORA EL MANIFIESTO
          </a>

          <span className="absolute right-0 text-white font-sans font-bold text-sm md:text-base uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hidden md:block">
            SIN PERTURBANISMO
          </span>

          {/* Mobile Labels */}
          <div className="absolute -bottom-10 left-0 w-full flex justify-between md:hidden px-4">
            <span className="text-white font-sans font-bold text-xs uppercase tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">CON</span>
            <span className="text-white font-sans font-bold text-xs uppercase tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">SIN</span>
          </div>
        </div>

      </div>

      {/* Vertical Split indicator line */}
      <div className="absolute top-0 left-1/2 w-[2px] h-full bg-white/10 z-0 pointer-events-none hidden md:block" />
    </section>
  );
};

export default HeroSection;
