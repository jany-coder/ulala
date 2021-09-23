import React from 'react';
import "./_movie.scss";
import '../../components/shared/commonCSS/_commonCSS.scss';
const ShowNatok = (props) => {
     const {name,img} = props.natok
    return (
        <div className="text-center rounded">
        <div  className="img-hover-zoom tv-card-img shadow d-flex justify-content-center align-items-center rounded">
             <img className="rounded" src={img} alt=""  style={{height: '200px'}}/>
        </div>
        <div className="text-center">
            <p><strong>{name}</strong></p>
         </div>
    </div>
    );
};

export default ShowNatok;