import React from "react";
import "../css/review.css";
import { Table,Form } from 'react-bootstrap';

function ReviewJs(){
    
    return (
        <>        
        <div className="selectDiv">
            <Form.Select>
                <option value="" hidden>Pending Files</option>
                <option value="">Pending Files</option>                
                <option>Rejected Files</option>
                <option>Approved Files</option>
            </Form.Select>
        </div>
        <div className="table reviewCls">
            <Table striped>
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Submitted By</th>
                        <th>Submitted Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>saranya</td>
                    </tr>
                    <tr>
                        <td>saranya</td>
                    </tr>
                    <tr>
                        <td>saranya</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        </>
    );
}

export default ReviewJs;