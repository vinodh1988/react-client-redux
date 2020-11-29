import React from 'react';

export const  NavBar = (currentstring)=>{
return(
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <a className="navbar-brand" href="#">WorkForce Management</a>
  

 

  <ul className="navbar-nav ml-auto">
  <li className="nav-item">
      <a className="nav-link" href="#">Username, Sign out</a>
    </li>
  </ul>
</nav>
);
}