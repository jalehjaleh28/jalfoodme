import React, { useState } from "react";
import Keuken from "./Keuken";
import Ingrediente from "./Ingrediente";
import "../style/nav.css";
import { Link, useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();
  const [keukenState, setKeukenState] = useState(false);
  const [ingredanteState, setIngredanteState] = useState(false);
  const [overOns, setOverOns] = useState(false);
  const [contact, setCantact] = useState(false);
  const [home, setHome] = useState(true);

  const keukenCheck = () => {
    setKeukenState(!keukenState);
    setIngredanteState(false);
    setCantact(false);
    setHome(false);
    setOverOns(false);
  };

  const ingredanteCheck = () => {
    setIngredanteState(!ingredanteState);
    setKeukenState(false);
    setCantact(false);
    setHome(false);
    setOverOns(false);
  };

  const OverOns = () => {
    setOverOns(true);
    setIngredanteState(false);
    setKeukenState(false);
    setCantact(false);
    setHome(false);
    // if(overOns === true){
    //  navigate("/")
    //  setHome(true)
    // }
  };
  const Home = () => {
    setHome(true);
    setOverOns(false);
    setIngredanteState(false);
    setKeukenState(false);
    setCantact(false);
    navigate("/");
  };
  const Contact = () => {
    setCantact(true);
    setIngredanteState(false);
    setKeukenState(false);
    setOverOns(false);
    setHome(false);
    // if(contact===true){
    //   navigate("/")
    //   setHome(true)
    // }
  };
  return (
    <>
      <ul className="menu-item">
        <li>
          <Link
            to="/"
            className={home ? "alink" : "nlink"}
            onClick={() => Home()}
          >
            <span>Home</span>
          </Link>
        </li>
        <li className="keuken" onClick={() => keukenCheck()}>
          <span className={keukenState ? "white" : "dark"}>Keuken</span>
        </li>
        <li className="ingredante" onClick={() => ingredanteCheck()}>
          <span className={ingredanteState ? "white" : "dark"}>
            Ingrediënten
          </span>
        </li>
        <li onClick={() => OverOns()}>
          <Link to="/about" className={overOns ? "alink" : "nlink"}>
            <span className="over">Over ons</span>
          </Link>
        </li>
        <li onClick={() => Contact()}>
          <Link to="/contact" className={contact ? "alink" : "nlink"}>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <div className={keukenState ? "showkeuken" : "hidekeuken"}>
        <Keuken />
      </div>
      <div className={ingredanteState ? "showingredante" : "hideingredante"}>
        <Ingrediente />
      </div>
    </>
  );
};
