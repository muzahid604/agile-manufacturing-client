import React from 'react';
import { Link } from 'react-router-dom';

const ThanksPay = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <img className='w-96' src="https://i0.wp.com/www.thank-you-note-samples.com/wp-content/uploads/2020/01/shopping-business-money-pay-50987.jpg?fit=640%2C426&ssl=1" alt="" />
            <h1 className=' text-4xl m-5 text-red-600'>PAID WITH THANKS</h1>
            <Link className='btn btn-outline font-bold mt-5' to='/'>GO TO HOME PAGE</Link>
        </div>
    );
};

export default ThanksPay;