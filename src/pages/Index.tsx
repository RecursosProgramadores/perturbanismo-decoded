import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import MusicSection from "@/components/MusicSection";
import BlogSection from "@/components/BlogSection";
import BookSection from "@/components/BookSection";
import AuthorSection from "@/components/AuthorSection";
import SongsList from "@/components/SongsList";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <IntroSection />
      <MusicSection />
      <BlogSection />
      <BookSection />
      <AuthorSection />
      <SongsList />
      <GallerySection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);


export default Index;
