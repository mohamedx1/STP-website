import ProjectCarousel from "./ProjectCarousel"

function ProjectsSection () {
    return (
        <div className="container my-15">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Column - Text and Stats */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-secondary">Our Projects</h2>

                    <p className="text-secondary text-lg ">
                        Success is not just about reaching a destination; it's about the journey, the challenges overcome Success is
                        not just about reaching a destination; it's about the journey, the challenges overcome Success is not just
                    </p>

                    <div className="space-y-4 pt-4">
                        {/* Total attendees stat */}
                        <div className="flex items-center space-x-4 bg-gray-200 rounded-lg p-4">
                            <div>
                                <svg
                                    className="w-8 h-8 text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                                </svg>
                            </div>
                            <div className="font-medium text-secondary">Total attendees</div>
                        </div>

                        {/* 25K EGP stat */}
                        <div className="flex items-center space-x-4 bg-gray-200 rounded-lg p-4">
                            <div>
                                <svg
                                    className="w-8 h-8 text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="font-medium text-secondary">25K EGP</div>
                        </div>
                    </div>

                    <button className="bg-prtext-primary hover:bg-primary-200 text-white font-medium py-3 px-8 rounded-full transition-colors">
                        Explore
                    </button>
                </div>
                {/* Right Column - Project Carousel */}
                <div>
                    <ProjectCarousel />
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection