/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
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