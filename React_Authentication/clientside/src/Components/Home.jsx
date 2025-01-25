import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Home.css";
import dp from "../assets/dp.png";

function Home() {
  const [username, setUsername] = useState("User");
  const navigate = useNavigate();

  useEffect(() => {
    const getHome = async () => {
      const token = sessionStorage.getItem("token");
     
      try {
        const res = await fetch("http://localhost:3000/api/home", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          }
        });

        if (res.status === 200) {
          const data = await res.json();
          setUsername(data.username);
        } else {
          const { msg } = await res.json();
          alert(msg);
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getHome();
  }, [navigate]);

  return (
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
            <h3>Hi {username}...</h3>
            <img src={dp} alt="Profile" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;
