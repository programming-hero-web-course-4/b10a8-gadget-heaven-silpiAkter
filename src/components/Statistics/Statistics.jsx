import React from 'react';
import {  Area, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {

    const productsData = [
        { name: "Product A", price: 4000, total: 120, rating: 4.5 },
        { name: "Product B", price: 6500, total: 85, rating: 4.0 },
        { name: "Product C", price: 12000, total: 200, rating: 4.8 },
        { name: "Product D", price: 2500, total: 150, rating: 3.9 },
        { name: "Product E", price: 8000, total: 60, rating: 4.3 }
      ];
      

    return (
        <div>
            <div className='bg-[#9538E2] flex flex-col items-center justify-center py-8 h-[260px] mb-4'>
                <h2 className='text-[2rem] text-white font-bold text-center mb-4'>Statistics</h2>
                <p className='text-white font-normal text-base text-center lg:w-[796px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-2xl font-bold py-8'>Statistics</h2>

                <div>
                    
                    <BarChart width={700} height={300} data={productsData}>
                        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                        <XAxis dataKey="name" />

                        <YAxis />
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Bar dataKey="price" fill="#9538E2"></Bar>
                        <Bar dataKey="total" fill="#bf87ed"></Bar>
                        <Bar dataKey="rating" fill="red"></Bar>
                    </BarChart>

                </div>

            </div>
        </div>
    );
};

export default Statistics;