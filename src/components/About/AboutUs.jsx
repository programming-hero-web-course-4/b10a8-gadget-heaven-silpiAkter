import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='bg-[#9538E2] flex flex-col items-center justify-center py-8 h-[260px] mb-4'>
                <h2 className='text-[2rem] text-white font-bold text-center mb-4'>About Us</h2>
                <p className='text-white font-normal text-base text-center lg:w-[796px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='max-w-7xl mx-auto py-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-80'>
                <div className='text-left'>
                    <h3 className='text-3xl font-bold mb-4'>Our Mission</h3>
                    <p className='text-base leading-relaxed'>To make advanced technology accessible and enjoyable for everyone by offering a diverse selection of quality products.</p>
                </div>
                <div className='text-left'>
                <h3 className='text-3xl font-bold mb-4'>Why Choose Gadgets Heaven?</h3>
                <ul className='list-none space-y-2'>
                    <li><span className='font-bold'>Curated Collection: </span>We handpick products from top brands.</li>
                    <li><span className='font-bold'>Competitive Prices: </span>Enjoy premium products at affordable rates.</li>
                    <li><span className='font-bold'>Exceptional Service: </span>Our team is here to assist you with any inquiries.</li>
                </ul>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-12'>
                <div className='text-center px-5'>
                    <img src="https://i.ibb.co.com/PjcyKL3/images-12.jpg" className=' mx-auto mb-4' alt="Smartphones" />
                    <h4 className='text-lg font-semibold mb-2'>Smartphones</h4>
                    <p className='text-sm text-gray-600 w-2/3 mx-auto'>Discover the latest models packed with high-performance features.</p>
                </div>
                <div className='text-center px-5'>
                    <img src="https://i.ibb.co.com/TbqPvvk/download-12.jpg" className='h-48 mx-auto mb-4' alt="Smartphones" />
                    <h4 className='text-lg font-semibold mb-2'>Wearables</h4>
                    <p className='text-sm text-gray-600 w-2/3 mx-auto'>Discover the latest models packed with high-performance features.</p>
                </div>
                <div className='text-center px-5'>
                    <img src="https://i.ibb.co.com/WFsFkp3/images-16.jpg" className=' mx-auto mb-4' alt="Smartphones" />
                    <h4 className='text-lg font-semibold mb-2'>Smart Home Devices</h4>
                    <p className='text-sm text-gray-600 w-2/3 mx-auto'>Discover the latest models packed with high-performance features.</p>
                </div>
            </div>
            <div className='bg-slate-500 text-white py-10 text-center'>
                <h3 className='text-2xl font-bold mb-4'>Our Commitment to Innovation</h3>
                <p className='max-w-md mx-auto'>We constantly update our inventory with the latest tech advancements, ensuring that our customers have access to the best products.</p>
                <button className='mt-6 px-6 py-2 bg-red-600 text-white rounded-full'>Join Our Community</button>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;