import React from 'react';
import { BiSolidError } from "react-icons/bi";

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center mt-40 bg-white'>
            <BiSolidError className='text-8xl text-red-600 my-6' />
            <h2 className='text-5xl font-bold text-center'>Page Not found</h2>
            <p className='text-center mt-5'>Status: 404</p>
            <button className='btn bg-indigo-600 text-white font-bold mt-6'>Back to Home</button>
        </div>
    );
};

export default ErrorPage;