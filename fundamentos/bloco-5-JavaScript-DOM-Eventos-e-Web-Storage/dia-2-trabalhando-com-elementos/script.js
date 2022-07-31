let elemntoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

let pai = elemntoOndeVoceEsta.parentElement;
pai.style.color = "red";

let primeiroFilhoDoFilho = elemntoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "primeiroFilhoDoFilho";

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elemntoOndeVoceEsta.previousElementSibling;

let textElement = elementoOndeVoceEsta.nextSibling;

let terceiroFilho = elemntoOndeVoceEsta.nextElementSibling;

let terceiroFilho = pai.lastElementChild.previousElementSibling;

let pai = document.getElementById("pai");
let irmaoElementoOndeVoceEsta = document.createElement("section");
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmaoElementoOndeVoceEsta);

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
let filhoElementoOndeVoceEsta = document.createElement("section");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoPrimeiroFilhoDoFilho = document.createElement('section'); 
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

let terceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement
.parentElement
.nextElementSibling;
console.log(terceiroFilho);