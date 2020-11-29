import React, { useState, useEffect } from 'react';
import './styles/login.css';
import { useHistory } from 'react-router-dom';

const LoginHome = ({status,servermessages,performLogin}) => {
    let history=useHistory();

    let [username, setUsername] = useState('');
    let [password, setPassword] =useState('');
    let [errors ,setErrors] = useState([]);

    useEffect(
        ()=>{
            if(status && localStorage.getItem("usertype")==="admin")
                history.push("admin");
            else if (status && localStorage.getItem("usertype")==="user")
                history.push("users");
        }
    ) //run every time after render

    function validate({username,password}){
        let errors= [];
        if(!username || username.length ==0 || username.length<3)
          errors.push("Username field not entered correctly");
        if(!password || password.length ==0 || password.length<3)
          errors.push("Password field not entered correctly");
         if(errors.length>0) 
          setErrors(errors);
         else{
       
          performLogin({username:username,password:password})
         }
    }
    
let errormessages = errors.map((x)=><li key={x} className="errors">{x}</li>)

    return(
        <div id="log-page-form" >
        <h2>Worforce Management</h2>
       <form>
         <div className="form-item">
                <label className="label">Username</label>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
         </div>
         <div className="form-item">
           <label className="label">Password</label>
           <input type="password" value={password}   onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div className="submit-item">
            <button type="button" onClick={()=>validate({username:username,password:password})}>Login</button>
        </div>
        </form>
       <ul>
           {errormessages}
       </ul>
       <ul>
           <li className="errors">{servermessages}</li>
       </ul>
           
       
       <h5 onClick={()=>history.push("register")}>Not Registered Yet? Click Here</h5>
   </div>
    )
    
}

export default LoginHome;