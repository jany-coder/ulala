import React, { useEffect, useState } from 'react';
import moviesData from '../../data/moviesData';
import MoviesPageCard from './MoviesPageCard';


const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    console.log(movies)

    useEffect(() => {
        setMovies(moviesData)
    }, [])
    return (
        <div class=" container-fluid">
            <div class="row my-4">
                <div class=" text-center mb-3" >
                    <h4 class="d-inline p-2 rounded" style={{border: "1px solid green"}}><strong>ULALA MOVIES</strong></h4>
                </div>
                {
                    movies.map(movie =>

                        <div key={movie.name} class="col-lg-3 col-md-4 col-sm-12">
                            <MoviesPageCard movie={movie}></MoviesPageCard>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MoviesPage;