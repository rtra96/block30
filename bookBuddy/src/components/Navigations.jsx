/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import {Link} from 'react-router-dom';

function Navbar (){
  return ( 
  <>
    <nav>
        <ul>
        <li><Link to = "/">All Books</Link></li>
        <li><Link to = "/register">Create an Account</Link></li> 
        <li><Link to = "/login">Login to an Existing Account</Link></li>
        </ul>
    </nav>
  </>

  );
}

export default Navbar;