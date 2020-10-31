import React from "react";
import "./Analytics.css";
import SideNav from "../SideNav";
import { Redirect } from "react-router-dom";

function Analytics() {

  if (!localStorage.getItem("token")) {
    console.log("no token..");
    return <Redirect to="/"/>
  }

  return (
    <div className="Analytics">
      <SideNav />
      <div className="Analytics-container">

      
      </div>
    </div>
  );
}

export default Analytics;