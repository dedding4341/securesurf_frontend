import React from "react";
import "./Settings.css";
import SideNav from "../SideNav";
import { Redirect } from "react-router-dom";

function Settings() {

  if (!localStorage.getItem("token")) {
    console.log("no token..");
    return <Redirect to="/"/>
  }

  return (
    <div className="Settings">
      <SideNav />
      <div className="Settings-container">

      
      </div>
    </div>
  );
}

export default Settings;