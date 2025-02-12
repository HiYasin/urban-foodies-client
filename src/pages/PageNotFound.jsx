import React from 'react';
import { Link } from 'react-router';
import error from '../assets/error.json';
import Lottie from 'lottie-react';
const PageNotFound = () => {
    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-5'>
            <Lottie animationData={error}></Lottie>
            <h5 className='text-2xl md:text-4xl text-orange-600'>Page Not Found!</h5>
            <Link to={'/'}>
                <button className='btn btn-outline border-orange-600 text-orange-600 hover:text-orange-600 hover:bg-orange-600/30 hover:border-orange-600'>Go to Home</button>
            </Link>
        </div>
    );
};

export default PageNotFound;