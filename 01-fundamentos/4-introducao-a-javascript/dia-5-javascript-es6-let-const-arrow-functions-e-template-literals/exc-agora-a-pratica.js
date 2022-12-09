// Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     };
// };
// imprimeIdade();

// Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
//   const pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
//     pessoa.nome = 'Luna';
//     pessoa.idade = 19; // Altere essa estrutura para corrigir o erro.
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);

// Modifique a variável para que não ocorra Erro;
// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hamburguer';
// console.log(favoriteFood);

// Modifique as concatenações para template literals.
const name = 'Adriana';
const lastName = 'Soares';
console.log('Olá' + ',' + name + ' ' + lastName + '!');
console.log(`Ola, ${name} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
// Redoing
console.log((`O resultado da soma de ${a} + ${b} e: ${a+b}`));