import React from 'react'
import HeroSection from '../components/stpMain/Landing/HeroSection';
import PhotographyAwards from '../components/stpMain/Landing/PhotographyAwards';
import CarouselSlider from '../components/stpMain/Landing/CarouselSlider';
import Committees from '../components/stpMain/Landing/Committees';
import Testimonials from '../components/stpMain/Landing/Testimonials';
import About from '../components/stpMain/Landing/About';

export default function Landing () {
  return (
    <>
      <HeroSection />
      <About />
      <PhotographyAwards />
      <CarouselSlider />
      <Committees />
      <Testimonials />
    </>
  )
}
