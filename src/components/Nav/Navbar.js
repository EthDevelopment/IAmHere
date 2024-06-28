import React, { useState } from "react";
import "./Navbar.css";
import { BiHomeAlt2, BiPhone } from "react-icons/bi";
import { TbRoad } from "react-icons/tb";
import { DayNightToggle } from "../../App"; // Import the DayNightToggle component
import ContactForm from "../Contact/ContactForm"; // Correctly import ContactForm

const Navbar = ({ theme, setTheme }) => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => {
    setContactFormOpen(true);
  };

  const closeContactForm = () => {
    setContactFormOpen(false);
  };

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
              <span className="icon-text">Home</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#Projects" className="icon-link">
            <div className="icon-container projects-icon-container">
              <div className="icon-wrapper">
                <TbRoad className="nav-icon" />
              </div>
              <span className="icon-text">Projects</span>
            </div>
          </a>
        </li>
        <li>
          <button onClick={openContactForm} className="icon-link">
            <div className="icon-container contact-icon-container">
              <div className="icon-wrapper">
                <BiPhone className="nav-icon" />
              </div>
              <span className="icon-text">Contact </span>
            </div>
          </button>
        </li>
      </ul>
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default Navbar;
