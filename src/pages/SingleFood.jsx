import React from 'react';
import { Link, ScrollRestoration, useLoaderData } from 'react-router-dom';

const SingleFood = () => {
    const food = useLoaderData();
    // console.log(food);
    const { _id, food_name, img, category, origin, description, quantity, price, adder_name, adder_email, purchase=0 } = food;
    //console.log(typeof purchase);
    //console.log(typeof quantity);
    return (
        <div className='w-10/12 max-w-screen-lg mx-auto rounded-2xl my-5 shadow-xl bg-orange-100 dark:bg-orange-600 dark:bg-opacity-20 '>
            <div className='grid p-5 md:grid-cols-2 gap-5 md:gap-8'>
                <div className='flex justify-center'>
                    <img src={img} alt={food_name} className='rounded-lg w-full' />
                </div>
                <div className='flex flex-col gap-5 justify-center'>
                    <div className='space-y-1'>
                        <h2 className='text-orange-600 font-bold italic text-3xl md:text-5xl'>{food_name}</h2>
                        <h3 className='text-slate-900 dark:text-white font-bold text-xl md:text-3xl'>{category}</h3>
                        <p className='text-slate-900 dark:text-white font-semibold text-lg'>{description}</p>
                        <p className='text-slate-900 dark:text-white font-semibold text-lg'>Origin: <span className='text-orange-600'>{origin}</span></p>
                        <p className='text-slate-900 dark:text-white font-semibold text-lg'>Price: <span className='text-orange-600'>{price}</span></p>
                        <p className='text-slate-900 dark:text-white font-semibold text-lg'>Listed by:</p>
                        <p className='text-slate-900 dark:text-white font-semibold text-lg'>Name: <span className='text-orange-600'>{adder_name}</span></p>
                        <p className='text-slate-900 dark:text-white font-semibold text-lg'>Email: <span className='text-orange-600'>{adder_email}</span></p>
                    </div>
                    <div>
                        <p className='text-slate-900 dark:text-white font-semibold text-lg'>Purchased: <span className='text-orange-600'>{purchase}</span></p>
                        <p className='text-slate-900 dark:text-white font-semibold text-lg'>Available: <span className='text-orange-600'>{quantity-purchase}</span></p>
                    </div>
                    <div>
                        <Link to={`/purchase/${_id}`} className='btn bg-orange-600 text-white font-bold text-lg border-none'>Purchase</Link>
                    </div>
                </div>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default SingleFood;