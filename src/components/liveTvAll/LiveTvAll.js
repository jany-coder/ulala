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
            <div class="d-flex flex-sm-row flex-column justify-content-center">
                <div class="p-2">
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div class="p-2">
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div class="p-2">
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div class="p-2">
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div class="p-2">
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div class="p-2">
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div class="p-2">
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
            </div>
            <div class="row">
                {
                    tvChannels.map(tv =>

                        <div key={tv.id} className="col-lg-2 col-md-" style={{ width: '150px' }}>
                            <LiveTvCard tv={tv}></LiveTvCard>
                        </div>)
                }
            </div>
        </div>
    );
};

export default LiveTvAll;