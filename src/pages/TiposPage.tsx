import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import TypesSection from "@/components/TypesSection";
import Footer from "@/components/Footer";

const TiposPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-20">
                <TypesSection />
            </main>
            <Footer />
        </div>
    );
};

export default TiposPage;
