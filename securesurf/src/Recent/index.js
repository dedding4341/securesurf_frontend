import React from "react";
import "./Recent.css";
import RecentAlert from "../RecentAlert";
import SideNav from "../SideNav";
import { Redirect } from "react-router-dom";

function Recent() {

  if (!localStorage.getItem("token")) {
    console.log("no token..");
    return <Redirect to="/"/>
  }

  const recentBreaches = [{ url: "www.google.com", breach_date: "02/04/2020", details: "google wouldnt hire me so they got hacked smh" },
  { url: "www.reddit.com", breach_date: "12/24/2020", details: "soo dum" }]

  return (
    <div className="Recent">
      <SideNav />
      <section className="Recent-notice-container">
        <div className="Recent-notice-header">Recent</div>
        {recentBreaches.map(breach => <RecentAlert key={breach.url + breach.breach_date} url={breach.url} breach_date={breach.breach_date} details={breach.details}/>)}
      </section>
    </div>
  );
}

export default Recent;