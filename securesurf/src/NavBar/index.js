import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul className="NavBar-container">
        <li className="NavBar-item"><a href="/">HOME</a></li>
        <li className="NavBar-item"><a href="https://github.com/dedding4341/securesurf_frontend/tree/main/Extension">INSTALL</a></li>
        <li className="NavBar-item"><a href="/login">LOGIN</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;