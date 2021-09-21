import React from 'react';
import BannerCarousel from '../../components/mainPage/bannerCarousel/BannerCarousel';
import Popular from '../../components/mainPage/popular/Popular';
import Faq from '../../components/mainPage/faq/Faq';
import Footer from './../../components/shared/Footer/Footer';
import Natok from './../../components/NatokData/Natok';
import Subscription from '../../components/mainPage/Subscription';
import Movie from '../../components/movie/Movie';
import LiveTV from './../../components/liveTV/liveTV/LiveTv';



const Home = () => {
    return (
        <div className="div">
            <BannerCarousel />
            <LiveTV />
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