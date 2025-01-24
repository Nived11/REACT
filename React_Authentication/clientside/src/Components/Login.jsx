import { useState } from "react";
import "../Css/Login.css";  
import { Link } from "react-router-dom";
function Login() {
    const [data,setData]=useState({
        email:"",
        password:"",
    });
    const loginUser=async(e)=>{
        e.preventDefault();
        try {
            const res=await fetch("http://localhost:3000/api/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            });
            const msg=await res.json();
            alert(msg.msg);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="main">
        <div className="box">
            <form action="" id="loginform">
                <div className="head"><h1>Log in</h1></div>
                <div className="contentdiv"><input type="text" placeholder="email" name="email" 
                value={data.email} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))}/></div>
                <div className="contentdiv"><input type="password" placeholder="password" name="password"
                value={data.password} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))}/></div>
                <div className="contentdiv"><Link to="/"><button onClick={loginUser}>Sign in</button></Link></div>
                <div className="contentdiv"><h4>Don't Have An Account ? <Link to="/Register">Register Now</Link></h4></div>
            </form>
        </div>
    </div>
    )
}   ``
export default Login;