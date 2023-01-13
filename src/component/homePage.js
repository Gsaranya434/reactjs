import {useState} from 'react';
import React from 'react';
import "../css/homepage.css";
import Navbar from './navbarPage';
import axios from "axios";
import FilesContainer from './files';
import HomeJs from './home';
import UploadJs from './upload';
import ReviewJs from './review';

function HomePage(){
  const [activeElem,setActive]=useState('');
  
  if(!activeElem){
    setActive(window.location.pathname);
  }
  const [homeActive,sethomeActive] = useState(false);
  const [fileActive,setfileActive] = useState(false);
  const [uploadActive,setuploadActive] = useState(false);
  const [statusActive,setstatusActive] = useState(false);
  const [sttgActive,setsttgActive] = useState(false);
  const [BinActive,setbinActive] = useState(false);
  // window.location.reload;
  window.addEventListener('load', function () {
    alert('Hello!')
  })
  
  const baseURL = "https://43.204.240.206/login";  
  const changePath = (data) =>{
    window.history.pushState("","",data);    
    if(data === "/dashboard") {
      sethomeActive(true);setfileActive(false);setuploadActive(false);
      setstatusActive(false);
      setsttgActive(false);
      setbinActive(false);
    }else if(data === "/files"){
      sethomeActive(false);setfileActive(true);setuploadActive(false);
      setstatusActive(false);
      setsttgActive(false);
      setbinActive(false);
    }else if(data === "/upload"){
      sethomeActive(false);setfileActive(false);setuploadActive(true);
      setstatusActive(false);
      setsttgActive(false);
      setbinActive(false);
    }else if(data === '/status'){
      sethomeActive(false);setfileActive(false);setuploadActive(false);
      setstatusActive(true);
      setsttgActive(false);
      setbinActive(false);
    }else if(data === '/setting'){
      sethomeActive(false);setfileActive(false);setuploadActive(false);
      setstatusActive(false);
      setsttgActive(true);
      setbinActive(false);
    }else if(data === '/bin'){
      sethomeActive(false);setfileActive(false);setuploadActive(false);
      setstatusActive(false);
      setsttgActive(false);
      setbinActive(true);
    }
    setActive(window.location.pathname);
    // axios.post(baseURL).then((response) => {
    //   debugger
    //   console.log(response.data);
    // });
    // console.log(window.location.pathname=data);
    // window.location.pathname = data;
  }
  const BlurFunc=()=>{
    debugger    
  }

  const logoutFunc =()=>{
    window.location.pathname="/";
    // window.history.pushState("","","/");
  }

    return (
      <>
      <h1>Internal User Dashboard Home Screen</h1>
      <div className='newAside'>
        <div>
          <div className='aside' id={homeActive ?'Active':''} onClick={()=>changePath('/dashboard')} onBlur={ (e)=>BlurFunc() }>Home</div><br></br>
          <div className='aside' id={fileActive ?'Active':''} onClick={()=>changePath('/files')}>Files</div><br></br>
          <div className='aside' id={uploadActive ?'Active':''} onClick={()=>changePath('/upload')}>Upload</div><br></br>
          <div className='aside' id={statusActive ?'Active':''} onClick={()=>changePath('/status')}>Review</div><br></br>
          <div className='aside' id={sttgActive ?'Active':''} onClick={()=>changePath('/setting')}>Settings</div><br></br>
          <div className='aside' id={BinActive ?'Active':''} onClick={()=>changePath('/bin')}>Bin</div><br></br>
          <div className='aside' onClick={()=>logoutFunc()}>Log Out</div>
        </div>
      </div>
      { activeElem==='/dashboard'?        
        <HomeJs />
      :''}
      {activeElem==='/files'?
      <div className='fileDiv'>
        <FilesContainer />
      </div>
      :''}
      {activeElem==="/upload"?
      <div className='uploadDiv'>
        <UploadJs />
      </div>
      :''}
      {activeElem==="/status"?
        <div className="reviewDiv">
          <ReviewJs />
        </div>
      :''}
        </>
    );
}

export default HomePage;