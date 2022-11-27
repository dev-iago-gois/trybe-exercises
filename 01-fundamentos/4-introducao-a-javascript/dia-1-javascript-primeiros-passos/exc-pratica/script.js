// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
// const a = 11;
// const b  = 23;
// const c = 8;
// console.log('Adicao = ' + (a+b));
// console.log('Subtracao = ' + (a-b));
// console.log('Multiplicacao = ' + (a*b));
// console.log('Divisao = ' + (a/b));
// console.log('Modulo = ' + (a%b));

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

// if(a > b){
//     console.log('O numero ' + a + ' e maior que ' + b + '.');
// }else{
//     console.log('O numero ' + b + ' e maior que ' + a + '.');
// }
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

// if(a > b && a > c){
//     console.log('O numero ' + a + ' e o maior.');
// }else if(b > a && b > c){
//     console.log('O numero ' + b + ' e o maior.');
// }else {
//     console.log('O numero ' + c + ' e o maior.');
// };
// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
// const x = 0;
// if( x > 0){
//     console.log('Positive.');
// }else if(x < 0 ){
//     console.log('Negative.');
// }else {
//     console.log('Zero.');
// };
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

let pecaXadrez = 'ReI'
switch(pecaXadrez.toLowerCase()){
    case 'rei':
        console.log('Movimentos do Rei: um quadrado em qualquer direcao.');
            break;

    case 'torre':
        console.log('Movimentos da Torre: qualquer numero de quadrados no eixo x ou y.');
            break;

    case 'bispo':
        console.log('Movimentos do Bispo: qualquer numero de quadrados em diagonal.');
            break;

    case 'rainha':
        console.log('Movimentos da Rainha: combina o poder do bispo e da torre. Qualquer numero de quadrados nos eixos x, y e diagonal. Nao pula pecas.');
            break;

    case 'cavalo':
        console.log('Movimentos do Cavalo: Anda em formato de L (3 quadrados) e e o unico que pula outras pecas.');
            break;

    case 'peao':
        console.log('Movimentos do : anda um quadrado para frente se nao estiver ocupado, e acataca apenas na diagonal.');
            break;
    default:
        console.log('Peca invalida');
};