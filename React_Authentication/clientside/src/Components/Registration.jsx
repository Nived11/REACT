import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Registration.css"
function Registration() {
    const [data,setData]=useState({
        username:"",
        email:"",
        password:"",
        cpassword:""
    });
    const navigate=useNavigate();
    const addData=async(e)=>{
        e.preventDefault();
        try {
            const res=await fetch("http://localhost:3000/api/adduser",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            });
            if(res.status==201){
                const msg=await res.json();
                alert(msg.msg);
                navigate("/login");
            }else{
                const msg=await res.json();
                alert(msg.msg);
            }
           
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="main">
    <div className="box">
        <div className="rgtbox">
            <div className="head"><h1>Create Account</h1></div>
            <div className="container">
                <form action="" id="form">  
                    <div className="content-div">
                        <input type="text" placeholder="username" name="username"
                        value={data.username} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/>
                    </div>
                    <div className="content-div">
                        <input type="text" placeholder="email" name="email"
                        value={data.email} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/>
                    </div>
                    <div className="content-div">
                        <input type="password" placeholder="password" name="password"
                        value={data.password} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/>
                    </div>
                    <div className="content-div">
                        <input type="password" placeholder="confirm password" name="cpassword"
                        value={data.cpassword} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))}/>
                    </div>
                    <div className="content-div">
                        <button onClick={addData}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
export default Registration;
   
