import React from "react";
import {Link} from 'react-router-dom';
import "../Css/Nav.css";
function Nav(){
    return(
        <>
        <nav>
        <div className="container">
          <div className="logo">DCOMPANY</div>
          <div className="search">
            <input className="searchinput" type="text" placeholder="Search.." />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
          <div className="addemp">
            <Link to="/addemp"><div className="addbutton">Add Employee</div></Link>
          </div>
        </div>
      </nav>
      </>
    )
}
export default Nav;