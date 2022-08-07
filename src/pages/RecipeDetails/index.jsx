import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RecipeDetails.css";
import IsLoginContext from "../../contexts/IsLoginContext";
import FavItemsContext from "../../contexts/FavItemsContext";
import { BsHeart, BsHeartFill } from "react-icons/bs";
export const RecipeDetails = () => {
  const [recipe, setRecipe] = useState([]);
  const { strMealThumb, strMeal, strArea, strCategory, strSource, strYoutube } =
    recipe;

  const params = useParams();

  const [isLogin] = useContext(IsLoginContext);
  const [favItems, setFavItems] = useContext(FavItemsContext);
  const [isFavItem, setIsFavItem] = useState(false);

  const setFavorit = () => {
    console.log("fav");
    setIsFavItem(true);
    const newFavItems = [...favItems, { id: recipe.idMeal, favorit: true }];
    setFavItems(newFavItems);
    localStorage.setItem("favoriteItems", JSON.stringify(newFavItems));
  };
  const setNotFavorit = () => {
    console.log("not fav");
    setIsFavItem(false);
    const newFavItems = favItems.filter((item) => item.id !== recipe.idMeal);
    setFavItems(newFavItems);
    localStorage.setItem("favoriteItems", JSON.stringify(newFavItems));
  };

  useEffect(() => {
    if (localStorage.getItem("favoriteItems")) {
      const Item = JSON.parse(localStorage.getItem("favoriteItems")).find(
        (item) => item.id == params.id
      );

      if (Item) {
        return setIsFavItem(true);
      } else {
        return setIsFavItem(false);
      }
    }
  });

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      setRecipe(res.data.meals[0]);
    }
    getData();
  }, []);

  return (
   
      <div className="container-details-recipe">
        <div className="recipe-info">
          <div className="pic">
            <img src={strMealThumb} alt={strMeal} />
          </div>
          <div className="properties-recipe">
            <div className=" namefood">
              <h2>{strMeal}</h2>
              {isLogin ? (
                <div className="like-icon-recipe">
                 { !isFavItem ? (
                  <i  onClick={setFavorit}>
                    <BsHeart />
                  </i>
                  ) : (
                  <i onClick={setNotFavorit}>
                    <BsHeartFill />
                  </i>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            <p>
              <span>Area:</span>
              <span>{strArea}</span>
            </p>
            <p>
              <span>Category:</span>
              <span>{strCategory}</span>
            </p>
            <p>
              <span>Source:</span>
              <span><a href={strSource}  className="link-info">{strSource}</a></span> 
            </p>
            <p>
              <span>Youtube:</span>
              <span>
              <a
                className="link-info"
                href={strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                {strYoutube}
              </a>
              </span>
            </p>
          </div>
        </div>

        <div className="details">
          <div className="details-title">Recipes</div>
          <div className="detail1">
            <span>{recipe.strIngredient1}</span>
            <span>{recipe.strMeasure1}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient2}</span>
            <span>{recipe.strMeasure2}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient3}</span>
            <span>{recipe.strMeasure3}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient4}</span>
            <span>{recipe.strMeasure4}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient5}</span>
            <span>{recipe.strMeasure5}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient6}</span>
            <span>{recipe.strMeasure6}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient7}</span>
            <span>{recipe.strMeasure7}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient8}</span>
            <span>{recipe.strMeasure8}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient9}</span>
            <span>{recipe.strMeasure9}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient10}</span>
            <span>{recipe.strMeasure10}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient11}</span>
            <span>{recipe.strMeasure11}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient12}</span>
            <span>{recipe.strMeasure12}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient13}</span>
            <span>{recipe.strMeasure13}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient14}</span>
            <span>{recipe.strMeasure14}</span>
          </div>
          <div className="detail1">
            <span>{recipe.strIngredient15}</span>
            <span>{recipe.strMeasure15}</span>
          </div>
          <div className="recept">
            <span>{recipe.strInstructions}</span>
          </div>
        </div>
      </div>
   
  );
};
