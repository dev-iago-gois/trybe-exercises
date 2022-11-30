// function sum (a, b){
//     return a + b;
// };

// function sub(a, b) {
//     return a - b;
// };

// function mult(a, b) {
//     return a * b;
// };

// function div(a, b) {
//     return a / b;
// };

// function mod(a, b) {
//     return a % b;
// };

// console.log(sum(2, 5));
// console.log(sub(2, 5));
// console.log(mult(2, 5));
// console.log(div(2, 5));
// console.log(mod(2, 5));

// Faça um programa que retorne o maior de dois números.

// function numbComp(a, b) {
//     if (a > b) {
//         return a + ' e o maior numero.'
//     } else {
//         return b + ' e o maior numero.'
//     };
// };

// console.log(numbComp(5,7));

// Faça um programa que retorne o maior de três números. 

// function numbComp(a, b, c) {
//     if (a > b && a > c) {
//         return a + ' e o maior numero.'
//     } else if(b > a && b > c){
//         return b + ' e o maior numero.'
//     }else{
//         return c + ' e o maior numero.'
//     };
// };

// console.log(numbComp(53,22,18));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// function numbComp(a) {
//     if (a > 0) {
//         return a + ' e positivo.'
//     } else if(a > 0){
//         return a + ' e negativvoo.'
//     }else{
//         return a + ' e zero.'
//     };
// };

// console.log(numbComp(53));

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

function ang(a, b, c) {
    if(a < 0 || b < 0 || c < 0){
        return 'Angulo invalido.'
    }
}

console.log(ang(110,45,25));