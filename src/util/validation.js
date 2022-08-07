function signupValidation(userInfo) {
  const errorsList = [];
  if (userInfo.username === "") {
    errorsList.push({
      errorInput: "username",
      message: "The username is necessary.",
    });
  }

  if (userInfo.email === "") {
    errorsList.push({
      errorInput: "email",
      message: "The email is necessary.",
    });
  }

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!userInfo.email.match(validRegex)) {
    errorsList.push({
      errorInput: "email",
      message: "The email is not valid.",
    });
  }
  if (userInfo.password === "") {
    errorsList.push({
      errorInput: "password",
      message: "The password is necessary.",
    });
  } else if (userInfo.password.length < 6) {
    errorsList.push({
      errorInput: "password",
      message: "The password must be at least 6 characters.",
    });
  }

  if (userInfo.password !== userInfo.rePassword) {
    errorsList.push({
      errorInput: "rePassword",
      message: "Password and confirm password does not match.",
    });
  }

  return errorsList;
}
function loginValidation(userInfo) {
  
  const errorsList = [];
  if (userInfo.username === "") {
    errorsList.push({
      errorInput: "username",
      message: "The username is necessary.",
    });
  }
  if (userInfo.password === "") {
    errorsList.push({
      errorInput: "password",
      message: "The password is necessary.",
    });
  } else if (userInfo.password.length < 6) {
    errorsList.push({
      errorInput: "password",
      message: "The password must be at least 6 characters.",
    });
  }
  return errorsList;
}

export { signupValidation, loginValidation };
