import {useParams} from "react-router-dom"
import axios from 'axios';
import React, {useState , useEffect} from 'react';
import '../style/keukenitems.css'
import {Link} from 'react-router-dom'


const KeukenItems = () => {
  const [ fetch , setFetch ] = useState([]);
  let parm=useParams();



  const api = async()=>{
      const res = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?a=${parm.id}` );
          setFetch(res.data.meals)
  }
  useEffect(() =>{
      api()
  },[])
  console.log(fetch)
  
  const keukenItem= fetch.map((items) => {
    return(
      <div key={items.idMeal} className="keukenitem">
        <Link to={`${items.idMeal}`} className="keukenitem-link">
        <img src={items.strMealThumb} alt={items.strMeal}   sizes="
      (max-width: 500px) calc(100vw - 2rem), 
      (max-width: 700px) calc(100vw - 6rem),
      calc(100vw - 9rem - 200px)
    " />
        <span>{items.strMeal}</span>
        </Link>
      </div>
    )
  }) 
  
 
    return (
        <div className='keuken-container'>
        <div className="title"><h1>{parm.id}</h1></div>
         <div className='keukenitems'>{keukenItem} </div>            
            
          
        
      </div>
  )
}

export default KeukenItems