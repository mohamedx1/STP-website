
import {useRef, useState} from "react"


export default function ImageCarousel ({
    images,
    imageWidthClass = "w-68",
    imageWidthMdClass = "md:w-72",
    imageHeightPx = 400,
    imageWidthPx = 300,
    altPrefix = "Image",
    showIndicator = true,
    indicatorText = "Drag to scroll through images",
}) {
    const scrollContainerRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeftState, setScrollLeftState] = useState(0)

    // Mouse down handler
    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
        setScrollLeftState(scrollContainerRef.current?.scrollLeft || 0)
    }

    // Mouse leave handler
    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    // Mouse up handler
    const handleMouseUp = () => {
        setIsDragging(false)
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
        if (!isDragging) return
        e.preventDefault()

        const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
        const walk = (x - startX) * 2 // Scroll speed multiplier
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeftState - walk
        }
    }

    // Touch handlers
    const handleTouchStart = (e) => {
        setIsDragging(true)
        setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0))
        setScrollLeftState(scrollContainerRef.current?.scrollLeft || 0)
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return

        const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0)
        const walk = (x - startX) * 2
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeftState - walk
        }
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
    }

    return (
        <div className="relative">
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-4 gap-4"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    cursor: isDragging ? "grabbing" : "grab",
                }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Hide scrollbar with inline style */}
                <style >{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

                {images.map((image, index) => (
                    <div key={index} className={`flex-none ${ imageWidthClass } ${ imageWidthMdClass }`}>
                        <div className="aspect-[3/4] overflow-hidden rounded-md">
                            <img
                                src={image || "/placeholder.svg"}
                                alt={`${ altPrefix } ${ index + 1 }`}
                                width={imageWidthPx}
                                height={imageHeightPx}
                                className="w-full h-full object-contain bg-center rounded-md hover:scale-105 transition-transform duration-300"
                                draggable={false}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation indicators */}
            {showIndicator && (
                <div className="flex items-center justify-center mt-2">
                    <p className="text-sm text-gray-500 italic">{indicatorText}</p>
                </div>
            )}
        </div>
    )
}
