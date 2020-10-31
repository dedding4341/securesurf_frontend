import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./RecentAlert.css";


function RecentAlert({ url, breach_date, details }) {
  const [toggleDetail, setToggleDetail] = useState(false);

  // when `view details` is clicked, drop down details.
  const handleDetails = () => {
    setToggleDetail(!toggleDetail);
  }

  return (
    <div className="RecentAlert">
      <div className="RecentAlert-main">
      <p className="RecentAlert-text">A recently visited site, {url}, had a data breach {breach_date}.</p>
      <span className="RecentAlert-view-details" onClick={handleDetails}>View Details</span>
      <FontAwesomeIcon className="RecentAlert-dismiss" icon={faCheck} size="2x"/>
      </div>
      <div className={toggleDetail ? "RecentAlert-details" : "hide"}>
        <div className="RecentAlert-details-header">Breach Details</div>
        <p className="RecentAlert-details-text">{details}</p>
      </div>
    </div>
  );
}

export default RecentAlert;