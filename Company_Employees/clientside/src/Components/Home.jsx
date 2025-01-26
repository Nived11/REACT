import React, { useEffect, useState } from "react";
import "../Css/Home.css";
import Nav from "./Nav";
import dp from "../assets/dp.png";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getHome = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/getemployee", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          const msg = await res.json();
          console.log(msg);
          setData(msg);
        } else {
          const msg = await res.json();
          alert(msg.msg);
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    getHome();
  }, []);

  return (
    <>
      <Nav />
      <div className="home">
        {data.map((emp, index) => (
          <Link to={`/details/${emp._id}`} key={emp.id || `${emp.name}-${index}`}>
            <div className="employee-card">
              <div className="card-image">
                <img src={dp} alt="Employee Profile" />
              </div>
              <div className="card-content">
                <h2>{emp.name}</h2>
                <p>{emp.designation}</p>
                <button>Click Here for More Details</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
