import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom"
import axios from 'axios';
import "../style/ingredienteitemselect.css"
export const IngredienteItemSelect = () => {
      
  const [itemName,setItemName]=useState([]);
    
  let parm=useParams();



  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${parm.id}`
        
      );
      setItemName(res.data.meals);
    }
  getData();
   
  },[])
  // console.log(itemName)

  const ingredienteRecept=itemName.map((items) => {
    return(
      <div className="main">
        <div className="title">
          <div className="pic"><img src={items.strMealThumb} alt="" /></div>
          <div className="name">
            <p className='namefood'><span>{items.strMeal}</span></p>
            <p><span>Area:</span><span>{items.strArea}</span></p>
            <p><span>Category:</span><span>{items.strCategory}</span></p>
            <p><span>Source:</span><span>{items.strSource}</span></p>
            <p><span>Youtube:</span><span><a href={items.strYoutube} target="_blank" rel="noopener noreferrer">{items.strYoutube}</a></span></p>
          </div>
        </div>
        <div className="details">
          <div className="details-title">
            <span>Recipes</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient1}</span>
            <span>{items.strMeasure1}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient2}</span>
            <span>{items.strMeasure2}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient3}</span>
            <span>{items.strMeasure3}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient4}</span>
            <span>{items.strMeasure4}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient5}</span>
            <span>{items.strMeasure5}</span>

          </div>
          <div className="detail1">
            <span>{items.strIngredient6}</span>
            <span>{items.strMeasure6}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient7}</span>
            <span>{items.strMeasure7}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient8}</span>
            <span>{items.strMeasure8}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient9}</span>
            <span>{items.strMeasure9}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient10}</span>
            <span>{items.strMeasure10}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient11}</span>
            <span>{items.strMeasure11}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient12}</span>
            <span>{items.strMeasure12}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient13}</span>
            <span>{items.strMeasure13}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient14}</span>
            <span>{items.strMeasure14}</span>
          </div>
          <div className="detail1">
            <span>{items.strIngredient15}</span>
            <span>{items.strMeasure15}</span>
          </div>
          <div className="recept">
            <span>{items.strInstructions}</span>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className='main-container'>
      {ingredienteRecept}
    </div>
  )
}

