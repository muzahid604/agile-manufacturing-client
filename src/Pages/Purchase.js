import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { toolId } = useParams()
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [toolId])
    const { _id, name, picture, MinOrder, FOBPrices, description, quantity } = tool;
    const updateForOrder = event => {
        event.preventDefault();
        let Quantity = parseInt(tool?.quantity);
        const minOrder = parseInt(tool?.MinOrder);
        const newQuantity = event?.target?.orderQuantity?.value;
        if (newQuantity >= minOrder && newQuantity < Quantity) {
            Quantity = Quantity - parseInt(newQuantity);
        }
        else {
            alert('You Can Not Order, Please Try Another Quantity')
        }
        console.log(Quantity)
        let updateTool = { Quantity };
        // send data to the server
        const url = `http://localhost:5000/products/${toolId}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTool)
        })
            .then(res => res.json())
            .then(data => {
                setTool(data)
                event.target.reset();
            })

    }
    return (
        <div>
            <div class="card w-full bg-base-100">
                <figure class="px-10 pt-10">
                    <img src={picture} alt="Shoes" class="w-80 rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>About This Tools : {description}</p>
                    <p>MIN.ORDER : {MinOrder}</p>
                    <p>FOB PRICES :{FOBPrices}</p>
                    <h1 className='text-xl'>Available:{quantity}</h1>
                    <form onSubmit={updateForOrder}>
                        <input type="number" class="input input-bordered w-full max-w-xs" name='orderQuantity' />
                        <input type="submit" value='Enter quantity' className='btn btn-xs m-5' />
                    </form>
                    <div class="card-actions">
                        <button className="btn btn-primary uppercase text-dark font-bold bg-gradient-to-r from-secondary to-primary">Make payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;