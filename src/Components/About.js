import React from 'react';
import Footer from '../Common/Footer';
import Extra1 from './Extra1';

const About = () => {
    return (
        <div>
            <Extra1 />
            <div className='flex items-center flex-col'>
                <h1 className='text-5xl mt-20 mb-10'>CEO</h1>
                <div className='avatar'>
                    <div className='w-96 rounded-full'>
                        <img src="https://thumbs.dreamstime.com/b/electrical-engineer-standing-happy-control-room-66515441.jpg" alt="" />
                    </div>
                </div>
                <h1 className='text-3xl m-5'>William George Armstrong</h1>
            </div>
            <Footer />
        </div>
    );
};

export default About;