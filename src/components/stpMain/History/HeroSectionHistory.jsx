import Pic2 from '../../../assets/Slider2.png'

export default function HeroSectionHistory () {
  return (
    <div className="relative z-10 h-svh flex items-center bg-secondary bg-cover bg-center ">
      <main className="md:container  flex flex-col-reverse md:flex-row items-center  px-4 mt-14">
        {/* Text Section */}
        <section className="max-w-lg  md:text-left md:max-w-lg">
          <h1 className="mb-8  sm:text-4xl text-5xl font-bold leading-tight text-white   lg:text-6xl">
            Forem ipsum dolor sit amet consectetur
          </h1>
          <p className="mb-15 text-lg  text-white/90">
            Hidden gems breathtaking views, unforgettable adventures: where will you go next
          </p>
          <a
            href="/explore"
            className="inline-block rounded-full bg-primary px-8 py-3 text-white transition hover:bg-primary-300"
          >
            Explore
          </a>
        </section>

        {/* Image on the right for medium and large screens */}
        <div className="hidden md:block md:w-1/3 mx-auto  ">
          <img
            src={Pic2}
            alt="Decorative visual"
            className="w-full  object-cover"
          />
        </div>
      </main>

      {/* Overlay */}
      <div className="absolute -z-10 inset-0 bg-black/30"></div>

      {/* Decorative Circles */}
      <div className="absolute top-40 left-40 w-20 h-20 border-2 border-dashed border-white/20 rounded-full"></div>
      <div className="absolute top-10 left-60 w-24 h-24 border-2 border-dashed border-amber-20 rounded-full"></div>
      <div className="absolute bottom-10 right-3/5 w-16 h-16 border-2 border-dashed border-amber-20 rounded-full"></div>
      <div className="absolute top-[35rem] left-40 w-32 h-32 border-2 border-dashed border-white/20 rounded-full"></div>
      <div className="absolute bottom-[20rem] right-20 w-24 h-24 border-2 border-dashed border-white/20 rounded-full"></div>
    </div>
  )
}