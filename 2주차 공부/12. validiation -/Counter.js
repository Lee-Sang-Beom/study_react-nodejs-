import React, {useState} from 'react';
import App from "../App";


//props라는 오브젝트를 통해 부모에서 보낸 props(오브젝트 > 키 : value)을 받을수있다.

const Counter = (props) =>{

    let [count, setcount] = useState(0)

    
    const increment=()=>{
      setcount(count+1)
    }

    const clickString = props.click || 'default!!';
    // props.click이 존재하면 왼쪽을, 존재하지않으면 디폴트값으로 오른쪽값사용

    return (
        <button onClick = {increment}> 
            {clickString} {count} 
        </button>
    )
};


export default Counter;
 