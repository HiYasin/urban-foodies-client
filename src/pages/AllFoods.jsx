import React from 'react';
import FoodsContainer from '../components/AllFoods/FoodsContainer';
import Banner from '../components/AllFoods/Banner';
import ContainerX from '../components/ContainerX';

const AllFoods = () => {
    return (
        <div>
            <Banner></Banner>
            <ContainerX>
                <FoodsContainer></FoodsContainer>
            </ContainerX>
        </div>
    );
};

export default AllFoods;