import Group16 from '../../../assets/Group16.png';
import Quote from '../../../assets/Quote.png';
import Person1 from '../../../assets/Person1.png';
import Person2 from '../../../assets/Person2.png';
import {ChevronLeft, ChevronRight} from "lucide-react"
import {useState} from 'react';


const testimonials = [
    {
        id: 0,
        img: Person1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        alt: "person"
    },
    {
        id: 1,
        img: Person2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        alt: "person"
    },
    {
        id: 1,
        img: Person2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        alt: "person"
    }
]

function Testimonials () {

    const [current, setCurrent] = useState(0);
    const testimonialsLength = testimonials.length;

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonialsLength - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonialsLength - 1 : prev - 1));
    };
    return (
        <main className="container my-10 lg:my-20   flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 ">
                <div className=" rounded-lg   flex flex-col hover:shadow-lg transition-shadow  ">
                    <figure className='mb-4 testimonials-img'>
                        <img src={Group16} alt="" className=" " />
                    </figure>
                    <h4 className='text-5xl font-medium text-secondary testimonials-text'>
                        <p className='testimonials-p w-fit'>From Our</p>
                        Ex Stp Members
                        Community
                    </h4>
                </div>
                <section className="col-span-2 my-10 lg:my-0 relative">
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-xl overflow-hidden">
                            <div className="flex transition-transform duration-500" style={{transform: `translateX(-${ current * 100 }%)`}}>
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="w-full flex-shrink-0 border-1 border-secondary rounded-3xl py-14 px-10 flex flex-col items-center hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex w-full justify-between items-center mb-5">
                                            <img src={Quote} alt="" className="w-10 h-10" />
                                            <img src={testimonial.img} alt={testimonial.alt} className="w-20 h-20" />
                                        </div>
                                        <p className="lg:text-2xl">{testimonial.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-15 md:left-4 top-1/2 transform -translate-y-1/2 bg-secondary text-white rounded-full p-2"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute -right-15 md:right-4 top-1/2 transform -translate-y-1/2 bg-secondary text-white rounded-full p-2"
                    >
                        <ChevronRight />
                    </button>
                </section>
            </div>
        </main>
    );
}
export default Testimonials;