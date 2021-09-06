import React from 'react';
import LiveTv from '../../components/liveTv/LiveTv';
import Footer from '../../components/shared/footer/Footer';

const Home = () => {
    return (
        <div className="div">
            <LiveTv />
            <Footer />
        </div>
    );
};

export default Home;