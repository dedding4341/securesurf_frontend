import React from "react";
import LoginForm from "../LoginForm";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <div className="Login-title">
        <h1>SecureSurf Login</h1>
        <p>No account? Install <span className="Login-install-ext" onClick={() => console.log("Redirecting to install extension...")}>SecureSurf</span></p>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;