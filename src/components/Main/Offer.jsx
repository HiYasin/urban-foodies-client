import React from 'react';
import offerImag from '/src/assets/Gallery/3.png'
import run from '/src/assets/Offer/run.jpg'
const Offer = () => {
    return (
        <div className='mt-10 md:mt-20'>
            <h2 className='text-orange-600 dark:text-white font-bold text-3xl md:text-5xl text-center py-5'><div className="divider dark:divider-neutral">Discount on Top Selling Food</div></h2>
            <div className="max-w-screen-md mx-auto grid gap-2 p-5 md:p-10 items-center rounded-2xl my-10 shadow-xl bg-orange-100 dark:bg-orange-600 dark:bg-opacity-50">
                <div className='flex flex-col justify-center'>
                    <h1 className='dark:text-white font-bold text-5xl text-orange-600 text-left py-5'>Buy One Get One</h1>
                    <p className='dark:text-white italic text-3xl'>Craving something delicious?</p>
                    <p className='dark:text-white font-bold text-orange-600 text-3xl'>Dive into the ultimate indulgence with our juicy, cheesy burger topped with crispy bacon!</p>
                </div>
                <div className='overflow-hidden'>
                    <img src={offerImag} alt="Offer" className='w-full rounded-box' />
                </div>
            </div>
        </div>
    );
};

export default Offer;