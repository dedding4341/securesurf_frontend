# securesurf_frontend
Hacktober 2020 -
DEMO: https://securesurf.netlify.app/

# Purpose
This application serves to aid individuals in gaining confidence over their online security and to preemptively strike against potential threats.

# Solution
Our solution is to allow the user to:
- be able to keep track of their browsing data and view them, (chrome extension, data visualization)
- get notified on data breaches on websites that hold their credentials, (pypwned)
- text-based notification also option available, (twillio integration)
- detect 'abnormal' browsing and notified of those detections (machine learning)

# This is the frontend portion of the SecureSurf project! 
*If you'd like to visit the backend, go to https://github.com/dedding4341/securesurf_backend*
Here you will find the codebase for:
- Chrome Browser Extension 
- Frontend Site

Both built in JavaScript with React.js.

Frontend Libraries used:
- D3 / react-d3-components
- Redux, Thunk / react-redux, redux-thunk
- react-router-dom
- Axios
- FontAwesome / react-fontawesome

# Getting started 

Frontend Site
1. `git clone` this repository.
2. type `cd securesurf` in the cmd line to change to the `securesurf` directory.
3. download the necessary dependencies with `npm install` command in the cmd line.
4. type `npm run` in the cmd line to start hosting the site locally on `localhost:3000`! 
NOTE: In order for full-site function, you will need to ask us for the Backend API url.


Chrome Browser Extension
1. `git clone` this repository. (Skip if you already did this)
2. (Optional) type `cd Extension/SecureSurfExtension` in the cmd line to access the code for the extension.
3. In the Chrome browser, go to 'chrome://extensions' via url.
4. Click 'load unpacked' button
5. Navigate to a non-google page.
6. Extension should now be shown in the extensions list of the browser.
