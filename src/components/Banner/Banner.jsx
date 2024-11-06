import React from 'react';
import bannerIMG from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero bg-[#9538E2] min-h-[694px] max-w-[1540px] mx-auto flex flex-col rounded-2xl">
            <div className="hero-content text-center lg:max-w-[1120px]">
                <div className="py-12">
                    <h1 className="text-5xl font-bold text-white leading-snug">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6  text-white lg:max-w-[796px] mx-auto">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn bg-white rounded-full px-8 py-4">Shop Now</button>   
                </div>
            </div>
            <div className='p-6 bg-white/30 bg-opacity-15 border-2 rounded-3xl z-10 max-w-[1062px] mt-[400px] absolute'>
                    <img src={bannerIMG}
                        className='rounded-3xl max-h-[563px] object-cover' alt="" />
                </div>
        </div>
    );
};

export default Banner;