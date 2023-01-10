
import React from 'react';
import {useState,useRef} from 'react';
import '../css/modalsignin.css';
import { Row, Modal, Button, Form, Col } from "react-bootstrap";
import { useCookies } from 'react-cookie';
import axios from "axios";

function SignUpModal(props){
    const [isShow, invokeModal] = useState(true);    
    const initModal = () => {
        setTimeout(
            ()=>invokeModal(false),
            100
            );        
            return props.data(false);
    }
     const [form,setForm]=useState({
        name:'',
        password:''
     });
    const [cookies, setCookie] = useCookies(['user']);
    const [error, setError] = useState({
        message:''
    });

    const signFunc = () => {        
        if(!form.name || !form.password){
            setError({message:'Fill the required all filed !.'})
            form.nameError=true;
            form.passwordError=true;
            return true;
        }else if(!form.name && !form.password){
            setError({message:'Fill the required all filed !.'})
            form.nameError=false;
            form.passwordError=false;
        }else{
            setError({message:''});            
            setCookie('Name', form.name, { path: '/' });
            setCookie('Password', form.password, { path: '/' });
            
            const baseURL = "https://43.204.240.206/login";
            axios.post(baseURL).then((response) => {
                debugger
                console.log(response.data);
              });
        }        
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
                    <hr></hr>
                    <input type="text" placeholder='Enter User Name' name='name' value={form.name} onChange={setValue}></input>
                    <br></br>                    
                    <input type='password' placeholder='Enter Password' name='password' value={form.password} onChange={setValue}></input>
                    <p style={{color:"red"}}>{error.message}</p>
                    <br></br>
                    <button onClick={signFunc}>Sign In</button>
                    {/* <a href="/files">Sign In</a> */}
                    {/* <Route path='/files' element=x`x`{<Home/>} /> */}
                    </div>
                </div>     
                </Modal.Body>                
            </Modal>
        </>
    );
}


export default SignUpModal;
