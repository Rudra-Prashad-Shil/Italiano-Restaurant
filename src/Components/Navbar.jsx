
const Navbar = () => {
    let listItems = <>
        <li><a className="hover:text-amber-400">Item 1</a></li>
        <li><a className="hover:text-amber-400">Item 2</a></li>
        <li>
            <details>
                <summary className="hover:text-amber-400">Parent1</summary>
                <ul className="p-2 text-black">
                    <li><a className="hover:text-amber-400">Submenu1 p1</a></li>
                    <li><a className="hover:text-amber-400">Submenu2 p1</a></li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary className="hover:text-amber-400">Parent2</summary>
                <ul className="p-2 text-black">
                    <li><a className="hover:text-amber-400">Submenu1 p1</a></li>
                    <li><a className="hover:text-amber-400">Submenu2 p1</a></li>
                </ul>
            </details>
        </li>
        <li><a className="hover:text-amber-400">Item 5</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-black text-white shadow-sm md:p-10 p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {listItems}
                    </ul>
                </div>
                    <a className="btn btn-ghost text-2xl">Italiano</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {listItems}
                    </ul>
                    <p className="ps-2">01856412347</p>
                </div>
                <div className="navbar-end">
                    <a className="btn">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;