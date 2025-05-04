import {useState} from "react"
import {ChevronLeft, ChevronRight} from "lucide-react"
export default function MobileCarousel ({slides, setCurrentIndex}) {
    const [currentIndex, setCurrentIndexM] = useState(0)


    const next = () => {
        setCurrentIndexM((prev) => (prev + 1) % slides.length)
        setCurrentIndex((prev) => (prev + 1) % slides.length)
    }

    const prev = () => {
        setCurrentIndexM((prev) => (prev - 1 + slides.length) % slides.length)
        setCurrentIndex((prev) => (prev - 1) % slides.length)
    }

    return (
        <div className="  flex flex-col items-center space-y-4">
            <div className=" overflow-hidden">
                <img
                    src={slides[currentIndex].image}
                    alt={slides[currentIndex].alt || slides[currentIndex].title || "slide"}
                    className="w-full h-full object-cover"
                />
                {
                    slides[currentIndex].title ? <p className="text-2xl text-secondary font-medium mx-3 ">{slides[currentIndex].title}</p> : ""
                }

            </div>

            <div className="flex justify-center w-full gap-4 mt-10">
                <button
                    onClick={prev}
                    className="w-15 h-15 rounded-full bg-primary hover:bg-secondary transition-all text-white flex items-center justify-center cursor-pointer"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={next}
                    className="w-15 h-15 rounded-full bg-primary hover:bg-secondary transition-all text-white flex items-center justify-center cursor-pointer"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    )
}
