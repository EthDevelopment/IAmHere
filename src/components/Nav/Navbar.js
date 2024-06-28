// src/components/Nav/Navbar.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { BiHomeAlt2 } from "react-icons/bi";
import {
  TbUser,
  TbBell,
  TbMessageCircle,
  TbSearch,
  TbEdit,
} from "react-icons/tb";
import { DayNightToggle } from "../../App"; // Import the DayNightToggle component

const Navbar = ({ theme, setTheme }) => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo-title-container">
        <DayNightToggle
          toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/" className="icon-link">
            <div className="icon-container">
              <BiHomeAlt2 className="nav-icon" />
              <span className="logo-title">Home</span>
            </div>
          </Link>
        </li>
        <li className={location.pathname === "/explore" ? "active" : ""}>
          <Link to="/explore" className="icon-link">
            <div className="icon-container">
              <TbSearch className="nav-icon" />
              <span className="logo-title">Explore</span>
            </div>
          </Link>
        </li>
        <li className={location.pathname === "/notifications" ? "active" : ""}>
          <Link to="/notifications" className="icon-link">
            <div className="icon-container">
              <TbBell className="nav-icon" />
              <span className="logo-title">Notifications</span>
            </div>
          </Link>
        </li>
        <li className={location.pathname === "/messages" ? "active" : ""}>
          <Link to="/messages" className="icon-link">
            <div className="icon-container">
              <TbMessageCircle className="nav-icon" />
              <span className="logo-title">Messages</span>
            </div>
          </Link>
        </li>
        <li className={location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile" className="icon-link">
            <div className="icon-container">
              <TbUser className="nav-icon" />
              <span className="logo-title">Profile</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
