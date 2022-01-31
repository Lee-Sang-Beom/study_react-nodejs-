import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from '../hook/useFetch';
export default function CreateWord(){

    const days = useFetch(`http://localhost:3001/days`);
    const history = useHistory();

    function onSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:3001/words`,{
            // 두번째 인자로 객체 입력
            method : 'POST', // method는 뭘할지
            headers : {
                'Content-Type' : 'application/json', // content-type은 보내는 자원의 타입이 뭔지 명시
            },
            body : JSON.stringify({
                eng : engRef.current.value,
                kor : korRef.current.value,
                day : dayRef.current.value,
                isDone : false
            })// 수정을 위한 정보를 body에 입력한다. 단 여기입력하는건 문자열이므로, json문자열로 마지막에 변경
        }).then(res => {
            if (res.ok){
                alert("설정 완료");
                history.push(`/day/${dayRef.current.value}`);
            }
        })
    }


    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    return (
    <form onSubmit={onSubmit}>
        <div className='input_area'>
            <label> Eng </label>
            <input type="text" placehoder = "computer" ref = {engRef}/>
        </div>
        <div className='input_area'>
            <label> Kor </label>
            <input type="text" placehoder = "컴퓨터" ref = {korRef}/>
        </div>
        <div className='input_area'>
            <label> Day </label>
            <select ref = {dayRef}>
                {days.map((day)=>(
                    <option key = {day.id}> {day.day} </option>
                ))}
            </select>
        </div>
        <input type = "submit"/>
    </form>
    )
}