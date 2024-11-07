import { Link, useLoaderData } from 'react-router-dom';

const Categories = ({category}) => {

    return (
        <div >
            <div className=' flex justify-between items-center mb-3'>
                {category}
            </div>
        </div>
    );
};

export default Categories;