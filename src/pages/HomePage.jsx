import React from "react";
import Navbar from "../components/HomePage/Navbar.jsx";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import Category from "../components/HomePage/Category.jsx";
import ProductSection from "../components/HomePage/Products.jsx";
import Feature from "../components/HomePage/Feature.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import Register from "../components/AuthPage/register.jsx";
import Login from "../components/AuthPage/login.jsx";

function Home(){
    
    return(
        <div>
            <Navbar showSearch={true}/>
            <HeroSection/>
            <Category/>
            <ProductSection/>
            <Feature/>
            <Footer/>
        </div>
    );
}

export default Home;