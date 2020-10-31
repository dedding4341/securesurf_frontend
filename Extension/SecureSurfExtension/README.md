# React chrome extension template

A Chrome extension template made using a few different tutorials...[mainly this one](https://itnext.io/create-chrome-extension-with-reactjs-using-inject-page-strategy-137650de1f39) Currently displays a hello world type message only. Can be developed further in future.

### Installation
1. Clone this repo.
2. Open new tab in Chrome and go to ```chrome://extensions```
3. Check developer mode if not already on.
4. Click 'load unpacked' button
5. Choose the 'build' folder for this project.
6. This should load the extension in the extensions window.
7. Navigate to a non google page.
8. Click the extension icon in the browser to view/hide the popup.
9. Make it do something!

### Building
This takes a create-react-app template which requires ejecting and a few settings changed so that the content.js can be injected into the build and still interact with the browser window.

If you make changes you will have to ```npm run build``` before you refresh the extension in ```chrome://extensions``` before you can see your changes.

### Props
Thanks to Satendra Rai for the tutorial this was built from, and those people in the resulting github issue on his repo for tips on updating this for the newer webpack versions.
