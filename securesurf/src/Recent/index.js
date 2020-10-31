import React from "react";
import "./Recent.css";
import RecentAlert from "../RecentAlert";
import SideNav from "../SideNav";

function Recent() {
  return (
    <div className="Recent">
      <SideNav />
      <div className="Recent-notice-container">
        <RecentAlert url="www.google.com" breach_date="02/04/2020"/>
      </div>
    </div>
  );
}

export default Recent;