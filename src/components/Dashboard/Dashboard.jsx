import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredToCart, getStoredToWish } from '../../utility/addToCart';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Product from '../Product/Product';
// import 'react-tabs/style/react-tabs.css';

const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const allproducts = useLoaderData();

  useEffect(() => {
    const storedCart = getStoredToCart();
    const storedWishlist = getStoredToWish();

    console.log(storedCart, allproducts,);

    const cart = allproducts.filter(product => storedCart.includes(product.product_id));

    const wishlist = allproducts.filter(product => storedWishlist.includes(product.product_id));

    // const totalPrice = cart.reduce((acc, product) => {
    //   const cartItem = storedCart.find(item => item.id === product.product_id);
    //   return acc + (cartItem ? cartItem.price : 0)
    // }, 0);

    setCart(cart);
    setWishlist(wishlist);
    // console.log('total price:', totalPrice) allproducts
  }, []);

  // const [addPrice, setAddPricce] = useState(0);
  // const price = 0;

  // const handleAddPrice = () => {
  //     setAddPricce((prevAddPrice) => prevAddPrice + price);  
  // }

  // const redusePrice = (price) => {
  //     const purches = addPrice - addPrice;
  //     setAddPricce(purches);
  // }

  return (
    <div>
      <div className='bg-[#9538E2] py-8 h-[260px]'>
        <h2 className='text-[2rem] text-white font-bold text-center mb-4'>Dashboard</h2>
        <p className='text-white font-normal text-base text-center lg:w-[796px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div>
          <Tabs>
            <TabList className='text-center mt-6 font-bold flex justify-center gap-6'>
              <Tab className="rounded-full focus:outline-none focus:ring-white focus:text-[#9538E2]" selectedClassName='bg-white text-'>
                <button className=" py-4 px-16 mr-6 text-white border rounded-full border-white btn-outline focus:text-[#9538E2] hover:bg-white hover:border-none hover:text-[#9538E2] outline-[#9538E2] ">Cart</button>
              </Tab>
              <Tab className="rounded-full focus:outline-none focus:ring-white focus:text-[#9538E2]" selectedClassName='bg-white text-[#9538E2]'>
                <button className="btn-outline border rounded-full outline-[#9538E2] border-white text-white focus:text-[#9538E2] hover:text-[#9538E2] py-4 px-16">Wishlist</button>
              </Tab>
            </TabList>

            <TabPanel className="mt-20 max-w-7xl mx-auto">
              <div className='w-10/12 mx-auto'>
                <div className='flex justify-between'>
                  <h2 className='text-2xl font-bold'>Cart</h2>
                  <div className='flex items-center gap-4'>
                    <div>
                      {/* <p className='text-2xl, font-bold text-center'>Total Price: ${totalPrice}</p> */}
                    </div>
                    {/* <button onClick={() => handleIsActive()} className='border border-[#9538E2] text-[#9538E2] font-bold rounded-full py-3 px-6'>Short by Price</button> */}
                    <button className='bg-[#9538E2] font-bold rounded-full py-3 px-6 text-white'>Purchase</button>
                  </div>
                </div>
              </div>
              <div className='flex gap-6 py-12'>
                {
                  cart.map((product) => <Product key={product.product_id} product={product}></Product>)
                }
              </div>
            </TabPanel>
            <TabPanel className="mt-20 max-w-7xl mx-auto">
              <h2 className='text-2xl font-bold'>Wishlist</h2>
              <div className='flex flex-row gap-6 py-12'>
                {
                  wishlist.map(product => <Product key={product.product_id} product={product}></Product>)
                }
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;