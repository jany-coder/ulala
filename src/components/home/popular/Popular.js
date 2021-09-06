import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { popularData } from '../../../data/popularData';
import CustomSlick from '../../shared/customSlick/CustomSlick';
import PopularCard from '../popularCard/PopularCard';

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        setPopular(popularData)
    }, [])

    console.log(popular);

    return (
        <div className="container-fluid my-3">
            <h5 className="d-inline mx-3">Most Popular</h5>
            <Link to="" className="d-inline">See More</Link>
            <CustomSlick>
                {
                    popular.map(item => <PopularCard item={item} />)
                }
            </CustomSlick>
        </div>
    );
};

export default Popular;