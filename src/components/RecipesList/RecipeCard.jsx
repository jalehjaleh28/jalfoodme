import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import FavItemsContext from "../../contexts/FavItemsContext";
import IsLoginContext from "../../contexts/IsLoginContext";

function RecipeCard({ idMeal, strMealThumb, strMeal }) {
  const [isLogin] = useContext(IsLoginContext);
  const [favItems, setFavItems] = useContext(FavItemsContext);
  const [isFavItem, setIsFavItem] = useState(false);

  useEffect(()=>{
    
      const Item = favItems.find((item) => item.id === idMeal);
      if (Item) {
        return setIsFavItem(true)
      }else{
        return setIsFavItem(false);
      }
    
   
  },[])
  


  const setFavorit = async () => {
    setIsFavItem(true);
    const newFavItems= [...favItems, { id: idMeal, favorit: true }]
   await setFavItems(newFavItems);
    localStorage.setItem("favoriteItems",JSON.stringify(newFavItems))
  };

  const setNotFavorit =async () => {
   setIsFavItem(false);
   const newFavItems = favItems.filter((item) => item.id !== idMeal);
   await setFavItems(newFavItems);
   localStorage.setItem("favoriteItems",JSON.stringify(newFavItems))
  };
  

  return (
    <div className="recipes-card">
      <div className="recipe-item">
        <div  className="recipes-item-link ">
          <Link to={`/recipes/${idMeal}`} className=""> 
          <div className="image-holder">
            <img
              src={strMealThumb}
              alt={strMeal}
              sizes="
        (max-width: 500px) calc(100vw - 2rem), 
        (max-width: 700px) calc(100vw - 6rem),
        calc(100vw - 9rem - 200px)
      "
            />
          </div>
          <h3 className="title-recipe" >{strMeal}</h3>
          </Link>
        </div>
          {isLogin ? 
            <div className="like-icon-card">
              {!isFavItem?
            <i  onClick={setFavorit}>
              <BsHeart />
            </i>
            :
             <i onClick={setNotFavorit}>
              <BsHeartFill/>
              </i>}
            </div>
              
           : 
            
            ""
          }
        
      </div>
    </div>
  );
}

export default RecipeCard;
