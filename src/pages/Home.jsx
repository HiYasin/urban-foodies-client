import React from 'react';
import Banner from '../components/Banner/Banner';
import Offer from '../components/Main/Offer';
import About from '../components/Main/About';
import TopFoods from '../components/TopFoods/TopFoods';
import ContainerX from '../components/ContainerX';

const Home = () => {
    return (
        <div className='py-8'>
            <ContainerX>
                <Banner></Banner>
                <TopFoods></TopFoods>
                <Offer></Offer>
                <About></About>
            </ContainerX>
        </div>
    );
};

export default Home;