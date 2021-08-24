
//document.getElementById('company').innerHTML = "Depresso Espresso";

document.querySelector('#company').innerText = "Depresso Espresso";

document.querySelector('header > h2').innerText = "We'll make you feel 'A-latte' better.";

let userName = prompt("What's your name?")

//let message = "Hello " + userName + ", what can we make for you today?"

let message = `Hello ${userName}, what can we brew for you today?`

document.querySelector('#greeting').innerText = message