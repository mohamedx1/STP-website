import Group16 from '../assets/Group16.png';
import Mainstar from '../assets/Mainstar.png';
import Mainstar2 from '../assets/Mainstar2.png';
import Quote from '../assets/Quote.png';
import Person1 from '../assets/Person1.png';
import Person2 from '../assets/Person2.png';


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
    }
]

function Testimonials () {
    return (
        <main className="container my-4  flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 ">
                <div className=" rounded-lg   flex flex-col hover:shadow-lg transition-shadow my-auto ">
                    <figure className='mb-4 testimonials-img'>
                        <img src={Group16} alt="" className=" " />
                    </figure>
                    <h4 className='text-5xl font-medium text-secondary testimonials-text'>
                        <p className='testimonials-p w-fit'>From Our</p>
                        Ex Stp Members
                        Community
                    </h4>
                </div>
                <section className='col-span-2 flex gap-6'>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="container border-1 border-secondary rounded-3xl py-14 px-10 flex flex-col items-center hover:shadow-lg transition-shadow  ">
                            <div className="  flex w-full justify-between  items-center mb-5 ">
                                <img src={Quote} alt="" className="w-10 h-10   top-10  " />
                                <img src={testimonial.img} alt={testimonial.alt} className="w-20 h-20    " />
                            </div>
                            <p className="text-2xl">{testimonial.text}</p>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
}
export default Testimonials;