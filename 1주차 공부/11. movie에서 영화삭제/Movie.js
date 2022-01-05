import React, {useState} from 'react';
import App from "../App";

const Movie = ({movies, removeMovie}) =>{

    // 앞서 props는 name과 value를 가진 오브젝트라했음
    // 여기서는 movies라는 이름으로 전달된 걸 받았으니 props.movies라고 쓰고
    // movies는 {title : "", year : ""} 을 가진 오브젝트이고, 이 오브젝트에서 title과 year라는 구체적인 속성 2개가 있음
    // 이걸 출력하려면 movie[1].title처럼 movies.title 이렇게써야함 (전달받은게 배열 속 오브젝트라  ㅎㅎ)을 명시해 사용

    return (
        <div className = "movie">
        
          <div className = "movie-title">
            {movies.title}
          </div>
          <div className = "movie-year">
            {movies.year}
          </div>

          <div>
            <button onClick = {() => removeMovie(movies.id)}>삭제</button>
          </div>
      </div>
    );
};


export default Movie;
 