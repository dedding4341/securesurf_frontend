import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

function Login(props) {
  return (
    <div className="Login">
      <div className="Login-title">
        <h1>SecureSurf Login</h1>
        <p>No account? <a href="/signup">Sign Up</a></p>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;