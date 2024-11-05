import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';


const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    
    return (
        <div className='mt-80 mb-12'>
            <h2 className='text-[2.5rem] font-bold py-6 text-center'>Explore Cutting-Edge Gadgets</h2>

            <div className='flex gap-4 '>
                <Sidebar></Sidebar>
                {/* <div className='w-[240px] max-h-[556px] shadow-lg rounded-lg p-6'></div> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        products.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllProducts;