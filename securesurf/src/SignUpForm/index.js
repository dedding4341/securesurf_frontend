import React, { useState } from "react";
import "./SignUpForm.css";

function SignUpForm({ handleSignUp }) {
  const INITIAL_VALUES = { user_email: "", password: "", password2: "", first_name: "", phone: "" }
  const [formData, setFormData] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({ errors: {} });


  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!formData.first_name) {
      isValid = false;
      errors["first_name"] = "Please enter your name.";
    }

    if (!formData.user_email) {
      isValid = false;
      errors["user_email"] = "Please enter your email Address.";
    }

    if (!formData.password) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!formData.password2) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (formData.password2 && formData.password) {
      if (formData.password2 !== formData.password) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      } else if (formData.password.length < 6) {
        isValid = false;
        errors["password"] = "Password length must be 6 characters or more.";
      }
    }

    setErrors({
      errors
    });

    return isValid;
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(currData => ({ ...currData, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (validate()) {
      handleSignUp(formData)
      setFormData(INITIAL_VALUES);
      //redirect to install...  (github)
    } else {
      console.log('validation failed', errors);
    }
  }

  return (
    <div className="SignUpForm">
      <section className="SignUpForm-errors-container">
        {Object.keys(errors.errors).map(key => <p className="error-notif">{errors.errors[key]}</p>)}
      </section>
      <form className="SignUpForm-form" onSubmit={handleSubmit}>
        <input placeholder="Email" type="email" name="user_email" value={formData.email} onChange={handleChange} required />
        <span className="SignUpForm-pwd-tip">Must be 6 characters or longer.</span>
        <input id="SignUpForm-pwd-field" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
        <input placeholder="Re-enter Password" type="password" name="password2" value={formData.password2} onChange={handleChange} required />
        <input placeholder="First Name" name="first_name" value={formData.first_name} onChange={handleChange} />
        <input placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} />
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
}

export default SignUpForm;