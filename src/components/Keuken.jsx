import axios from 'axios';
import React , {useState , useEffect} from 'react';
import "../style/keuken.css"


const Keuken = () => {
    const [fetch , setFetch] = useState([]);
    const api = async ()=>{
        const res = await axios.get("https://themealdb.com/api/json/v1/1/list.php?a=list" )
        setFetch(res.data.meals)

    }
    useEffect(() => {
        api()
    },[])
    console.log(fetch)
    const showData = fetch.map((item) =>{
        return(
            <li className='datakeuken' key={item.strArea}>
                <span>{item.strArea}</span>
            </li>
        )
    })
  return (
   <>
      <ul className='keukenul'>
         {showData}
      </ul>
   </>
  )
}

export default Keuken