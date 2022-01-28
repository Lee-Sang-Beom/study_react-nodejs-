
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Word from "./Word";

export default function Day() {

    const {day} = useParams();
    const [words, setWords] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then((res) => {
            return res.json(); // res는 실제 json형이 아니라, json으로 변환되고 promise반환
        })
        .then((data) => setWords(data));
    },[day])
    

    return (
        <>
        <h2>
            Day {day}
        </h2>
        <table>
            <tbody>
                {words.map((word)=>(
                    <Word word = {word} key = {word.id}/>
                ))}
            </tbody>
        </table>
        </>
    );
}
