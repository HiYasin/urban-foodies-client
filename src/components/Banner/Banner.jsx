import React from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:justify-between items-center">
                <div className="w-[80%] mx-auto">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-orange-600 text-balance">Let's Revolutionize Your Restaurant Experience With Us</h1>
                        <p className="text-sm md:text-lg mt-2 text-slate-900 dark:text-white"> Welcome to a smarter way to manage your restaurant! Our comprehensive system empowers you to handle reservations, orders, staff schedules, and inventory—all in one place. Enhance customer satisfaction, reduce waste, and maximize profits with our user-friendly platform tailored for the food service industry.</p>
                        <p className="md:text-xl mt-4 text-orange-600 font-semibold">Take the first step toward seamless restaurant management</p>
                        <div>
                            <Link to={'/all-foods'} className='btn border-none bg-orange-600 text-white'>Get Start</Link>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] max-w-[400px] ">
                    <Slider></Slider>
                </div>
            </div>
        </div>
    );
};

export default Banner;