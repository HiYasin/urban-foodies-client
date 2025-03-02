import React, { useEffect, useState } from 'react';
import useAuth from '../customHooks/useAuth';
import { ScrollRestoration, useLoaderData, useNavigate } from 'react-router-dom';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';
import ContainerX from '../components/ContainerX';

const Purchase = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const food = useLoaderData();
    const [purchaseIt, setPurchaseIt] = useState(true);
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    const { _id, food_name, img, category, origin, description, quantity, price, adder_name, adder_email, purchase = 0 } = food;

    const available = parseInt(quantity) - parseInt(purchase);
    useEffect(() => {
        setCurrentDate(moment().format('MMM Do YY'));
        setCurrentTime(moment().format('h:mm:ss a'));
        if (available > 0) {
            setPurchaseIt(true);
        } else {
            setPurchaseIt(false);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const buying_quantity = event.target.buying_quantity.value;
        const newPurchase = parseInt(purchase) + parseInt(buying_quantity);
        const item = { food_name, img, price, adder_email, adder_name, buying_quantity, buyer_email: user.email, buying_date: currentDate, buying_time: currentTime };
        const updatedItem = { _id, food_name, img, category, origin, description, quantity, price, adder_name, adder_email, purchase: newPurchase.toString() };
        //console.log(item);
        if (adder_email === user.email) {
            Swal.fire({
                title: "Error",
                text: "Since this is your added item, you can't buy it.",
                icon: "error",
                confirmButtonText: "Ok"
            })
        }
        else if (buying_quantity <= (quantity - purchase) && buying_quantity > 0) {
            axios.post('https://urban-foodies-server.vercel.app/purchase', item).then(res => {
                axios.put(`https://urban-foodies-server.vercel.app/update`, updatedItem).then(res => {
                    //console.log(res.data);
                }).catch(err => {
                    //console.log(err);
                    Swal.fire({
                        title: "Error",
                        text: "Something error occured. Please try again.",
                        icon: "error",
                        confirmButtonText: "Try Again"
                    })
                });
                Swal.fire({
                    title: "Purchase",
                    text: "Food Purchased Successfully!",
                    icon: "success",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#ea580c",
                }).then((result) => {
                    if (result.isConfirmed) {
                        event.target.reset();
                        navigate(-1);
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
        } else {
            Swal.fire({
                title: "Error",
                text: "Please enter valid buying quantity.",
                icon: "error",
                confirmButtonText: "Try Again"
            })
        }
    };
    return (
        <ContainerX>
            <div className='mx-auto rounded-2xl my-5 shadow-xl bg-orange-100 dark:bg-orange-600 dark:bg-opacity-50 '>
                <div className='grid p-5 md:grid-cols-2 gap-5'>
                    <div className='order-2 md:order-1'>
                        <h2 className='text-3xl font-bold text-center dark:text-white'>Purchase Information</h2>
                        <div>
                            <form className='grid sm:grid-cols-2 gap-2' onSubmit={handleSubmit}>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Food Name</span>
                                    </label>
                                    <input type="text" className="input input-bordered w-full" value={food_name} disabled />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Price</span>
                                    </label>
                                    <input type="number" className="input input-bordered w-full" value={price} disabled />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Available Quantity</span>
                                    </label>
                                    <input type="number" className="input input-bordered w-full" value={available} disabled />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Buying Quantity</span>
                                    </label>
                                    <input type="number" name="buying_quantity" className="input input-bordered w-full" required />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Buying Date</span>
                                    </label>
                                    <input type="text" className="input input-bordered w-full" value={currentDate} disabled />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Buying Time</span>
                                    </label>
                                    <input type="text" className="input input-bordered w-full" value={currentTime} disabled />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Buyer Name</span>
                                    </label>
                                    <input type="text" className="input input-bordered w-full" value={user.displayName} disabled />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Buyer Email</span>
                                    </label>
                                    <input type="text" className="input input-bordered w-full" value={user.email} disabled />
                                </div>
                                <div className="mt-5">
                                    <input type='submit' value={'Purchase Confirm'} className="btn border-none disabled:text-white bg-orange-600" disabled={!purchaseIt}/>
                                    <p>
                                        {
                                            purchaseIt || <span className="label-text dark:text-white">Item is not available!</span>
                                        }
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='order-1 md:order-2 md:w-full mx-auto my-auto'>
                        <img src={img} alt={food_name} className='w-full rounded-box' />
                    </div>
                </div>
                <ScrollRestoration />
            </div>
        </ContainerX>
    );
};

export default Purchase;