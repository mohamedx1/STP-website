
import {Link, useParams} from 'react-router-dom';
import ImageCarousel from './../../common/image-carousel';
import eventSData from './eventsData';
import {Users, Mic, MapPin} from 'lucide-react';
import {ChevronLeft} from 'lucide-react';


// Event data object


export default function EventDetails () {
  const {id} = useParams();
  const eventId = parseInt(id || "0", 10);
  const event = eventSData.find((e) => e.id === eventId);

  const iconClsss = "size-20 text-primary "
  const sharedICons = [<Users className={iconClsss} />, <Mic className={iconClsss} />, <Users className={iconClsss} />, <Mic className={iconClsss} />]


  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-xl text-gray-600 mb-4">The event you're looking for doesn't exist.</p>
          <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Events
          </Link>
        </div>
      </div>
    );
  }


  return (
    <>
      <div className=' '>
        <div className="relative z-10 h-96 md:h-svh  flex items-center  eventCover  " style={{
          backgroundImage: `url(${ event.image })`,
        }}>

          <div className="absolute -z-10 inset-0 bg-secondary/30"></div>
        </div>
      </div>
      <div className='container mt-12'>
        <div className="mb-6">
          <Link to="/events" className="inline-flex items-center text-primary hover:text-primary-200">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Events
          </Link>
        </div>
        <h1 className="  text-3xl md:text-5xl font-bold mb-12 text-secondary">{event.title}</h1>
        {/* Top section with description and location */}
        <div className='flex flex-col-reverse lg:flex-row justify-between  mb-8'>

          {/* left sction */}
          <div className="w-full lg:w-1/2">
            {/* Description section */}
            <article className="mb-8">
              <h2 className='font-bold text-lg mb-2'>Description :</h2>
              <pre className='text-sm'>{event.description}</pre>
              <a className='underline underline-offset-2 text-secondary' href={event.formLink}>{`[${ event.formLink }]`}</a>
            </article>

            {/* Date section */}
            <article className='mb-8'>
              <h2 className='font-bold text-lg mb-2'>Date</h2>
              <p className='text-sm'>{event.date}</p>
            </article>
          </div>

          {/* right sction */}
          <div className='mb-8'>
            <div className="flex flex-col items-center lg:items-start">
              <h2 className='font-bold text-lg mb-6'>Event location</h2>
              <MapPin className=" size-32 text-primary mb-5" />
              <span className="text-primary text-3xl  ">{event.location} </span>
            </div>

            {/* Tags  section*/}
            <h2 className='font-bold text-lg mb-2'>Tags</h2>
            <div className='flex flex-wrap w-1/2 gap-2'>
              {event.tags.map((tag, index) => (
                <span
                  key={index}
                  className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs'
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className='flex flex-wrap justify-evenly  mb-8'>

          {event.stats.map((stat, index) => (
            <div key={index} className='flex flex-col gap-5 items-center text-primary'>
              <div className='mb-1'>{sharedICons[index]}</div>
              <div className='text-center'>
                <div className='text-sm font-medium'>{stat.label}</div>
                {stat.value && (
                  <div className=' font-bold'>{stat.value}</div>
                )}
              </div>
            </div>
          ))}

        </div>

        {/* Gallery section */}
        {<ImageCarousel images={event.gallery} altPrefix="Gallery image" />}

        {/* Footer section */}
        <div className='text-center mb-8'>
          <h2 className='text-xl font-bold text-gray-800 mb-6'>
            Event Sponsers
          </h2>
          <div className='grid grid-cols-3 md:grid-cols-8   gap-4'>
            {event.sponsors.map((sponsor, index) => (
              <div
                key={index}
                className='w-28 h-28 bg-gray-200 rounded-full overflow-hidden shadow-2xl '
              >
                <img
                  src={sponsor || "/placeholder.svg"}
                  alt={`Sponsor ${ index + 1 }`}

                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
