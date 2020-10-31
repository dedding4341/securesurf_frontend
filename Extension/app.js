const button = document.createElement('button');
button.textContent = "Grab url"
document.body.insertAdjacentElement('afterbegin', button);

let url = "";
let grabUrl = () => [
    console.log(document.URL)
]
button.addEventListener('click', grabUrl) 