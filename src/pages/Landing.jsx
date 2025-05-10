import React from 'react'
import HeroSection from '../components/stpMain/Landing/HeroSection';
import PhotographyAwards from '../components/stpMain/Landing/PhotographyAwards';
import CarouselSlider from '../components/stpMain/Landing/CarouselSlider';
import Committees from '../components/stpMain/Landing/Committees';
import Testimonials from '../components/stpMain/Landing/Testimonials';
import StatisticsSection from './../components/stpMain/Landing/StatisticsSection';
import AboutUS from '../components/stpMain/Landing/AboutUs';

export default function Landing () {
  return (
    <>
      <HeroSection />
      <AboutUS />
      {/* <StatisticsSection /> */}
      <PhotographyAwards />
      <CarouselSlider />
      <Committees />
      <Testimonials />
    </>
  )
}
