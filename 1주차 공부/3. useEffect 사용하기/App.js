import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import { useState } from 'react/cjs/react.development';



function App() { 

  const [Count, setCount] = useState(0);
  const [kossie, setkossie] = useState(0);
  const increment = () =>{
    setCount(Count+1)
  }

  useEffect(()=>{
    console.log('버튼 누를때마다 리렌더링이 일어나 console.log');
    console.log(`count : ${Count}`);
  },[Count, ]) 
  // useEffect(함수,배열인자) : 여기서 배열인자로 state인 [Count]가 넘어가게 되면, Count값이 변경될때만 setEffect가 실행
  // 이제 kossie가 변경이 되면 재 렌더링은 되지만, 이 useEffect는 작동하지 않음

  useEffect(()=>{
    console.log('first rendering');
  }, []);
  // 빈 배열을 전달하면, 첫번째만 수행하고, 그 이후에는 수행x

  console.log('렌더링..!');
  return (
    <div>
      <div className = 'App'>
        <h1>Kossie Coder</h1>
        <br/><br/>
      </div>
      <div className = 'list'>
        <h2> Count = {Count} </h2>
        <button onClick = {increment}>Click01</button>
        <button onClick = {() => setkossie(kossie+1)}>Click02</button>
      </div>
    </div>

  );
}

export default App;

// useEffect 사용 시 컴포넌트가 렌더링될 때마다 react에게 어떤 일을 실행하라 할 수 있음
// 컴포넌트 렌더링(console.log('렌더링') 이 완료되고, useEffect가 자동 실행되었음