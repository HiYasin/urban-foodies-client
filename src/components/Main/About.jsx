import React from 'react';
import img from '/src/assets/Offer/rest.png'
import img2 from '/src/assets/Offer/delicious.png'
const About = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-orange-600 dark:text-white font-bold text-3xl md:text-5xl text-center mt-20'>About Us</h2>
            <div className="grid md:grid-cols-2 items-center gap-5 md:gap-10 m-0 p-0">
                <div className=''>
                    <h1 className='dark:text-orange-600 text-3xl md:text-5xl text-extrabold py-5'>Why We Are Best</h1>
                    <p className='md:text-md lg:text-lg dark:text-white'>Welcome to <span className='text-orange-600 font-extrabold'>Urban Foodies</span>, where flavor meets excellence! Our restaurant website is designed to give you a seamless and satisfying experience. Explore our diverse menu featuring mouthwatering dishes crafted with the freshest ingredients. From sizzling burgers to gourmet pizzas and beyond, there's something for everyone. Our user-friendly interface makes online ordering a breeze, with exclusive deals and promotions just a click away. Stay updated with new menu additions, events, and offers through our dynamic blog section. With secure payments, fast delivery, and a commitment to quality, we guarantee a dining experience that’s unforgettable. Discover why we’re the best today!</p>
                </div>
                <div>
                    <img src={img} alt="Restaurant" className='w-full' />
                </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-5 md:gap-10 m-0 p-0">

                <div className='md:order-2'>
                    <h1 className='dark:text-orange-600 text-3xl md:text-5xl text-extrabold py-5'>How We Serve</h1>
                    <p className='md:text-md lg:text-lg dark:text-white'>At <span className='text-orange-600 font-extrabold'>Urban Foodies</span>, we believe great food starts with the finest ingredients and a passion for perfection. Our dishes are crafted with care, using only fresh, high-quality ingredients to deliver flavors that delight every palate. From our juicy, flame-grilled burgers to hand-tossed pizzas and vibrant salads, each dish is a testament to our dedication to taste and quality. Our chefs combine expertise with creativity to ensure every bite is a burst of flavor. Whether you're dining in or ordering online, our food promises satisfaction and freshness. Experience the difference in every meal – because your taste buds deserve the best!</p>
                </div>
                <div className='md:order-1'>
                    <img src={img2} alt="Restaurant" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default About;