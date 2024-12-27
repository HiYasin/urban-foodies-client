import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import Banner from './Banner';

const FoodsContainer = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/foods').then(res => {
            //console.log(res.data);
            setFoods(res.data);
        })
    }, []);
    //console.log(foods.length);

    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <div className='bg-orange-100 dark:bg-orange-600 dark:bg-opacity-50 mt-4 rounded-md p-5'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {
                        foods.map((food) => <FoodCard key={food._id} food={food}></FoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodsContainer;