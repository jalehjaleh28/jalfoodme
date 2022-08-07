import React, { useState } from "react";
import NavItem from "./NavItem";

const Menu = () => {
 
  const navs=[
    {id:1,text:"Home", link:"/", selected:true},
    {id:2,text:"Kitchen", link:"#", selected:false},
    {id:3,text:"Categories", link:"#", selected:false},
    {id:4,text:"Popularity", link:"/popularity", selected:false},
    {id:5,text:"About Us", link:"/about", selected:false},
    {id:6,text:"Countact", link:"/contact", selected:false},
  ]
  const [navItems, setNavItems] = useState(navs);
 
  const setSelected =(id)=>{
   let newNavs= navItems.map(item=>{
    if(item.id==id){
       item.selected=true
    }else{
       item.selected=false
    }
    return item
   })
   setNavItems(newNavs)
  }
  return (
    <>
      <ul className="menu-items">
      {
        navItems.map(item =><NavItem key={item.id} {...item}  setSelected={setSelected} />)
      }

      </ul>
      
    
    </>
  );
};

export default Menu