import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Categories from '../Categoties/Categories';


const AllProducts = () => {
    const productCarts = 9;
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const [currentProductCats, setCurrentProductCarts] = useState([]);


    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);                
                const uniqueCategories = ['All Products', ...new Set(data.map(product => product.category))];
                setCategories(uniqueCategories);

                setCurrentProductCarts(data.slice(0, productCarts));

        })
        .catch(error => console.error('Error fetching product', error));



    }, []);

    useEffect(() => {
        const filterdProducts = selectedCategory === "All Products" ? products : products.filter(product => product.category === selectedCategory);

    const displayProduct = filterdProducts.slice(0, Math.min(filterdProducts.length, productCarts));
        setCurrentProductCarts(displayProduct);
    }, [selectedCategory, products]);
    
    const handCategory = (category) => {
        setSelectedCategory(category);
    }


    return (
        <div className='mt-80 mb-12'>
            <h2 className='text-[2.5rem] font-bold py-12 text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex flex-col md:flex-row gap-4 max-w-7xl mx-auto'>

                <div className='w-[260px] h-[456px] shadow-lg rounded-lg p-6'>
                    {categories.length > 0 ? (
                        categories.map(category => <div key={category} onClick={() => handCategory(category)} className={`py-2 px-4 mb-2 rounded-full cursor-pointer ${selectedCategory === category ? 'bg-purple-600 text-white flex justify-center items-center': 'bg-gray-200 text-black text-center flex justify-center items-center'}`}>
                            <Categories category={category}></Categories>
                        </div>)
                    ): (
                        <p>Not Available</p>
                    )}
                </div>

                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {currentProductCats.map((product, index) =>(
                <Product key={index} product={product}></Product>
                ))}
                    {/* {
                        filterdProducts.map((product, index) => <Product key={index} product={product}></Product>)
                    } */}
                </div>
                
            </div>

        </div>
    );
};

export default AllProducts;