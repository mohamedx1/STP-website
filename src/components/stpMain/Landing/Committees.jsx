"use client"

import {useState} from "react"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {motion, AnimatePresence, useInView} from "framer-motion"
import CommitteesImg from "../../../assets/Committees.png"
import backend from "../../../assets/backEnd.jpg"
import backProject from "../../../assets/backendProject.jpg"
import uiux from "../../../assets/uiux.png"
import frontEnd from "../../../assets/frontEnd.jpg"
import frontProject from "../../../assets/FrontProject.jpg"
import {useRef} from "react";
import MainHeading from "../../common/MainHeading"





// Sample data for committees tab - each slide has its own unique image
const committeesSlides = [
    {
        id: 0,
        image: frontEnd,
        projectImage: frontProject,
        title: "Front End",
        subtitle: "Build responsive user interfaces using modern frameworks like React.",
        about: "The Front End committee focuses on designing and implementing web interfaces that are accessible, responsive, and visually appealing.",
        goals: "Master HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS to build production-ready front-end applications.",
        achievements: ["Built an e-commerce UI", "Mastered React hooks", "Deployed a portfolio site", "Contributed to open source"]
    },
    {
        id: 1,
        image: backend,
        projectImage: backProject,
        title: "Back End",
        subtitle: "Design and develop robust APIs and services using modern back-end technologies.",
        about: "The Back End committee teaches how to build, test, and deploy server-side applications.",
        goals: "Understand databases, REST APIs, and authentication using tools like Node.js, Express, and PostgreSQL.",
        achievements: ["Built a REST API", "Handled JWT auth", "Integrated PostgreSQL", "Created scalable services"]
    },
    {
        id: 2,
        image: uiux,
        projectImage: frontProject,
        title: "UI/UX Design",
        subtitle: "Design user-centered experiences and intuitive interfaces.",
        about: "This committee covers user research, wireframing, prototyping, and testing to ensure a smooth user experience.",
        goals: "Learn tools like Figma and Adobe XD, and apply design thinking to real-world problems.",
        achievements: ["Created wireframes", "Built interactive prototypes", "Conducted usability testing", "Redesigned user flows"]
    },
    {
        id: 3,
        image: CommitteesImg,
        projectImage: backProject,
        title: "Machine Learning",
        subtitle: "Explore the world of data, algorithms, and AI.",
        about: "This committee introduces ML concepts, from supervised learning to neural networks.",
        goals: "Use Python, scikit-learn, and TensorFlow to build and train ML models.",
        achievements: ["Trained a model", "Built a spam classifier", "Participated in Kaggle", "Presented a data analysis project"]
    },
    {
        id: 4,
        image: CommitteesImg,
        projectImage: CommitteesImg,
        title: "Cybersecurity",
        subtitle: "Learn to protect systems and data from digital attacks.",
        about: "Understand basic and advanced topics in digital security and ethical hacking.",
        goals: "Get hands-on with encryption, penetration testing, and security best practices.",
        achievements: ["Completed CTF challenges", "Audited security of a site", "Learned OWASP Top 10", "Created phishing simulations"]
    }
];


