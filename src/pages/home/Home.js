import React from 'react';
import BannerCarousel from '../../components/mainPage/bannerCarousel/BannerCarousel';
import Popular from '../../components/mainPage/popular/Popular';
import LiveTv from '../../components/liveTv/LiveTv';
import Footer from '../../components/shared/footer/Footer';



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