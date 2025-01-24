import React from "react";
import "../Css/Login.css";  
import { Link } from "react-router-dom";
function Login() {
    return (
        <div className="main">
        <div className="box">
            <form action="" id="loginform">
                <div className="head"><h1>Log in</h1></div>
                <div className="contentdiv"><input type="text" placeholder="email" id="email"/></div>
                <div className="contentdiv"><input type="password" placeholder="password" id="password"/></div>
                <div className="contentdiv"><button>Sign in</button></div>
                <div className="contentdiv"><h4>Don't Have An Account ? <Link to={"/"}>Register Now</Link></h4></div>
            </form>
        </div>
    </div>
    )
}   ``
export default Login;