import {useState} from "react"
import {Menu, X} from "lucide-react"
import Logo from "../Logo"

function NavBar () {
    const [isOpen, setIsOpen] = useState(false)
    const navItems = ["Home", "History", "Achievements", "Events"]

    return (
        <header className="absolute top-0 left-0 w-full z-50 pt-8 px-4">
            <div className="flex items-center justify-between lg:container mx-auto">
                {/* Logo */}
                <div className="">
                    <Logo w={"w-24"} h={"h-24"} />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-0 lg:space-x-9 md:space-x-3 rounded-full bg-black/20 px-3 py-2 backdrop-blur-sm">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a
                                    href={`/${ item.toLowerCase() }`}
                                    className="px-2 md:px-4 py-2 text-white rounded-full hover:bg-black/30"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center space-x-2">
                    <a
                        href="/sign-in"
                        className="rounded-full bg-black/20 px-4 py-1 text-white backdrop-blur-sm transition hover:bg-black/30"
                    >
                        sign in
                    </a>
                    <a
                        href="/sign-up"
                        className="rounded-full bg-primary px-4 py-1 text-white transition hover:bg-primary-200"
                    >
                        sign up
                    </a>
                </div>

                {/* Burger Icon for mobile */}

                <button
                    className="md:hidden text-primary mx-4"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={35} />
                </button>

            </div>

            {/* Sidebar for mobile */}
            {isOpen && (
                <div className="fixed top-0 right-0 w-64 h-full bg-black/20 backdrop-blur-md z-50 shadow-lg p-6 flex flex-col space-y-6 transition-all duration-300">
                    <div className="flex justify-between">
                        <Logo w={"w-14"} h={"h-14"} />
                        <button
                            className="self-end text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={28} />
                        </button>
                    </div>
                    <ul className=" mt-4 flex flex-col justify-between h-full ">
                        <div>
                            {navItems.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`/${ item.toLowerCase() }`}
                                        className="block text-white text-lg hover:bg-white/30 rounded px-4 py-4"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-gray-300">
                            <a
                                href="/sign-in"
                                className="text-white hover:bg-white/30 rounded px-4 py-2 block"
                                onClick={() => setIsOpen(false)}
                            >
                                sign in
                            </a>
                            <a
                                href="/sign-up"
                                className="text-white bg-primary hover:bg-primary-200 rounded px-4 py-2 block"
                                onClick={() => setIsOpen(false)}
                            >
                                sign up
                            </a>
                        </div>

                    </ul>
                </div>
            )}
        </header>
    )
}

export default NavBar
