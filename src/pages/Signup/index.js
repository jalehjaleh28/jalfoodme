import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Signup.css";
import swal from "sweetalert";
import { signupValidation } from "../../util/validation";

function Signup() {
  let navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    password: "",
    rePassword: "",
  });

  const [errors, setErrors] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    const result = signupValidation(userInfo);

    if (result.length) {
      setErrors(result);

      swal({
        title: "Ooop...!",
        text: "Check The Errors",
        icon: "error",
        button: "OK!",
      });
    } else {
      userInfo.role = "user";
      fetch(
        "https://frontend-educational-backend.herokuapp.com/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status == 400) {
            swal({
              title: "Ooop...!",
              text: "fill the necessary fields",
              icon: "error",
              button: "OK!",
            });
          } else {
            if (data.message == "User registered successfully!") {
              
              swal({
                title: "Successful",
                text: data.message,
                icon: "success",
                button: "OK!",
              });

              navigate("/login");
              
            } else {
              swal({
                title: "Response",
                text: data.message,
                icon: "info",
                button: "OK!",
              });
            }
          }
        })
        .catch((error) => {
          swal({
            title: "Ooop...!",
            text: "Error occurred!",
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

        <div className="form-field ">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
        </div>

        <div className="form-field ">
          <span className="fas fa-key"></span>
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
        <div className="form-field">
          <input
            type="password"
            name="re-password"
            id="re-pwd"
            placeholder="Repeat Password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, rePassword: e.target.value })
            }
          />
        </div>
        <button className="btn">Signup</button>
      </form>
      <div className="links-register">
        <Link to="/login">Are you already signup?</Link>
      </div>
    </div>
  );
}

export default Signup;
