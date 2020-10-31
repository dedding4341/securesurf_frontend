import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ handleLogin }) {
  const INITIAL_VALUES = { user_email: "", password: "" }
  const [formData, setFormData] = useState(INITIAL_VALUES);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(currData => ({ ...currData, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(formData);
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <input placeholder="Email" type="email" name="user_email" value={formData.email} onChange={handleChange} required />
      <input placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
      <button type="submit">LOGIN</button>
    </form>
  );
}

export default LoginForm;