import React from 'react';

const Tool = ({ tool }) => {
    const { name, picture, MinOrder, FOBPrices } = tool;
    return (
        <div className='flex'>
            <div className='lg:w-80'></div>
            <div class="card w-full m-4 lg:card-side h-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Album" class="rounded-xl w-48" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <h3>FOB PRICES : {FOBPrices}</h3>
                    <h3>MIN.ORDER : {MinOrder}</h3>
                    <div class="card-actions justify-start">
                        <button className="btn btn-primary uppercase text-dark font-bold bg-gradient-to-r from-secondary to-primary">purchase</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tool;