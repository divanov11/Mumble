import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyle";
import { darkTheme, lightTheme } from "./Theme";
import { CgDarkMode } from "react-icons/cg";

function Header() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div id="header">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div id="logo">
          <Link to={"/"}>
            <h3>MUMBLE</h3>
          </Link>
        </div>

        <div id="nav-wrapper">
          <i className="fas fa-bell nav-item nav-icon"></i>
          {/* This will eventually be drop down list with options like settings, porfile, logout, etc */}
          <Link to={"/settings"}>
            <img
              alt="img-description"
              className="user-thumbnail user-thumbnail-sm nav-item"
              src="https://randomuser.me/api/portraits/men/52.jpg"
            />
          </Link>

          <button className="btn-toggle">
            <CgDarkMode onClick={themeToggler} size="3em" color="#ffffff" />
          </button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Header;
