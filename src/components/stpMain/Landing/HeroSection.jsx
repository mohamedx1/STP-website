import backgroundImage from "../../../assets/Hero.jpeg"

function HeroSection () {
    return (
        <div className="relative z-10 h-svh  hero flex items-center bg-cover bg-center " style={{backgroundImage: `url(${ backgroundImage })`}}>
            <main className="  md:container ">
                <section className="max-w-2xl   ">
                    <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                        STP – Steps Towards Progress
                    </h1>
                    <p className="mb-8 text-lg text-white/90 md:text-xl">
                        Being a leading organization working on developing
                        youth who will lead the positive change.
                    </p>
                    <a
                        href="/explore"
                        className="inline-block rounded-full bg-primary px-8 py-3 text-white transition hover:bg-primary-300 "
                    >
                        Explore
                    </a>
                </section>
            </main>
            <div className="absolute -z-10 inset-0 bg-black/30"></div>
        </div>
    )
}

export default HeroSection

