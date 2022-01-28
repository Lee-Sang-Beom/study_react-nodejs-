import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function DayList() {

    const [days, setDays] = useState([]);
    
    useEffect(()=>{
        // fetch 시, promise 반환
        // 백앤드로부터 데이터를 받아오려면 api를 호출하고 데이터를 응답받습니다. 
        // 이 때 자바스크립트 Web API fetch() 함수를 쓰거나 axios 라이브러리를 사용할 수 있습니다.
        fetch('http://localhost:3001/days').then((res) => {
            return res.json(); // res는 실제 json형이 아니라, json으로 변환되고 promise반환
        }).then((data) => setDays(data));
    },[])
    return (
        <ul className="list_day">
            {days.map((day) => (
                <li key = {day.id}>
                    <Link to = {`/day/${day.day}`}> Day {day.day} </Link>
                    {/* 클릭시 저쪽으로 이동하겠다는 의미 */}
                </li>
            ))}
        </ul>
    );
}
