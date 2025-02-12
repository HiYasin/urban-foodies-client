import React from 'react';
import axios from 'axios';
import useAuth from '../customHooks/useAuth';
import Swal from 'sweetalert2';

const AddFood = () => {
    const { user } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        const food_name = e.target.food_name.value;
        const img = e.target.img.value;
        const category = e.target.category.value;
        const origin = e.target.origin.value;
        const description = e.target.description.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
        const item = { food_name, img, category, origin, description, quantity, price, purchase: 0, adder_name: user.displayName, adder_email: user.email };
        //console.log(item);

        axios.post('https://urban-foodies-server.vercel.app/foods', item).then(res => {
            Swal.fire({
                title: "Food Added",
                text: "Food Informations Stored Successfully!",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#ea580c",
            }).then((result) => {
                if (result.isConfirmed) {
                    e.target.reset();
                }
            });
        })
            .catch(err => {
                Swal.fire({
                    title: "Error",
                    text: "Something error occured. Please try again.",
                    icon: "error",
                    confirmButtonText: "Try Again"
                })
            })

    }
    return (
        <div className='border container m-0 p-0 mx-auto rounded-2xl my-20 shadow-xl  bg-orange-100 dark:bg-orange-600 dark:bg-opacity-50'>

            <div className='m-5 md:m-10 lg:m-20'>
                <h2 className='text-3xl font-bold text-center dark:text-white'>Enter Food Details</h2>
                <form className='grid md:grid-cols-2 gap-5' onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Food Name</span>
                        </label>
                        <input type="text" name="food_name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Food Image URL</span>
                        </label>
                        <input type="text" name="img" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Category</span>
                        </label>
                        <input type="text" name="category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Food Origin</span>
                        </label>
                        <input type="text" name="origin" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Description</span>
                        </label>
                        <input type="text" name="description" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Quantity</span>
                        </label>
                        <input type="number" name="quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Price</span>
                        </label>
                        <input type="number" name="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 md:col-span-2">
                        <input type='submit' value={'Add Item'} className="btn bg-orange-500 border-none text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;