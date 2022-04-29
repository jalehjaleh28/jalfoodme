import React from "react";
import "../style/search.css";
import { BiSearchAlt } from "react-icons/bi";


const Search = () => {
 
  return (
    <div
     className="search-container"
         >
      <div className="search">
        <input
          type="text"
          placeholder="Search recipes and more"
          
        />
        <i>
          <BiSearchAlt size={28} />
        </i>
      </div>
     
    </div>
  );
};

export default Search;



