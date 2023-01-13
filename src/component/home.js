import React from "react";


function HomeJs(){
    return (
    <>
    <div className="secDiv">
            <div className="mainSec col">              
              <ul className='bodydiv'>                                
                  <li className='approve'>                      
                      <p>Approved Files</p>
                      <p className='fileCnt'>0</p> 
                                
                  </li>
                  <li className='reject'>                      
                      <p>Rejected Files</p>
                      <p className='rejCnt'>0</p>        

                  </li>
                  <li className='pending'>                      
                      <p>Pending Files</p>
                      <p className='penCnt'>0</p>                      
                                   
                  </li>
                  <li className='upload'>          
                      <p>Total Deleted Files</p>
                      <p className='delCnt'>0</p>                      
                                  
                  </li>
                  <li className='upload'>          
                      <p>Total Uploaded Files</p>
                      <p className='loadCnt'>0</p>                       
                  </li>                
                </ul>
            </div>
        </div> 
    </>
    );
}

export default HomeJs;