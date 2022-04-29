import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import {About} from "./About";
import {IngredienteItem} from './IngredienteItem'
import { Contact } from "./Contact";
import { Home } from "./Home";
import { IngredienteItemSelect } from "./IngredienteItemSelect";
import KeukenItems from "./KeukenItems";
import {Login} from "./Login";
import { Notfound } from "./Notfound";
import { SearchbyWort } from "./SearchbyWort";


const Routess =() => {
  const location = useLocation();

  return (
  
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home/>} />
        <Route path="ingrediente/:id" element={<IngredienteItem/>}/>
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        {/* <Route path="ingrediente/:id" element={<IngredienteItem />} /> */}
        <Route path="ingrediente/:id/:id" element={<IngredienteItemSelect />} />
        <Route path="keuken/:id/:id" element={<IngredienteItemSelect />} />
        <Route path="keuken/:id" element={<KeukenItems/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="wort/:id" element={<SearchbyWort/>}/>
        <Route path="wort/:id/:id" element={<IngredienteItemSelect/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
   
  ); 
}

export default Routess;
