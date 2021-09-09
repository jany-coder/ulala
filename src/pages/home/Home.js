import React from 'react';
import LiveTv from '../../components/liveTv/LiveTv';
import Footer from '../../components/shared/footer/Footer';
import BannerCarousel from './../../components/Home/bannerCarousel/BannerCarousel';
import Popular from './../../components/Home/popular/Popular';


const Home = () => {
    return (
        <div className="div">
            <BannerCarousel />
            <LiveTv />
            <Popular />
            <Footer />
        </div>
    );
};

export default Home;