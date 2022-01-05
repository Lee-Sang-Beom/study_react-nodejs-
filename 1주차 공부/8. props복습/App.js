import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';

function App() { 

  const movies = [
  {title : 'kossie coder1', year : 2001},
  {title : 'kossie coder2', year : 2002},
  {title : 'kossie coder3', year : 2003}]


  const renderMovies = movies.map(movie_data => {
    return (
      <Movie movies={movie_data}  key = {movie_data.title}/>
      //movie는 props가 전달되었을 때, props.movies 이렇게 접근할 수 있는 이름임.

      //만약 여기서 <Hello name = "react"/> 을 전달하면 Hello 컴포넌트에선 props.name 값을 출력해달라하면 "react"가 출력되는거임
      //movies라는  movie_data : title과 year을 가짐. 이게 전달되는거임
      //여기서 movie_data는 배열 속 각 요소인 오브젝트임
    );
  })

  return (
    <div className = 'App'>
        <div className = 'black-nav'>
          <h1>영화 예시</h1>
        </div>
        {renderMovies}
        
    </div>
  );
}

export default App;
