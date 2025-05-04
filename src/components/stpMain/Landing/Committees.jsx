"use client"

import {useState} from "react"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {motion, AnimatePresence, useInView} from "framer-motion"
import CommitteesImg from "../../../assets/Committees.png"
import podcast from "../../../assets/podcast.png"
import {useRef} from "react";





// Sample data for committees tab - each slide has its own unique image
const committeesSlides = [
    {
        id: 1,
        title: "Committees: Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subtitle: "Committee meeting highlights and updates",
        image: CommitteesImg,
    },
    {
        id: 2,
        title: "Committees: Fusce vehicula dolor arcu, sit amet blandit dolor.",
        subtitle: "Latest committee decisions and announcements",
        image: CommitteesImg,
    },
    {
        id: 3,
        title: "Committees: Suspendisse potenti nullam ac tortor vitae purus.",
        subtitle: "Committee structure and organization",
        image: CommitteesImg,
    },
    {
        id: 4,
        title: "Committees: Eget est lorem ipsum dolor sit amet consectetur.",
        subtitle: "Upcoming committee events and meetings",
        image: CommitteesImg,
    },
    {
        id: 5,
        title: "Committees: Viverra orci sagittis eu volutpat odio facilisis.",
        subtitle: "Committee resources and documentation",
        image: CommitteesImg,
    },
]


// Sample data for podcast tab - each slide has its own unique image
const podcastSlides = [
    {
        id: 1,
        title: "Podcast: Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subtitle: "Latest episode featuring special guests",
        image: podcast,
    },
    {
        id: 2,
        title: "Podcast: Etiam non quam lacus suspendisse faucibus interdum.",
        subtitle: "Deep dive into industry trends",
        image: podcast,
    },
    {
        id: 3,
        title: "Podcast: Viverra maecenas accumsan lacus vel facilisis volutpat.",
        subtitle: "Exclusive interview with thought leaders",
        image: podcast,
    },
    {
        id: 4,
        title: "Podcast: Amet consectetur adipiscing elit duis tristique.",
        subtitle: "Panel discussion on emerging technologies",
        image: podcast,
    },
    {
        id: 5,
        title: "Podcast: Tortor dignissim convallis aenean et tortor at risus.",
        subtitle: "Behind the scenes of our production process",
        image: podcast,
    },
    {
        id: 5,
        title: "Podcast: Tortor dignissim convallis aenean et tortor at risus.",
        subtitle: "Behind the scenes of our production process",
        image: podcast,
    },
]

// Tab configuration
const tabs = [
    {id: "committees", label: "committees", totalSlides: committeesSlides.length},
    {id: "podcast", label: "podcast", totalSlides: podcastSlides.length},
]

// Right side content for each tab
const rightContent = {
    committees: {
        heading: "Podcast episodes and highlights",
        image: podcast,
        description:
            "Podcast episodes featuring in-depth discussions, interviews, and analysis on the latest topics and trends.",
    },
    podcast: {
        heading: "Committees information and updates",
        image: CommitteesImg,
        description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    },
}

