import React from "react";
import "../Css/AddEmp.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const AddEmp = () => {
  const { id } = useParams();
  console.log("editpage",id);
  const navigate=useNavigate();
  
  const [data, setData] = useState(null);
  useEffect(() => {
    const editEmployee=async()=>{
      try {
        const res = await fetch(`http://localhost:4000/api/oneemployee/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          const msg = await res.json();
          console.log(msg);
          setData(msg[0]);
        } else {
          const msg = await res.json();
          alert(msg.msg);
        }
      } catch (error) {
        console.log(error);
      }
    }
    editEmployee();
  }, [id]);
  if (!data) {
    return <div>Loading...</div>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateEmp ={...data};
      handleUpdate(updateEmp)
    } catch (error) { 
      console.log(error);
    }
  };
    const handleUpdate = async (updateEmp) => {
      try {
        const res = await fetch(`http://localhost:4000/api/updateemployee/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateEmp),
        });
        if (res.status === 200) {
          const msg = await res.json();
          console.log(msg);
          navigate("/");
        } else {
          const msg = await res.json();
          alert(msg.msg);
        }
      } catch (error) {
        console.log(error);
      }
      }

  return (
    <div className="add-employee-wrapper">
      <div className="add-employee-container">
        <h1>Edit Employee</h1>
        <form className="employee-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter employee name"
              onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} value={data.name} required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter employee email"
              onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} value={data.email} required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              id="designation"
              name="designation"
              placeholder="Enter employee designation"
              onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} value={data.designation} required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter employee phone number"
              onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} value={data.phone} required
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <input
              type="number"
              id="experience"
              name="experience"
              placeholder="Years of experience"
              onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} value={data.experience} required
            />
          </div>

          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              placeholder="Enter employee salary"
              onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} value={data.salary} required
            />
          </div>

          <div className="form-group">
            <label htmlFor="profileImage">Profile Image</label>
            <input type="file" id="profileImage" name="profileImage" />
          </div>

          <button type="submit" className="add-btn" onClick={handleSubmit}>
            Edit Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmp;