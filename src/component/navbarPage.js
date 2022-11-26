import React from 'react';
import '../css/navbar.css';

function NavbarPage(){
  return(
    <div>        
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
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
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <i className="fa fa-search" aria-hidden="true"></i>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btn btn-outline-success" type="submit" onclick="function()">Sign In</button>
          </div>
        </div>
      </nav>      
      
      <div className="row container">
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
      <div className="row container">
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

export default NavbarPage;