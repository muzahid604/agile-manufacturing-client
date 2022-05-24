import React from 'react';

const InfoCard = ({ img, cardTitle, cardDes }) => {
    return (
        <div className={`card lg:card-side bg-primary `}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDes}</p>
            </div>
        </div>
    );
};

export default InfoCard;