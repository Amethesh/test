import {useEffect} from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';

//e3594ac0
const url = 'http://www.omdbapi.com?apikey=e3594ac0';

const movie1 = {
    
        Title: "Batman v Superman: Dawn of Justice",
        Year: "2016",
        imdbID: "tt2975590",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) =>{
        const response = await fetch(`${url}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(()=> {
        searchMovies('star wars')
    },[]);
    return (
        <div className="app">
            <h1>MovieFarm</h1>
            <div className="search">
            <input 
                placeholder="search for movies"
                value={searchTerm}
                onChange= {(e)=> setSearchTerm(e.target.value)}
            />
            <img 
                src={SearchIcon}
                alt="search"    
                onClick={()=>searchMovies(searchTerm)}
            />
            </div>

            {
                movies?.length>0 ?(
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie1={movie}/>
                        ))}
                    </div>
                )
                :(
                    <div className="empty">
                        <h2> No Movies Found</h2>
                    </div>
                )   
            }

            
        </div>
    );
}

export default App;