// App.js

import React, { useState } from "react";
import Navbar from "./components/Nav/Navbar";
import DayNightToggle from "./components/DayNight/daynighttoggle";
import Feed from "./components/Feed/feed";

import "./App.css";

export const toggleTheme = (theme, setTheme) => {
  setTheme(theme === "light" ? "dark" : "light");
};

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Feed />
    </div>
  );
}

export default App;
export { DayNightToggle };
