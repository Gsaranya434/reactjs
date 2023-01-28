import React from "react";
import "../css/upload.css";
import {useState} from 'react';
import { Table,Form,Button } from 'react-bootstrap';
import PreviewModalFunc from "./previewModal";


function UploadJs(){    
    const [submitMd,setSubmitMd]=useState(false);
    const submitFunc=()=>{
        setTimeout(
            () => setSubmitMd(true), 
            100
          );
    }
    return (
        <>
        <div className="uploadCls">
            <div className="flex">
                <input type="file" placeholder="Select a Adobe illustrator(.ai) file" truncted-length="15" />
                {/* <div class="wrapper">
                <div class="fakeuploadbutton">upload</div>
                    <input id="file" type="file" name="file" />
                </div> */}
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <Button varient="outline-primary" onClick={()=>submitFunc()}>SUBMIT FOR REVIEW</Button>
                </div>
            </div>
            {submitMd?
            <div>
                <PreviewModalFunc data={setSubmitMd} />
            </div>
            :''
            }
            <div className="uploadBox flex">
                <div className="boxs">
                    <label>Description</label>
                    <textarea className="grid" rows={5}></textarea>
                </div>
                <div className="boxs">
                    <label>Category</label>
                    <Form.Select>
                        <option value="" hidden>Select</option>
                        <option>Fashion</option>
                        <option>Professional</option>
                        <option>Casual</option>
                        <option>Art and Craft</option>
                        <option>Robotics</option>
                        <option>Science and Technology</option>
                        <option>Social Media</option>
                        <option>Industrial and Scientific</option>
                        <option>Beauty and Personal Care</option>
                        <option>Event Networking</option>                        
                    </Form.Select>
                </div>
                <div className="boxs">
                    <label>Industry</label>
                    <Form.Select>
                        <option value="" hidden>Select</option>
                        <option>Medical and Health</option>
                        <option>Beauty and cosmetic</option>
                        <option>Food, Beverages and Restaurant</option>
                        <option>Accounting and Finance</option>
                        <option>Advertising, Media and publishing</option>
                        <option>Agriculture and farming</option>
                        <option>Animal, pets and zoology</option>
                        <option>Arts and culture</option>
                        <option>Business and marketing</option>
                        <option>Construction</option>
                        <option>Education</option>
                        <option>Engineering</option>
                    </Form.Select>
                </div>
                <div className="boxs">
                    <label>With Character</label>
                    <Form.Select>
                        <option value="" hidden>No</option>
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </Form.Select>
                </div>
                <div className="boxs">
                    <label>Language</label>
                    <Form.Select>
                        <option value="" hidden>Select</option>
                        <option value="">English</option>
                        <option value="">Japanese</option>
                        <option value="">Chinese</option>
                        <option value="">Spanish</option>
                        <option value="">Hindi</option>
                        <option value="">Tamil</option>
                        <option value="">Telugu</option>
                        <option value="">Marathi</option>
                        <option value="">Kannada</option>
                        <option value="">British English</option>
                        <option value="">Russian</option>
                        <option value="">Bengali</option>
                        <option value="">German</option>
                        <option value="">Korean</option>
                        <option value="">Others</option>
                    </Form.Select>
                </div>
                <div className="boxs">
                    <label>Location</label>
                    <Form.Select>
                        <option value="" hidden>Select</option>
                        <option value="" >Office</option>
                        <option value="" >Home</option>
                        <option value="" >Open Space</option>
                        <option value="" >Park</option>
                        <option value="" >Cartoon Scene</option>
                        <option value="" >Hospital</option>
                        <option value="" >Road</option>
                        <option value="" >Natural Scene</option>
                        <option value="" >Others</option>
                    </Form.Select>
                </div>
                <div className="boxs">
                    <label>Continental</label>
                    <Form.Select>
                        <option value="" hidden>Select</option>
                        <option value="">Asia</option>
                        <option value="">Europe</option>
                        <option value="">Africa</option>
                        <option value="">Australia/Oceania</option>
                        <option value="">North America</option>
                        <option value="">South America</option>
                    </Form.Select>
                </div>
                <div className="boxs">
                    <label>BG Colours</label>
                    <Form.Select>
                        <option value="" hidden>Select</option>
                        <option value="">Bright</option>
                        <option value="">Dull</option>
                        <option value="">Day</option>
                        <option value="">Night</option>
                        <option value="">Solid</option>
                        <option value="">Wallpaper</option>
                        <option value="">Pastel</option>
                        <option value="">Pastel rainbow</option>
                        <option value="">Gradient</option>
                        <option value="">Rainbow Watercolours</option>
                        <option value="">Unicorn</option>
                        <option value="">Tie Dye</option>
                        <option value="">Cartoon wallpaper</option>
                        <option value="">Pastel geometric wallpaper</option>
                    </Form.Select>
                </div>
                <div className="boxs">
                    <label>Country</label>
                    <Form.Select>
                        <option value="" hidden>Select</option>
                        <option value="">India</option>
                        <option value="">Africa</option>
                        <option value="">China</option>
                        <option value="">Japan</option>
                        <option value="">France</option>
                        <option value="">Finland</option>
                        <option value="">Italy</option>
                        <option value="">Spain</option>
                        <option value="">Korea</option>
                        <option value="">USA</option>
                        <option value="">Russia</option>
                        <option value="">Britain</option>
                        <option value="">Mexico</option>
                        <option value="">Australia</option>
                        <option value="">Sri Lanka</option>
                    </Form.Select>
                </div>
                
                <div className="boxs">
                    <label>Custom Tag</label>
                    <input type="text" placeholder="Custom Tag 1" />
                </div>
                <div className="boxs">
                    <label>Custom Tag</label>
                    <input type="text" placeholder="Custom Tag 2" />
                </div>
                <div className="boxs">
                    <label>Custom Tag</label>
                    <input type="text" placeholder="Custom Tag 3" />
                </div>
            </div>
        </div>
        </>
    );
}

export default UploadJs;