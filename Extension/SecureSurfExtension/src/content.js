/*global chrome*/
/* src/content.js */

import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Frame, { FrameContextConsumer } from "react-frame-component";
import Login from "./login/Login";
import Popup from "./Popup";
import "./content.css";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  let loginToggle = () => {
    return (loggedIn == true ? <Popup/> : <Login/> )
  }

  useEffect(() => {
    let token = localStorage.getItem("token");

    if(token === null) {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
    }
  },[loggedIn])
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
                {loginToggle()}
                <Login/>
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
  user_email: "email@email.com",
  url: website_url
}


let grabUrl = () => {
  console.log(website_url)

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



  // axios.get(testSiteUrl, data)
  // .then(function(response) {
  //   console.log(response);
  // })
  // .catch(function(error) {
  //     console.log(error);
  // });
}

window.addEventListener('load', grabUrl);
