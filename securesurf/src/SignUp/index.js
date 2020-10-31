// user_email, password, first_name, phone_number 
import React from "react";
import "./SignUp.css";
import SignUpForm from "../SignUpForm";

function SignUp() {
  return (
    <div className="SignUp">
      <h1 className="SignUp-title">SecureSurf Registration</h1>
      <p className="SignUp-tip">Already have an account? <a href="/login">Login</a></p>
      <SignUpForm />
    </div>
  );
}

export default SignUp;