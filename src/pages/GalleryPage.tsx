import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const GalleryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-20">
                <GallerySection />
            </main>
            <Footer />
        </div>
    );
};

export default GalleryPage;
