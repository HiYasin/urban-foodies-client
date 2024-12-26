import React from 'react';
const Banner = () => {
    return (
        <div className="hero object-cover h-[50vh] bg-[url('/src/assets/Gallery/gallery2.jpg')] rounded-box overflow-hidden">
            <div className="hero-overlay bg-opacity-30 hover:bg-opacity-60 cursor-pointer"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg cursor-pointer">
                    <h1 className="mb-2 text-3xl md:text-5xl font-bold p-2 pb-4 italic rounded-box text-orange-300">An Epicurean Wonderland Of Foods</h1>
                    <h2 className="mb-2 text-xl md:text-3xl font-bold p-2 pb-4 rounded-box text-white">Indulge in a Gastronomic Symphony</h2>
                    <p className="mb-5 text-white font-medium text-sm md:text-md">
                    Embark on a culinary odyssey brimming with delectable treasures. From tantalizing starters to decadent finales, each dish unveils a symphony of flavors, promising a perfect delight for every palate.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;