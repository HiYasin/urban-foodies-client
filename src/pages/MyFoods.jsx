import React, { useEffect, useState } from 'react';
import useAuth from '../customHooks/useAuth';
import axios from 'axios';
import FoodRow from '../components/MyFoods/FoodRow';

const MyFoods = () => {
    const { user } = useAuth();
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/food?email=${user.email}`).then(res => {
            //console.log(res.data);
            setFoods(res.data);
        })
    }, [])
    return (
        <div className='w-10/12 max-w-screen-lg mx-auto rounded-2xl my-5 shadow-xl bg-orange-100 dark:bg-orange-600 dark:bg-opacity-20 p-5'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='dark:text-white font-bold'>SL</th>
                            <th className='dark:text-white font-bold'>Name</th>
                            <th className='dark:text-white font-bold'>Price</th>
                            <th className='dark:text-white font-bold'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map((food,index) => <FoodRow key={food._id} index={index} food={food}></FoodRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoods;