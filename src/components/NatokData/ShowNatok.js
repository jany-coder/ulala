import React from 'react';
import "./_show.scss"
import "../../components/shared/commonCSS/_commonCSS.scss";
import { useHistory } from 'react-router';
const ShowNatok = (props) => {

     const { name, img, id } = props.natok

     let history = useHistory();

     const handlePlayVideo = (id) => {
         history.push(`/drama/video/${id}`);
     }

     return (
          <div onClick={() => handlePlayVideo(id)} className="text-center drama-card rounded">
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