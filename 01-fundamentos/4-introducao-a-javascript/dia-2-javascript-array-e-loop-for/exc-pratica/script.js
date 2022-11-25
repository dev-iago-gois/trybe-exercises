// tem como fazer com for/of? nao tem, tem que usar o grande. esse resumido so server pra percorrer o array todo
// for(let sum of numbers){
    //     sum += numbers[?]
    // };
    
    
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] > sum){
        sum = numbers[i];
    }else{};
}
console.log('O maior numero contido em "numbers" e: ' + sum + '.');
// for(let i = 0; i < numbers.length; i += 1){
//     sum += numbers[i];
//     // sum = numbers[i] + sum; -- igual ao de cima
// };

// let media = sum / numbers.length;

// if(media > 20){
//     console.log('Valor maior que 20!');
// }else{
//     console.log('Valor Menor ou Igual a 20!');
// }

// console.log('O resultado da soma e: ' + sum + '. E o resultado da media e: ' + media);