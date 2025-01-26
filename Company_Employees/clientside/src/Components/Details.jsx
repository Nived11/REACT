import React from "react";
import "../Css/Details.css";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import dp from "../assets/dp.png";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  
  const navigate=useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    const getOneEmployee = async () => {
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
    };
    getOneEmployee();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }


  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/deleteemployee/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
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
  };
  return (
    <div className="employee-details-container">
      <div className="employee-det">
        <div className="employee-header">
          <h2>Employee Details</h2>
        </div>
        
        <div className="employee-prof">
          <div className="profile-img">
            <img
              src={dp}
              alt="Profile"
            />
          </div>
          <div className="profile-info">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Designation:</strong> {data.designation}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Experience:</strong> {data.experience}Y/M</p>
            <p><strong>Salary:</strong> ${data.salary}</p>
          </div>
        </div>

        <div className="buttons">
          <Link to={`/editemp/${id}`} className="btn edit-btn">Edit</Link>
          <Link onClick={handleDelete} className="btn delete-btn">Delete</Link>
          <Link to="/" className="btn home-btn">Home</Link>
        </div>
      </div>
    </div>  
  );
};

export default Details;
