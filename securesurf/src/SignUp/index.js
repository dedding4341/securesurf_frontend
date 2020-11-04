import React, { useState } from "react";
import "./SignUp.css";
import SignUpForm from "../SignUpForm";
import Axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

function SignUp() {
  const [errors, setErrors] = useState({errors: {}});
  const history = useHistory();

  const signUpUrl = `${process.env.REACT_APP_BASE_URL}/sign_up`;

  if (localStorage.getItem("token")) {
    return <Redirect to="/dashboard/recent" />
  }

  const handleSignUp = async (data) => {
    localStorage.clear();
    let results = await Axios.post(signUpUrl, data);
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
    <div className="SignUp">
      {Object.keys(errors.errors).map(key => <p className="error-notif">{errors.errors[key]}</p>)}
      <h1 className="SignUp-title">SecureSurf Registration</h1>
      <p className="SignUp-tip">Already have an account? <a href="/login">Login</a></p>
      <SignUpForm handleSignUp={handleSignUp} />
    </div>
  );
}

export default SignUp;