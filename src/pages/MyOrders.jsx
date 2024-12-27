import React, { useEffect, useState } from 'react';
import useAuth from '../customHooks/useAuth';
import axios from 'axios';
import FoodRow from '../components/MyOrders/FoodRow';

const MyOrders = () => {
    const { user } = useAuth();
    const [foods, setFoods] = useState([]);
    const [ trigger, setTrigger ] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:5000/myorder?email=${user.email}`).then(res => {
            //console.log(res.data);
            setFoods(res.data);
            setTrigger(false);
        })
    }, [trigger])
    return (
        <div className='w-10/12 max-w-screen-lg mx-auto rounded-2xl my-5 shadow-xl bg-base-100 dark:bg-slate-700 p-5'>
            <div className="overflow-x-auto bg-orange-100 dark:bg-orange-600 dark:bg-opacity-20 rounded-xl p-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='dark:text-white font-bold'>SL</th>
                            <th className='dark:text-white font-bold'>Name</th>
                            <th className='dark:text-white font-bold'>Price</th>
                            <th className='dark:text-white font-bold'>Owner</th>
                            <th className='dark:text-white font-bold'>Buying Date & Time</th>
                            <th className='dark:text-white font-bold'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map((food,index) => <FoodRow key={food._id} index={index} food={food} setTrigger={setTrigger}></FoodRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;