// App.js

import React, { useState } from "react";
import Navbar from "./components/Nav/Navbar";
import DayNightToggle from "./components/DayNight/daynighttoggle";
import Hero from "./components/Hero/hero";
import ProjectDisplay from "./components/Projects/ProjectDisplay";

import "./App.css";

export const toggleTheme = (theme, setTheme) => {
  setTheme(theme === "light" ? "dark" : "light");
};

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <section id="Home">
        <Hero />
      </section>
      <section id="Projects"></section>
      <ProjectDisplay />
    </div>
  );
}

export default App;
export { DayNightToggle };
