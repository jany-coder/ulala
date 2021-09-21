import React, { useEffect, useState } from 'react';
import DramaData from '../../data/dramaData';
import DramaCard from './DramaCard';


const DramaPage = () => {
    const [drama, setDrama] = useState([]);

    console.log(drama)

    useEffect(() => {
        setDrama(DramaData)
    }, [])
    return (
        <div class=" container-fluid">
            <div class="row my-4">
                <div class=" text-center mb-3" >
                    <h4 class="d-inline p-2 rounded" style={{border: "1px solid green"}}><strong>ULALA DRAMA</strong></h4>
                </div>
                {
                    drama.map(drama =>

                        <div key={drama.name} class="col-lg-3 col-md-4 col-sm-12">
                            <DramaCard drama={drama}></DramaCard>
                        </div>)
                }
            </div>
        </div>
    );
};

export default DramaPage;