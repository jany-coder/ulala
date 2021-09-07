import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './_liveTv.scss';
import liveTvData from '../../data/liveTvData';
import LiveTvCard from '../liveTvCard/LiveTvCard';
import { Link } from 'react-router-dom';

const LiveTv = () => {

    const [tvChannels, setTvChannels] = useState([]);

    useEffect(() => {
        setTvChannels(liveTvData)
    }, [])
    
    var settings = {
        variableWidth: true,
        adaptiveHeight: true,
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div  className="container-fluid my-3">
            <h5 className="d-inline mx-3">Tv Channels</h5>
            <Link to="" className="d-inline">See More</Link>
                <Slider {...settings}>
                    {
                        tvChannels.map(tv => 
                            
                            <div className="d-flex justify-content-center" style={{width: '150px'}}>
                                <LiveTvCard tv={tv}></LiveTvCard>
                            </div>)
                    }
                </Slider>
            </div>
        </>
    );
};

export default LiveTv;