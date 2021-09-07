import React, { useEffect, useState } from 'react';
import { popularData } from '../../../data/popularData';
import CustomSlick from '../../shared/customSlick/CustomSlick';
import SlideSection from '../../shared/slideSection/SlideSection';
import PopularCard from '../popularCard/PopularCard';

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        setPopular(popularData)
    }, [])

    console.log(popular);

    return (
        <SlideSection title="Most Popular" Link="/popular">
            <CustomSlick>
                {
                    popular.map(item => <PopularCard item={item} />)
                }
            </CustomSlick>
        </SlideSection>
    );
};

export default Popular;