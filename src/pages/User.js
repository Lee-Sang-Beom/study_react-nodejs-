import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";
import { useParams } from "react-router";

const User = () => {

    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true)
    const {id}= useParams() 
    console.log(id) // users/[:id] 의 id부분이 출력됨

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/'+ id) // 이 사이트에서 정보가져옴. 단 하나의 사람만 출력
        .then(response => {
            console.log(response)
            setUser(response.data);
            setloading(false)
        });
    },[]);

    const userDetail = loading ? <Spinner/> : (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )
        
    
    

    return (
        <>
            <h1>유저 정보</h1>
            {userDetail}
            
        </>
        

    );

}

export default User;