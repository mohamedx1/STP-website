
import {MapPin, Users, Calendar} from "lucide-react";
import {Link} from "react-router-dom";



const EventCard = ({event}) => {
    return (
        <Link to={`/events/${ event.id }`} className="block">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="aspect-video relative">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4">
                    <div className="mb-2 flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-600">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h3>
                    <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-600">{event.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {event.description}
                    </p>
                    {event.sponsors.length > 0 && (
                        <div className="mt-4">
                            <div className="flex -space-x-2 overflow-hidden">
                                {event.sponsors.slice(0, 4).map((sponsor, index) => (
                                    <img
                                        key={index}
                                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                        src={sponsor}
                                        alt={`Sponsor ${ index + 1 }`}
                                    />
                                ))}
                                {event.sponsors.length > 4 && (
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-xs text-gray-600 font-medium ring-2 ring-white">
                                        +{event.sponsors.length - 4}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default EventCard;