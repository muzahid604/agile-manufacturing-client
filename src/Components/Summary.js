import React from 'react';

const Summary = ({ summary }) => {
    const { name, picture, description, quantity } = summary;
    return (
        <div>
            <div className="card h-full ">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h1 className='text-3xl text-red-800'>{quantity}</h1>
                    <h2 className="card-title text-xl">{name}</h2>
                    <p >{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;