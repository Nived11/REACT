import React from "react";
import "../Css/AddEmp.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const AddEmp = () => {
  const [data, setData] = useState({ 
    name: "",  email: "",  designation: "",  phone: "",  experience: "",  salary: "",
   });
   const navigate=useNavigate()
   const addEmp=async(e)=>{
    e.preventDefault();
    try {
        const res=await fetch("http://localhost:4000/api/addemployee",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        if(res.status==201){
            const msg=await res.json();
            alert(msg.msg);
            navigate("/")
        }else{
            const msg=await res.json();
            alert(msg.msg);
           
        }
       
    } catch (error) {
        console.log(error);
    }
    }
  return (
    <div className="add-employee-wrapper">
      <div className="add-employee-container">
        <h1>Add Employee</h1>
        <form className="employee-form">

          <div className="form-group">
            <label>Name</label>
            <input type="text" id="name" name="name" placeholder="Enter employee name" 
             value={data.name} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email"  id="email" name="email"  placeholder="Enter employee email" 
              value={data.email} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/>
          </div>

          <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input type="text"  id="designation" name="designation" placeholder="Enter employee designation" 
              value={data.designatio} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input  type="tel" id="phone"  name="phone" placeholder="Enter employee phone number" 
              value={data.phone} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/>
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <input  type="number"  id="experience" name="experience" placeholder="Years of experience" 
              value={data.experience} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/>
          </div>

          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input type="number"  id="salary"  name="salary"  placeholder="Enter employee salary"
              value={data.salary} onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} required/>
          </div>

          <div className="form-group">
            <label htmlFor="profileImage">Profile Image</label>
            <input type="file" id="profileImage" name="profileImage" />
          </div>

          <button onClick={addEmp} className="add-btn"> Add Employee </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmp;