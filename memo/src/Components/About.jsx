import React from "react";
import { Link,useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const id=10;
    const handlePage = () => {
        navigate(`/contact/${id}`);
    }
    return(
        <div>
            <h1>About Page</h1>
            <p>This is an about page</p>

            {/* <Link to={`/contact/${id}`}>Contact</Link> */}

            <button onClick={handlePage}>Contact</button>
        </div>
    )
}
export default About