import React from 'react';
import "../css/reviewModal.css";
import {useState,useRef} from 'react';
import { Row, Modal, Button, Form, Col } from "react-bootstrap";

function PreviewModalFunc(props){
    const [isShow, invokeModal] = useState(true);
    // debugger
    const initModal = () => {               
        return props.data(false);
    }

    return(
        <>
        <div className="reviewCls" width="200%" height="200%">
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Button>SAVE</Button>
                    <Button>DISCARD</Button>
                </Modal.Header>
                <Modal.Body>
                    <textarea placeholder="Description"></textarea>
                    <input placeholder="With Charater" />
                    <input placeholder="Custom Tag 1" />
                    <input placeholder="Custom Tag 2" />
                    <input placeholder="Custom Tag 3" />
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
};

export default PreviewModalFunc;
