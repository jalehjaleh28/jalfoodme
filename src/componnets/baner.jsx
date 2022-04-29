import React, { useState } from "react";
import '../style/fotoHome.css';
import Search from "./Search";

const Baner = () =>{
    const [searchValue, setSearchValue] = useState("")
    console.log(searchValue)
    return(
        <div className="baner">
           
               <Search/>
          
          


        </div>
    )
}
export default Baner