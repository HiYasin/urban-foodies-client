import React from 'react';
import FoodsContainer from './FoodsContainer';
import { Link } from 'react-router-dom';

const TopFoods = () => {
    return (
        <div className=''>
            <h2 className='text-orange-600 dark:text-white font-bold text-3xl md:text-5xl text-center mt-20'>Top Foods</h2>
            <FoodsContainer></FoodsContainer>
            <div className='flex justify-center mt-1'>
                <Link to={'/all-foods'} className='btn bg-orange-600 border-none text-white'>See All</Link>
            </div>
        </div>
    );
};

export default TopFoods;