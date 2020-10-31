import React from "react";
import "./Analytics.css";
import BarGraph from "../BarGraph";
import SideNav from "../SideNav";

function Analytics() {
  return (
    <div className="Analytics">
      <SideNav />
      <BarGraph />
    </div>
  );
}

export default Analytics;