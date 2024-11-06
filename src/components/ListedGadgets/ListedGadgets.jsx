import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Cart from '../Cart/Cart';
import NewCart from '../Cart/NewCart';

const ListedGadgets = () => {
    const [cart, setCart] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch('gadgets.json')
            .then(res => res.json())
            .then(data => setCart(data))
            .catch(error => console.log('failed to fetch data', error));
    }, [])
        ;
    return (
        <div>
            <div>
                <div className="bg-[#9538E2] pb-20">
                    <h2 className="pt-10 text-white font-bold text-[32px] text-center">Dashboard</h2>
                    <div className="lg:w-5/12 mx-auto pt-3">
                        <p className="text-center text-white font-normal text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
                <Tabs>
                    <div className="flex justify-center -mt-10 pb-20 bg-[#9538E2]">
                        <TabList className="flex gap-3 font-semibold">
                            <Tab>Cart</Tab>
                            <Tab>Wishlist</Tab>
                        </TabList>
                    </div>

                    <div className="pt-20 bg-[#F6F6F6]">
                        <TabPanel>
                            <div className='w-10/12 mx-auto'>
                                <div className='flex justify-between'>
                                    <h2 className='text-2xl, font-bold'>Cart</h2>
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <p className='text-2xl, font-bold text-center'>Total Price: ${totalPrice}</p>
                                        </div>
                                        <button onClick={() => handleIsActive()} className='border border-[#9538E2] text-[#9538E2] font-bold rounded-full py-3 px-6'>Short by Price</button>
                                        <button className='bg-[#9538E2] font-bold rounded-full py-3 px-6 text-white'>Purchase</button>
                                    </div>
                                </div>
                            </div>

                            {
                                cart.map((storedCart, id) => <NewCart key={id} storedCart={storedCart}></NewCart>)
                            }

                        </TabPanel>
                        <TabPanel>
                            <h2> </h2>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedGadgets;