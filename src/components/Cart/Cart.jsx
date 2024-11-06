import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { useParams } from 'react-router-dom';

const Cart = () => {
    // const data = useParams();
    // const { product_title, price, product_image, description } = cart;
    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='text-2xl, font-bold'>Cart</h2>
                <div className='flex items-center gap-4'>
                    <div>
                        {/* <p className='text-2xl, font-bold text-center'>Total Price: ${cart.reduce((acc, product) => acc + product.price, 0)}</p> */}
                    </div>
                    <button  className='border border-[#9538E2] text-[#9538E2] font-bold rounded-full py-3 px-6'>Short by Price</button>
                    <button className='bg-[#9538E2] font-bold rounded-full py-3 px-6 text-white'>Purchase</button>
                </div>
            </div>
            <div className='w-auto gap-5 lg:max-w-7xl lg:mx-auto p-5 flex justify-between border mb-5 rounded-xl items-center'>
                <div className='flex gap-5'>
                    <img className='w-[100px] rounded-xl object-cover items-center justify-between' src={product_image} alt="" />
                    <div>
                        <h4 className='text-xl lg:text-2xl font-semibold text-[#131313]'>{product_title}</h4>
                        <p className='text-[#131313] opacity-80 text-base font-semibold'>{description}</p>
                        <p className='text-[#131313] opacity-80 text-base font-semibold'>Price: ${price}</p>
                    </div>
                </div>
                <div onClick={() => handleRemove()}>
                    <MdDeleteForever className='text-red-500 text-4xl' />
                </div>
            </div>
        </div>
    );
};

export default Cart;