import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

function Login(props) {
  return (
    <div className="Login">
      <div className="Login-title">
        <h1>SecureSurf Login</h1>
        <LoginForm />
        <p id="signUp-text">No account? <a href="https://securesurf.netlify.app/" target="_blank">Sign Up</a></p>
      </div>
    </div>
  );
}

export default Login;