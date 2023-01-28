import React from 'react';
import '../css/navbar.css';
import {useState} from 'react';
import axios from 'axios';
import SignUpModal from './modalSignIn';
import { Container } from 'react-bootstrap';
import FilesContainer from './files';


const NavbarPage = () =>{
  const [showModal, setModal] = useState(false);
  const setFunc=(data)=>{
    setTimeout(
      () => setModal(data), 
      100
    ); 
  }
  return(
    <div>        
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="navbar-flex container">          
            <a className="navbar-brand" href="#">Creattie</a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="navbar-links" id="navbarSupportedContent">
            <ul >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Lottie</a>
                {/* <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul> */}
              </li>
              <li className="nav-item"> 
                <a className="nav-link" href="#">Vector</a>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Free
                </a>                
              </li>              
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <i className="fa fa-search" aria-hidden="true"></i>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            <button className="btn btn-outline-success" type="submit" onClick={()=>setFunc(true)}>Sign In</button>
            { showModal ? <SignUpModal data={setFunc} /> : ' ' }            
          </div>
        </div>
      </nav>      
      
        <FilesContainer />      
          
        </div>
  );
    
}

export default NavbarPage;
