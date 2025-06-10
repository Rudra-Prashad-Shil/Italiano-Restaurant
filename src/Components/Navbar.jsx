import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Close sidebar when clicking outside
    useEffect(() => {
        if (!isMenuOpen) return;
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    const mobileMenu =
        <ul className="px-4">
            <li className="pb-4 text-xl"><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li className="pb-4 text-xl"><NavLink to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</NavLink></li>
            <li className="pb-4 text-xl">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setOpenSubmenu(openSubmenu === 'Pages' ? null : 'Pages')}
                >
                    Pages
                    <span>{openSubmenu === 'Pages' ? '▲' : '▼'}</span>
                </div>
                {openSubmenu === 'Pages' && (
                    <ul className="pl-4 py-2">
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Submenu1 p1</a></li>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Submenu2 p1</a></li>
                    </ul>
                )}
            </li>
            <li className="pb-4 text-xl">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setOpenSubmenu(openSubmenu === 'Blog' ? null : 'Blog')}
                >
                    Blog
                    <span>{openSubmenu === 'Blog' ? '▲' : '▼'}</span>
                </div>
                {openSubmenu === 'Blog' && (
                    <ul className="pl-4 py-2">
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Submenu1 p2</a></li>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Submenu2 p2</a></li>
                    </ul>
                )}
            </li>
            <li className="pb-4 text-xl"><a href="#" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
        </ul>;

    const listItems = (
        <>
            <li><NavLink to="/" className="hover:text-amber-400 lg:px-6">Home</NavLink></li>
            <li><NavLink to="/about-us" className="hover:text-amber-400 lg:px-6">About Us</NavLink></li>
            <li className="relative group">
                <a href="#" className="hover:text-amber-400 lg:px-6 cursor-pointer">Pages</a>
                <ul className="absolute left-0 top-17 min-w-[10rem] bg-white text-black px-0 py-2 rounded shadow-lg opacity-0 group-hover:top-12 group-hover:opacity-100 group-hover:visible transition-all duration-500 z-20">
                    <li><a href="#" className="hover:text-white dark:text-black hover:bg-gray-500">Submenu1 p1</a></li>
                    <li><a href="#" className="hover:text-white dark:text-black hover:bg-gray-500">Submenu2 p1</a></li>
                </ul>
            </li>
            <li className="relative group">
                <a href="#" className="hover:text-amber-400 lg:px-6 cursor-pointer">Blog</a>
                <ul className="absolute left-0 top-17 min-w-[10rem] bg-white text-black px-0 py-2 rounded shadow-lg opacity-0 group-hover:top-12 group-hover:opacity-100 group-hover:visible transition-all duration-500 z-20">
                    <li><a href="#" className="hover:text-white dark:text-black hover:bg-gray-500">Submenu1 p2</a></li>
                    <li><a href="#" className="hover:text-white dark:text-black hover:bg-gray-500">Submenu2 p2</a></li>
                </ul>
            </li>
            <li><a href="#" className="hover:text-amber-400 lg:px-6">Contact Us</a></li>
        </>
    );

    return (
        <div>
            {/* Sidebar for mobile/medium */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-full bg-gradient-to-r from-amber-300 to-orange-600 text-black z-50 transition-transform duration-700 w-[50vw] ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:block md:translate-x-0 md:static md:shadow-none shadow-lg`}
                style={{ maxWidth: '400px' }}
            >
                {/* Close button for mobile/medium */}
                <div className="bg-black flex md:hidden justify-between p-6.5">
                    <a href="#" className="text-3xl md:text-4xl font-medium  bg-gradient-to-r from-amber-300 to-orange-600 text-transparent bg-clip-text" onClick={() => setIsMenuOpen(false)}>Italiano</a>
                    <button onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-white">x</button>
                </div>
                {/* Only show menu on md and below */}
                <nav className="md:hidden mt-3">{mobileMenu}</nav>
            </div>

            <div className="navbar bg-black text-white shadow-sm md:p-10 p-6">
                <div className="navbar-start">
                    {/* Hamburger for mobile/medium */}
                    <button
                        className="btn btn-ghost md:hidden"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <a href="#" className="text-3xl md:text-4xl font-medium  bg-gradient-to-r from-amber-300 to-orange-600 text-transparent bg-clip-text">Italiano</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        {listItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/signin" className="btn rounded-xl px-5 bg-white hover:bg-linear-to-r from-amber-300 to-orange-600 text-black cursor-pointer">Sign In</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;