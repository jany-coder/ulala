import React, { useEffect, useState } from 'react';
import popularData from '../../data/popularData';
import PopularCard from './PopularCard';


const PopularPage = () => {
    const [popular, setPopular] = useState([]);

    console.log(popular)

    useEffect(() => {
        setPopular(popularData)
    }, [])
    return (
        <div class=" container-fluid">
            <div class="row my-4">
                {
                    popular.map(pop =>

                        <div key={pop.name} class="col-lg-2 col-md-3 col-sm-12">
                            <PopularCard popular={pop}></PopularCard>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PopularPage;