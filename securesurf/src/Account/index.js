import React from "react";
import "./Account.css";
import SideNav from "../SideNav";
import { Redirect } from "react-router-dom";

function Account() {
  
  // protected component
  if (!localStorage.getItem("token")) {
    return <Redirect to="/"/>
  }

  return (
    <div className="Account">
      <SideNav />
      <div className="Account-container">
      </div>
    </div>
  );
}

export default Account;