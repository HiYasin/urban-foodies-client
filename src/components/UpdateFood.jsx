import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../customHooks/useAuth';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateFood = () => {
    const { user } = useAuth();
    const currentData = useLoaderData();
    const [foodData, setFoodData] = useState(currentData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFoodData({
            ...foodData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItem = { ...foodData, adder_name: user.displayName, adder_email: user.email };
        //console.log(updatedItem);

        axios.put(`https://urban-foodies-server.vercel.app/foods/${foodData.id}`, updatedItem).then(res => {
            Swal.fire({
                title: "Food Updated",
                text: "Food Information Updated Successfully!",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#3085d6"
            });
        }).catch(err => {
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
        <form onSubmit={handleSubmit}>
            <input type="text" name="food_name" value={foodData.food_name} onChange={handleChange} placeholder="Food Name" />
            <input type="text" name="img" value={foodData.img} onChange={handleChange} placeholder="Image URL" />
            <input type="text" name="category" value={foodData.category} onChange={handleChange} placeholder="Category" />
            <input type="text" name="origin" value={foodData.origin} onChange={handleChange} placeholder="Origin" />
            <textarea name="description" value={foodData.description} onChange={handleChange} placeholder="Description"></textarea>
            <input type="number" name="quantity" value={foodData.quantity} onChange={handleChange} placeholder="Quantity" />
            <input type="number" name="price" value={foodData.price} onChange={handleChange} placeholder="Price" />
            <button type="submit">Update Food</button>
        </form>
    );
};

export default UpdateFood;