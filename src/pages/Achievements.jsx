import React from 'react'
import CelebrationSlider from '../components/stpMain/Achievements/CelebrationSlider';
import CircleGrid from '../components/stpMain/Achievements/CircleGrid';
import HeroSection from './../components/stpMain/Landing/HeroSection';
import MachathonTimeline from '../components/stpMain/Achievements/MachathonTimeline';

export default function Achievements () {
  return (
    <>
      <HeroSection />
      <CelebrationSlider />
      <MachathonTimeline />
      <CircleGrid />
    </>
  )
}
