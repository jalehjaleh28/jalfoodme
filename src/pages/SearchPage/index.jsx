import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import RecipesList from '../../components/RecipesList';
import RecipeCard from '../../components/RecipesList/RecipeCard';




export const SearchPage = () => {

    const [items,setItems]=useState([]);
    const [title,setTitle]=useState();

    
    let params=useParams();
    let url;
   

    async function getData() {
      const res = await axios.get(url);
      console.log(res.data);
      setItems(res.data.meals);
    }

    useEffect(() => {
      if (params.name) {
        url=`https://themealdb.com/api/json/v1/1/search.php?s=${params.name}`
        setTitle(params.name)

      } else if (params.letter) {
        url=`https://themealdb.com/api/json/v1/1/search.php?f=${params.letter}`
        setTitle(params.letter)

      } else if (params.category) {
        url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
        setTitle(params.category)

      }else if (params.kitchen) {
        url=`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.kitchen}`
        setTitle(params.kitchen)
      }
      else {
        url=`https://themealdb.com/api/json/v1/1/search.php?f=${params.id}`
        setTitle(params.name)
      }
      getData();
       
      },[]);


  return (
    <RecipesList items={items} title={title}/>
  )
}
