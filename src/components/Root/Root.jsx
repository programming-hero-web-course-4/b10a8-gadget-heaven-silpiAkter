import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Root = () => {
    const location = useLocation();
    const isHomeActive = location.pathname === '/';

    useEffect(() => {
        const pageTitle = {
            '/': 'Home - Gadgets Heaven',
            '/dashboard': 'Dashboard - Gadgets Heaven',
            '/statistics': 'Statistics - Gadgets Heaven',
            '/about': 'About Us - Gadgets Heaven',
            '/allproducts': 'Product Details - Gadgets Heaven',
            '/cart': 'Shopping Cart - Gadgets Heaven'
        };

        let title = pageTitle[location.pathname.split('/')[1]] || 'Gadegets Heaven';

        if(location.pathname.includes('/allproducts')){
            title = 'Product Details - Gadgets Heaven';
        }
        else if(location.pathname.includes('/statistics')){
            title = 'Statistics - Gadgets Heaven';
        }
        else if(location.pathname.includes('/dashboard')){
            title = 'Dashboard - Gadgets Heaven';
        }
        else if(location.pathname.includes('/about')){
            title = 'About Us - Gadgets Heaven';
        }
        else if(location.pathname.includes('/cart')){
            title = 'Shopping Cart - Gadgets Heaven';
        }

        document.title = title;
    }, [location.pathname])
    return (
        <div>
            <div className={` ${isHomeActive ? "bg-[#9538E2] max-w-[1540px] mx-auto text-white" : "bg-base-200 text-[#9538E2]"}`} >
                <div className='max-w-7xl mx-auto'>
                    <Navbar />
                </div>
            </div>
            <div className='min-h-[1024px]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;