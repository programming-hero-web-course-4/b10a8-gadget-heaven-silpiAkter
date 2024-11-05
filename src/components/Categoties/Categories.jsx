import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        fetch('/gadgetsByCategory.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);

    return (
        <div className='w-[240px] max-h-[556px] shadow-lg rounded-lg p-6'>
            {
                categories.map(category => (<Link key={category.category} to='product'></Link>))
            }        
        </div>
    );
};

export default Categories;