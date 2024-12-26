import React from 'react';
const Banner = () => {
    return (
        <div className="hero object-cover h-[50vh] bg-[url('/src/assets/Gallery/gallery1.jpg')] container mx-auto rounded-box overflow-hidden">
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold bg-orange-600/50 p-2 pb-4 italic rounded-box text-white">Explore Our Signature Dishes</h1>
                    <p className="mb-5 text-white font-medium text-sm md:text-md">
                        Indulge in a culinary journey like no other! Discover our chef’s handpicked selection of signature dishes, crafted with the finest ingredients and bursting with flavor. From appetizers to desserts, each plate tells a story of passion and excellence. Treat your taste buds to an unforgettable dining experience today!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;