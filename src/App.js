// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import DayNightToggle from "./components/DayNight/daynighttoggle";
import Feed from "./components/Feed/feed";
import Profile from "./components/Profile/Profile"; // Import the Profile component
import "./Global.css";
import "./App.css";

export const toggleTheme = (theme, setTheme) => {
  setTheme(theme === "light" ? "dark" : "light");
};

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
export { DayNightToggle };
