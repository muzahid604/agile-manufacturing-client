import React from 'react';

const Tool = ({ tool }) => {
    const { name, picture } = tool;
    return (
        <div class="card lg:card-side h-full bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Album" class="rounded-xl w-48" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary text-center">Listen</button>
                </div>
            </div>
        </div>

    );
};

export default Tool;