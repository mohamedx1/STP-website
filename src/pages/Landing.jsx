import React from 'react'
import HeroSection from './../components/common/header/HeroSection';
import StatisticsSection from './../components/stpMain/StatisticsSection';
import PhotographyAwards from './../components/stpMain/PhotographyAwards';
import CarouselSlider from './../components/stpMain/CarouselSlider';
import Committees from './../components/stpMain/Committees';
import Testimonials from './../components/stpMain/Testimonials';

export default function Landing () {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <PhotographyAwards />
      <CarouselSlider />
      <Committees />
      <Testimonials />
    </>
  )
}
