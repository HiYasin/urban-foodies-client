import React from 'react';
import { Link } from 'react-router';
import register from '../assets/register.json';
import Lottie from 'lottie-react';
const PageNotFound = () => {
    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-5'>
            <h5 className='text-5xl md:text-8xl'>404</h5>
            <Lottie animationData={register}></Lottie>
            <h5 className='text-2xl md:text-4xl'>Page Not Found!</h5>
            <Link to={'/'}>
                <button className='btn btn-outline'>Go to Home</button>
            </Link>
        </div>
    );
};

export default PageNotFound;