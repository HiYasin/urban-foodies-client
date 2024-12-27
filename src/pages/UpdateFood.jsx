



// export default UpdateFood;
import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../customHooks/useAuth';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateFood = () => {

    const currentData = useLoaderData();
    const [foodData, setFoodData] = useState(currentData);
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFoodData({
            ...foodData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItem = { ...foodData, adder_name: currentData.adder_name, adder_email: currentData.adder_email };
        console.log(updatedItem);

        axios.put(`http://localhost:5000/update`, updatedItem).then(res => {
            console.log(res.data);
            Swal.fire({
                title: "Food Updated",
                text: "Food Information Updated Successfully!",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#3085d6"
            });
            navigate('/my-foods');
        }).catch(err => {
            console.log(err);
            Swal.fire({
                title: "Error",
                text: "There was an error updating the food information.",
                icon: "error",
                confirmButtonText: "Ok",
                confirmButtonColor: "#d33"
            });
        });

    };

    return (
        <div className='border container mx-auto rounded-2xl my-20 shadow-xl  bg-orange-100 dark:bg-orange-600 dark:bg-opacity-50'>
            <div className='m-5 md:m-10 lg:m-20'>
                <h2 className='text-3xl font-bold text-center dark:text-white'>Enter Food Details</h2>
                <form className='grid md:grid-cols-2 gap-5' onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Food Name</span>
                        </label>
                        <input type="text" name="food_name" className="input input-bordered" onChange={handleChange} value={foodData.food_name} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Food Image URL</span>
                        </label>
                        <input type="text" name="img" className="input input-bordered" onChange={handleChange} value={foodData.img} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Category</span>
                        </label>
                        <input type="text" name="category" className="input input-bordered" onChange={handleChange} value={foodData.category} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Food Origin</span>
                        </label>
                        <input type="text" name="origin" className="input input-bordered" onChange={handleChange} value={foodData.origin} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Description</span>
                        </label>
                        <input type="text" name="description" className="input input-bordered" onChange={handleChange} value={foodData.description} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Quantity</span>
                        </label>
                        <input type="number" name="quantity" className="input input-bordered" onChange={handleChange} value={foodData.quantity} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Price</span>
                        </label>
                        <input type="number" name="price" className="input input-bordered" onChange={handleChange} value={foodData.price} required />
                    </div>
                    <div className="form-control mt-6 md:col-span-2">
                        <input type='submit' value={'Add Item'} className="btn bg-orange-500 border-none text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;