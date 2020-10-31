import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Homepage-description-container">
        <div className="Homepage-logo-container">
          <img src="/assets/securesurf.png" alt="logo.png" />
        </div>
        <div className="Homepage-description">
          <p className="Homepage-d1">The browser extension for your online security</p>
          <p className="Homepage-d2">Cybersecurity is a problem.</p>
          <p className="Homepage-d3">
            SecureSurf ensures you are notified if a visited site has been compromised and whether any credentials have been seen elsewhere, constantly and automatically.
          </p>
          <p className="Homepage-d4">Available for Chrome and Firefox</p>
          <button className="Homepage-install-btn" onClick={() => console.log("Redirecting to download extension...")}>INSTALL</button>
        </div>
      </div>
      <div className="Homepage-ssDemo-container">
        <img src="/assets/securesurfDemo.png" alt="dashboardDemo.png" />
      </div>
    </div>
  );
}

export default Homepage;