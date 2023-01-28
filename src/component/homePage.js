import {useState} from 'react';
import React from 'react';
import "../css/homepage.css";
import Navbar from './navbarPage';
import axios from "axios";
import FilesContainer from './files';
import HomeJs from './home';
import UploadJs from './upload';
import ReviewJs from './review';
import SettingFunc from './setting';
import BinFunc from './bin';
import { VscFolder,VscExtensions,VscCloudUpload,VscArrowUp,VscOpenPreview,VscSettingsGear,VscHistory,VscTrash,VscExport } from "react-icons/vsc";

function HomePage(props){
  
  const [activeElem,setActive]=useState('');
  
  const [homeActive,sethomeActive] = useState(false);
  const [fileActive,setfileActive] = useState(false);
  const [uploadActive,setuploadActive] = useState(false);
  const [statusActive,setstatusActive] = useState(false);
  const [sttgActive,setsttgActive] = useState(false);
  const [BinActive,setbinActive] = useState(false);

  if(!activeElem){    
    setActive(window.location.pathname);    
    sethomeActive(true);
  }
  
  
  window.addEventListener('load', function () {
    alert('Hello!')
  })
  
  const baseURL = "http://localhost:3000/login";  
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
  const [asideDiv,setAsideDiv]=useState(false);
  const [btnCls,setbtnCls]=useState(false);
  const [styles,setStyles] = useState({});
  const [fullAside,setFullAside] = useState({});

  const [applyStyle,setApplyStyle]=useState({});
  const [fullApplyStyle,setFullApplyStyle]=useState({});
  
  const AsideEnter=()=>{    
    // debugger
    setbtnCls(true);
    setStyles({display:"none"});
    setFullAside({display:"block"});
    setApplyStyle(styles);
    setFullApplyStyle(fullAside);
  }
  const AsideLeave=()=>{
    setbtnCls(false);
    setStyles({display:"block"});
    setFullAside({display:"none"});
    setApplyStyle(styles);
    setFullApplyStyle(fullAside);
  }

  const clsName = btnCls?"newAside":"";
    return (
      <>
      <h1>Internal User Dashboard Home Screen</h1>     
      <div className='asideIconDiv' onMouseEnter={AsideEnter} style={applyStyle}>
        <p>Creattie</p>
        <hr></hr>
        <div  className='asideIcn' onMouseEnter={AsideEnter}><h4><VscExtensions /></h4></div>
        <div  className='asideIcn' onMouseEnter={AsideEnter}><h4><VscFolder /></h4></div>
        <div  className='asideIcn' onMouseEnter={AsideEnter}><h4><VscCloudUpload /></h4></div>
        <div  className='asideIcn' onMouseEnter={AsideEnter}><h4><VscHistory /></h4></div>
        <div  className='asideIcn' onMouseEnter={AsideEnter}><h4><VscSettingsGear /></h4></div>
        <div  className='asideIcn' onMouseEnter={AsideEnter}><h4><VscTrash /></h4></div>
        <div  className='asideIcn' onMouseEnter={AsideEnter}><h4><VscExport /></h4></div>
      </div>
      <div className="newAside" style={fullApplyStyle} onMouseOut={AsideLeave}>
        <div>
          <p>Creattie</p>
          <div className='aside' id={homeActive ?'Active':''} onClick={()=>changePath('/dashboard')} ><h4><VscExtensions /></h4> Home</div><br></br>
          <div className='aside' id={fileActive ?'Active':''} onClick={()=>changePath('/files')}><h4><VscFolder /></h4> Files</div><br></br>
          <div className='aside' id={uploadActive ?'Active':''} onClick={()=>changePath('/upload')}><h4><VscCloudUpload /></h4> Upload</div><br></br>
          <div className='aside' id={statusActive ?'Active':''} onClick={()=>changePath('/status')}><h4><VscHistory /></h4> Review</div><br></br>
          <div className='aside' id={sttgActive ?'Active':''} onClick={()=>changePath('/setting')}><h4><VscSettingsGear /></h4> Settings</div><br></br>
          <div className='aside' id={BinActive ?'Active':''} onClick={()=>changePath('/bin')}><h4><VscTrash /></h4> Bin</div><br></br>
          <div className='aside' onClick={()=>logoutFunc()}><h4><VscExport /></h4> Log Out</div>
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
      {activeElem==="/setting"?
      <div className='reviewDiv'>
        <SettingFunc />
      </div>
      :''}
      {activeElem==="/bin"?
        <div className='reviewDiv'>
            <BinFunc />
        </div>
      :''}
        </>
    );
}

export default HomePage;