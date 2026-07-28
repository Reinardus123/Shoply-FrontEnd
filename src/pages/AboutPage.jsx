import React from "react";
import AboutHero from "../components/About/AboutHero";
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";
import Features from "../components/About/Features";
import TechStat from "../components/About/TechStat";
import DeveloperSection from "../components/About/Developer";
import AboutSection from "../components/About/AboutSection";

function AboutPage(){

    return(
        <>
        <Navbar/>
        
        <div className="min-h-screen bg-purple-50">
            <div className="max-w-7xl mx-auto px-8 py-10 space-y-8">
                <AboutHero/>
                <AboutSection/>
                <Features/>
                <TechStat/>
                <DeveloperSection/>
            </div>
        </div>

        <Footer/>
        
        </>
    )
}

export default AboutPage;