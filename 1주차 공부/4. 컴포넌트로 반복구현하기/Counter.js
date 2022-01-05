import React, {useState} from 'react';
import App from "../App";


const Counter = () =>{

    let [count, setcount] = useState(0)

    
    const increment=()=>{
      setcount(count+1)
    }

    return (
        <button onClick = {increment}> 
            Click {count} 
        </button>
    )
};


export default Counter;
