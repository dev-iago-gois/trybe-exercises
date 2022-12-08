const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerHTML = 'Primeiro FIlho do Filho';

const primeiroFilho = pai.firstChild;

const primeiroFilhoOndeEsta = elementoOndeVoceEsta.previousElementSibling;

const atencao = elementoOndeVoceEsta.nextSibling;
