import React from "react";
import { Table,Form } from 'react-bootstrap';


function SettingFunc(){
    return(
        <>
        <div className="table reviewCls">
            <Table striped>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Display Name</th>
                        <th>User Type</th>
                        <th>Loggedin</th>
                        <th>Last Login Time</th>
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

export default SettingFunc;