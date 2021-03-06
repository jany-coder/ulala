import React from 'react';
import BannerCarousel from '../../components/mainPage/bannerCarousel/BannerCarousel';
import Popular from '../../components/mainPage/popular/Popular';
import Faq from '../../components/mainPage/faq/Faq';
import Natok from './../../components/NatokData/Natok';
import Subscription from '../../components/mainPage/Subscription';
import Movie from '../../components/movie/Movie';
import LiveTV from '../../components/liveTV/liveTV/LiveTv';
import UpComing from './../../components/mainPage/upComming/UpComing';
import Footer from '../../components/shared/Footer/Footer';



const Home = () => {
    return (
        <div>
            <BannerCarousel />
            <LiveTV />
            <Natok/>
            <Movie/>
            <Popular />
            <UpComing />
            <Faq />
            <Subscription/>
            <Footer/>
        </div>
    );
};

export default Home;