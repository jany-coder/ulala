import React from 'react';
import { useHistory } from 'react-router';
import '../../components/shared/commonCSS/_commonCSS.scss';
import "./_movie.scss";

const ShowMovie = (props) => {
    
     const { name, img, id} = props.movie;


     let history = useHistory();
 
     const handlePlayVideo = (id) => {
         history.push(`movie/video/${id}`);
     }


     return (
          <div onClick={() => handlePlayVideo(id)} className="text-center rounded">
               <div className="img-hover-zoom tv-card-img shadow d-flex justify-content-center align-items-center rounded">
                    <img className="rounded" src={img} alt="" style={{ height: '200px' }} />
               </div>
               <div className="text-center">
                    <p><strong>{name}</strong></p>
               </div>
          </div>
     );
};

export default ShowMovie;