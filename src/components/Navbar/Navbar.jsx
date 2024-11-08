import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import logo from '../../assets/favicon-16x16.png'

const Navbar = () => {
    const lists = <>
        <li><Link role='nav' className="font-bold" to='/'>Home</Link></li>
        <li><Link className='ml-12 font-bold' to='/dashboard'>Dashboard</Link></li>
        <li><Link className='ml-12 font-bold' to='/statistics'>Statistics</Link></li>
        <li><Link className='ml-12 font-bold' to='/about'>About Us</Link></li>
    </>
    return (
        <nav>
            <div className="navbar py-6">
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
                    <div className='flex items-center'>
                        <img src={logo} className='mr-2 h-10 w-10' alt="logo" />
                        <a className="font-bold text-xl ml-1 md:text-3xl">Gadget Heaven</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {lists}
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <button className="btn bg-white btn-circle text-2xl">
                        <IoCartOutline />
                    </button>
                    <button className="btn bg-white btn-circle text-2xl">
                        <FaRegHeart />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;