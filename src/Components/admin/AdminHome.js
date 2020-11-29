import React from 'react';
import '../common/styles/adminhome.css'
import { NavBar } from '../common/NavBar';
import { Route } from 'react-router-dom';
import { EmployeeListConnected } from '../../Redux/connectedComponents/EmployeeListConnected';
const AdminHome = () => {
    return(
        <div id="admin-container">
            <NavBar/>
            <Route path="" component={EmployeeListConnected}></Route>
            <Route path="approved-list" component= {EmployeeListConnected}></Route>
        </div>
    )
}

export default AdminHome;