import React from 'react';

function StatusPage(){
    return(
        <div>
          <table>
            <thead>
              <th>File Name</th>
              <th>File Submitted Date</th>
              <th>Approve Name</th>
              <th>Reason</th>
              <th>Date of Rejection</th>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>File Name1.A1</td>
                <td>05/07/2022</td>
                <td>Rejected by jeeva</td>
                <td>Reason for Rejection</td>
                <td>20/07/2022</td>
              </tr>
              <tr>
                <td></td>
                <td>File Name2.A1</td>
                <td>04/07/2022</td>
                <td>Rejected by mani</td>
                <td>Reason for Rejection</td>
                <td>20/07/2022</td>
              </tr>
              <tr>
                <td></td>
                <td>File Name3.A1</td>
                <td>03/07/2022</td>
                <td>Rejected by jeeva</td>
                <td>Reason for Rejection</td>
                <td>20/07/2022</td>
              </tr>
            </tbody>
          </table>
        </div>
    );
    
}

export default StatusPage;