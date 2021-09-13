import React from 'react';
import BannerCarousel from '../../components/mainPage/bannerCarousel/BannerCarousel';
import Popular from '../../components/mainPage/popular/Popular';
import LiveTv from '../../components/liveTv/LiveTv';
import Faq from '../../components/mainPage/faq/Faq';
import Footer from './../../components/shared/Footer/Footer';
import Natok from './../../components/NatokData/Natok';



const Home = () => {
    return (
        <div className="div">
            <BannerCarousel />
            <LiveTv />
            <Natok/>
            <Popular />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;