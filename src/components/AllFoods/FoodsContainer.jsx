import axios from 'axios';
import { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import Loading from '../Loading';

const FoodsContainer = () => {
    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        axios.get('https://urban-foodies-server.vercel.app/foods').then(res => {
            setFoods(res.data);
        });
    }, [searchQuery, foods]);

    const handleSearch = () => {
        axios.get(`https://urban-foodies-server.vercel.app/search-foods?name=${searchQuery}`).then(res => {
            setFoods(res.data);
        }).catch(error => {
            //console.error('Error fetching search results:', error);
        });
    };

    const handleSort = (sortOrder) => {
        const sortedFoods = [...foods].sort((a, b) => a.price - b.price);
        if (sortOrder === 'asc') {
            setFoods(sortedFoods);
        } else {
            setFoods(sortedFoods.reverse());
        }
    }

    return (
        <>
            {
                foods.length === 0 ? <Loading />
                    :
                    <>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-3 my-5'>
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
                            <div className="sort-select">
                                <select onChange={(e) => handleSort(e.target.value)} className="select select-bordered join-item bg-orange-600 border-none text-white">
                                    <option selected disabled>Sort by Price</option>
                                    <option value="asc">Price Ascending</option>
                                    <option value="desc">Price Descending</option>
                                </select>
                            </div>
                        </div>
                        <div className='bg-orange-100 dark:bg-orange-600 dark:bg-opacity-50 mt-4 rounded-2xl p-5'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {
                                    foods.map((food) => <FoodCard key={food._id} food={food}></FoodCard>)
                                }
                            </div>
                        </div>
                    </>
            }
        </>
    );
};

export default FoodsContainer;