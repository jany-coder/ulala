import React from 'react';
import './_upComingCard.scss';

const UpComingCard = (props) => {
    const { name, img } = props.upcoming;
    return (
        <>
        <div className="text-center">
            <div  className="upcoming-card-img shadow d-flex justify-content-center align-items-center">
                 <img src={img} alt="" />
            </div>
            <div className="text-center">
                <p><strong>{name}</strong></p>
             </div>
        </div>
     </>
    );
};

export default UpComingCard;