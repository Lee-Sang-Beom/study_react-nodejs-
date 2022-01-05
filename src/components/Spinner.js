import React from 'react';
import '../App.css';

const Spinner = () =>{

    return (
        <div className = "flex-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        
    );
};


export default Spinner;
 