const button = document.createElement('button');

button.textContent = "Grab url"
let url = "";
let grabUrl = () => [
    console.log(document.URL)
]
button.addEventListener('click', grabUrl) 