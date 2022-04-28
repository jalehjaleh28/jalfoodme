
import axios from 'axios';
import React, {useState , useEffect} from 'react';
import '../style/ingredientemobile.css'
import {Link} from 'react-router-dom'

const IngredienteMobile = () => {
  const [ fetch , setFetch ] = useState([]);
  const api = async()=>{
      const res = await axios.get( "https://themealdb.com/api/json/v1/1/categories.php" );
          setFetch(res.data.categories)
  }
  useEffect(() =>{
      api()
  },[])
  // console.log(fetch)
  const showData=fetch.map((items) => {
    return(
      <li key={items.idCategory}>
        <Link to={`ingrediente/${items.strCategory}`} className="catLink">
        <img src={items.strCategoryThumb} alt={items.strCategoryDescription} />
        <span>{items.strCategory}</span>
        </Link>
      </li>
    )
  })
  // console.log(fetch);
 
    return (
    <>
     <ul className='ingredianteulmobile'>
      {showData}
      
     </ul>
    </>
  )
}

export default IngredienteMobile