import React,{useState,useEffect} from "react";
import RoutesMap from "./routes";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import IsLoginContext from "./contexts/IsLoginContext";
import FavItemsContext from "./contexts/FavItemsContext";


function App() {
  const checkIslogin=()=>{
    if (localStorage.getItem("token")) {
      return true
    }
    return false
  }
  const [isLogin, setIsLogin] = useState(checkIslogin);
  const [favItems, setFavItems] = useState([]);

  useEffect(()=>{
    if (localStorage.getItem("favoriteItems")) {
      setFavItems(JSON.parse(localStorage.getItem("favoriteItems")))
    }
  })
  return (
    <IsLoginContext.Provider value={ [isLogin, setIsLogin]}>
    <FavItemsContext.Provider value={ [favItems, setFavItems]}>
      <Header/>
      <Navbar />
      <RoutesMap />
      <Footer />
    </FavItemsContext.Provider>
    </IsLoginContext.Provider>
  );
}

export default App;
