import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Payment = () => {
    const { orderId } = useParams()
    const [pOrder, setPOrder] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://agile-manufacturing.herokuapp.com/order?customer=${user.email}`, {
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
        reset()
    }
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div>
                    <img className='w-0 lg:w-full' src="https://p.kindpng.com/picc/s/453-4537293_pay-with-paypal-logo-paypal-payment-method-logo.png" alt="" />
                </div>
                <div className='card shadow-xl w-96 m-4 py-10' >
                    <h1 className='text-4xl text-primary text-center my-10'>Payment</h1>
                    <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 input input-bordered w-full max-w-xs' value={user.displayName} placeholder='user' {...register("displayName", { required: true })} />
                        <input className='mb-2 input input-bordered w-full max-w-xs' value={user.email} placeholder='user email' {...register("customer", { required: true })} />
                        <div className="form-control">
                            <div className="input-group">
                                <select className="select select-bordered">
                                    <option disabled>Pay with</option>
                                    <option>VISA</option>
                                    <option>MASTER CARD</option>
                                    <option>PAYPAL</option>
                                    <option>bKash</option>
                                    <option>tCash</option>
                                </select>
                            </div>
                        </div>
                        {/* <input className='mb-2 input input-bordered w-full max-w-xs' value='' placeholder='product name' {...register("productName", { required: true })} /> */}
                        <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='$USD' {...register("$USD", { required: true })} />
                        <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter Phone number' {...register("phone")} />
                        <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter your address' {...register("address")} />
                        <Link to='/thanks' className='btn'>PAY NOW</Link>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Payment;