import "../style/nav.css";
import React from "react";
import { Menu } from "./Menu";
import { LoginBar } from "./LoginBar";

function Nav() {
  return (
    <div className="rectangle">
      <nav className="menu">
        <div className="logo">
          <span>jalfood</span>
        </div>
        <div className="menu-items">
          <Menu />
        </div>

        <div className="login">
         <LoginBar/>
        </div>
      </nav>
     
    </div>
  );
}
export default Nav;
