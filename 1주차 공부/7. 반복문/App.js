import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Counter from './components/Counter'

function App() { 

  const movies = [
  {title : 'kossie coder1', year : 2001},
  {title : 'kossie coder2', year : 2002},
  {title : 'kossie coder3', year : 2003}]


  const renderMovies = movies.map(movie => {
    return (
      <div className = "movie" key = {movie.title}>
          <div className = "movie-title">
            {movie.title}
          </div>
          <div className = "movie-year">
            {movie.year}
          </div>
        </div>
    );
  })

  // map 함수로 배열의 모든요소 순회
  // 각 인덱스 별 오브젝트[]를 movie라 하고 그의 속성별 값을 출력

  // react에서 map 사용 시 주의점 > 여기서는 제일 윗 div 태그에 유니크한 키를 넣어줘야 함
  // key는 내용이 추가,업데이트될 때 react가 어떤 아이템인지 식별할 때 도움을 주는 역할
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
