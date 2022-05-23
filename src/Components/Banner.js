import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-div'>
            <img src="https://i.ibb.co/fYMFqvm/lalit-kumar-Hp-Pmidu-LDC0-unsplash.jpg" alt="" />
            <div className='banner-text'>
                <h1 className='uppercase'> touch the soul of tools become the world's agile</h1>
                <h4 className='' >We strive to empower more people to enjoy the benefits of the latest lithium battery technology.</h4>
                <Link to='/'>
                    <button className="btn btn-primary uppercase text-dark font-bold bg-gradient-to-r from-secondary to-primary">Learn more</button>

                </Link>
            </div>
        </div>
    );
};

export default Banner;