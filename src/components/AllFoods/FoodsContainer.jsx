import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';

const FoodsContainer = () => {
    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/foods').then(res => {
            setFoods(res.data);
        });
    }, [searchQuery]);

    const handleSearch = () => {
        axios.get(`http://localhost:5000/search-foods?name=${searchQuery}`).then(res => {
            setFoods(res.data);
        }).catch(error => {
            console.error('Error fetching search results:', error);
        });
    };

    return (
        <div className='container mx-auto'>
            <div className='flex justify-center my-5'>
                <div className="join">
                    <div>
                        <div>
                            <input
                                className="input input-bordered join-item"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="indicator">
                        <button onClick={handleSearch} className="btn join-item bg-orange-600 border-none text-white">Search</button>
                    </div>
                </div>
            </div>
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