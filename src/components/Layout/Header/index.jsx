import React from "react";
import LoginBar from "../LoginBar";
import logo from "../../../assets/images/logo.svg"
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img className="logo-img" src={logo} alt="" />
        <span>jalfood</span>
      </Link>
      <div className="login">
        <LoginBar />
      </div>
    </header>
  );
}

export default Header;
