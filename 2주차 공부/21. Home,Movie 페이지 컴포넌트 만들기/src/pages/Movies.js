import React, { useState } from "react";
import Movie from "../components/Movie";
import MovieForm from "../components/MovieForm";

const Movies = () => {

    const [movies, setMovies] = useState([])
   
 
    const removeMovie = (id) => {
        setMovies(movies.filter((movie_data) => {return movie_data.id !== id}))
    }

    const renderMovies = movies.length ? movies.map(movie_data => {
        return (
          <Movie movies={movie_data}  key = {movie_data.id} removeMovie = {removeMovie}/>
        );
      }) : <div>추가된 영화가 없습니다</div>

    const addMovie = (movie) => {
       setMovies([...movies, movie]) 
    }

      
    return (
        <>
            <div className = 'black-nav'>
                <h1>영화 예시</h1>
            </div>
            <MovieForm addMovie = {addMovie}/>
            {renderMovies}
        </>

    );

}

export default Movies;