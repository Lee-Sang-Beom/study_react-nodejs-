import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";
const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            setUsers(response.data);
            setloading(false)
        })
    },[])
    
    useEffect(()=>{
        console.log(users);
    },[users])

    return (
        <>
            
            {loading ? <Spinner/> : <UserList users={users} />}
            {/* 로딩이 true면 아직 안받아왔다는뜻
            false가 되면 다받아왔으니 user출력 */}
            
        </>
        

    );

}

export default Users;