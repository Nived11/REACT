import { useState } from "react";
import "../Css/Login.css";  
import { Link,useNavigate } from "react-router-dom";

function Login() {
    const [data,setData]=useState({
        email:"",
        password:"",
    });
    const navigate=useNavigate();

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

            console.log(res);
            
            const{ msg,token}=await res.json();
            if(res.status==200){
                alert(msg)
                
                console.log(msg);
                
                sessionStorage.setItem("token",token);
                navigate("/");
            }else{
                // alert(msg);
            }
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
                value={data.email} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/></div>
                <div className="contentdiv"><input type="password" placeholder="password" name="password"
                value={data.password} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/></div>
                <div className="contentdiv"><button onClick={loginUser}>Sign in</button></div>
                <div className="contentdiv"><h4>Don't Have An Account ? <Link to="/Register">Register Now</Link></h4></div>
            </form>
        </div>
    </div>
    )
}   ``
export default Login;