import React from 'react';
import './_liveTvCard.scss';

const LiveTvCard = (props) => {
    const { name, img } = props.tv;
    return (
        <>
           <div className="text-center">
               <div  className="tv-card-img shadow d-flex justify-content-center align-items-center">
                    <img src={img} alt="" />
               </div>
               <div className="text-cente">
                   <p><strong>{name}</strong></p>
                </div>
           </div>
        </>
    );
};

export default LiveTvCard;