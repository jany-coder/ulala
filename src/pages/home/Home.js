import React from 'react';
import BannerCarousel from '../../components/mainPage/bannerCarousel/BannerCarousel';
import Popular from '../../components/mainPage/popular/Popular';
import LiveTv from '../../components/liveTv/LiveTv';
import Faq from '../../components/mainPage/faq/Faq';
import Footer from './../../components/shared/footer/Footer';
import Natok from './../../components/NatokData/Natok';
import Subscription from '../../components/mainPage/Subscription';
import Movie from '../../components/movie/Movie';



const Home = () => {
    return (
        <div className="div">
            <BannerCarousel />
            <LiveTv />
            <Natok/>
            <Movie/>
            <Popular />
            <Faq />
            <Subscription/>
            <Footer />
        </div>
    );
};

export default Home;