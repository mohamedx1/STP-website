import React from 'react'
import HeroSection from '../components/stpMain/Landing/HeroSection';
import PhotographyAwards from '../components/stpMain/Landing/PhotographyAwards';
import CarouselSlider from '../components/stpMain/Landing/CarouselSlider';
import Committees from '../components/stpMain/Landing/Committees';
import Testimonials from '../components/stpMain/Landing/Testimonials';

export default function Landing () {
  return (
    <>
      <HeroSection />
      {/* <AboutUs /> */}
      <PhotographyAwards />
      <CarouselSlider />
      <Committees />
      <Testimonials />
    </>
  )
}
