import React, { useContext } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import IsLoginContext from "../../../contexts/IsLoginContext";

import "./loginBar.css";

const LoginBar = () => {
 
  const [isLogin, setIsLogin] = useContext(IsLoginContext);

  const logout = () => {
    swal({
      title: "Logout",
      text: "Are you sure to logout?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((result) => {
      if (result) {
        swal("You are logged out successfully ", {
          icon: "success",
        });
        setIsLogin(false);
        localStorage.clear();
      } 
    });
    
    
  };

 
  return (
    <>
      <div className="">
        {isLogin ? (
          <button className="login-link" onClick={logout}>
            Logout
          </button>
        ) : (
          <div>
            <Link to="/login" className="login-link">
              Login
            </Link>
            <Link to="/signup" className="login-link">
              Signup
            </Link>
          </div>
        )}
      </div>

     

     
    </>
  );
};

export default LoginBar;
