/*global chrome*/
/* src/content.js */

import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Frame, { FrameContextConsumer } from "react-frame-component";
import Popup from "./Popup";
import "./content.css";

const Main = () => {

  
  return (
    <Frame
      head={[
        <link
          type="text/css"
          rel="stylesheet"
          href={chrome.runtime.getURL("/static/css/content.css")}
        ></link>,
      ]}
    >
      
      <FrameContextConsumer>
        {
          // Callback is invoked with iframe's window and document instances
          ({ document, window }) => {
            // Render Children
            return (
              <div className={"popup"}>
                  {<Popup/>}
              </div>
            );
          }
        }
      </FrameContextConsumer>
    </Frame>
  );
};

const app = document.createElement("div");
app.id = "my-extension-root";

document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.display = "none";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    toggle();
  }
});
function toggle() {
  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
}
const axios = require('axios').default;
let website_url = document.URL;
let testSiteUrl = 'https://securesurf-backend.herokuapp.com/url_analysis'

const data = {
  user_email: "email.@email.com",
  url: website_url
}
let tabStartTime = 0;
let tabEndTime = 0;

let grabUrl = () => {
  tabStartTime = Date.now();
  console.log(tabStartTime)
  console.log(website_url);

  fetch(testSiteUrl, {
    method: 'POST',
    body: JSON.stringify(data),// body data type must match "Content-Type" header
    mode: 'cors', // no-cors, *cors, same-origin
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(x => console.log(x))
}

let endTime = () => {
  tabEndTime = Date.now();
  console.log(tabEndTime)
  let timeOnSite = tabEndTime - tabStartTime;
  console.log(timeOnSite)

  fetch('https://securesurf-backend.herokuapp.com/feed_data', {
    method: "POSt",
    body: JSON.stringify({
      user_email: "email@email.com",
      url: website_url,
      time_ms: timeOnSite
    }),
    headers: {
      "Content-type": "application/json;"
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
}
if(localStorage.getItem('token') != null || localStorage.getItem('token') != undefined ) {
  window.addEventListener('load', grabUrl);
  window.addEventListener('beforeunload', endTime)
}
