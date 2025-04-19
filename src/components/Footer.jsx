import Footer1 from '../assets/Footer1.png';
import Arrow from '../assets/arrow.png';
import Facebook from '../assets/Facebook.png';
import Twitter from '../assets/Twitter.png';
import Instagram from '../assets/Instagram.png';
import LOGO from '../assets/Logo.png';
function Footer () {
    return (
        <>
            <div className='container my-8'>
                <div className="  border-2 border-primary  p-4 bg-primary text rounded-4xl  mb-6  ">
                    <section className='flex justify-items-center  gap-3  '>
                        <figure>
                            <img src={Footer1} alt="" className=" " />
                        </figure>
                        <div className=' container flex flex-col justify-around'>
                            <div>
                                <p className="   top-2  pb-3  text-5xl text-white">Gorem ipsum dolor sit amet </p>
                                <p className="   top-2    text-5xl text-white"> consectetur adipiscing elit. </p>
                            </div>
                            <div>
                                <label htmlFor="email" className=" text-sm font-medium ">
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email.."
                                    className="mt-1 block   rounded-4xl shadow-sm py-2 px-3  sm:text-sm  bg-blur text-white     " />
                            </div>

                        </div>
                    </section>
                </div >





                <div className="  border-2 border-secondary rounded-lg p-4 bg-secondary  flex justify-items-center-safe gap-40 text-neutral-200  ">
                    <div className="flex-col items-center">
                        <img src={LOGO} alt="" className="w-15 h-15  " />
                        <p><a href="hello@STPPPP.com">hello@STPPPP.com</a></p>
                        <p><a href="tel:+1 (201) 895-3801">+1 (201) 895-3801</a></p>

                        <p className="flex justify-between gap-5 my-5">
                            <a href=""><img src={Instagram} alt="" className="w-10 h-10  " /></a>
                            <a href="l"><img src={Facebook} alt="" className="w-10 h-10  " /></a>
                            <a href=""><img src={Twitter} alt="" className="w-10 h-10  " /></a>
                        </p>

                    </div>
                    <div className=" flex justify-between gap-10 text-2xl p-5  ">
                        <ul >
                            <li> <a href="">VISION</a></li>
                            <li><a href="">HISTORY</a></li>
                            <li><a href="">SERVICES</a></li>
                        </ul>
                        <ul >
                            <li> <a href="">Terms of Service</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Cookies Policy</a></li>
                        </ul>
                    </div>


                </div>
            </div >
        </>
    );

}
export default Footer;