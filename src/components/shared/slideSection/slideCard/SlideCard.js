import React from 'react';
import "../../commonCSS/_commonCSS.scss";

const SlideCard = ({ item: { name, img } }) => {
    return (
        <div className="img-hover-zoom slideCard__component m-2 shadow">
            <img className=" img-fluid rounded" src={img} alt="" />
            <p className="title text-light">{name}</p>
        </div>
    );
};

export default SlideCard;