export default function FeaturedContent () {
    const [activeTab, setActiveTab] = useState("committees")
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    // Separate current slide state for each tab
    const [committeeSlideIndex, setCommitteeSlideIndex] = useState(0)
    const [podcastSlideIndex, setPodcastSlideIndex] = useState(0)

    // Get current slide index based on active tab
    const currentSlideIndex = activeTab === "committees" ? committeeSlideIndex : podcastSlideIndex

    // Get slides based on active tab
    const slides = activeTab === "committees" ? committeesSlides : podcastSlides

    // Get total slides based on active tab
    const totalSlides = slides.length

    const goToPrevSlide = () => {
        if (activeTab === "committees") {
            setCommitteeSlideIndex((prev) => (prev === 0 ? committeesSlides.length - 1 : prev - 1))
        } else {
            setPodcastSlideIndex((prev) => (prev === 0 ? podcastSlides.length - 1 : prev - 1))
        }
    }

    const goToNextSlide = () => {
        if (activeTab === "committees") {
            setCommitteeSlideIndex((prev) => (prev === committeesSlides.length - 1 ? 0 : prev + 1))
        } else {
            setPodcastSlideIndex((prev) => (prev === podcastSlides.length - 1 ? 0 : prev + 1))
        }
    }

    // Handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    // Get current slide
    const currentSlide = slides[currentSlideIndex]

    // Animation variants for slide content
    const slideVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.4}},
        exit: {opacity: 0, y: -20, transition: {duration: 0.3}},
    }

    // Animation variants for images
    const imageVariants = {
        hidden: {opacity: 0, scale: 1.1},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
        exit: {opacity: 0, scale: 0.95, transition: {duration: 0.3}},
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                    {/* Tabs */}
                    <div className="flex gap-4 mb-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`px-8 py-3 rounded-full text-base font-medium transition-colors ${ activeTab === tab.id ? "bg-primary text-white" : "bg-white text-secondary border border-gray-300"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Featured Card */}
                    <div className="relative rounded-lg overflow-hidden bg-secondary text-white">
                        <div className="flex flex-col md:flex-row">
                            {/* Image - Each slide has its own unique image */}
                            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={`${ activeTab }-image-${ currentSlideIndex }`}
                                        variants={imageVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        src={currentSlide.image}
                                        alt={currentSlide.title}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Content */}
                            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${ activeTab }-content-${ currentSlideIndex }`}
                                        variants={slideVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        <h2 className="text-2xl font-bold mb-4">{currentSlide.title}</h2>
                                        <p className="text-gray-300 mb-6">{currentSlide.subtitle}</p>
                                        <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-secondary transition-colors">
                                            See more
                                        </button>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Slide indicator and navigation */}
                                <div className="flex justify-between items-center mt-8">
                                    <div className="text-xl font-medium">
                                        {currentSlideIndex + 1}/{totalSlides}
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={goToPrevSlide}
                                            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={goToNextSlide}
                                            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Decorative circles */}
                                <div className="absolute -right-2 bottom-42 opacity-20">
                                    {Array.from({length: 20}).map((_, index) => (
                                        <div
                                            key={index}
                                            className="absolute border border-white rounded-full"
                                            style={{
                                                width: `${ 8 * (index + 1) }px`,
                                                height: `${ 8 * (index + 1) }px`,
                                                right: 0,
                                                bottom: 0,
                                                transform: 'translate(50%, 50%)',
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="flex items-center gap-4 mb-8  ">
                    <div className="flex">
                        <motion.div
                            ref={ref}
                            initial={{x: -10, opacity: 0}}
                            animate={isInView ? {x: 0, opacity: 1} : {}}
                            transition={{duration: 0.3}}
                        >
                            <ChevronRight className="w-5 h-15  text-primary" />
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{x: -10, opacity: 0}}
                            animate={isInView ? {x: 0, opacity: 1} : {}}
                            transition={{duration: 0.3, delay: 0.1}}
                        >
                            <ChevronRight className="w-8 h-15  text-primary" />
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{x: -10, opacity: 0}}
                            animate={isInView ? {x: 0, opacity: 1} : {}}
                            transition={isInView ? {duration: 0.3, delay: 0.2} : {}}
                        >
                            <ChevronRight className="w-10 h-15 text-primary" />
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{x: -10, opacity: 0}}
                            animate={isInView ? {x: 0, opacity: 1} : {}}
                            transition={{duration: 0.3, delay: 0.3}}
                        >
                            <ChevronRight className=" w-12 h-15 font-light text-primary" />
                        </motion.div>
                    </div>
                </div>

                {/* Right side content */}
                <div className="lg:w-1/2 hidden md:block">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`${ activeTab }-heading`}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -10}}
                            transition={{duration: 0.5}}
                            className="text-4xl md:text-5xl font-bold text-secondary mb-12"
                        >
                            {rightContent[activeTab].heading}
                        </motion.h1>
                    </AnimatePresence>


                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${ activeTab }-right-content`}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.5}}
                            className="flex flex-col md:flex-row gap-6"
                        >
                            <div className="md:w-1/2">
                                <motion.img
                                    key={`${ activeTab }-right-image`}
                                    initial={{opacity: 0, scale: 1.05}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: 0.5}}
                                    src={rightContent[activeTab].image}
                                    alt={activeTab === "committees" ? "Committee" : "Podcast"}
                                    className="w-full h-60 object-cover rounded-lg"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <motion.p
                                    key={`${ activeTab }-right-text`}
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -10}}
                                    transition={{duration: 0.5, delay: 0.1}}
                                    className="text-secondary text-lg"
                                >
                                    {rightContent[activeTab].description}
                                </motion.p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
