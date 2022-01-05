import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';


function App() { 

  const [movies, setMovies] = useState([])

  const addMovie = (movie) => {
    setMovies([...movies, movie]) 
  }

  const removeMovie = (id) => {
    setMovies(movies.filter((movie_data) => {return movie_data.id !== id}))
    // movies의 각 값인 movie_data의 ID가 파라미터로 전달받은 제거하려는 id와 같지 않은 것만 setMovies에 추가
    // 결과적으로 전달받은 id의 영화데이터만 setMovies에 들어가지 않는 결과가 두두둥장
  }

  const renderMovies = movies.length ? movies.map(movie_data => {
    return (
      <Movie movies={movie_data}  key = {movie_data.id} removeMovie = {removeMovie}/>
      //name = "이상범" 처럼 movies 속성명을 전달해줌. movie_data는 실질적으로 .title, .year을 통칭
    );
  }) : <div>추가된 영화가 없습니다</div>


  
  return (
    <div className = 'App'>
      <Navbar/>
        <div className = 'black-nav'>
          <h1>영화 예시</h1>
        </div>
        
        <MovieForm addMovie = {addMovie}/>
        {renderMovies}
    </div>
  );
}

export default App;
