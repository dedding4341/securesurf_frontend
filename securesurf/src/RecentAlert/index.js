import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./RecentAlert.css";


function RecentAlert({ url, breach_date }) {
  return (
    <div className="RecentAlert">
      <p className="RecentAlert-text">A recently visited site, {url}, had a data breach {breach_date}.</p>
      <span className="RecentAlert-view-details">View Details</span>
      <FontAwesomeIcon className="RecentAlert-dismiss" icon={faCheck} size="2x"/>
    </div>
  );
}

export default RecentAlert;