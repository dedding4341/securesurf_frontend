import React, { useState } from "react";
import LoginForm from "../LoginForm";
import "./Login.css";
import Axios from "axios";

function Login() {
  const [errors, setErrors] = useState({ errors: {} });

  const loginUrl = "https://securesurf-backend.herokuapp.com/sign_in";

  const handleLogin = async (data) => {
    let results = await Axios.post(loginUrl, data);
    console.log(results.data);
    if (results.data.ERROR) {
      setErrors({ errors: { login: results.data.ERROR } });
    } else {
      console.log(results.data);
    }
  }


  return (
    <div className="Login">
      {Object.keys(errors.errors).map(key => <p className="Login-errors">{errors.errors[key]}</p>)}
      <div className="Login-title">
        <h1>SecureSurf Login</h1>
        <p>No account? <a href="/signup">Sign Up</a></p>
      </div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}

export default Login;