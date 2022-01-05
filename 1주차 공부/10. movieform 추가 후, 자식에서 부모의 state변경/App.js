import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

function App() { 

  const [movies, setMovies] = useState([
  {title : 'kossie coder1', year : 2001},
  {title : 'kossie coder2', year : 2002},
  {title : 'kossie coder3', year : 2003}])

 
  const renderMovies = movies.map(movie_data => {
    return (
      <Movie movies={movie_data}  key = {movie_data.title}/>
      //name = "이상범" 처럼 movies 속성명을 전달해줌. movie_data는 실질적으로 .title, .year을 통칭
    );
  })

  const addMovie = (movie) => {
    setMovies([...movies, movie]) 
  }

  
  return (
    <div className = 'App'>
        <div className = 'black-nav'>
          <h1>영화 예시</h1>
        </div>
        
        <MovieForm addMovie = {addMovie}/>

        {renderMovies}
    </div>
  );
}

export default App;
