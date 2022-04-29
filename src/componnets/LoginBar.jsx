import React,{useState} from "react";
import { FaBars } from "react-icons/fa";
import {MdClose} from "react-icons/md"
import { Link } from "react-router-dom";
import "../style/login.css";
import { MobileMenu } from "./MobileMenu";

export const LoginBar = () => {

const [barSelect,setBarSelect] = useState(false);

const MenuState= () => {
    setBarSelect(!barSelect)
}
  return (
    <>
      <Link to="/login" className= "login-link"><span>Login</span></Link>
      <span className="bar" onClick={MenuState}>
        {barSelect ? <MdClose/> : <FaBars />}
      </span>
     <div className={barSelect ? "menushow" : "menunotshow"}>
         <MobileMenu/>
     </div>
    </>
  );
};
