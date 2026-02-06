import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import DefinitionBox from "@/components/DefinitionBox";
import ProblemCards from "@/components/ProblemCards";
import ConceptSections from "@/components/ConceptSections";
import TypesSection from "@/components/TypesSection";
import SynthesisSection from "@/components/SynthesisSection";
import SongsList from "@/components/SongsList";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <IntroSection />
      <DefinitionBox />
      <ProblemCards />
      <ConceptSections />
      <TypesSection />
      <SynthesisSection />
      <SongsList />
    </main>
    <Footer />
  </div>
);

export default Index;
