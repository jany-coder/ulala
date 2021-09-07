import React, { useEffect, useState } from 'react';
import liveTvData from '../../data/liveTvData';
import LiveTvCard from '../liveTvCard/LiveTvCard';

const LiveTvAll = () => {

    const [tvChannels, setTvChannels] = useState([]);
    console.log(tvChannels)

    useEffect(() => {
        setTvChannels(liveTvData)
    }, [])

    return (
        <div className="container-fluid p-4">
            <div className="row">
                {
                    tvChannels.map(tv =>

                        <div className="col-lg-2 col-md-" style={{ width: '150px' }}>
                            <LiveTvCard tv={tv}></LiveTvCard>
                        </div>)
                }
            </div>
        </div>
    );
};

export default LiveTvAll;