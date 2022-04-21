import  "../style/nav.css";
import {FaBars } from "react-icons/fa";
import Keuken  from "./Keuken";
import React , { useState } from "react";
import Ingredante from "./Ingredante";

function Nav() {
  const [keukenState , setKeukenState] = useState(false);
  const [ingredanteState , setIngredanteState] = useState(false);

  const keukenCheck = () =>{
    setKeukenState(!keukenState);

  }

    const ingredanteCheck = () =>{
      setIngredanteState(!ingredanteState);
    }
  
  
  return (
    <div className="rectangle">
      <div className="logo">
        <span>jalfood</span>
      </div>
     
        <nav className="menu">
            <ul className="menu-item">
                <li>Home</li>
                <li className="keuken" onClick={()=>keukenCheck()}>
                  <span className={keukenState ? "white" : "dark"}>Keuken</span> 
                  <div className={keukenState ? "showkeuken" : "hidekeuken"}>
                    <Keuken/>
                  </div>
                </li>
                <li className="ingredante" onClick={()=>ingredanteCheck()}>
                  <span className={ingredanteState ? "white" : "dark"}>Ingrediënten</span>
                  <div className={ingredanteState ? "showingredante" : "hideingredante"}>
                    <Ingredante/>
                  </div>
                  </li>
                <li>Over ons</li>
                <li>Contact</li>

            </ul>
        </nav>
      
      <div className="login">
          <button>Login</button>
          <span className="bar"><FaBars/></span>

      </div>
      
    </div>
  );
}
export default Nav;

