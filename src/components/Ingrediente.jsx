
import axios from 'axios';
import React, {useState , useEffect} from 'react';
import {Link} from "react-router-dom";


function Ingredante() {
  const [ fetch , setFetch ] = useState([]);
  const api = async()=>{
      const res = await axios.get( "https://themealdb.com/api/json/v1/1/categories.php" );
          setFetch(res.data.meals)
  }
  useEffect(() =>{
      api()
  },[])
  console.log(fetch);
  const ShowData = fetch.map((items,index) => {

    return (

      <li key={index} className="item meitem"  >

      <Link to={`catgory/${items.strCategory}`}>

        <img src={items.strCategoryThumb} alt={items.strCategoryDescription} />

        <span>{items.strCategory}</span>

        </Link>

      </li>

    );

  });
  return (
    <div>
     <ul>
      {ShowData}
     </ul>
    </div>
  )
}

export default Ingredante