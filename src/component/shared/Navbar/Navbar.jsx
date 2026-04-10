import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "btn btn-outline btn-success !text-[#23BE0A] hover:!bg-transparent font-bold px-5"
                            : "font-medium text-gray-600 hover:text-[#23BE0A]"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/books"
                    className={({ isActive }) =>
                        isActive
                            ? "btn btn-outline btn-success !text-[#23BE0A] hover:!bg-transparent font-bold px-5"
                            : "font-medium text-gray-600 hover:text-[#23BE0A]"
                    }
                >
                    Listed Books
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/pages-to-read"
                    className={({ isActive }) =>
                        isActive
                            ? "btn btn-outline btn-success !text-[#23BE0A] hover:!bg-transparent font-bold px-5"
                            : "font-medium text-gray-600 hover:text-[#23BE0A]"
                    }
                >
                    Pages to Read
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="navbar bg-base-100 py-4 container mx-auto px-4 md:px-8">
            {/* Navbar Start: Logo and Mobile Menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-4 shadow-xl bg-base-100 rounded-box w-64 gap-3 border border-gray-100">
                        {links}
                    </ul>
                </div>
                <a className="text-xl md:text-2xl font-bold cursor-pointer transition-all active:scale-95">
                    Book Vibe
                </a>
            </div>

            {/* Navbar Center: Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>

            {/* Navbar End: Buttons */}
            <div className="navbar-end gap-2 md:gap-4">
                <button className="btn min-h-0 h-10 md:h-12 bg-[#23BE0A] hover:bg-[#1fa308] border-none text-white text-xs md:text-base px-3 md:px-6">
                    Sign In
                </button>
                <button className="btn min-h-0 h-10 md:h-12 bg-[#59C6D2] hover:bg-[#4baab5] border-none text-white text-xs md:text-base px-3 md:px-6">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;