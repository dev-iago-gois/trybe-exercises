let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// tem como fazer com for/of?
// for(let sum of numbers){
//     sum = sum + numbers
// };
let sum = 0;

for(let i = 0; i < numbers.length; i += 1){
    sum += numbers[i];
    // sum = numbers[i] + sum; -- igual ao de cima
};
console.log(sum);