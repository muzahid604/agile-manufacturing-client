import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ tool }) => {
    const { name, picture, MinOrder, FOBPrices } = tool;
    return (
        <div>
            <div class="card w-80 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={picture} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>MIN.ORDER : {MinOrder}</p>
                    <p>FOB PRICES :{FOBPrices}</p>
                    <div class="card-actions">
                        <Link to='/' className="btn btn-primary uppercase text-dark font-bold bg-gradient-to-r from-secondary to-primary">purchase</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;