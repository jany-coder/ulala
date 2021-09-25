import React from 'react';
import { useHistory } from 'react-router';
import '../../shared/commonCSS/_commonCSS.scss';
import './_liveTvCard.scss';

const LiveTvCard = (props) => {

    const { name, img, id } = props.tv;

    let history = useHistory();

    const handlePlayVideo = (id) => {
        history.push(`liveTV/video/${id}`);
    }

    return (
        <>
           <div onClick={() => handlePlayVideo(id)} className="text-center">
               <div  className="img-hover-zoom tv-card-img shadow d-flex justify-content-center align-items-center">
                    <img src={img} alt="" />
               </div>
               <div className="text-center">
                   <p><strong>{name}</strong></p>
                </div>
           </div>
        </>
    );
};

export default LiveTvCard;