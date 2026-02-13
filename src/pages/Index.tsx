import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import MusicSection from "@/components/MusicSection";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TypesSection from "@/components/TypesSection";


const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <IntroSection />
      <TypesSection />
      <MusicSection />
      <BlogSection />
      <GallerySection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);


export default Index;
