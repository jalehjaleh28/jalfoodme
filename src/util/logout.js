import swal from "sweetalert";


export const logout= ()=>{
    fetch("http://localhost:5000/logout", {
      method: "POST",
      headers: 
      { "Content-Type": "application/json" ,
        "token": localStorage.getItem("token")
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          swal({
            title: "Good job!",
            text: data.message,
            icon: "success",
            button: "OK!",
          });
          localStorage.removeItem("token")
        //   setIsLogin(false)
        //   navigate("/");
        }else{
          swal({
            title: "Ooop...!",
            text: "Error occurred!",
            icon: "error",
            button: "OK!",
          });
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