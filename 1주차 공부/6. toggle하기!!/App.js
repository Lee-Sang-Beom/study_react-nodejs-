import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Counter from './components/Counter'

// 조건 렌더링 : 조건에 따라 컨텐츠를 보여주고 안보여주고 함
function App() { 

  const [cond, setcond] = useState(false)
  const toggle = () => setcond(!cond) // 버튼 클릭 시 마다, cond는 true와 false값을 오감
  useEffect(()=>{
    console.log(cond);
  },[cond]) 
  // useeffect : 리액트 컴포넌트가 렌더링 될때마다 특정작업을 실행할 수 있게 하는 hook
  // cond의 상태가 true, false로 바뀌며 상태가 바뀔때마다 특정 작업을 수행하는데, 여기서는 콘솔출력

  const rendercond = cond
      ?  <div id='right'>True</div>
      :  <div id='right'>False</div>
 
      // cond가 true면, true가 rendercond위치에 들어가고, 아니면 false가 들어감

  return (
    <div className = 'App'>
        <div className = 'black-nav'>
          <h1>Kossie Coder</h1>
        </div> 
        
        
        {/* 이렇게하면, 두개다 화면에 표시됨. 이 중, 하나만 cond값에따라 표시하려면 아래처럼
        <div id='right'>True</div>
        <div id='right'>False</div> 
        */}
        

        {rendercond} 

        <button onClick ={toggle}>Toggle</button>
    </div>

    

  );
}

export default App;
