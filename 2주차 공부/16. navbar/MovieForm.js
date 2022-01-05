import App from "../App";
import InputFields from './InputFields';
import React, {useState} from 'react';



const MovieForm = (props) =>{ 
  
    const [movieTitle,setMovieTitle] = useState('');
    const [movieYear,setMovieYear] = useState('');

    const [titleError,settitleError] = useState('');
    const [yearError,setyearError] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); // 페이지가 refresh되지 않게함

 
        settitleError('');
        setyearError(''); 
        // 이전에 영화제목과 개봉년도가 오류가 난 상태에서 개봉년도만 넣으면 개봉년도 오류가안지워짐
        // 이유는 이전에 개봉년도 오류가 출력된상태가 다음 영화제목만 넣었을때 뜨는 오류내용이 뜰때까지 남아있기때문
        // 그러니까 valid 함수 실행전에 미리 없애주고 난 다음, 오류를 출력해주면 이전게 남아있지않음
        
        if (validateForm() === true)
        {
            settitleError('');
            setyearError('');
            // 오류메시지가 출력된 상태에서 정상제목 넣으면, 사라지게
            props.addMovie({id : Date.now( ), title : movieTitle, year : movieYear});
            setMovieYear(''); // 이건 다시 입력할때 내용을 지우기 귀찮으니 지워주는거임
            setMovieTitle('');
        }
           
        // setMovieYear(''); -> 이건 다시 입력할때 내용을 지우기 귀찮으니 지워주는거임
        // setMovieTitle(''); 
        // 둘다오류뜬상태에서 영화입력하고 제출누르면 입력한 영화사라짐
        // 이유는, valid가 false임에도 setmovietitle이 ''가 되기때문
        // 입력한 건 남기고 싶다면? 초기화하는 부분을 true로, 영화정상추가가 되었을때만 수행하게함

        
    }


    const validateForm = () => {
        let validated = true; // 처음에 참임

        if(!movieTitle) {
            settitleError('영화 제목을 널어주세요')
            validated = false; // 만약 뭔가 안들어가있으면 false
        }
        
        if(!movieYear) {
            setyearError('개봉년도를 넣어주세요')
            validated = false;
        }

        return validated;
    }

    // 만약 아무것도 안넣고 enter나 submit 시, 오류발생시키기 (기존에는 그냥 빈칸이추가됨)
    return (
        <form onSubmit = {onSubmit}>
            {/* <input type = "text" value = {movieTitle} placeholder = "영화제목" onChange  = {(e)=>setMovieTitle(e.target.value)}/> <br/>
            <div style = {{color : 'red'}}> {titleError} </div>

            <input type = "number" value = {movieYear} placeholder = "개봉년도" onChange  = {(e)=>setMovieYear(e.target.value)}/> <br/>
            <div style = {{color : 'red'}}> {yearError} </div> */}

            <InputFields type = "text" value = {movieTitle} placeholder = '영화제목' onChange = {(e) => setMovieTitle(e.target.value)} errorMessage = {titleError} />
            <InputFields type = "number" value = {movieYear} placeholder = '개봉년도' onChange = {(e) => setMovieYear(e.target.value)} errorMessage = {yearError} />

            <input type = "submit"/>
      </form>
    );
}

export default MovieForm;