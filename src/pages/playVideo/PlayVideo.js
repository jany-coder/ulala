import React from 'react';
import "./_playVideo.scss";
import channel from "../../assets/channel.png";

const PlayVideo = (props) => {
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md-8">
                    <div className="iframe-container style mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nMOzjFuVd_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center">
                        <div className="me-2 d-flex justify-content-center">
                            <img style={{width: "100px"}} src={channel} alt="" />
                        </div>
                        <div>
                            <h5>Channel Name</h5>
                            <p>Watching Live on ULALA</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlayVideo;