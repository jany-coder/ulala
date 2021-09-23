import React, { useEffect, useState } from 'react';
import popularData from '../../data/popularData';
import PopularCard from './PopularCard';


const PopularPage = () => {
    const [popular, setPopular] = useState([]);

    console.log(popular)

    useEffect(() => {
        setPopular(popularData)
    }, [])

    
//   useEffect(() => {
//     fetch('https://shrouded-coast-89761.herokuapp.com/serviceEvent')
//         .then(res => res.json())
//         .then(data => setPopular(data))
// }, [])



    return (
        <div class=" container-fluid">
            <div class="row my-4">
                <div class=" text-center mb-3" >
                    <h4 class="d-inline p-2 rounded" style={{border: "1px solid green"}}><strong>ULALA MOST POPULAR</strong></h4>
                </div>
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