import React from 'react';
import { Link } from 'react-router-dom';
const FoodCard = ({ food }) => {

    const { _id, food_name, img, category, origin, quantity, price, purchase } = food;
    const available = parseInt(quantity) - parseInt(purchase);
    return (
        <div className='grid grid-rows-subgrid'>
            <div className="card bg-base-100 dark:bg-slate-900 max-w-96 shadow-xl">
                <figure className="px-5 pt-5">
                    <img
                        src={img}
                        alt={food_name}
                        className="rounded-xl" />
                </figure>
                <div className="card-body text-sm">
                    <h2 className="card-title text-left text-orange-600">{food_name}</h2>
                    <div className='flex gap-3'>
                        <div>
                            <p className='text-orange-600'><span className='text-slate-900 dark:text-white font-bold'>Category:</span> {category? category: 'N/A'}</p>
                            <p className='text-orange-600'><span className='text-slate-900 dark:text-white font-bold'>Origin:</span> {origin? origin: 'N/A'}</p>
                        </div>
                        <div>
                            <p className='text-orange-600'><span className='text-slate-900 dark:text-white font-bold'>Price:</span> {price? price: 'N/A'}</p>
                            <p className='text-orange-600'><span className='text-slate-900 dark:text-white font-bold'>Available Quantity:</span> {available? available: 'N/A'}</p>
                        </div>
                    </div>
                    <Link to={`/foods/${_id}`} className="btn border-none text-white bg-orange-600">Detalis</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;