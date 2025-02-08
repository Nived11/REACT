import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Home.css";
import { ToastContainer, toast } from 'react-toastify';
import dp from "../assets/dp.png";

function Home() {
  const [username, setUsername] = useState();
  const navigate = useNavigate();
  const notify = () => {toast.success('Logged Out', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
    setTimeout(()=>{navigate("/login")},3000);
}
  useEffect(() => {
    const getHome = async () => {
      const token = localStorage.getItem("token");
     
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
      <ToastContainer />
        <div className="container">
          <div className="logo">Adobe</div>
          <div className="search">
            <input className="searchinput" type="text" placeholder="Search.." />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li onClick={notify}>About</li>
            <li>Contact</li>
            {
              username?<li onClick={notify}>Logout</li>:<li><Link to="/login">Login</Link></li>
            }
          </ul>
          <div className="profile">
            <h3>{`Hii ${username}`}...</h3>
            <img src={dp} alt="Profile" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;
