import React from 'react';
import { useParams } from 'react-router';
import liveTvData from '../../data/liveTvData';
import "./_playVideo.scss";


const PlayTV = () => {

    let { id } = useParams();

    const live = liveTvData.find(pd => pd.id == id)

    const {name, video, img} = live;

    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md-8">
                    <div className="iframe-container style mb-4">
                        <iframe width="560" height="315" src={`${video}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center">
                        <div className="me-2 d-flex justify-content-center">
                            <img style={{ width: "100px" }} src={img} alt="" />
                        </div>
                        <div>
                            <h5>{name}</h5>
                            <p>Watching Live on ULALA</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlayTV;