import {section, title} from "framer-motion/client"

// Separate icon components to avoid hydration issues
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path
            fillRule="evenodd"
            d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
            clipRule="evenodd"
        />
    </svg>
)

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
    </svg>
)

const TimelinePoints = [
    {
        id: 0,
        position: "top",
        title: "Machathon 1.0",
        egp: "20k EGP",
        attendees: "+ 500 total attendees"
    },
    {
        id: 1,
        position: "bottom",
        title: "Machathon 2.0",
        egp: "20k EGP",
        attendees: "+ 500 total attendees"
    },
    {
        id: 2,
        position: "top",
        title: "Machathon 3.0",
        egp: "20k EGP",
        attendees: "+ 500 total attendees"
    },
    {
        id: 3,
        position: "bottom",
        title: "Machathon 4.0",
        egp: "20k EGP",
        attendees: "+ 500 total attendees"
    },
    {
        id: 4,
        position: "top",
        title: "Machathon 5.0",
        egp: "20k EGP",
        attendees: "+ 500 total attendees"
    },
    {
        id: 5,
        position: "bottom",
        title: "Machathon 5.0",
        egp: "20k EGP",
        attendees: "+ 500 total attendees"
    },
]

// Timeline point component to ensure consistent rendering
const TimelinePoint = ({point}) => {
    return (
        <div className="relative flex flex-col items-center w-full">
            {/* Timeline node */}
            <div className="w-6 h-6 rounded-full bg-primary border-2 border-white ring-2 ring-primary z-10"></div>

            {/* Title */}
            <div className={`md:absolute static ${ point.position === "top" ? "-top-16" : "top-10" } w-40 text-center`}>
                <h3 className="text-2xl font-bold text-primary">{point.title}</h3>
            </div>

            {/* Vertical line */}
            <div className={`md:absolute static h-10 w-0.5 bg-gray-300 ${ point.position === "top" ? "top-6" : "-top-10" }`}></div>

            {/* Stats */}
            <div className={`md:absolute static ${ point.position === "top" ? "top-16" : "-top-36" } flex flex-col items-center  overflow-hidden`}>
                {/* Trophy icon and EGP */}
                <div className="flex items-center mb-1">
                    <div className="text-primary">
                        <TrophyIcon />
                    </div>
                    <span className="ml-1 text-primary font-light">{point.egp}</span>
                </div>

                {/* Users icon and attendees */}
                <div className="flex items-center">
                    <div className="text-primary">
                        <UsersIcon />
                    </div>
                    <span className="ml-1 text-primary font-light">{point.attendees}</span>
                </div>
            </div>
        </div>
    )
}

function MachathonTimeline () {
    // Fixed timeline positions to avoid any dynamic calculations


    return (
        <section className="container">
            <h2 className="  text-3xl md:text-5xl font-bold mb-8 text-secondary">Machathon  Timeline</h2>
            <div className=" relative  my-56">
                {/* Main horizontal line */}
                <div className="absolute h-0.5 bg-gray-300 top-1/2 left-0 right-0 transform  -translate-y-1/2 hidden md:block  "></div>

                {/* Timeline points container */}
                <div className="relative flex flex-col gap-30 md:gap-0  md:flex-row justify-between ">
                    {TimelinePoints.map((point, index) => (
                        <TimelinePoint key={index} point={point} />
                    ))}
                </div>

                {/* Timeline endpoints */}
                <div className="absolute h-1.5 w-1.5 rounded-full bg-gray-300 top-1/2 left-0 transform -translate-y-1/2"></div>
                <div className="absolute h-1.5 w-1.5 rounded-full bg-gray-300 top-1/2 right-0 transform -translate-y-1/2"></div>
            </div>
        </section>
    )
}

export default MachathonTimeline
