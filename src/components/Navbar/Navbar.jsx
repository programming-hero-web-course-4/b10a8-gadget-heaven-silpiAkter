import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {

    const lists = <>
        <li><NavLink className='mr-12' to='/'>Home</NavLink></li>
        <li><NavLink className='mr-12' to='/statistics'>Statistics</NavLink></li>
        <li><NavLink className='mr-12' to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink className='mr-12' to='/about'>About Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn bg-[#9538E2] text-white md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {lists}
                    </ul>
                </div>
                <a className="font-bold text-xl ml-1 md:text-3xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                <IoCartOutline />
                </button>
                <button className="btn btn-ghost btn-circle">
                <FaRegHeart />
                </button>
            </div>
        </div>
    );
};

export default Navbar;