import React from 'react';
import FoodsContainer from './FoodsContainer';
import { Link } from 'react-router-dom';

const TopFoods = () => {
    return (
        <div id='top-foods'>
            <h2 className='text-orange-600 dark:text-white font-bold text-3xl md:text-5xl text-center mt-20 mb-5 md:mb-10'><div className="divider dark:divider-neutral">Top Foods</div></h2>
            <FoodsContainer></FoodsContainer>
            <div className='flex justify-center mt-1'>
                <Link to={'/all-foods'} className='btn bg-orange-600 border-none text-white min-w-[200px]'>See All</Link>
            </div>
        </div>
    );
};

export default TopFoods;