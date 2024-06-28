// src/App.js

import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import DayNightToggle from "./components/DayNight/daynighttoggle";
import Feed from "./components/Feed/feed";
import MetaMaskLogin from "./components/MetaMaskLogin/MetaMaskLogin";
import Suggest from "./components/Suggest/Suggest";
import "./App.css";
import "./Global.css";

export const toggleTheme = (theme, setTheme) => {
  setTheme(theme === "light" ? "dark" : "light");
};

function App() {
  const [theme, setTheme] = useState("dark");
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    };

    checkMetaMaskConnection();
  }, []);

  if (!account) {
    return <MetaMaskLogin setAccount={setAccount} />;
  }

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="feed-section">
        <div className="feed-container">
          <Routes>
            <Route path="/home" element={<Feed />} />
            <Route path="/explore" element={<div>Explore</div>} />
            <Route path="/notifications" element={<div>Notifications</div>} />
            <Route path="/messages" element={<div>Messages</div>} />
            <Route path="/grok" element={<div>Grok</div>} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
      <div className="suggest-section">
        <Suggest />
      </div>
    </div>
  );
}

export default App;
export { DayNightToggle };
