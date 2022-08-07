import {useParams} from "react-router-dom"
import axios from 'axios';
import React, {useState , useEffect} from 'react';
import './RecipesList.css'
import RecipeCard from "./RecipeCard";



const RecipesList = ({items, title}) => {
 
    return (
      <div className='recipes-box'>
      <div className="title "><h2>Search for : {title} </h2>
      <span className='result'> ({items!=null? items.length: 0} results)</span>
      </div>
       <div className='recipes-row'>
       {
        items!=null?
       items.map((item) => <RecipeCard  key={item.idMeal} {...item} />)
       :<h3 className='text-center w-100 mt-5'>There is no recipe!</h3>
        }
         </div>            
        
    </div>
  )
}

export default RecipesList