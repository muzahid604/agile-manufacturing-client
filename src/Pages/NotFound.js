import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-col w-96 mx-auto mt-20 items-center'>
                <img src="https://i.ibb.co/D836KPC/i-Stock-1142986365.jpg" alt="" />
                <Link className='btn btn-outline font-bold mt-5' to='/'>GO TO HOME PAGE</Link>
            </div>
        </div>
    );
};

export default NotFound;