import React from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css"

function Home(){
  
    return(
       <>
            <nav>
      <div className="container">
        <div className="logo">Adobe</div>
        <div className="search">
          <input className="searchinput" type="text" placeholder="Search.." />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li>Contact</li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <div className="profile">
          <h3>hii user...</h3>
          <img src="" alt="" />
        </div>
      </div>
    </nav>
       </>
    )
}
export default Home;