import React from 'react';
import Footer from '../Common/Footer';
import Banner from '../Components/Banner';
import BusinessSummary from '../Components/BusinessSummary';
import Extra1 from '../Components/Extra1';
import Navbar from '../Components/Navbar/Navbar';
import Tools from '../Components/Tools';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Tools />
            <BusinessSummary />
            <Extra1 />
            <Footer />
        </div>
    );
};

export default Home;