import React,{useState} from "react";
import "./search.css";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const Search = () => {
 const navigator=useNavigate()
  const [name, setName] = useState("")

const formHandler=(e)=>{
  e.preventDefault()
    navigator(`/search/name/${name}`)
}
  return (
    <div
     className="search-container"
         >
      <form className="search" onSubmit={formHandler}>
        <input
          type="text"
          placeholder="Search recipes and more"
          onChange={(e)=>setName(e.target.value)}
        />
        <i>
          <BiSearchAlt size={28} />
        </i>
      </form>
     
    </div>
  );
};

export default Search;



