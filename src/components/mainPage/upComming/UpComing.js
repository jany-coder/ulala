import React, { useEffect, useState } from 'react';
import upcomingData from '../../../data/upCommingData';
import SlideCard from '../../shared/slideSection/slideCard/SlideCard';
import CustomSlick from './../../shared/customSlick/CustomSlick';
import SlideSection from '../../shared/slideSection/slide/Slide';




const UpComing = () => {
    const [upComing, setUpComing] = useState([])

    useEffect(() => {
        setUpComing(upcomingData)
    }, [])

    console.log(upComing);

    return (
        <SlideSection title="Up Coming Videos" link="/upcoming">
            <CustomSlick>
                {
                    upComing.map(item => <SlideCard item={item} />)
                }
            </CustomSlick>
        </SlideSection>
    );
};

export default UpComing;