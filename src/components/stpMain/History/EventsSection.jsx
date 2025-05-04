import {useState} from "react"
import Pic1 from '../../../assets/Committees.png'
import Pic2 from '../../../assets/Committees2.png'
import Pic3 from '../../../assets/Awards1.png'
import Pic4 from '../../../assets/Slider3.png'
import {ChevronLeft, ChevronRight} from "lucide-react"


const events = [
    {
        id: 1,
        title: "Success is not just about reaching a destination; it's about the journey, the challenges overcome",
        image: Pic1,
    },
    {
        id: 2,
        title: "Innovation begins with curiosity and ends with transformation that impacts lives",
        image: Pic2,
    },
    {
        id: 3,
        title: "Leadership is about making others better as a result of your presence",
        image: Pic3,
    },
    {
        id: 4,
        title: "Growth happens when you step outside your comfort zone",
        image: Pic4,
    },
]

export default function EventsSection () {
    const [currentEventIndex, setCurrentEventIndex] = useState(0)
    const [lastDirection, setLastDirection] = useState("next")

    const nextEvent = () => {
        setCurrentEventIndex((prev) => (prev + 1) % events.length)
        setLastDirection("next")
    }

    const prevEvent = () => {
        setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length)
        setLastDirection("prev")
    }

    return (
        <div className="md:container my-10 ">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-secondary">Our Events</h2>

            <div className="relative">
                <div className="bg-primary text-white rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row ">
                        {/* الصورة على اليمين */}
                        <div className="hidden md:block md:w-2/5 order-2  ">
                            <img
                                src={events[currentEventIndex].image || "/placeholder.svg"}
                                alt="Event"
                                className=" object-cover w-full "
                            />
                        </div>

                        {/* المحتوى النصي */}
                        <div className="p-16 md:p-8 md:w-3/5 order-1 flex flex-col justify-center gap-16 ">
                            <div>
                                <p className="text-lg mb-6">{events[currentEventIndex].title}</p>
                                <p className="text-lg mb-8">
                                    Success is not just about reaching a destination; it's about the journey, the challenges overcome
                                </p>
                            </div>
                            {/* زرار Explore + الأسهم */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-4">
                                <button className="bg-white text-primary px-6 py-2 rounded-full text-sm w-fit self-start md:self-auto">
                                    Explore
                                </button>

                                <div className="flex items-center space-x-2 self-start md:self-auto">
                                    <button
                                        onClick={prevEvent}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center transition duration-300 cursor-pointer  ${ lastDirection === "prev"
                                            ? "bg-white text-primary"
                                            : "bg-white/20 text-white "
                                            }`}
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <p className="text-white text-3xl">{`${ currentEventIndex + 1 } /  ${ events.length }`}</p>
                                    <button
                                        onClick={nextEvent}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center transition duration-300 cursor-pointer ${ lastDirection === "next"
                                            ? "bg-white text-primary "
                                            : "bg-white/20 text-white "
                                            }`}
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}