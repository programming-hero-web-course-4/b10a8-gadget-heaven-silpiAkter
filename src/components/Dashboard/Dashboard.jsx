import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredToCart } from '../../utility/addToCart';

const Dashboard = () => {
    const [cart, setCart] = useState([])
    const allproducts = useLoaderData();

    useEffect(() => {
        const storedCart = getStoredToCart();


        // const storedAddToCartInt = storedCart.map(id => parseInt(id));
        // console.log(storedAddToCart, allproducts, id);

        const cartList = allproducts.filter(product => storedCart.some(item => item.id === product.product_id));

        const totalPrice = cartList.reduce((acc, product) => {
            const cartItem = storedCart.find(item => item.id === product.product_id);
            return acc + (cartItem ? cartItem.price : 0)
        }, 0);

        setCart(cartList);
        console.log('total price:', totalPrice)
    }, [allproducts]);

    // const [addPrice, setAddPricce] = useState(0);
    // const price = 0;

    // const handleAddPrice = () => {
    //     setAddPricce((prevAddPrice) => prevAddPrice + price);  
    // }

    // const redusePrice = (price) => {
    //     const purches = addPrice - addPrice;
    //     setAddPricce(purches);
    // }

    // const { product_image, product_title, description, price} = product;


    const [isActive, setIsActive] = useState({
        cart: true,
        status: "cart"
      });
    
      const handleIsActive = (status) => {
        if (status == "cart") {
          setIsActive({
            cart: true,
            status: "cart"
          })
        }
        else {
          setIsActive({
            cart: false,
            status: "wishlist"
          })
        }
      }

    return (
        <div>
            <div className='bg-[#9538E2] py-8 h-[344px]'>
                <h2 className='text-[2rem] text-white font-bold text-center mb-4'>Dashboard</h2>
                <p className='text-white font-normal text-base text-center lg:w-[796px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='text-center mt-6 font-bold'>
                    <button className="btn active py-4 px-16 mr-6 rounded-full bg-slate-50 text-[#9538E2]">Cart</button>
                    <button className="btn btn-outline border-white text-white py-4 px-16 rounded-full">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;