import React, {useState} from 'react';
import App from "../App";

const Spinner = () =>{

    return (
        <div className = "flex-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        
    );
};


export default Spinner;
 