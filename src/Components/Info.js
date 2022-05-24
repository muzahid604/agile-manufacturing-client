import React from 'react';
import InfoCard from './InfoCard';
import clock from '../assets/clock.svg'
import marker from '../assets/marker.svg'
import phone from '../assets/phone.svg'


const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-5'>
            <InfoCard cardTitle="ADRESS DETAILS" cardDes="183 Donato Parkways CA, United State" img={marker}></InfoCard>
            <InfoCard cardTitle="PHONE NUMBER" cardDes="(+00)888.666.88" img={phone}></InfoCard>
            <InfoCard cardTitle="WORKING TIME" cardDes="Mon - Fri: 9:00 - 19:00 Closed on Weekends" img={clock}></InfoCard>
        </div>
    );
};

export default Info;