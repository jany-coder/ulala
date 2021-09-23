import React, { useEffect, useState } from 'react';
import LiveTvCard from '../liveTvCard/LiveTvCard';
import liveTvData from './../../../data/liveTvData';

const LiveTvAll = () => {

    const [tvChannels, setTvChannels] = useState([]);

    useEffect(() => {
        setTvChannels(liveTvData)
    }, [])



    return (
        <div className="container-fluid bg-dark vh-100 p-4">
            <div class="d-flex flex-sm-row flex-column justify-content-start flex-wrap mb-2">
                <div class="p-1 text-center">
                    <button onClick={()=> setTvChannels(liveTvData)} type="button" class="btn btn-outline-primary w-100">ALL</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'news'))} type="button" class="btn btn-outline-primary">NEWS</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'entertainment'))} type="button" class="btn btn-outline-primary">ENTERTAINMENT</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'sports'))} type="button" class="btn btn-outline-primary">SPORTS</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'music'))} type="button" class="btn btn-outline-primary">MUSIC</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'movies'))} type="button" class="btn btn-outline-primary">MOVIE</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'kids'))} type="button" class="btn btn-outline-primary">KIDS</button>
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