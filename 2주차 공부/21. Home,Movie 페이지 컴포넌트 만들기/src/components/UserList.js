import React from 'react';


const UserList = (props) =>{

    return (
        <div>
            <h4>User List</h4>
            {props.users.map((users) => { // 반복문 map같은걸 쓰면 return하는 값에 아래 key를 꼭 써주는게좋음
                return (
                    <div className="card mb-3" key = {users.name}>  
                        <div className = "card-body">
                            {users.name}
                        </div>
                    </div>
                );
            })}
        </div>

    )
};


export default UserList;
 