import React from "react"
import { Link } from "react-router-dom";
import "../Css/Registration.css"
function Registration() {
  return (
    <div className="main">
    <div className="box">
        <div className="rgtbox">
            <div className="head"><h1>Create Account</h1></div>
            <div className="container">
                <form action="" id="form">  
                    <div className="content-div">
                        <input type="text" placeholder="username" id="username"/>
                    </div>
                    <div className="content-div">
                        <input type="text" placeholder="email" id="email"/>
                    </div>
                    <div className="content-div">
                        <input type="password" placeholder="password" id="password"/>
                    </div>
                    <div className="content-div">
                        <input type="password" placeholder="confirm password" id="cpassword"/>
                    </div>
                    <div className="content-div">
                        <Link to="/login"><button>Register</button></Link> 
                    </div>
                   
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
export default Registration;
   
