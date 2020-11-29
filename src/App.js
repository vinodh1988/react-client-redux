import React , {useEffect} from 'react';
import {useHistory, Route, Switch} from 'react-router-dom';
import './style.css';
import AdminHome from './Components/admin/AdminHome';
import UserHome from './Components/wfm/UserHome';
import LoginHome from './Components/common/Login';
import Register from './Components/common/Register';
import { LoginConnected } from './Redux/connectedComponents/LoginConnected';

const App = ()=>{
   
     let history =useHistory();

     useEffect(()=>{
        
            let user =localStorage.getItem("username")
            let usertype =localStorage.getItem("usertype")
         
            if(user  && usertype == "admin")
            history.push("admin");
            else if(user  && usertype == "user")
            history.push("users");
            else 
            history.push("login")

     },[])
     return(

      <div>    
         <Route path="/admin" component={AdminHome}/>
         <Route path="/users" component={UserHome}/>
         <Route path="/login" component={LoginConnected}/>
         <Route path="/register" component={Register}/>
      </div>
     )
}

export default App;