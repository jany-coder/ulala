import React from 'react';

const SlideCard = ({ name, img }) => {
    return (
        <div className="slideCard__component m-2 shadow">
            <img className="img-fluid rounded" src={img} alt="" />
            <p className="title text-light">{name}</p>
        </div>
    );
};

export default SlideCard;