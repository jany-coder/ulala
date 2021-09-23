import React from 'react';
import "./_show.scss"
const ShowNatok = (props) => {
     const { name, img } = props.natok
     return (
          <div className="text-center drama-card rounded">
               <div className="tv-card-img shadow d-flex justify-content-center align-items-center rounded">
                    <img class="rounded" src={img} alt="" style={{ height: '200px' }} />
               </div>
               <div className="text-center">
                    <p><strong>{name}</strong></p>
               </div>
          </div>
     );
};

export default ShowNatok;