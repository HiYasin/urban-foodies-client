import React from 'react';
import { Link } from 'react-router-dom';

const FoodRow = ({ food, index }) => {
    const { _id, food_name, img, category, price } = food;
    return (
        <tr>
            <th>
                {index+1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={img}
                                alt={food_name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{food_name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-neutral badge-lg">{price}$</span>
            </td>
            <th>
                <Link to={`/update-food/${_id}`} className="btn border-none bg-orange-600 text-white font-semibold">Update</Link>
            </th>
        </tr>
    );
};

export default FoodRow;