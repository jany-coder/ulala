import React from 'react';
import { useHistory } from 'react-router';
import './_dramaCard.scss';

const DramaCard = (props) => {
    const { name, img, id } = props.drama;

    let history = useHistory();

    const handlePlayVideo = (id) => {
        history.push(`/drama/video/${id}`);
    }

    return (
        <>
         <div onClick={handlePlayVideo(id)} className="dramaCard__component m-2 shadow rounded">
            <img className="img-fluid rounded" src={img} alt="" />
            <p className="title text-light">{name}</p>
        </div>
     </>
    );
};

export default DramaCard;