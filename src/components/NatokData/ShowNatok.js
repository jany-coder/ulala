import React from 'react';
import "./_show.scss"
import "../../components/shared/commonCSS/_commonCSS.scss";
const ShowNatok = (props) => {

     const {handlePlayVideo} = props;
     const { name, img } = props.natok

     return (
          <div onClick={handlePlayVideo} className="text-center drama-card rounded">
               <div className="img-hover-zoom tv-card-img shadow d-flex justify-content-center align-items-center rounded">
                    <img class="rounded" src={img} alt="" style={{ height: '200px' }} />
               </div>
               <div className="text-center">
                    <p><strong>{name}</strong></p>
               </div>
          </div>
     );
};

export default ShowNatok;