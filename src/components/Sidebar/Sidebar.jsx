import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('./gadgetsByCategory.json')
            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, []);

    return (
        <div className='mt-80'>
            <h3 className='bg-purple-600 text-white font-bold text-lg rounded-full p-2 text-center'>All Products</h3>
            {
                categories.map((category, idx) => (<li key={idx} className='mb-2 rounded-full py-2 px-4'>
                    <Link to={`/sidebar/${category.category_name}`}></Link>
                </li>))
            }
        </div>
    );
}

export default Sidebar;