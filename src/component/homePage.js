import {useState} from 'react';
import React from 'react';
import "../css/homepage.css";


function HomePage(){
    return (
      <>
      <h1>Internal User Dashboard Home Screen</h1>
      <div className='newAside'>
        <div>
          <div className='aside'>Home</div>
          <div className='aside'>Files</div>
          <div className='aside'>Upload</div>
          <div className='aside'>Status</div>
          <div className='aside'>Settings</div>
          <div className='aside'>Bin</div>
          <div className='aside'>Log Out</div>
        </div>
      </div>
     <div className="secDiv">
          <div>
            <div className="card">
              <div className="card">
                <table>
                  <thead></thead>
                  <tbody className='bodydiv'>
                    <tr>
                      <div className='approve'>
                        <td>Approved Files</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>23</td>
                      </div>
                    </tr>
                    <tr>
                      <div className='reject'>
                        <td>Rejecting Files</td>
                        <td>12</td>
                      </div>
                    </tr>
                    <tr>
                      <div className='pending'>
                        <td>Pending Files</td>
                        <td>32</td>
                      </div>
                    </tr>
                    <tr>
                      <div className='upload'>
                        <td>Total Uploaded Files</td>
                        <td>67</td>
                      </div>
                    </tr>
                  </tbody>
                </table>                
              </div>
            </div>
          </div>
        </div> 
        </>
    );
}

export default HomePage;