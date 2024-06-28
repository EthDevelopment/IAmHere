// src/components/MetaMaskLogin/MetaMaskLogin.js

import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./MetaMaskLogin.css";
import MetaMaskFox from "../../assets/MetaMask_Fox.svg"; // Correct path to the SVG

const MetaMaskLogin = ({ setAccount }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const fox = document.getElementById("metamask-fox");
      const { clientX: mouseX, clientY: mouseY } = event;
      const { innerWidth: width, innerHeight: height } = window;
      const foxX = width / 2;
      const foxY = height / 2;

      // Calculate angle to rotate the fox
      const angleDeg =
        Math.atan2(mouseY - foxY, mouseX - foxX) * (180 / Math.PI);
      setRotation(angleDeg);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        if (error.code === -32002) {
          alert(
            "Request already pending. Please open MetaMask and complete the request."
          );
        } else {
          console.error("Error connecting to MetaMask", error);
        }
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <div className="metamask-login" onClick={connectMetaMask}>
      <img
        id="metamask-fox"
        src={MetaMaskFox}
        alt="MetaMask Fox"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
};

export default MetaMaskLogin;
