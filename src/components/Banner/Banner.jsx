import React from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Banner = () => {
    return (
        <div className='mx-auto'>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 md:flex-row md:justify-between items-center">
                <div className=" mx-auto">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-5xl font-bold text-orange-600 md:text-balance">Let's Revolutionize Your Restaurant Experience With Us</h1>
                        <p className="text-balance text-sm md:text-lg mt-2 text-slate-900 dark:text-white"> Welcome to a smarter way to manage your restaurant! Our comprehensive system empowers you to handle reservations, orders, staff schedules, and inventory—all in one place. Enhance customer satisfaction, reduce waste, and maximize profits with our user-friendly platform tailored for the food service industry.</p>
                        <p className="text-center md:text-left md:text-xl mt-4 text-orange-600 font-semibold">Take the first step toward seamless restaurant management</p>
                        <div className="text-center md:text-left">
                            <Link to={'/all-foods'} className='btn border-none bg-orange-600 text-white'>Get Start</Link>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 max-w-[400px] overflow-hidden border rounded-full p-2 md:p-4 border-orange-600 mx-auto md:mx-0 md:ml-auto">
                    <div className='rounded-full overflow-hidden'>
                        <Slider></Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;