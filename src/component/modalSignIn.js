
import React from 'react';
import {useState,useRef} from 'react';
import '../css/modalsignin.css';
import { Row, Modal, Button, Form, Col } from "react-bootstrap";


function SignUpModal(props){
    const [isShow, invokeModal] = useState(true);    
    const initModal = () => {
        props.data(false);
      return invokeModal(false)

    }
     const [form,setForm]=useState({
        name:'',
        password:''
     });
    const signFunc = () => {
        // return window.
    }
    const setValue=(e)=>{
        const nextState={
            ...form,
            [e.target.name]:e.target.value,
        }
        setForm(nextState); 
    }
    return (
        <>            
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>           
                </Modal.Header>
                <Modal.Body>
                <div className="modal-overlay">
                    <div className="modal-container">
                    <Button variant="danger" onClick={initModal}>
                      Close
                    </Button>                    
                    <h2>Sign In</h2>
                    <hr></hr>
                    <input type="text" placeholder='Enter User Name' name='name' value={form.name} onChange={setValue}></input>
                    <input type='password' placeholder='Enter Password' passowrd='password' value={form.password} onChange={setValue}></input>
                    <button onClick={signFunc}>Sign In</button>
                    <a href="/files">Sign In</a>                
                    {/* <Route path='/files' element=x`x`{<Home/>} /> */}
                    </div>
                </div>     
                </Modal.Body>                
            </Modal>
        </>
    );
}


export default SignUpModal;
