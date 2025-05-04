import React from 'react'
import HeroSectionHistory from '../components/stpMain/History/HeroSectionHistory'
import StatsSection from '../components/stpMain/History/StatsSection'
import EventsSection from '../components/stpMain/History/EventsSection'
import HistoryCircles from '../components/stpMain/History/HistoryCircles'
import ProjectsSection from './../components/stpMain/History/ProjectsSection';
export default function History () {
    return (
        <>
            <HeroSectionHistory />
            <StatsSection />
            <HistoryCircles />
            <EventsSection />
            <ProjectsSection />
        </>
    )
}
