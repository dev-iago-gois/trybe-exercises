// Crie um irmão para elementoOndeVoceEsta.
const paiOnde = document.getElementById('pai')
const irmaoOnde = document.createElement('section');
irmaoOnde.id = 'irmaoOnde';
paiOnde.appendChild(irmaoOnde);

// Crie um filho para elementoOndeVoceEsta.
const onde = document.getElementById('elementoOndeVoceEsta')
const filhoOnde = document.createElement('section');
filhoOnde.id = 'filhoOnde';
onde.appendChild(filhoOnde);

// Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoPrimeiro = document.createElement('section');
filhoDoPrimeiro.id = 'filhoDoPrimeiro';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiro);
// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = primeiroFilhoDoFilho
      .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho
      console.log(terceiroFilho);