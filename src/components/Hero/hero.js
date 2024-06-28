import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      {/* Text for hero */}
      <div className="hero-text">
        {/* Include the DayNightToggle without theme-related props */}
        <h1>Danial Manshadi</h1>
      </div>
    </div>
  );
}

export default Hero;
