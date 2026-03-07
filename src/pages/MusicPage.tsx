import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";

const MusicPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-20">
                <MusicSection />
            </main>
            <Footer />
        </div>
    );
};

export default MusicPage;