export default function FeaturedContent () {
    const [activeTab, setActiveTab] = useState("committees")
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    // Separate current slide state for each tab
    const [committeeSlideIndex, setCommitteeSlideIndex] = useState(0)


    // Get current slide index based on active tab
    const currentSlideIndex = committeeSlideIndex

    // Get slides based on active tab
    const slides = committeesSlides

    // Get total slides based on active tab
    const totalSlides = slides.length

    const goToPrevSlide = () => {
        setCommitteeSlideIndex((prev) => (prev === 0 ? committeesSlides.length - 1 : prev - 1))
    }

    const goToNextSlide = () => {

        setCommitteeSlideIndex((prev) => (prev === committeesSlides.length - 1 ? 0 : prev + 1))

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


    const renderProjects = currentSlide.achievements.map((achivement, idx) => (
        <motion.div
            key={`${ idx }-bbb-${ currentSlideIndex + 1 }-map`}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.5, delay: 0.8}}
        >
            <p
                className=" text-lg bg-gray-100 px-4 py-2 rounded-lg"
            >
                {"#" + achivement}
            </p>
        </motion.div>
    ))


    const renderCircles = Array.from({length: 20}).map((_, index) => (
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
    ))



    return (
        <div className="md:container ">
            <MainHeading>Our Committees</MainHeading>
            <div className="flex md:flex-col flex-col-reverse lg:flex-row gap-8">
                <div className="lg:w-1/2  flex items-center">
                    {/* Featured Card */}
                    <div className="relative w-full rounded-lg overflow-hidden bg-secondary text-white">
                        <div className="flex flex-col md:flex-row">
                            {/* Image - Each slide has its own unique image */}
                            <div className="md:w-1/2  h-96  relative overflow-hidden md:block hidden ">
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
                                    {renderCircles}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* arrows */}
                <div className=" items-center gap-4 mb-8 flex   ">
                    <div className="flex">
                        <motion.div
                            key={`${ activeTab }-one-${ currentSlideIndex }`}
                            ref={ref}
                            initial={{x: -10, opacity: 0}}
                            animate={isInView ? {x: 0, opacity: 1} : {}}
                            transition={{duration: 0.3}}
                        >
                            <ChevronRight className="w-5 h-15  text-primary" />
                        </motion.div>
                        <motion.div
                            ref={ref}
                            key={`${ activeTab }-tow-${ currentSlideIndex }`}
                            initial={{x: -10, opacity: 0}}
                            animate={isInView ? {x: 0, opacity: 1} : {}}
                            transition={{duration: 0.3, delay: 0.1}}
                        >
                            <ChevronRight className="w-8 h-15  text-primary" />
                        </motion.div>
                        <motion.div
                            key={`${ activeTab }-three-${ currentSlideIndex }`}
                            ref={ref}
                            initial={{x: -10, opacity: 0}}
                            animate={isInView ? {x: 0, opacity: 1} : {}}
                            transition={isInView ? {duration: 0.3, delay: 0.2} : {}}
                        >
                            <ChevronRight className="w-10 h-15 text-primary" />
                        </motion.div>
                        <motion.div
                            key={`${ activeTab }-four-${ currentSlideIndex }`}
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
                <div className="lg:w-1/2 mx-4 ">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`${ activeTab }-content-${ currentSlideIndex }`}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -10}}
                            transition={{duration: 0.5}}
                            className="text-2xl md:text-3xl font-bold text-secondary-200 mb-12"
                        >
                            {currentSlide.title}
                        </motion.h1>
                    </AnimatePresence>


                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${ currentSlide }-right-content`}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.5}}
                            className="flex flex-col  gap-6"
                        >
                            <div className="">
                                <motion.img
                                    key={`${ activeTab }-img-${ currentSlideIndex }`}
                                    initial={{opacity: 0, scale: 1.05}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: 0.2}}
                                    src={currentSlide.projectImage}
                                    alt={currentSlide.title}
                                    className=" h-60 w-4/5 object-cover shadow-2xl "
                                />
                            </div>
                            <div className="text-secondary">
                                <span className="font-bold">About: </span>

                                <motion.p
                                    key={`${ activeTab }-about-${ currentSlideIndex }`}
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -10}}
                                    transition={{duration: 0.5, delay: 0.4}}
                                    className=" text-lg mb-2"
                                >
                                    {currentSlide.about}
                                </motion.p>
                                <span className="font-bold">Goals: </span>
                                <motion.p
                                    key={`${ activeTab }-goals-${ currentSlideIndex }`}
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -10}}
                                    transition={{duration: 0.5, delay: 0.6}}
                                    className=" text-lg"
                                >
                                    {currentSlide.goals}
                                </motion.p>
                                <span className="font-bold ">Achievements: </span>
                                <div className="flex flex-wrap gap-4 ">
                                    {renderProjects}
                                </div>


                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
