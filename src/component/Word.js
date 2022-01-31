import React, { useState } from 'react';

export default function Word( props ){
    const [word, setWord] = useState(props.word);
    const [isShow, setIsShow] = useState(false); // 처음에는 뜻이 안보여야 하므로 false
    const [isDone, setIsDone] = useState(word.isDone);
    
    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        // setIsDone(!isDone);
        // put메소드. 수정사항을 json 서버에 적용하기위함
        fetch(`http://localhost:3001/words/${word.id}`,{
            // 두번째 인자로 객체 입력
            method : 'PUT', // method는 뭘할지
            headers : {
                'Content-Type' : 'application/json', // content-type은 보내는 자원의 타입이 뭔지 명시
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            })// 수정을 위한 정보를 body에 입력한다. 단 여기입력하는건 문자열이므로, json문자열로 마지막에 변경
        }).then(res => {
            if (res.ok){
                setIsDone(!isDone);
            }
        })
    }
    
    function del() {
        if(window.confirm('삭제하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method : 'DELETE',
            }).then((res) => {
                if(res.ok){
                    setWord({ id : 0 });
                }
            })
        }
    }

    
    if(word.id === 0){
        return null; // 새로고침해야 지워지던게, 널을 리턴해주면 이때 재 렌더링되게 됨.
        // return을 해버리기때문에 아래 return은 실행되지 않으면서, 해당 컴포넌트(단어)에 대한 테이블은 그리지않게됨
    }

    return (
        <>
            <tr className={isDone ? "off" : ""}>
                <td><input type="checkbox" checked = {isDone} onChange = {toggleDone}/></td>
                <td>{word.eng}</td>
                <td>{isShow && word.kor}</td>
                <td>
                    <button onClick = {toggleShow}>
                        {isShow ? '뜻 숨기기': '뜻 보기'}
                    </button>
                    <button className="btn_del" onClick={del}>삭제</button>
                </td>
            </tr>
        </>

        
        
    );
}