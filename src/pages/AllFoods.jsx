import React from 'react';
import FoodsContainer from '../components/AllFoods/FoodsContainer';
import Banner from '../components/AllFoods/Banner';

const AllFoods = () => {
    return (
        <div>
            <Banner></Banner>

            <FoodsContainer></FoodsContainer>
        </div>
    );
};

export default AllFoods;