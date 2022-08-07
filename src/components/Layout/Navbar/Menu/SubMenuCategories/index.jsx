
import axios from 'axios';
import React, {useState , useEffect} from 'react';
import './subMenuCategories.css'
import {Link} from 'react-router-dom'

const SubMenuCategories = () => {
  const [ fetch , setFetch ] = useState([]);
  const api = async()=>{
      const res = await axios.get( "https://themealdb.com/api/json/v1/1/categories.php" );
          setFetch(res.data.categories)
  }
  useEffect(() =>{
      api()
  },[])

  const showData=fetch.map((items) => {
    return(
      <li key={items.idCategory}>
        <Link to={`/search/categories/${items.strCategory}`} className="catLink">
        <img src={items.strCategoryThumb} alt={items.strCategory} />
        <span>{items.strCategory}</span>
        </Link>
      </li> 
    )
  })
  // console.log(fetch);
 
    return (
    <>
     <ul className='ingredienteul'>
      {showData}
      
     </ul>
    </>
  )
}

export default SubMenuCategories