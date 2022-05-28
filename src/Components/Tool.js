import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, picture, MinOrder, FOBPrices } = tool;
    const navigate = useNavigate();
    const navigateToItemDetail = _id => {
        navigate(`/tools/${_id}`);
    }
    return (
        <div className='flex'>
            <div className='lg:w-80'></div>
            <div className="card w-full m-4 lg:card-side h-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Album" className="rounded-xl w-48" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3>FOB PRICES : {FOBPrices}</h3>
                    <h3>MIN.ORDER : {MinOrder}</h3>
                    <div className="card-actions justify-start">
                        <button onClick={() => navigateToItemDetail(_id)} className="btn btn-primary uppercase text-dark font-bold bg-gradient-to-r from-secondary to-primary">purchase</button></div>
                </div>
            </div>
        </div>

    );
};

export default Tool;