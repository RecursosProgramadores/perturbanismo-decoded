import heroImg from "@/assets/hero-watercolor.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
    {/* Background watercolor */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroImg}
        alt="Acuarela de paisaje urbano caótico en Cajamarca"
        className="w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-shadow-subtle">
        ¿Qué es el Perturbanismo?
      </h1>
      <p className="font-serif italic text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        La distorsión del paisaje urbano que todos ven, pero que durante años nadie supo nombrar.
      </p>
    </div>
  </section>
);

export default HeroSection;
