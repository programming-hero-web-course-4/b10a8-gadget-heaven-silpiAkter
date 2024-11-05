import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Root = () => {
    // let loaction = useLocation();

    // React.useEffect(() => {
    //     ga('send', 'pageview');
    // }, [loaction]);

    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <div className='min-h-[1064px]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;