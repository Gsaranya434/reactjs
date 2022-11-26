import React from "react";


function UploadPage(){
    return(
        <div className='col'>
          <div className='col'>
            <button>Browse</button>
          </div>
          <div className='col'>
            <ul>
              <li>Industry</li>
              <li>With / Without Character</li>
              <li>Character<ul>Primary:</ul><ul>Secondary:</ul></li>

              <li>Language</li>
              <li>Location</li>
              <li>Age</li>
              <li>Ethnicity</li>
            </ul>
          </div>
        </div>
    );
}

export default UploadPage;