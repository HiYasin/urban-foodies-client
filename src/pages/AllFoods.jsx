import React from 'react';
import FoodsContainer from '../components/AllFoods/FoodsContainer';
import Banner from '../components/AllFoods/Banner';
import ContainerX from '../components/ContainerX';
import { ScrollRestoration } from 'react-router-dom';

const AllFoods = () => {
    return (
        <div>
            <Banner></Banner>
            <ContainerX>
                <FoodsContainer></FoodsContainer>
            </ContainerX>
            <ScrollRestoration />
        </div>
    );
};

export default AllFoods;