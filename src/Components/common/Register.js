import React from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
    let history =useHistory()
    return(
        <div id="log-reg-form">
        <h2>WorkForce  Management  - Register User</h2>

         <div class="form-item">
                <label class="label">Username</label>
                <input type="text" />
         </div>
         <div class="form-item">
           <label class="label">Password</label>
           <input type="password" />
        </div>

        <div class="form-item">
            <label class="label">Verify Password</label>
            <input type="password" />
         </div>
     

        <div class="submit-item">
            <button type="button">Register</button>
        </div>
      
        <h5 onClick={()=>history.push("login")}>Have an Account? Login</h5>
   </div>
    )
}

export default Register;