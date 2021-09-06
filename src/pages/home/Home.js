import React from 'react';
import Footer from '../../components/shared/footer/Footer';
import LiveTv from './../../components/liveTv/LiveTv';


const Home = () => {
    return (
        <main>
            <LiveTv></LiveTv>
            <Footer />
        </main>
    );
};

export default Home;