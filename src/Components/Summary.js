import React from 'react';

const Summary = ({ summary }) => {
    const { name, picture, description, quantity } = summary;
    return (
        <div>
            <div class="card h-full ">
                <figure class="px-10 pt-10">
                    <img src={picture} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h1 className='text-3xl text-red-800'>{quantity}</h1>
                    <h2 class="card-title text-xl">{name}</h2>
                    <p >{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;