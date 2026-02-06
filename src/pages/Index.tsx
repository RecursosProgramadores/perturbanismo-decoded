import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import DefinitionBox from "@/components/DefinitionBox";
import ConceptSections from "@/components/ConceptSections";
import TypesSection from "@/components/TypesSection";
import SynthesisSection from "@/components/SynthesisSection";
import MusicSection from "@/components/MusicSection";
import SongsList from "@/components/SongsList";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <IntroSection />
      <DefinitionBox />
      <ConceptSections />
      <TypesSection />
      <SynthesisSection />
      <MusicSection />
      <SongsList />
    </main>
    <Footer />
  </div>
);

export default Index;
