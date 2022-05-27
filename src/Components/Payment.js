import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Payment = () => {
    const { orderId } = useParams()
    const [pOrder, setPOrder] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    console.log(res)
                    if (res.status === 401) {
                        navigate('/')
                    }
                    else if (res.status === 403) {

                        navigate('/')
                    }
                    return res.json()

                })
                .then(data => {

                    setPOrder(data)
                })

        }
    }, [orderId])
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {

    }
    return (
        <div>
            <h1>Payment for</h1>
            <div className='w-50  mx-auto border p-4 m-2' >
                <h4 className='font-bold text-3xl text-primary text-center m-4'>Purchase</h4>
                <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 input input-bordered w-full max-w-xs' value={user.displayName} placeholder='user' {...register("displayName", { required: true })} />
                    <input className='mb-2 input input-bordered w-full max-w-xs' value={user.email} placeholder='user email' {...register("customer", { required: true })} />
                    <input className='mb-2 input input-bordered w-full max-w-xs' value='' placeholder='product name' {...register("productName", { required: true })} />
                    <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter quantity' {...register("orderQuantity", { required: true })} />
                    <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter Phone number' {...register("phone")} />
                    <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter your address' {...register("address")} />
                    <input className='btn btn-xs' type="submit" value="Add For Me" />
                </form>
            </div>

        </div>
    );
};

export default Payment;