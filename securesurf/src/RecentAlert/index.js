import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./RecentAlert.css";
import { useDispatch } from "react-redux";
import * as a from "../actions";


function RecentAlert({ id, url, breach_date, details }) {
  const [toggleDetail, setToggleDetail] = useState(false);
  const dispatch = useDispatch();

  // when `view details` is clicked, drop down details.
  const handleDetails = (evt) => {
    setToggleDetail(!toggleDetail);
  }

  const handleAcknlg = (evt) => {
    let email = localStorage.getItem("user_email");
    dispatch(a.acknowledgeNotif(email, id));
  }

  return (
    <div className="RecentAlert">
      <div className="RecentAlert-main">
        <p className="RecentAlert-text">An accessed site, {url}, had a data breach on {breach_date}.</p>
        <span className="RecentAlert-view-details" onClick={handleDetails}>View Details</span>
        <FontAwesomeIcon className="RecentAlert-dismiss" icon={faCheck} size="2x" onClick={handleAcknlg} />
      </div>
      <div className={toggleDetail ? "RecentAlert-details" : "hide"}>
        <div className="RecentAlert-details-header">Breach Details</div>
        <p className="RecentAlert-details-text">{details}</p>
      </div>
    </div>
  );
}

export default RecentAlert;