import React, { useState } from "react";
import LoginForm from "../LoginForm";
import "./Login.css";
import Axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

function Login() {
  const [errors, setErrors] = useState({ errors: {} });
  const history = useHistory();

  const loginUrl = `${process.env.REACT_APP_BASE_URL}/sign_in`;


  if (localStorage.getItem("token")) {
    return <Redirect to="/dashboard/recent" />
  }

  const handleLogin = async (data) => {
    localStorage.clear();
    let results = await Axios.post(loginUrl, data);
    if (results.data.ERROR) {
      setErrors({ errors: { login: results.data.ERROR } });
    } else {
      // results.data is a jwt.
      localStorage.setItem("token", results.data);
      localStorage.setItem("user_email", data.user_email);
      history.push("/dashboard/recent");
    }
  }


  return (
    <div className="Login">
      {Object.keys(errors.errors).map(key => <p className="error-notif">{errors.errors[key]}</p>)}
      <div className="Login-title">
        <h1>SecureSurf Login</h1>
        <p>No account? <a href="/signup">Sign Up</a></p>
      </div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}

export default Login;