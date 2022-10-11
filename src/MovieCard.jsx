import React from "react";

const MovieCard = ({ movie1}) =>{
    return(
        <div className="movie">
            <div>
               <p>{movie1.id}</p>
            </div>
            <div>
               <img src={movie1.url !== 'N/A' ? movie1.url : 'https://via.placeholder.com/400'} alt={movie1.title}/>
            </div>
            <div>
               <span></span>
               <h3>{movie1.title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;