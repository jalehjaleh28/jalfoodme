import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import "../style/ingredienteItem.css"


export const IngredienteItem = () => {
    const [catName,setCatName]=useState([]);
    
    let parm=useParams();


    useEffect(() => {
        async function getData() {
          const res = await axios.get(
            `https://themealdb.com/api/json/v1/1/filter.php?c=${parm.id}`
            
          );
          setCatName(res.data.meals);
        }
      getData();
       
      },[]);

const ingredienteItem= catName.map((items) => {
  return(
    <div key={items.idMeal} className="ingredientenitem">
      <Link to={`${items.idMeal}`} className="ingredienteitem-link">
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
    <div className='ingredienteitem-container'>
      <div className="title"><h1>ingredienten</h1></div>
       <div className='ingredientenitems'>{ingredienteItem} </div>            
          
        
      
    </div>
  )
}
