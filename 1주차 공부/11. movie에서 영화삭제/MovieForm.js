import React, {useState} from 'react';
import App from "../App";



const MovieForm = (props) =>{ // props로 받을 수 있고, 원하는 props만 받고싶을땐, 중괄호안에 addMovie를 그냥 받아버림
  
    const [movieTitle,setMovieTitle] = useState('');
    const [movieYear,setMovieYear] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); // 페이지가 refresh되지 않게함
        props.addMovie({id : Date.now(), title : movieTitle, year : movieYear});
        // 만약 (props) 가 아니라, ({addMovie}) 로 받았으면, addMovie({title, year})로 하면 됨

        setMovieYear('');
        setMovieTitle('');
    }

    return (
        <form onSubmit = {onSubmit}>
            <input type = "text" value = {movieTitle} placeholder = "영화제목" onChange  = {(e)=>setMovieTitle(e.target.value)}/> <br/>
            <input type = "text" value = {movieYear} placeholder = "개봉년도" onChange  = {(e)=>setMovieYear(e.target.value)}/> <br/>

            <input type = "submit"/>
      </form>
    );
}

export default MovieForm;