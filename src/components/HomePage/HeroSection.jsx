import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import heroSlides from "../../data/heroSlides.js";

function HeroSection() {
  const [currentSlides, setCurrentSlides] = useState(0);
  const [animate, SetAnimate] = useState(false);
  const currentData = heroSlides[currentSlides];


  function nextSlide() {
    SetAnimate(true);

    setTimeout(() => {
       setCurrentSlides((prev) => prev === heroSlides.length - 1 ? 0 : prev + 1);
       SetAnimate(false);
    }, 300);
  }

  function prevSlide() {
    SetAnimate(true);

    setTimeout(() => {
       setCurrentSlides((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1)); 
       SetAnimate(false);
    },300);
    
  }

  return (
    <section className="px-10 mt-8 transition">
      <div
        className={`rounded-3xl h-[450px] flex items-center justify-between px-20 relative overflow-hidden transition-all duration-300 
          ${animate ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}
        style={{ backgroundColor: currentData.bgColor }}
      >
        <button
          onClick={prevSlide}
          className="absolute left-5 bg-white w-12 h-12 rounded-full shadow flex items-center justify-center cursor-pointer"
        >
          <FaArrowLeft className="cursor-pointer" />
        </button>

        <div className="z-10">
          <div className="bg-white inline-block px-4 py-2 rounded-full text-sm text-orange-500 mb-5">
            {currentData.badge}
          </div>
          <h1 className="text-5xl font-bold leading-tight">
            {currentData.title}
            <br /> 
            Up to
            <span style={{ color: currentData.primaryColor }}>
              {""} {currentData.discount}
            </span>
          </h1>
          <p className="text-gray-500 mt-5 text-lg">
            {currentData.description}
          </p>
          <button
            className="mt-8 text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-purple-700 cursor-pointer"
            style={{ backgroundColor: currentData.primaryColor }}
          >
            Shop Now
            <FaArrowRight />
          </button>
        </div>

        <div className="relative w-[650px] h-[420px] z-0">
          <div
            className="absolute w-[360px] h-[360px] rounded-full opacity-40 top-6 left-28 z-0"
            style={{ backgroundColor: currentData.circleColor }}
          ></div>

          <img
            src={currentData.fashion}
            alt="t-shirt"
            className="absolute w-[300px] left-0 z-10"
          />

          <img
            src={currentData.shoes}
            alt="shoes"
            className="absolute w-[500px] z-20 bottom-6 left-28"
          />

          <img
            src={currentData.item}
            alt="headphone"
            className="absolute w-[220px] top-10 right-8 z-30"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlides(index)}
              className={`
                                w-4 
                                h-4 
                                rounded-full 
                                transition-all 
                                duration-300 
                                
                                ${currentSlides === index ? "scale-125" : ""}
                                `}
              style={{
                backgroundColor:
                  currentSlides === index
                    ? currentData.primaryColor
                    : "#d1d5db",
              }}
            ></button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-5 bg-white w-12 h-12 rounded-full shadow flex items-center justify-center cursor-pointer"
        >
          <FaArrowRight className="cursor-pointer" />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
