import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";

const ProductDetailes = () => {
    const {productId} = useParams();
    const id = parseInt(productId)

    const data = useLoaderData();

    const product = data.find(product => product.product_id === productId)
    console.log(data, product, productId, id);
    
    const { product_title, price, product_image, description, specification, availability, rating } = product;

    return (
        <div className=''>
            <div className='bg-[#9538E2] py-8 h-[463px]'>
                <h2 className='text-[2rem] text-white font-bold text-center mb-4'>Product Details</h2>
                <p className='text-white font-normal text-base text-center lg:w-[796px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        <div className="hero lg:max-w-[1120px] mx-auto bg-white rounded-2xl py-8 -mt-60">
            <div className="hero-content  flex-col-reverse gap-6 lg:flex-row-reverse">
                <div className="text-left lg:text-left">
                    <h1 className="text-3xl font-semibold leading-relaxed">{product_title}</h1>
                    <p className='text-xl font-semibold py-2'>Price: $ {price}</p>
                    <div className="badge badge-outline bg-[#ddf7d9] p-3 text-[#23BE0A] font-bold">{availability? "In Stock": "Sold Out"}</div>
                    <p className="text-lg font-normal py-2 text-black/60">{description}</p>
                    <p className='text-lg font-normal py-2 text-black/60'><span className=' font-bold text-black'>Specification: </span>
                        {
                            specification.map((specific, index) => <li key={index}>{specific}</li>)
                        }
                    </p>
                    <p className=' text-black'><span className='font-bold'>Rating:</span><span className='flex items-center text-[#F9C004] text-xl'> 
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStarBorder className='text-black font-normal' /> 
                        <span className='text-black  text-sm bg-slate-300 py-1 px-2 rounded-full ml-2'>{rating}</span>
                        </span>
                    </p>
                    <div className='flex items-center gap-6'>
                    <button className='flex items-center gap-4 bg-[#9538E2] text-white mt-4 py-3 px-6 rounded-full'>Add To Cart <BsCart3 /></button>
                    <button className='mt-4 p-4 border rounded-full text-xl'><FaRegHeart /></button>
                    </div>
                </div>
                <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
                    <img src={product_image} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDetailes;