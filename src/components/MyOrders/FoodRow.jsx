import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FoodRow = ({ food, index, setTrigger }) => {
    const { _id, food_name, img, category, price, adder_email, adder_name, buying_date, buying_time, buying_quantity } = food;
    //console.log(food);
    const handleDelete = () => {
        axios.delete(`https://urban-foodies-server.vercel.app/myorder/${_id}`)
            .then(response => {
                Swal.fire('Deleted!', 'The food item has been deleted.', 'success');
                setTrigger(true);
            })
            .catch(error => {
                console.log(error);
                Swal.fire('Error!', 'There was an error deleting the food item.', 'error');
            });
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
                <div className="font-bold dark:text-white">{buying_quantity}</div>
            </td>
            <td>
                <div>
                    <div className="font-bold dark:text-white">{buying_date}</div>
                    <div className="text-sm opacity-50 dark:text-white">{buying_time}</div>
                </div>
            </td>
            <td>
                <button onClick={handleDelete} className="btn border-none bg-orange-600 text-white font-semibold">Delete</button>
            </td>
        </tr>
    );
};

export default FoodRow;