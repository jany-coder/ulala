import React from 'react';
import './_moviesCard.scss';

const MoviesPageCard = (props) => {
    const { name, img } = props.movie;
    return (
        <>
         <div className="dramaCard__component m-2 shadow rounded">
            <img className="img-fluid rounded" src={img} alt="" />
            <p className="title text-light">{name}</p>
        </div>
     </>
    );
};

export default MoviesPageCard;