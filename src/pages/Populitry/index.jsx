import React, { useEffect, useState } from "react";
import RecipesList from "../../components/RecipesList";
import "./Popularity.css"
function Popularity() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("")
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch("https://themealdb.com/api/json/v1/1/list.php?a=list" )
    .then((res)=>res.json())
    .then((data)=>{
      setCountries(data.meals)
    })
    .catch((error)=>console.log(error))
    
  },[])
  const getPopularity=(e)=>{
    const selecedCountry=e.target.value
    setCountry(selecedCountry)
    if(selecedCountry != 0 ){
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selecedCountry}`)
      .then((res)=>res.json())
      .then((data)=>setItems(data.meals.slice(0, 3)))
      .catch((error)=>console.log(error))
    }else{
      setItems([])
    }
   
  }
  return (
    <div className="main-popularity">
      <h1 className="title-popularity">Popularity Recipe</h1>
      <h4 className="description-popularity">Select country to offer you three popularity recipes of the country</h4>
      <select className="countries-list" onChange={getPopularity}>
        <option value="0" >Select Country</option>
        {countries.length?
        countries.map((item,index) => (
          <option key={index+1} value={item.strArea}>{item.strArea}</option>
        )):
        ""
      }
      </select>
      {
        items.length?
        <RecipesList items={items} title={country} />
        :
        ""
      }
      
    </div>
  );
}

export default Popularity;
