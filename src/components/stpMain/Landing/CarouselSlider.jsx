"use client"

import {useEffect, useState} from "react"
import {motion} from "framer-motion"
import {ChevronLeft, ChevronRight} from "lucide-react"
import Slider1 from "../../../assets/Slider1.png"
import Slider2 from "../../../assets/Slider2.png"
import Slider3 from "../../../assets/Slider3.png"
import MobileCarousel from '../../common/MobileCarousel';
// Sample data - replace with your actual data
const slides = [
    {
        id: 1,
        image: Slider1,
        title: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
    },
    {
        id: 2,
        image: Slider2,
        title: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
    },
    {
        id: 3,
        image: Slider3,
        title: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
    },
    {
        id: 4,
        image: Slider1,
        title: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. 4 ",
    },
    {
        id: 5,
        image: Slider2,
        title: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. 5",
    }

]

// Card animation variants for sliding
const cardVariants = {
    initial: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
    }),
    animate: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            x: {type: "spring", stiffness: 300, damping: 30},
            opacity: {duration: 0.6},
            scale: {duration: 0.6, ease: "easeOut"},
        },
    },
    exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0.9,
        scale: 0,
        transition: {
            x: {type: "spring", stiffness: 300, damping: 30},
            opacity: {duration: 0.3},
            scale: {duration: 0.3},
        },
    }),
}

// Animation variants for the center slide (more pronounced animation)
const centerSlideVariants = {
    initial: {
        scale: 0.9,
        opacity: 0,
        x: 0,
    },
    animate: {
        scale: 1.09,
        opacity: 1,
        transition: {
            scale: {duration: 0.4, ease: "easeOut"},
            opacity: {duration: 0.4},
            x: {type: "spring", stiffness: 0, damping: 5},
        },
    },
    exit: {
        scale: 0.9,
        opacity: 1,
        transition: {
            scale: {duration: 0.3},
            opacity: {duration: 0.3},
        },
    },
}

// -----------------------------------components --------------------------
const Card = ({slide, isCenter, index}) => (
    <motion.div
        key={slide.id}
        onClick={() => {
            setCurrentIndex(slide.id - 1)
        }}
        custom={index}
        variants={isCenter ? centerSlideVariants : cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`rounded-lg w-fit py-5 px-3 border bg-white mx-auto ${ isCenter
            ? "border-secondary border-2 shadow-lg"
            : "border-gray-200"
            }  p-4`}
    >
        <div className=" w-fit mx-auto">
            <motion.img
                src={slide.image}
                alt={slide.title}
                className="w-fit object-cover  rounded-md mb-4"
            />
        </div>

        <h3 className="  text-lg font-medium  text-gray-800 ">
            {slide.title}
        </h3>

        <NavigationButtons />

    </motion.div>
)

const NavigationButtons = () => (

    <div className="w-full flex justify-end">

        <motion.button
            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-[#6d1a37] transition-colors "

        >
            See more
        </motion.button>
    </div>
)

// -----------------------------------components --------------------------

export default function CarouselSlider () {
    const [currentIndex, setCurrentIndex] = useState(1)
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



    // Go to the previous slide
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        )
    }

    // Go to the next slide
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        )
    }








    return (
        <div className=" container  my-20 py-16  flex justify-center flex-col overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-secondary">Our Projects</h2>
            <div className="flex justify-between my-12">
                <div className="flex h-2 w-4/12 bg-gray-300 rounded-3xl  mb-4 mx-auto md:mx-0">
                    {slides.map((tab) => (
                        <button
                            key={tab.id}
                            className={`py-1 text-lg w-full  font-semibold transition-colors duration-200
                    ${ currentIndex + 1 === tab.id ? " py-1 bg-primary rounded-3xl " : "text-gray-500 cursor-pointer" }`}
                            onClick={() => setCurrentIndex(tab.id - 1)}
                        >

                        </button>
                    ))}
                </div>
                <div className=" gap-6 hidden md:flex">
                    <motion.button
                        onClick={goToPrevious}
                        className=" text-gray-700 hover:text-white w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md hover:bg-primary hover:border-primary  flex items-center justify-center  "
                        aria-label="Previous slide"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        <ChevronLeft className="w-6 h-6 " />
                    </motion.button>
                    <motion.button
                        onClick={goToNext}
                        className=" text-gray-700 hover:text-white w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md hover:bg-primary hover:border-primary  flex items-center justify-center  "
                        aria-label="Next slide"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        <ChevronRight className="w-6 h-6 " />
                    </motion.button>
                </div>
            </div>
            {/* Carousel Container */}
            <div className=" ">
                <div className="w-full">
                    <div className="md:grid flex  flex-col md:grid-cols-3 gap-10 md:gap-4">
                        {!isMobile ? [
                            (currentIndex - 1 + slides.length) % slides.length, // Left slide
                            currentIndex, // Center slide
                            (currentIndex + 1) % slides.length, // Right slide
                        ].map((slideIndex, index, isActive) => {
                            const slide = slides[slideIndex]
                            const isCenter = index === 1
                            return (
                                <Card
                                    key={slide.id}
                                    slide={slide}
                                    index={index}
                                    isCenter={isCenter}
                                    isMopile={isMobile}
                                />)
                        }) : <MobileCarousel slides={slides} setCurrentIndex={setCurrentIndex} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
