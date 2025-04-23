import Logo from "../../stpMain/Logo"

function NavBar () {
    const navItems = ["Home", "History", "Achievements", "Services", "Events"]

    return (
        <header className=" absolute  top-0 left-0 w-full  z-50  pt-8  lg:container px-2    ">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="lg:scale-150">
                    <Logo />
                </div>

                {/* Navigation */}
                <nav className=" md:block   ">
                    <ul className="flex  space-x-0 lg:space-x-9 md:space-x-3 rounded-full  bg-white/20 px-3 py-2 backdrop-blur-sm ">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a href={`/${ item.toLowerCase() }`} className="px-2 md:px-4 py-2   text-white rounded-full  hover:bg-white/30">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Auth Buttons */}
                <div className="flex items-center space-x-2  ">
                    <a
                        href="/sign-in"
                        className="rounded-full bg-white/20 px-1 lg:px-6 py-1 text-white backdrop-blur-sm transition hover:bg-white/30"
                    >
                        sign in
                    </a>
                    <a href="/sign-up" className="rounded-full bg-primary px-1 lg:px-6 py-1 text-white transition hover:bg-primary-200">
                        sign up
                    </a>
                </div>
            </div>
        </header>
    )
}

export default NavBar
