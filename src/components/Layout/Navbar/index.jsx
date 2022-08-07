import "./Navbar.css";
import React, { useState } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [barSelect, setBarSelect] = useState(false);
  const MenuState = () => {
    setBarSelect(!barSelect);
  };
  return (
    <nav className="menu">
      <Menu />
      <div>
        <span className="bar" onClick={MenuState}>
          {barSelect ? <MdClose /> : <FaBars />}
        </span>
        <div className={barSelect ? "menushow" : "menunotshow"}>
          <MobileMenu showMenu={MenuState} />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
