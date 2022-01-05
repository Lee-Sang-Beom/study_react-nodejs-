import React, {useState} from 'react';
import App from "../App";

const InputFields = ({type, value, placeholder, onChange, errorMessage}) =>{

    return (
        <div>
            <input 
                type = {type} 
                value = {value} 
                placeholder = {placeholder} 
                onChange = {onchange}/> 
            
            <br/>
            
            <div style = {{color : 'red'}}> {errorMessage} </div>
        </div>
    );
};


export default InputFields;
 