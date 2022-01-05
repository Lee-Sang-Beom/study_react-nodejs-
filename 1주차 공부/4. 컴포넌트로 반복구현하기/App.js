import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import { useState } from 'react/cjs/react.development';
import Counter from './components/Counter'

// 버튼 늘릴때마다 계속 state와 함수를 만들어줘야함.
// 컴포넌트 사용 시 이 반복을 없앨 수 있음.

function App() { 


  // let [count1, setcount1] = useState(0)
  // let [count2, setcount2] = useState(0)
  
  // const increment_01=()=>{
  //   setcount1(count1+1)
  // }

  // const increment_02=()=>{
  //   setcount2(count2+1)
  // }

  // <Counter/> 사용!!! [components 폴더 내 js파일 하나 만들고 import]

  return (
    <div className = 'App'>
        <div className = 'black-nav'>
        <h1>Kossie Coder</h1>
          <Counter/>
          <Counter/>
          <Counter/>
        </div>
    </div>

    

  );
}

export default App;

// useEffect 사용 시 컴포넌트가 렌더링될 때마다 react에게 어떤 일을 실행하라 할 수 있음
// 컴포넌트 렌더링(console.log('렌더링') 이 완료되고, useEffect가 자동 실행되었음