import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';

function App() { 

  const [movieTitle,setMovieTitle] = useState('');
  const [movieYear,setMovieYear] = useState('');
  const [movies, setMovies] = useState([
  {title : 'kossie coder1', year : 2001},
  {title : 'kossie coder2', year : 2002},
  {title : 'kossie coder3', year : 2003}])
  const [cond, setcond] = useState(false);

  //movies.push로 영화를 추가했는데도 홈페이지에 반영x
  //movies는 state가 아니라서, 렌더링이 되지않는거임

  // const movies = [
  // {title : 'kossie coder1', year : 2001},
  // {title : 'kossie coder2', year : 2002},
  // {title : 'kossie coder3', year : 2003}]


  const renderMovies = movies.map(movie_data => {
    return (
      <Movie movies={movie_data}  key = {movie_data.title}/>
      //name = "이상범" 처럼 movies 속성명을 전달해줌. movie_data는 실질적으로 .title, .year을 통칭
    );
  })

  const addMovie = (event) => {
    event.preventDefault(); // 페이지가 refresh되지 않게함
    //movies.push({title : movieTitle, year : movieYear});
    setMovies([...movies, {title : movieTitle, year : movieYear}]) // ...movies = 구조분해할당
    alert('추가되었습니다');

    setMovieYear('');
    setMovieTitle('');
  }

  const toggle = () => {
    setcond(!cond)
  }

  const setting = cond ? <div id = "right">True</div> : <div id = "right">False</div>;
  
  return (
    <div className = 'App'>
        <div className = 'black-nav'>
          <h1>영화 예시</h1>
        </div>

        <form onSubmit = {addMovie}>
          <input type = "text" value = {movieTitle} placeholder = "영화제목" onChange  = {(e)=>setMovieTitle(e.target.value)}/> <br/>
          <input type = "text" value = {movieYear} placeholder = "개봉년도" onChange  = {(e)=>setMovieYear(e.target.value)}/> <br/>

          <input type = "submit"/>
        </form>

        {renderMovies}


        <br/><hr/>
        {setting}
        <button onClick ={toggle}>true와 false 번갈아가면서 표시하기</button>

        
    </div>
  );
}

export default App;
