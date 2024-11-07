import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredToCart, getStoredToWish, setToStoredCart } from '../../utility/addToCart';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Cart from '../Cart/Cart';
import { BsFillPatchCheckFill } from "react-icons/bs";
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const allproducts = useLoaderData();
  const navigate = useNavigate();

  const calculatePrice = (cart) => {
    return cart.reduce((pp, product) => pp + product.price, 0);
  };

  useEffect(() => {
    const storedCart = getStoredToCart();
    const storedWishlist = getStoredToWish();

    const cartItem = allproducts.filter(product => storedCart.some(cartItem => cartItem.id === String(product.product_id)));

    const wishlistItem = allproducts.filter(product => storedWishlist.includes(String(product.product_id)));

    setCart(cartItem);
    setWishlist(wishlistItem);
    setTotalPrice(calculatePrice(cartItem));

  }, []);

  const handlePurchase = () => {
    if(cart.length > 0 && totalPrice > 0){
      setIsModalOpen(true);
    }
  }

  const confirmPurchase = () => {
    setCart([]);
    localStorage.removeItem('cart');
    setTotalPrice(0);
    setIsModalOpen(false);
    navigate('/')
  }

  const handleSortByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  }

  const handleRemoveCart = (productId) => {
    const updateCart = cart.filter(product => product.product_id !== productId);
    setCart(updateCart);
    setTotalPrice(calculatePrice(updateCart));
    setToStoredCart(updateCart);
    toast('Removed from cart!')

  }

  const handleRemoveWishlist = (productId) => {
    const update = wishlist.filter(product => product.product_id !== productId);
    setWishlist(update);
    toast('Removed from wishlist!')

  }



  const Modal = ({ onConfirm }) => {
    return (
      <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="modal-content bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <BsFillPatchCheckFill className='text-center mx-auto text-5xl text-teal-400 mb-4' />
          <h2 className="text-xl text-center font-bold mb-4">Payment Successful</h2>
          <p className='text-center'>Thanks for purchasing.</p>
          <p className='text-center'>Total: ${totalPrice}</p>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={onConfirm} className="py-2 px-4 bg-[#9538E2] text-white rounded">Cancel</button>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className='min-h-[100vh]'>
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
                      <p className='text-2xl, font-bold text-center'>Total Price: ${totalPrice}</p>
                    </div>

                    <button onClick={handleSortByPrice} className='border border-[#9538E2] text-[#9538E2] font-bold rounded-full py-3 px-6'>Short by Price</button>

                    <button onClick={handlePurchase} className='bg-[#9538E2] font-bold rounded-full py-3 px-6 text-white'>Purchase</button>
                  </div>
                </div>
              </div>
              <div className=' gap-6 py-12'>
                {
                  // cart.map((product) => <Product key={product.product_id} product={product}></Product>)
                  cart.map(product => <Cart key={product.product_id} product={product} onRemove={handleRemoveCart}></Cart>)
                }
              </div>
            </TabPanel>
            <TabPanel className="mt-20 max-w-7xl mx-auto">
              <h2 className='text-2xl font-bold'>Wishlist</h2>
              <div className='gap-6 py-12'>
                {
                  wishlist.map(product => <Cart key={product.product_id} product={product} onRemove={handleRemoveWishlist}></Cart>)
                  // wishlist.map(product => <Product key={product.product_id} product={product}></Product>)
                }
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}
          onConfirm={confirmPurchase}
        ></Modal>
      )}
    </div>
  );
};

export default Dashboard;