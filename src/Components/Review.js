import React from 'react';

const Review = ({ review }) => {
    const { name, picture, description } = review;
    return (
        <div class="card w-80 lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img className='w-4' src='https://www.clipartmax.com/png/middle/125-1257681_%E2%80%9D-wiktionary-%E2%80%9D-quotes-icon.png' alt='' />
                <div class="avatar flex items-center justify-center m-2">
                    <div class="w-24 ring ring-primary h-24 rounded-full">
                        <img src={picture} alt='' />
                    </div>
                </div>
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;