import axios from 'axios';
import React , {useState , useEffect} from 'react';
// import { Link } from 'react-router-dom';
import "../style/keukenmobile.css"


const KeukenMobile = () => {
    const [fetch , setFetch] = useState([]);
    const api = async ()=>{
        const res = await axios.get("https://themealdb.com/api/json/v1/1/list.php?a=list" )
        setFetch(res.data.meals)

    }
    useEffect(() => {
        api()
    },[])
    // console.log(fetch)
    const showData = fetch.map((item) =>{
        return(
            <li className='datakeukenmobile' key={item.strArea}>
                <span>{item.strArea}</span>
            </li>
        )
    })
  return (
   <>
      <ul className='keukenulmobile'>
         {showData}
      </ul>
   </>
  )
}

export default KeukenMobile