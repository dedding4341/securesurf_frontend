import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const INITIAL_VALUES = { user_email: "", password: "" }
  const [formData, setFormData] = useState(INITIAL_VALUES);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(currData => ({ ...currData, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('https://securesurf-backend.herokuapp.com/sign_in', {
      method: "POST",
      body:JSON.stringify(formData),
      headers: {
        "Content-type": "application/json;"
      }
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json)
    })
  }

return (
    <form className="LoginForm" onSubmit={handleSubmit}>
        <input placeholder="Email" name="user_email" value={formData.email} onChange={handleChange} /><br/>
        <input placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} /><br/><br/>
        <button type="submit">Login</button>
    </form>
    );
}

export default LoginForm;