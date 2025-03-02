import React from 'react';
import Banner from '../components/Banner/Banner';
import Offer from '../components/Main/Offer';
import About from '../components/Main/About';
import TopFoods from '../components/TopFoods/TopFoods';
import ContainerX from '../components/ContainerX';
import Categories from '../components/Categories';
import { ScrollRestoration } from 'react-router-dom';

const Home = () => {
    return (
        <div className='py-8'>
            <ContainerX>
                <Banner></Banner>
                <Categories />
                <TopFoods></TopFoods>
                <Offer></Offer>
                <About></About>
            </ContainerX>
            <ScrollRestoration />
        </div>
    );
};

export default Home;