import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ tool }) => {
    const { _id, name, picture, MinOrder, FOBPrices } = tool;
    const navigate = useNavigate();
    const navigateToItemDetail = _id => {
        navigate(`/tools/${_id}`);
    }
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>MIN.ORDER : {MinOrder}</p>
                    <p>FOB PRICES :{FOBPrices}</p>
                    <div className="card-actions">
                        <button onClick={() => navigateToItemDetail(_id)} className="btn btn-primary uppercase text-dark font-bold bg-gradient-to-r from-secondary to-primary">purchase</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;