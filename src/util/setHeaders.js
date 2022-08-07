function setHeaders() {
    
    let token="";
    let emailUser="";

    if (localStorage.getItem("token")) {
        token=localStorage.getItem("token")
    }
    if (localStorage.getItem("userInfo")) {
        emailUser=JSON.parse(localStorage.getItem("userInfo")).email
    }
    
    return {
         "Content-Type": "application/json" ,
         "token":token,
         "email-user":emailUser
    }
}
export default setHeaders