import React, { useEffect, useState } from 'react';
import NatokData from './NatokData';
import Slider from "react-slick";
import ShowNatok from './ShowNatok';
import { Link } from 'react-router-dom';
const Natok = () => {
    const [loaddata, setdata] = useState()
    useEffect(() => {
        setdata(NatokData)
    },[])
    const settings = {
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
        <div class="container-fluid">
            <div>
                <h5 className="d-inline mx-3">Bangla TV Drama</h5>
                <Link to="/">See More</Link>
            </div>
            <Slider {...settings}>
                {
                   loaddata?.map(data=>    <div className="d-flex justify-content-center" style={{width: '150px'}}>
                   <ShowNatok natok={data}></ShowNatok>
               </div>)
                }
            </Slider>
        </div>
    );
};

export default Natok;