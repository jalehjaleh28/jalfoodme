import React, { useState } from "react";
import './Baner.css';
import Search from "../../Search";

const Baner = () =>{
    const [searchValue, setSearchValue] = useState("")
    return(
        <div className="baner">
        
               <Search/>
          
        </div>
    )
}
export default Baner