// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName(); 
// Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos;
const varOne = document.querySelector('.center-content p');
varOne.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non perferendis reiciendis ducimus omnis quia ipsam odio dolores nam! Esse molestias aperiam veniam magni delectus at pariatur sequi ex quo maxime.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non perferendis reiciendis ducimus omnis quia ipsam odio dolores nam! Esse molestias aperiam veniam magni delectus at pariatur sequi ex quo maxime.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non perferendis reiciendis ducimus omnis quia ipsam odio dolores nam! Esse molestias aperiam veniam magni delectus at pariatur sequi ex quo maxime.';

// Crie e execute uma função que mude a cor do quadrado amarelo para rgb(76,164,109);
const varTwo = document.querySelector('.main-content');
varTwo.style.backgroundColor = 'rgb(76,164,109)';
// Crie e execute uma função que mude a cor do quadrado vermelho para branco;
const varThree = document.querySelector('.main-content .center-content');
varThree.style.backgroundColor = 'white';
// Crie e execute uma função que corrija o texto da tag <h1>;
const varFour = document.querySelector('header h1');
varFour.innerHTML = ' Desafio - JavaScript'
// Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo;
const varFive = () => {
    let paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
};
varFive();
// Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
const varSix = () => { 
    let paragraph = document.getElementsByTagName('p');
    for (let index = 0; index < paragraph.length; index += 1) {
        console.log(paragraph[index].innerHTML);
        
    }
};
varSix();