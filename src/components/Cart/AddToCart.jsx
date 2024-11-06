import React from 'react';
import Cart from './Cart';

const AddToCart = ({addToCart}) => {

    return (
        <div>
            <div className="w-auto lg:max-w-7xl bg-white mx-auto mb-20 p-5">
            <h3 className=" text-xl lg:text-3xl text-center lg:text-left font-bold text-[#131313] pb-5">Cart</h3>

            {
                addToCart.map((cart, idx) => <Cart key={idx} cart={cart}></Cart>)
            }
            
            <div className="py-12">
            </div>
            </div>
        </div>
    );
};

export default AddToCart;