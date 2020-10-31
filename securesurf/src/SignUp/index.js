// user_email, password, first_name, phone_number 
import React, { useState } from "react";
import "./SignUp.css";
import SignUpForm from "../SignUpForm";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [errors, setErrors] = useState({errors: {}});
  const history = useHistory();

  const signUpUrl = "https://securesurf-backend.herokuapp.com/sign_up";

  const handleSignUp = async (data) => {
    let results = await Axios.post(signUpUrl, data);
    if (results.data.ERROR) {
      setErrors({ errors: { login: results.data.ERROR } });
    } else {
      // results.data is a jwt.
      localStorage.setItem("token", results.data);
      history.push("/dashboard/recent");
    }
  }

  return (
    <div className="SignUp">
      {Object.keys(errors.errors).map(key => <p className="error-notif">{errors.errors[key]}</p>)}
      <h1 className="SignUp-title">SecureSurf Registration</h1>
      <p className="SignUp-tip">Already have an account? <a href="/login">Login</a></p>
      <SignUpForm handleSignUp={handleSignUp} />
    </div>
  );
}

export default SignUp;