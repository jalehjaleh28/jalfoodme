import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryMoile from "./CategoryMobile";
import KitchenMobile from "./KitchenMobile";
import "./mobilemenu.css";

const MobileMenu = ({ showMenu }) => {
  const [keukenState, setKeukenState] = useState(false);
  const [ingredanteState, setIngredanteState] = useState(false);

  const keukenCheck = () => {
    setKeukenState(!keukenState);
    setIngredanteState(false);
  };

  const ingredanteCheck = () => {
    setIngredanteState(!ingredanteState);
    setKeukenState(false);
  };
  return (
    <>
      <ul className="mobile-ul">
        <li>
          <Link
            to="/"
            className="mobilemenulink mobile-link"
            onClick={() => showMenu()}
          >
            <span>Home</span>
          </Link>
        </li>
        <li className="keukenmobile mobile-link" onClick={() => keukenCheck()}>
          <Link to="#"  className="mobilemenulink mobile-link">
          <span>Kitchen</span>
          </Link>
        </li>
        <li
          className="ingredientemobile mobile-link"
          onClick={() => ingredanteCheck()}
        >
          <Link to="#"  className="mobilemenulink mobile-link">
          <span>Ingrediente</span>
          </Link>
          
        </li>
        <li>
          <Link
            to="/popularity"
            className="mobilemenulink mobile-link"
            onClick={() => showMenu()}
          >
            <span>Popularity</span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="mobilemenulink mobile-link"
            onClick={() => showMenu()}
          >
            <span>About Us</span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="mobilemenulink mobile-link"
            onClick={() => showMenu()}
          >
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <div className={keukenState ? "showkeukenmobile" : "hidekeukenmobile"}>
        <KitchenMobile showMenu={showMenu} />
      </div>
      <div
        className={
          ingredanteState ? "showingredantemobile" : "hideingredantemobile"
        }
      >
        <CategoryMoile showMenu={showMenu} />
      </div>
    </>
  );
};

export default MobileMenu;
