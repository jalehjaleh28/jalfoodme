import React from "react";

import App from "../App";

import { useLocation, Routes, Route } from "react-router-dom";

import {About} from "./About";

// import CatgoryShow from "./components/CatgoryShow";

// import CatgoryItem from "./components/CatgoryItem";
import { Contact } from "./Contact";

function Routess() {
  const location = useLocation();

  return (
  
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />

        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />

        {/* <Route path="catgory/:id" element={<CatgoryShow />} /> */}


        {/* <Route path="catgory/:id/:id" element={<CatgoryItem />} /> */}
      </Routes>
   
  );
}

export default Routess;
