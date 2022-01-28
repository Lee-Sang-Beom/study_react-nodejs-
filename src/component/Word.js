import React, { useState } from 'react';

export default function Word( {word} ){
    
    const [isShow,setIsShow] = useState(false); // 처음에는 뜻이 안보여야 하므로 false
    const [isDone, setIsDone] = useState(word.isDone);
    
    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        setIsDone(!isDone);
    }
    
    return (
        <tr className={isDone ? "off" : ""}>
            <td><input type="checkbox" checked = {isDone} onChange = {toggleDone}/></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick = {toggleShow}>
                    {isShow ? '뜻 숨기기': '뜻 보기'}
                </button>
                <button className="btn_del">삭제</button>
                </td>
        </tr>
    );
}