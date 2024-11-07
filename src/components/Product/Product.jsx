import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Product = ({ product }) => {

    const { product_id, product_image, product_title, price } = product;

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5 W-96">
            <figure>
                <img
                    src={product_image}
                    className='rounded-xl w-[340px] max-h-[181px]'
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}</p>

                <Link to={`allproducts/${product_id}`}>
                <div className="card-actions justify-start">
                    <button className="btn outline-[#9538E2] outline rounded-full font-semibold text-lg hover:bg-[#9538E2] hover:text-white">View Detailes</button>
                </div>
                </Link>

            </div>
        </div>
    );
};

export default Product;