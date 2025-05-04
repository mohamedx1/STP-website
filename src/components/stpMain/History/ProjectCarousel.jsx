
import {useState} from "react"
import image1 from "../../../assets/Slider1.png"
import image2 from "../../../assets/Slider2.png"
import image3 from "../../../assets/Slider3.png"
import {ChevronLeft, ChevronRight} from "lucide-react"
function ProjectCarousel () {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Sample project data
    const projects = [
        {
            id: 1,
            title: "Project 1",
            image: image1,
        },
        {
            id: 2,
            title: "Project 2",
            image: image2,
        },
        {
            id: 3,
            title: "Project 3",
            image: image3,
        },
    ]

    const nextSlide = () => {
        setCurrentIndex((current) => (current === projects.length - 1 ? 0 : current + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((current) => (current === 0 ? projects.length - 1 : current - 1))
    }

    // Get current project
    const currentProject = projects[currentIndex]

    // Get next project for thumbnail (with wraparound)
    const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    const nextProject = projects[nextIndex]

    return (
        <div className="relative">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Main Project Image - Left Side */}
                <div className="bg-gray-200 rounded-lg w-full md:w-3/4 h-96 overflow-hidden">
                    <img
                        src={currentProject.image || "/placeholder.svg"}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col mt-34">
                    {/* Navigation Controls - Center */}
                    <div className="flex justify-between">
                        <div className="flex justify-center md:justify-start space-x-2 mb-4">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                aria-label="Previous project"
                            >
                                <span className="text-teal-900"><ChevronLeft /></span>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-200 cursor-pointer"
                                aria-label="Next project"
                            >
                                <span><ChevronRight /></span>
                            </button>
                        </div>
                        <span className="text-2xl text-secondary">{currentIndex + 1}/{projects.length}</span>
                    </div>

                    {/* Thumbnail Preview - Right Side */}
                    <div className="bg-gray-200 rounded-lg h-48 w-full overflow-hidden md:block hidden">
                        <img
                            src={nextProject.image || "/placeholder.svg"}
                            alt={`Preview of ${ nextProject.title }`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectCarousel