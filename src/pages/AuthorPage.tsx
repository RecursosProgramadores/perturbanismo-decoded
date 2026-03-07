import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorSection from "@/components/AuthorSection";

const AuthorPage = () => {
    return (
        <div className="min-h-screen bg-[#FDFCFB]">
            <Navbar />
            <main className="pt-20">
                <AuthorSection />
            </main>
            <Footer />
        </div>
    );
};

export default AuthorPage;
