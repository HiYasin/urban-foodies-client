import React from 'react';
import { Link } from 'react-router-dom';
const FoodCard = ({ food }) => {

    const { _id, food_name, img, category, origin, quantity, price, purchase = 0 } = food;
    const available = parseInt(quantity) - parseInt(purchase);
    return (
        <div className='grid grid-rows-subgrid'>
            <div className="card bg-base-100 dark:bg-slate-900 max-w-96 shadow-xl border border-orange-600">
                <figure className="px-5 pt-5">
                    <img
                        src={img}
                        alt={food_name}
                        className="rounded-xl" />
                </figure>
                <div className="card-body p-5 text-sm justify-end">
                    <h2 className="card-title text-left text-slate-950 dark:text-base-200">{food_name}</h2>
                    <div className='grid gap-3'>
                        <div className='flex justify-between items-center'>
                            <p className='text-orange-600 font-bold text-2xl'>{price}$</p>
                            <div className='text-orange-600 dark:text-white dark:bg-orange-600 font-bold bg-orange-300/50 rounded-full px-2'>{origin}</div>
                        </div>
                        <div className='grid grid-cols-2 border rounded-xl overflow-hidden'>
                            <p className='text-orange-600 border p-2 text-center'><p className='text-slate-900 dark:text-white font-bold'>Category</p> {category ? category : 'N/A'}</p>
                            <p className='text-orange-600 border p-2 text-center'><p className='text-slate-900 dark:text-white font-bold'>Available Quantity</p> {available}</p>
                        </div>

                    </div>
                    <Link to={`/foods/${_id}`} className="btn border-none text-white bg-orange-600 w-full">Detalis</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;