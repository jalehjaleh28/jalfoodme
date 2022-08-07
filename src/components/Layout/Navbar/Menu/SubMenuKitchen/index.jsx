import axios from 'axios';
import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import "./SubMenuKitchen.css"

const Keuken = () => {
    const [fetch , setFetch] = useState([]);

    const api = async ()=>{
        const res = await axios.get("https://themealdb.com/api/json/v1/1/list.php?a=list" )
        setFetch(res.data.meals)

    }
    useEffect(() => {
        api()
    },[])
   
   
  return (
   <>
   <div className='container keukenul  '>
      <div className='kitchen-row '>
         { fetch.map((item) =>
           <Link to={`/search/kitchen/${item.strArea}`}
            key={item.strArea} className= "keukenul-link"> 
                            <span>{item.strArea}</span>
            </Link>     
         )
        }
      </div>
   
   
   
      </div>
      </>
  )
}

export default Keuken