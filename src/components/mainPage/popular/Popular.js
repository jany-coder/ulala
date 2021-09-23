import React, { useEffect, useState } from 'react';
import popularData  from '../../../data/popularData';
import CustomSlick from '../../shared/customSlick/CustomSlick';
import SlideCard from '../../shared/slideSection/slideCard/SlideCard';
import SlideSection from '../../shared/slideSection/slide/Slide';

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        setPopular(popularData)
    }, [])

    console.log(popular);

    return (
        <SlideSection title="Most Popular" link="/popular">
            <CustomSlick>
                {
                    popular.map(item => <SlideCard item={item} />)
                }
            </CustomSlick>
        </SlideSection>
    );
};

export default Popular;