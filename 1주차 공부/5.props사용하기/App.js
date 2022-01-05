import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import { useState } from 'react/cjs/react.development';
import Counter from './components/Counter'
// import해서 사용하는 쪽 : 부모 컴포넌트
// import 된 쪽 : 자식 컴포넌트
// 부모-> 자식 쪽으로 데이터 보낼 때, Props를 사용

function App() { 

  const [btnname, setbtnname] = useState('click please')

  return (
    <div className = 'App'>
        <div className = 'black-nav'>
        <h1>Kossie Coder</h1>
          <Counter click = "click1"/>
          {/* 속성명 click에 값 click1을 넣음. 
          click이라는 이름으로 click1이라는 데이터를 자식 컴포넌트로 보낸 것임 */}

          <Counter click = {btnname}/>
          {/* 전달값으로 state도 보낼수있음 */}

          <Counter/>
          {/* 인자가 전달되지 않는 경우도 존재할 수 있음 */}

          <button onClick={()=>setbtnname('btn_click')}> 변경!! </button>
          {/* 원래는 2번째 counter 컴포넌트 버튼명이 clickpls인데, 이버튼 누르면 변경된 값이 넘어감 와우!*/}
        </div> 
    </div>

    

  );
}

export default App;
