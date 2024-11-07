import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Categories from '../Categoties/Categories';

const Sidebar = () => {

    // const categories = useLoaderData()  || [];
    // const [categories, setCategories] = useState();

    // useEffect(() => {
    //     fetch('./categories.json')
    //         .then(res => res.json())
    //         .then(data => setCategories(data.categoryName))
    // }, []);

    return (
        <div className=''>
            {/* <h3 className='bg-[#9538E2] text-white font-bold text-lg rounded-full p-2 text-center'>All Products</h3> */}
            {/* {
                categories.map(category => (<Categories key={category.category} to='product' role="tab" className="tab text-white ">{category.category}</Categories>))
            } */}
            {/* {
                        categories && categories.length > 0 ? (
                            
                        ) : (<p>No data availavle</p>)
                    }; */}
            {/* {
                categories.map(category => <Categories key={id} category={category}></Categories>)
                categories.map((category, idx) => (<li key={idx} className='mb-2 rounded-full py-2 px-4'>
                    <Link to={`/sidebar/${category.category_name}`}></Link>
                </li>))
            } */}
        </div>
    );
}

export default Sidebar;