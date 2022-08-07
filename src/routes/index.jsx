import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { RecipeDetails } from "../pages/RecipeDetails";
import Login from "../pages/Login";
import { Notfound } from "../pages/NotFound";
import { SearchPage } from "../pages/SearchPage";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Popularity from "../pages/Populitry";

const RoutesMap = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/popularity" element={<Popularity />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />

      {/* search by recipe's category */}
      <Route path="/search/categories/:category" element={<SearchPage />} />
      {/* search by recipe's kitchen */}
      <Route path="/search/kitchen/:kitchen" element={<SearchPage />} />
      {/* search by recipe's first letter */}
      <Route path="/search/letter/:letter" element={<SearchPage />} />
      {/* search by recipe's name */}
      <Route path="/search/name/:name" element={<SearchPage />} />

      <Route path="*" element={<Notfound />} />
      
    </Routes>
  );
};

export default RoutesMap;
