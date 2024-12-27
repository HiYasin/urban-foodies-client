import React from 'react';
import Banner from '../components/Banner/Banner';
import Offer from '../components/Main/Offer';
import About from '../components/Main/About';

const Home = () => {
    return (
        <div className='py-8'>
            <Banner></Banner>
            <Offer></Offer>
            <About></About>
        </div>
    );
};

export default Home;