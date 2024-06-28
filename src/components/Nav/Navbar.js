// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbUser } from "react-icons/tb";
import { DayNightToggle } from "../../App"; // Import the DayNightToggle component

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <DayNightToggle
          toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
      <ul>
        <li>
          <Link to="/" className="icon-link">
            <div className="icon-container home-icon-container">
              <div className="icon-wrapper">
                <BiHomeAlt2 className="nav-icon" />
                <span className="icon-text">Home</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="icon-link">
            <div className="icon-container projects-icon-container">
              <div className="icon-wrapper">
                <TbUser className="nav-icon" />
                <span className="icon-text">Profile</span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
