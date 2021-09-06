import React, { useEffect, useState } from 'react';
import NatokData from './NatokData';
import Slider from "react-slick";
import ShowNatok from './ShowNatok';
const Natok = () => {
    const [loaddata, setdata] = useState()
    useEffect(() => {
        console.log(NatokData)
        setdata(NatokData)
        console.log(loaddata)
    },[])
    const settings = {
        dots: true,
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
        <div>
            <h1>Bangla Tv Drama</h1>
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