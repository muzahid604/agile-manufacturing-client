import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import auth from '../firebase.init';


const Purchase = () => {
    const { toolId } = useParams()
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `https://agile-manufacturing.herokuapp.com/products/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [toolId])
    const { name, picture, MinOrder, FOBPrices, description, quantity } = tool;
    // add 
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        let Quantity = parseInt(tool?.quantity);
        const minOrder = parseInt(tool?.MinOrder);
        const newQuantity = data.orderQuantity;
        if (newQuantity >= minOrder && newQuantity < Quantity) {
            Quantity = Quantity - parseInt(newQuantity);
        }
        else {
            alert('You Can Not Order, Please Try Another Quantity')
        }
        console.log(Quantity)
        let updateTool = { Quantity };
        // send data to the server
        const urli = `https://agile-manufacturing.herokuapp.com/products/${toolId}`;
        console.log(urli)
        fetch(urli, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTool)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTool(data)
                reset()
            })
        const url = `https://agile-manufacturing.herokuapp.com/orders`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                console.log(data)
            });
    }



    return (
        <div>
            <div className='flex'>
                <div className="card w-full m-4 lg:card-side h-full bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Album" className="rounded-xl w-48" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h2 className='text-xl'>About This Tool{description}</h2>
                        <h3>FOB PRICES : {FOBPrices}</h3>
                        <h3>MIN.ORDER : {MinOrder}</h3>
                        <h1 className='text-xl'>Available:{quantity}</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-50  mx-auto border p-4 m-2' >
                    <h4 className='font-bold text-3xl text-primary text-center m-4'>Purchase</h4>
                    <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 input input-bordered w-full max-w-xs' value={user.displayName} placeholder='user' {...register("displayName", { required: true })} />
                        <input className='mb-2 input input-bordered w-full max-w-xs' value={user.email} placeholder='user email' {...register("customer", { required: true })} />
                        <input className='mb-2 input input-bordered w-full max-w-xs' value={name} placeholder='product name' {...register("productName", { required: true })} />
                        <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter quantity' {...register("orderQuantity", { required: true })} />
                        <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter Phone number' {...register("phone")} />
                        <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter your address' {...register("address")} />
                        <input className='btn btn-xs' type="submit" value="Add For Me" />
                        <Link className='btn btn-outline font-bold mt-5' to='/tools'>Buy More</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;