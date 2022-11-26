import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './component/homePage';
import Navbar from './component/navbarPage';
import Upload from './component/uploadFile';
import Status from './component/statusPage';

function App(){
  return (
    <div className="App">                
      <div className="row"> 
        {/* <div className="col">
          <ul className="nav flex-column">            
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/files">Files</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/upload">Upload</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/status">Status</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/setting">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bin">Bin</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>            
          </ul>            
        </div>     */}
        
        <div className="col">
          <Router>          
            <Routes>
                <Route exact path='/' element={<Navbar />} />
                <Route path='/files' element={<Home/>} />
                <Route path='/upload' element={<Upload/>} />
                <Route path='/status' element={<Status/>} />
                {/* <Route path='/settings' element={<SignUp/>} />
                <Route path='/bin' element={<SignUp/>} />
                <Route path='/logout' element={<SignUp/>} /> */}
            </Routes>
          </Router>
        </div>
      </div>      
    </div>
    );
}

function App1() {  
  return (
    <div className="App1">      
      <h1>Tag Space Design Document</h1>      
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Creattie</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Lottie</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item"> 
                <a className="nav-link" href="#">Vector</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Free
                </a>                
              </li>              
            </ul>
            <form className="d-flex" role="search">
              {/* <select defaultValue="0">
                <option value="1" selected hidden>All</option>
              </select> */}
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <i className="fa fa-search" aria-hidden="true"></i>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btn btn-outline-success" type="submit" onclick="function()">Sign In</button>
          </div>
        </div>
      </nav>      
      
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Lottie Animations</h6>
              <p className="card-text">Achieve more with lightweight Lottie animations</p>                
            </div>
          </div>
        </div>
        <div className="col"><div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Illustrations</h6>
              <p className="card-text">Handpicked illustrations for any mission</p>                
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Animated Icons</h6>
              <p className="card-text">The fastest growing database of motion icons</p>                
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Icons</h6>
              <p className="card-text">Curated collections for any industry</p>                
            </div>
          </div>
        </div>
      </div>
      <div>Top lottie animation</div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Lottie Animations</h6>
              <p className="card-text">Achieve more with lightweight Lottie animations</p>                
            </div>
          </div>
        </div>
        <div className="col"><div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Illustrations</h6>
              <p className="card-text">Handpicked illustrations for any mission</p>                
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Animated Icons</h6>
              <p className="card-text">The fastest growing database of motion icons</p>                
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Icons</h6>
              <p className="card-text">Curated collections for any industry</p>                
            </div>
          </div>
        </div>        
      </div>
      
    </div>
    
  );
}

export default App;
