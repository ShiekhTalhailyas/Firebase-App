import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../items/logo.jpg";
import "./splash.css";
export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/signup");
    }, 4000);
  });
  return (
    <div>
      <div className="containerSplash">
        <img src={logo} alt="logo" className="logoSplash" />
        <div>
          <h1 className="splash">Welcome to Firebase Project App</h1>
        </div>
      </div>
    </div>
  );
}
