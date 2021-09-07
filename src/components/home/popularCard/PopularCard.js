import React from 'react';

const PopularCard = ({ item: { name, img } }) => {
    return (
        <div className="popularCard__component m-2 shadow">
            <img className="img-fluid rounded" src={img} alt="" />
            <p className="title text-light">{name}</p>
        </div>
    );
};

export default PopularCard;