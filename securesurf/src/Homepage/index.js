import React from "react";
import * as logo_img from "../images/securesurf.png";
import "./Homepage.css";
import * as dashboardDemo from "../images/securesurfdemo.png";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Homepage-description-container">
        <div className="Homepage-logo-container">
          <img src={logo_img} alt="logo.png" />
        </div>
        <div className="Homepage-description">
          <p>The browser extension for your online security</p>
          <p>Cybersecurity is a problem.</p>
          <p>
            SecureSurf ensures you are notified if a visited site has been compromised and whether any credentials have been seen elsewhere, constantly and automatically.
          </p>
          <p>Available for Chrome and Firefox</p>
        </div>
      </div>
      <div>
        <img src={dashboardDemo} alt="dashboardDemo.png"/>
      </div>
    </div>
  );
}

export default Homepage;