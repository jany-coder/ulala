import React, { useEffect, useState } from 'react';
import upcomingData from '../../data/upCommingData';
import UpComingCard from './UpComingCard';



const UpComingPage = () => {
    const [upcoming, setUpcoming] = useState([]);

    console.log(upcoming)

    useEffect(() => {
        setUpcoming(upcomingData)
    }, [])
    return (
        <div class=" container-fluid">
            <div class="row my-4">
                <div class=" text-center mb-3" >
                    <h4 class="d-inline p-2 rounded" style={{border: "1px solid green"}}><strong>ULALA UPCOMING</strong></h4>
                </div>
                {
                    upcoming.map(pop =>

                        <div key={pop.name} class="col-lg-2 col-md-3 col-sm-12">
                            <UpComingCard upcoming={pop} />
                        </div>)
                }
            </div>
        </div>
    );
};

export default UpComingPage;