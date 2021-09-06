import React from 'react';
import "./_show.scss"
const ShowNatok = (props) => {
     const {name,img}=props.natok
    return (
        <div className="text-center">
        <div  className="tv-card-img shadow d-flex justify-content-center align-items-center">
             <img src={img} alt=""  style={{height: '200px'}}/>
        </div>
        <div className="text-center">
            <p><strong>{name}</strong></p>
            <button type="button" class="btn btn-primary">Watch Now</button>
         </div>
    </div>
    );
};

export default ShowNatok;