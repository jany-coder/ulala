import React from 'react';
import './_popularCard.scss';

const PopularCard = (props) => {
    const { name, img } = props.popular;
    return (
        <>
        <div className="text-center">
            <div  className="popular-card-img shadow d-flex justify-content-center align-items-center">
                 <img src={img} alt="" />
            </div>
            <div className="text-center">
                <p><strong>{name}</strong></p>
             </div>
        </div>
     </>
    );
};

export default PopularCard;