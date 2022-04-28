import React, { useState } from "react";
import '../style/fotoHome.css';

const Baner = () =>{
    const [searchValue, setSearchValue] = useState("")
    console.log(searchValue)
    return(
        <div className="baner">
            <div>
                <input type="text" placeholder="search food" onChange={(e) => setSearchValue(e.target.value)} />
            </div>
          


        </div>
    )
}
export default Baner