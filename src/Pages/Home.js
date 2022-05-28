import React from 'react';
import Footer from '../Common/Footer';
import Banner from '../Components/Banner';
import BusinessSummary from '../Components/BusinessSummary';
import Extra1 from '../Components/Extra1';
import Info from '../Components/Info';
import Reviews from '../Components/Reviews';
import Tools from '../Components/Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Extra1 />
            <Info />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;