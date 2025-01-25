import React,{useContext} from "react";
import { ThemeContext } from "./ThemeProvider";

const Body = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme === "light" ? "white" : "grey", padding: "20px",color: theme === "light" ? "grey" : "white" }}>
            <h1>Theme Body</h1>
            <button onClick={toggleTheme} style={{ color: theme === "light" ? "grey" : "white",color: theme === "light" ? "white" : "grey" }}>Toggle Theme</button>
        </div>
    )
}

export default Body