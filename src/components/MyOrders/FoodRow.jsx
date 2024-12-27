import React from 'react';
import { Link } from 'react-router-dom';

const FoodRow = ({ food, index, purchasedate }) => {
    const { _id, food_name, img, category, price, adder_email, adder_name } = food;
    const handleDelete = () => {

    }
    return (
        <tr>
            <th className='dark:text-white'>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-xl h-12">
                            <img
                                src={img}
                                alt={food_name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold dark:text-white">{food_name}</div>
                        <div className="text-sm opacity-50 dark:text-white">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-neutral badge-lg dark:text-white">{price}$</span>
            </td>
            <td>
                <div>
                    <div className="font-bold dark:text-white">{adder_name}</div>
                    <div className="text-sm opacity-50 dark:text-white">{adder_email}</div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold dark:text-white">12.12.12.</div>
                    <div className="text-sm opacity-50 dark:text-white">11:20PM</div>
                </div>
            </td>
            <td>
                <button onClick={handleDelete} className="btn border-none bg-orange-600 text-white font-semibold">Delete</button>
            </td>
        </tr>
    );
};

export default FoodRow;