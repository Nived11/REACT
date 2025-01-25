import React from "react";
import { ThemeContext } from "./ThemeProvider";

const Header = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    return (
        <header style={{ backgroundColor: theme === "light" ? "white" : "grey", padding: "20px",color: theme === "light" ? "grey" : "white" }}>
            <h1 >Theme Toggler</h1>
            <button onClick={toggleTheme} style={{ color: theme === "light" ? "grey" : "white",color: theme === "light" ? "white" : "grey" }}>Toggle Theme</button>
        </header>
    );
}
export default Header;