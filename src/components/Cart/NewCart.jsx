import React from 'react';

const NewCart = ({storedCart, totalPrice}) => {
    console.log('sorted Cart: ', storedCart);
    console.log('total price: ', totalPrice);

    const { product_title, price, product_image, description } = storedCart;
    return (
        <div>
            
            <div className='w-auto gap-5 lg:max-w-7xl lg:mx-auto p-5 flex justify-between border mb-5 rounded-xl items-center'>
                <div className='flex gap-5'>
                    <img className='w-[100px] rounded-xl object-cover items-center justify-between' src={product_image} alt="" />
                    <div>
                        <h4 className='text-xl lg:text-2xl font-semibold text-[#131313]'>{product_title}</h4>
                        <p className='text-[#131313] opacity-80 text-base font-semibold'>{description}</p>
                        <p className='text-[#131313] opacity-80 text-base font-semibold'>Price: ${price}</p>
                    </div>
                </div>
                {/* <div onClick={() => handleRemove()}>
                    <MdDeleteForever className='text-red-500 text-4xl' />
                </div> */}
            </div>
        </div>
    );
};

export default NewCart;