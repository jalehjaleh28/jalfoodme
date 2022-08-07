import React from 'react'
import { Link } from 'react-router-dom'
import SubMenu from "./SubMenuKitchen";
import SubMenuCategories from "./SubMenuCategories";

function NavItem({id, text, link, setSelected , selected}) {
    
  return (
    <li  onClick={()=>setSelected(id)}>
    <Link to={link} className={selected ? "alink" : "nlink"}>
    {text}
    </Link>

    {
      id==2?
      <div className="sub-nav">
        <SubMenu />
      </div>
      :""  
    }
     {
      id==3?
      <div className="sub-nav">
        <SubMenuCategories />
      </div>
      :""  
    }
    
    
  </li>
  )
}

export default NavItem