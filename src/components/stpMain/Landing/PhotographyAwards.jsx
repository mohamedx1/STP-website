import {useState} from "react"
import {ArrowRight} from 'lucide-react';
import {MoveUpRight} from 'lucide-react';
import Pic1 from '../../../assets/Awards1.png';
import Pic2 from '../../../assets/Slider1.png';
import Pic3 from '../../../assets/Awards1.png';
import Pic4 from '../../../assets/Slider3.png';
import Pic5 from '../../../assets/Slider2.png';

function PhotographyAwards () {
    // Award entries data with content
    const [awards, setAwards] = useState([
        {
            year: "2015",
            title: "Sony World Photography Awards",
            content: {
                title: "A Quiet Afternoon in the Countryside",
                description:
                    "Success is not just about making money or achieving high status. It's about overcoming challenges, learning from failures, and continuously improving yourself.",
                image: Pic1,
            },
        },
        {
            year: "2015",
            title: "Sony World Photography Awards",
            content: {
                title: "The Art of Composition",
                description:
                    "Great photography is about careful composition, lighting, and capturing the perfect moment. It requires patience and an eye for detail.",
                image: Pic2,
            },
        },
        {
            year: "2015",
            title: "Sony World Photography Awards",
            content: {
                title: "Urban Landscapes",
                description:
                    "The city offers countless opportunities for stunning photography. From architecture to street life, urban environments are full of stories waiting to be told.",
                image: Pic3,
            },
        },
        {
            year: "2015",
            title: "Sony World Photography Awards",
            content: {
                title: "Nature's Beauty",
                description:
                    "The natural world provides endless inspiration for photographers. Capturing the essence of landscapes, wildlife, and natural phenomena requires skill and dedication.",
                image: Pic4,
            },
        },
        {
            year: "2015",
            title: "Sony World Photography Awards",
            content: {
                title: "Portrait Photography",
                description:
                    "A great portrait captures not just a person's appearance, but their personality and emotion. It's about making a connection and telling their story through imagery.",
                image: Pic5,
            },
        },
    ])

    // Selected content for medium/large screens
    const [selectedContent, setSelectedContent] = useState(awards[0].content)

    // Toggle expansion of an award entry
    const toggleExpansion = (index) => {
        const updatedAwards = awards.map((award, i) => {
            // Update the expanded state
            const isExpanded = i === index ? !award.isExpanded : false

            // If this item is being expanded, update the selected content
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

    return (
        <div className="my-25 ">
            <div className=" ">
                <h2 className=" container text-3xl md:text-5xl font-bold mb-8 text-secondary">Our History</h2>
                {/* Responsive container - flex-col on small screens, flex-row on md and up */}
                <div className="flex flex-col md:flex-row  rounded-lg overflow-hidden">
                    {/* Awards Panel - full width on small screens, 40% width on md and up */}
                    <div className="md:w-3/5">
                        <div className="bg-primary p-8 rounded-lg flex flex-col h-full ">
                            {awards.map((award, index) => (
                                <div key={index} className="border-b border-[#a04568] py-5 last:border-b-0  my-auto ">
                                    <div className="px-10 text-2xl flex justify-between  items-center">
                                        <div className="flex gap-20">
                                            <span className="text-white">{award.year}</span>
                                            <span className="text-white">{award.title}</span>
                                        </div>
                                        <button
                                            onClick={() => toggleExpansion(index)}
                                            className={`w-12 h-12 rounded-full flex items-center justify-center border transition ${ award.isExpanded
                                                ? "bg-white text-primary"
                                                : "bg-transparent text-white border-white"
                                                }`}
                                        >
                                            {award.isExpanded ? <MoveUpRight className="w-10 " /> : <ArrowRight className="w-10 " />}
                                        </button>
                                    </div>

                                    {/* Content on small screens - only visible when expanded */}
                                    {award.isExpanded && (
                                        <div className="mt-4 pl-6 pb-2 md:hidden">
                                            <h3 className="text-xl font-bold text-white">{award.content?.title}</h3>
                                            <p className="text-gray-300 mt-2">{award.content?.description}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Section - only visible on md and up */}
                    <div className="p-4 md:w-2/5 hidden md:block">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={selectedContent?.image || "/placeholder.svg"}
                                alt={selectedContent?.title || ""}
                                className="w-full max-w-[400px] aspect-square object-cover rounded-lg"
                            />
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-secondary">{selectedContent?.title}</h3>
                                <p className="text-secondary-300 mt-2">{selectedContent?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotographyAwards