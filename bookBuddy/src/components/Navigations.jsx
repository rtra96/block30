import React from "react";
import {Link} from 'react-router-dom';

function Navbar (){
  return ( 
  <div className="navigation-station">
    <nav>
        
        <button><Link to = "/">All Books</Link></button>
        <button><Link to = "/register">Create an Account</Link></button>
        <button><Link to = "/login">Login to an Existing Account</Link></button>
        <button><Link to = "/account">My Account</Link></button>
        
    </nav>
  </div>

  );
}

export default Navbar;