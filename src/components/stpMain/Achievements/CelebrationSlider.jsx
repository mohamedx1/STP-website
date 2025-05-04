"use client";

import {useState, useEffect} from "react";
import Slider22 from "../../../assets/slider22.jpg";

const CelebrationSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const slides = [
    {
      title: "CELEBRATION",
      subtitle2: " (5th year , 10th year)",
      subtitle: "800+ total attendees",
      image: Slider22,
    },
    {
      title: "SESSIONS",
      subtitle: "5000 total attendees",
      details: "AAST, ASU, CU, GUC, CIC...etc",
      image: Slider22,
    },
    {
      title: "SOLAR RACE 1,2",
      subtitle2: " THE FRIST SOLAR RACE IN EGYPT",
      subtitle: "1000 total attendees",
      details: "12 No. of sponsors",
      image: Slider22,
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Card component with image background
  const Card = ({slide, index, isActive}) => (
    <div
      className={`
      rounded-lg overflow-hidden text-white text-center shadow-lg
      transition-all duration-300 cursor-pointer
      ${ isActive ? "scale-105 z-10 shadow-xl" : "scale-95 opacity-85" }
      relative h-64 md:h-72 w-full md:w-64

    `}
      onClick={() => setActiveSlide(index)}
    >
      {/* Image as background */}
      <div className='absolute inset-0 w-full h-full'>
        <img
          src={slide.image || "/placeholder.svg"}
          alt={slide.title}
          className='w-full h-full object-cover'
        />
        {/* Purple/Violet gradient overlay matching the original slider */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#0C415A]/80 via-[#AD3A68AA]/80 to-[#7A294A]/80'></div>
      </div>

      {/* Content positioned over the image */}
      <div className='relative z-10 p-5 flex flex-col justify-center h-full'>
        <h3 className='text-2xl font-bold '>{slide.title}</h3>
        <p className='text-sm text-[#D9D9D9] mb-3  '> {slide.subtitle2} </p>
        <p className='font-semibold '>{slide.subtitle}</p>
        {slide.details && <p className='font-semibold  '>{slide.details}</p>}
      </div>
    </div>
  );

  // Navigation buttons component
  const NavigationButtons = () => (
    <>
      <button
        onClick={prevSlide}
        className='absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/50 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white/80 transition-colors'
        aria-label='Previous slide'
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/50 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white/80 transition-colors'
        aria-label='Next slide'
      >
        &#10095;
      </button>
    </>
  );

  // Dots navigation component
  const DotsNavigation = () => (
    <div className='flex justify-center mt-6'>
      {slides.map((_, index) => (
        <span
          key={index}
          className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-colors ${ index === activeSlide ? "bg-[#7A294A]" : "bg-gray-300"
            }`}
          onClick={() => setActiveSlide(index)}
        ></span>
      ))}
    </div>
  );

  return (
    <div className=' container pb-15 pt-25 font-sans'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-[#003249]'>20 Years</h1>
        <h2 className='text-3xl font-bold text-[#7A294A]'>
          of leading positive change
        </h2>
      </div>

      {/* Slider - Same behavior for both mobile and desktop */}
      <div className='relative'>
        {/* Navigation Buttons - for both mobile and desktop */}
        <NavigationButtons />

        {/* Cards Container */}
        <div
          className={`flex ${ isMobile ? "flex-col" : "flex-row"
            } justify-center items-center gap-4 py-4`}
        >
          {slides.map((slide, index) => (
            <Card
              key={index}
              slide={slide}
              index={index}
              isActive={index === activeSlide}
            />
          ))}
        </div>

        {/* Dots Navigation - for both mobile and desktop */}
        <DotsNavigation />
      </div>
    </div>
  );
};

export default CelebrationSlider;
