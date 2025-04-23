import Footer1 from '../../../assets/footer1.png';
import Facebook from '../../../assets/Facebook.png';
import Twitter from '../../../assets/Twitter.png';
import Instagram from '../../../assets/Instagram.png';
import LOGO from '../../../assets/Logo.png';
import Send from '../../../assets/send.png';
function Footer () {
    return (
        <>
            <div className='md:container my-8 '>
                <div className="  border-2 border-primary  p-4 bg-primary text rounded-4xl  mb-6 footer-t     ">
                    <section className='flex justify-items-center  gap-3  '>
                        <figure>
                            <img src={Footer1} alt="" className=" " />
                        </figure>
                        <div className=' flex flex-col justify-around'>
                            <div>
                                <p className="  pb-3  text-5xl text-white">Gorem ipsum dolor sit amet </p>
                                <p className="    text-5xl text-white"> consectetur adipiscing elit. </p>
                            </div>
                            <div className='flex  '>
                                <figure>
                                    <img src={Send} alt="" className="  bg-gray-300 rounded-xl  " />
                                </figure>
                                <label htmlFor="email" className=" text-sm font-medium ">
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email.."
                                    className="mt-1 block   rounded-4xl shadow-sm   sm:text-sm  bg-blur text-white py-2 px-10    " />

                            </div>

                        </div>
                    </section>
                </div >





                <div className="   border-2 border-secondary rounded-4xl p-6  bg-secondary footer-b    text-white ">
                    <div className='flex '>
                        <div className="flex-col items-center text-sm ">
                            <img src={LOGO} alt="" className="w-24 h-24 mb-6 mx-auto " />
                            <p className="   top-2  pb-2 " ><a href="hello@STPPPP.com">hello@STPPPP.com</a></p>
                            <p><a href="tel:+1 (201) 895-3801">+1 (201) 895-3801</a></p>

                            <p className="flex justify-between my-5">
                                <a href=""><img src={Instagram} alt="" className="w-8 h-8  " /></a>
                                <a href=""><img src={Facebook} alt="" className="w-8 h-8  " /></a>
                                <a href=""><img src={Twitter} alt="" className="w-8 h-8 " /></a>
                            </p>

                        </div>
                        <div className="  flex justify-between gap-20 text-2xl px-4 py-17 footer-ul  mx-40 ">
                            <ul className='' >
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
                    <div className='border-t text-center text-white/50 py-5 '>
                        <p>© 2025 ABC. All rights reserved.</p>
                    </div>
                </div>

            </div >
        </>
    );

}
export default Footer;