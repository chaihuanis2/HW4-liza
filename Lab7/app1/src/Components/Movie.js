import React from "react";
import "./Movie.css"
const ImageURL = 'https://image.tmdb.org/t/p/w500/';

function Movie({poster_path,title,overview, vote_average})
{
    let path;
    if(poster_path == null){
        path = '/Generic-picture.png';
    } else {
        path = ImageURL + poster_path;
    }

    let coloredClass;
    if(vote_average>=7){
        coloredClass='green';
    } else if(vote_average>=5){
        coloredClass='yellow';
    } else {
        coloredClass='red';
    }

    return (
        <div className="movie">
            <img src={path} alt={title}></img>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={coloredClass}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;