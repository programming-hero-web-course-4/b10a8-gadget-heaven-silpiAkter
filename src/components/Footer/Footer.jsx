import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-6 bg-white py-20">
            <h2 className='text-[2rem] font-bold text-center'>Gadget Heaven</h2>
            <p className='text-base text-center font-bold text-black/40'>Leading the way in cutting-edge technology and innovation.</p>
            <div className="divider max-w-7xl mx-auto py-6"></div>
            <div className="footer text-white pt-8 justify-around">
            <nav>
                <h6 className="footer-title font-bold text-lg text-black">Services</h6>
                <a className="link link-hover text-black/60 font-normal text-base">Product Support</a>
                <a className="link link-hover text-black/60 font-normal text-base">Order Tracking</a>
                <a className="link link-hover text-black/60 font-normal text-base">Marketing</a>
                <a className="link link-hover text-black/60 font-normal text-base">Shipping & Delivery</a>
                <a className="link link-hover text-black/60 font-normal text-base">Returns</a>
            </nav>
            <nav>
                <h6 className="footer-title font-bold text-lg text-black">Company</h6>
                <a className="link link-hover text-black/60 font-normal text-base">About us</a>
                <a className="link link-hover text-black/60 font-normal text-base">Careers</a>
                <a className="link link-hover text-black/60 font-normal text-base">Contact</a>           
            </nav>
            <nav>
                <h6 className="footer-title font-bold text-lg text-black">Legal</h6>
                <a className="link link-hover text-black/60 font-normal text-base">Terms of Service</a>
                <a className="link link-hover text-black/60 font-normal text-base">Privacy policy</a>
                <a className="link link-hover text-black/60 font-normal text-base">Cookie policy</a>
            </nav>
            </div>
        </footer>       
    );
};

export default Footer;