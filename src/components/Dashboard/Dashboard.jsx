import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredToCart } from '../../utility/addToCart';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

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

  return (
    <div>
      <div className='bg-[#9538E2] py-8 h-[260px]'>
        <h2 className='text-[2rem] text-white font-bold text-center mb-4'>Dashboard</h2>
        <p className='text-white font-normal text-base text-center lg:w-[796px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        {/* <div className='text-center mt-6 font-bold'>
          <button className="btn active py-4 px-16 mr-6 rounded-full bg-slate-50 text-[#9538E2]">Cart</button>
          <button className="btn btn-outline border-white text-white py-4 px-16 rounded-full">Wishlist</button>
        </div> */}
        <div>
          <Tabs>
            <TabList className='text-center mt-6 font-bold flex justify-center gap-6'>
              <Tab className="rounded-full border-none">
              <button className="btn active py-4 px-16 mr-6 rounded-full bg-slate-50 text-[#9538E2]">Cart</button>
              </Tab>
              <Tab className="rounded-full outline-[#9538E2]">
              <button className="btn btn-outline border-white text-white py-4 px-16 rounded-full">Wishlist</button>
              </Tab>
            </TabList>

            <TabPanel className="mt-20 max-w-7xl mx-auto">
              <h2>Cart</h2>
            </TabPanel>
            <TabPanel className="mt-20 max-w-7xl mx-auto">
              <h2>Wishlist</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;