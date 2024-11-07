import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation} from 'react-router-dom';

const Root = () => {
    const location = useLocation();
    const getTitle = () => {
        switch(location.pathname){

        }
    }
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
            <Navbar />
            </div>
            <div className='min-h-[1064px]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;