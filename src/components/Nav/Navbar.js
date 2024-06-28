// Navbar.js

import React from "react";
import "./Navbar.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbUser } from "react-icons/tb";
import { DayNightToggle } from "../../App"; // Import the DayNightToggle component

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <div className="icon-container daynight-toggle-wrapper">
            <div className="icon-wrapper">
              <DayNightToggle
                toggleTheme={() =>
                  setTheme(theme === "light" ? "dark" : "light")
                }
              />
            </div>
          </div>
        </li>
        <li>
          <a href="#Home" className="icon-link">
            <div className="icon-container home-icon-container">
              <div className="icon-wrapper">
                <BiHomeAlt2 className="nav-icon" />
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#Profile" className="icon-link">
            <div className="icon-container projects-icon-container">
              <div className="icon-wrapper">
                <TbUser className="nav-icon" />
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
