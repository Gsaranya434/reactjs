import {useState} from 'react';
import React from 'react';

function SignUpModal(){
    return (
        <div className="modal-overlay">
            <div className="modal-container" onClick={this.handleOverlayClick}>
                <div className="modal-content modal-input">Hello, world</div>
            </div>
        </div>
    );
}

export default SignUpModal;