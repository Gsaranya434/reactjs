import {useState} from 'react';
import React from 'react';
import '../css/modalsignin.css';



function SignUpModal(event){    
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button>Close</button>
                <h2>Sign In</h2>
                <hr></hr>
                <input type="text" placeholder='Enter User Name'></input>
                <input type='password' placeholder='Enter Password'></input>
                <button>Sign In</button>                
            </div>
        </div>
    );
}

export default SignUpModal;