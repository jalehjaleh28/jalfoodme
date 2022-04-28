import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/mobilemenu.css";
import IngredienteMobile from "./IngredienteMobile";
import KeukenMobile from "./KeukenMobile";

export const MobileMenu = () => {
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
          <Link to="/" className="mobilemenulink">
            <span>Home</span>
          </Link>
        </li>
        <li className="keukenmobile" onClick={() => keukenCheck()}>
          <span>Keuken</span>
        </li>
        <li className="ingredientemobile" onClick={() => ingredanteCheck()}>
          <span>Ingrediente</span>
        </li>
        <li>
          <Link to="/about" className="mobilemenulink">
            <span>Over Ons</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="mobilemenulink">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <div className={keukenState ? "showkeukenmobile" : "hidekeukenmobile"}>
        {/* <KeukenMobile /> */}
      </div>
      <div className={ingredanteState ? "showingredantemobile" : "hideingredantemobile"}>
        {/* <IngredienteMobile /> */}
      </div>
    </>
  );
};
