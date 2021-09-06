import React from 'react';
import Popular from '../../components/home/popular/Popular';
import LiveTv from '../../components/liveTv/LiveTv';
import Footer from '../../components/shared/footer/Footer';

const Home = () => {
    return (
        <div className="div">
            <LiveTv />
            <Popular />
            <Footer />
        </div>
    );
};

export default Home;