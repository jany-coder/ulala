import React from 'react';
import './_liveTvCard.scss';
import '../../shared/commonCSS/_commonCSS.scss';

const LiveTvCard = (props) => {

    const {handlePlayVideo} = props;
    const { name, img } = props.tv;
    return (
        <>
           <div onClick={handlePlayVideo} className="text-center">
               <div  className="img-hover-zoom tv-card-img shadow d-flex justify-content-center align-items-center">
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