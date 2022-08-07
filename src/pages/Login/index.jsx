import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./login.css";
import swal from "sweetalert";
import { loginValidation } from "../../util/validation";
import IsLoginContext from "../../contexts/IsLoginContext";

function Login() {
  let navigate = useNavigate();
  const [isLogin, setIsLogin] = useContext(IsLoginContext);

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const formHandler = (e) => {
    e.preventDefault();
    const result = loginValidation(userInfo);

    if (result.length) {
      setErrors(result);
      swal({
        title: "Ooop...!",
        text: "Check The Errors",
        icon: "error",
        button: "OK!",
      });
    } else {
      fetch(
        "https://frontend-educational-backend.herokuapp.com/api/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            swal({
              title: "Good job!",
              text: "Login successful!",
              icon: "success",
              button: "OK!",
            });
            setIsLogin(true);
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("username", JSON.stringify(data.username));
            localStorage.setItem("email", JSON.stringify(data.email));
            navigate("/");
          } else {
            swal({
              title: "Ooop...!",
              text: "The username or password is not correct!",
              icon: "error",
              button: "OK!",
            });
          }
        })
        .catch((error) => {
          swal({
            title: "Ooop...!",
            text: "The username or password is not correct!",
            icon: "error",
            button: "OK!",
          });
        });
    }
  };

  return (
    <div className="wrapper">
      <div className="title-form-register">
        <div className="logo  logo-form">
          <img src={logo} alt="" />
        </div>
        <div className="name-logo-form ">jalfood</div>
      </div>

      {errors.length ? (
        <ul className="errors-form">
          {errors.map((item, index) => (
            <li key={index + 1} className="error">
              {item.message}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}

      <form className="form-register" onSubmit={formHandler}>
        <div className="form-field">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={(e) =>
              setUserInfo({ ...userInfo, username: e.target.value })
            }
          />
        </div>
        <div className="form-field">
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
        </div>
        <button className="btn">Login</button>
      </form>
      <div className="links-register">
        <Link to="#">Forget password?</Link> or{" "}
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
