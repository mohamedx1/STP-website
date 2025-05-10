import React from 'react'
import EventCard from './../components/stpMain/Events/EventCard';
import eventSData from './../components/stpMain/Events/eventsData';
import localEventsImage from "../assets/LocalEvents.webp"

export default function Events () {
    return (
        <div className=" min-h-screen bg-gray-50 ">
            {/* Hero Section with Image from User Upload */}
            <div className=' px-0 md:container '>

                <div className="relative rounded-none md:rounded-lg overflow-hidden mb-12">
                    <img
                        src={localEventsImage}
                        alt="Events Banner"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent flex items-center ">
                        <div className="px-8 mt-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Up Coming Events
                            </h1>
                            <p className="text-white/80 max-w-md">
                                Discover and join our upcoming events. Click on any event to see more details.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {eventSData.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
