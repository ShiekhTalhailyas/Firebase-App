import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../items/logo.jpg";
import "./Navbar.css";
export default function Home() {
  return (
    <div className=" containerNav">
      <a href="/" className="flex flex-row">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <div className="container-row">
        <Link to={"/picture"} className="linkNav">
          Picture
        </Link>
        <Link to={"/button"} className="linkNav">
          Button
        </Link>
        <Link to={"/calculator"} className="linkNav">
          Calculator
        </Link>
        <Link to={"/text"} className="linkNav">
          Text
        </Link>
        <Link to={"/signup"} className="linkNav">
          SignUp
        </Link>
      </div>
    </div>
  );
}
