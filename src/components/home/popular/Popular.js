import React, { useEffect, useState } from 'react';
import { popularData } from '../../../data/popularData';
import CustomSlick from '../../shared/customSlick/CustomSlick';
import SlideCard from '../../shared/slideCard/SlideCard';
import SlideSection from '../../shared/slideSection/SlideSection';

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
                    popular.map(item => <SlideCard item={item} />)
                }
            </CustomSlick>
        </SlideSection>
    );
};

export default Popular;