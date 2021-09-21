import React from 'react';
import './_dramaCard.scss';

const DramaCard = (props) => {
    const { name, img } = props.drama;
    return (
        <>
         <div className="dramaCard__component m-2 shadow rounded">
            <img className="img-fluid rounded" src={img} alt="" />
            <p className="title text-light">{name}</p>
        </div>
     </>
    );
};

export default DramaCard;