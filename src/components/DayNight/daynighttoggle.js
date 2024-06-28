import React, { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./daynighttoggle.css"; // Import the CSS file for DayNightToggle

function DayNightToggle({ toggleTheme }) {
  const [isDayMode, setIsDayMode] = useState(true);

  const toggleMode = () => {
    setIsDayMode(!isDayMode);
    toggleTheme();
  };

  return (
    <div className="icon-link" onClick={toggleMode}>
      <div className="icon-container">
        <div className="logo-icon">
          {isDayMode ? (
            <BsFillMoonStarsFill className="icon" />
          ) : (
            <BsFillSunFill className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default DayNightToggle;
