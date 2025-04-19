
import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"

function PhotographyAwards () {
    const [awards, setAwards] = useState([
        {
            year: "2015",
            title: "Sony World Photography Awards", 
            isExpanded: true,
            content: {
                title: "A Quiet Afternoon in the Countryside",
                description:
                    "Success is not just about making money or achieving high status. It's about overcoming challenges, learning from failures, and continuously improving yourself.",
                image: "/images/meeting.png",
            },
        },
        {
            year: "2015",
            title: "Sony World Photography Awards",
            content: {
                title: "The Art of Composition",
                description:
                    "Great photography is about careful composition, lighting, and capturing the perfect moment. It requires patience and an eye for detail.",
                image: "/images/meeting.png",
            },
        },
        {
            year: "2015",
            title: "Sony World Photography Awards",
            content: {
                title: "Urban Landscapes",
                description:
                    "The city offers countless opportunities for stunning photography. From architecture to street life, urban environments are full of stories waiting to be told.",
                image: "/images/meeting.png",
            },
        },
        {
            year: "2015",
            title: "Sony World Photography Awards",
            content: {
                title: "Nature's Beauty",
                description:
                    "The natural world provides endless inspiration for photographers. Capturing the essence of landscapes, wildlife, and natural phenomena requires skill and dedication.",
                image: "/images/meeting.png",
            },
        },
        {
            year: "2015",
            title: "Sony World Photography Awards",
            content: {
                title: "Portrait Photography",
                description:
                    "A great portrait captures not just a person's appearance, but their personality and emotion. It's about making a connection and telling their story through imagery.",
                image: "/images/meeting.png",
            },
        },
    ])

    const [selectedContent, setSelectedContent] = useState(awards[0].content)

    const toggleExpansion = (index) => {
        const updatedAwards = awards.map((award, i) => {
            const isExpanded = i === index ? true : false

            if (isExpanded) {
                setSelectedContent(awards[i].content)
            }

            return {
                ...award,
                isExpanded,
            }
        })

        setAwards(updatedAwards)
    }

    const PlusIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 5v14M5 12h14" />
        </svg>
    )

    const MinusIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
        </svg>
    )

    return (
        <div className="p-4 bg-gray-800 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row bg-gray-700 rounded-lg overflow-hidden">
                    <div className="md:w-2/5">
                        <div className="bg-[#8e2d52] p-4 rounded-t-lg md:rounded-tr-none">
                            {awards.map((award, index) => (
                                <div key={index} className="border-b border-[#a04568] py-3 last:border-b-0">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-6">
                                            <span className="text-white">{award.year}</span>
                                            <span className="text-white">{award.title}</span>
                                        </div>
                                        <button
                                            onClick={() => toggleExpansion(index)}
                                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                                        >
                                            {award.isExpanded ? <MinusIcon /> : <PlusIcon />}
                                        </button>
                                    </div>

                                    {/* ✅ Animated Expansion Content on small screens */}
                                    <AnimatePresence>
                                        {award.isExpanded && (
                                            <motion.div
                                                className="mt-4 pl-6 pb-2 md:hidden"
                                                initial={{opacity: 0, y: -10}}
                                                animate={{opacity: 1, y: 0}}
                                                exit={{opacity: 0, y: -10}}
                                                transition={{duration: 0.3}}
                                            >
                                                <h3 className="text-xl font-bold text-white">{award.content?.title}</h3>
                                                <p className="text-gray-300 mt-2">{award.content?.description}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content for md+ screens */}
                    <div className="p-4 md:w-3/5 hidden md:block">
                        <motion.div
                            key={selectedContent?.title}
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: -20}}
                            transition={{duration: 0.4}}
                            className="relative"
                        >
                            <img
                                src={selectedContent?.image || "/placeholder.svg"}
                                alt={selectedContent?.title || ""}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white">{selectedContent?.title}</h3>
                                <p className="text-gray-300 mt-2">{selectedContent?.description}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotographyAwards