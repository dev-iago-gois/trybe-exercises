// let word = 'arara';

// function verificaPalindrome(word) {
//     for (const index in word) {
//         if (word[index] != word[(word.length -1) - index]){
//             return false
//         }   
//     }
//     return true
// };

// console.log(verificaPalindrome('a'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function verifyHighest(numbers) {
//     let highestIndex = 0;
//     for (let index = 0; index < numbers.length; index += 1) {
//         if (numbers[highestIndex] < numbers[index]) {
//             highestIndex = index;
//         };
//     };
//     return highestIndex
// };

// console.log(verifyHighest([2, 3, 6, 7, 10, 1]));

//Outra solucao

// function verifyHighest(number) {
//     let highestIndex = 0;
//     for (const key in number) {
//         if (number[key] > number[highestIndex]) {
//             highestIndex = key;
//         };
//     };
//     return highestIndex
// };


// console.log(verifyHighest([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function verifyLowest(numbers) {
//     let lowestIndex = 0;
//     for (const key in numbers) {
//         if (numbers[key] < numbers[lowestIndex]) {
//             lowestIndex = key;
//         };
//     };
//     return lowestIndex
// }

// console.log(verifyLowest([2, 4, 6, 7, 10, 14, 3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// // Valor esperado no retorno da função: Fernanda.

// function verifyLongestWord(names) {
//     let longestWord = '';
//     for (const key in names) {
//         if (names[key].length > longestWord.length) {
//             longestWord = names[key];
//         };
//     };
//     return longestWord
// }

// console.log(verifyLongestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.

// function mostRepeat(numbers) {
//     let mostRepeatCount = 0;
//     let mostRepeatIndex = 0;
//     let mostRepeatCurrent = 0;
//     for (const key in numbers) {
//         let verifyNumber = numbers[key];
//         for (const key2 in numbers) {
//             if (verifyNumber === numbers[key2]) {
//                 mostRepeatIndex += 1;
//             }
//         }
//         if (mostRepeatIndex > mostRepeatCount) {
//             mostRepeatCount = mostRepeatIndex;
//             mostRepeatCurrent = key;
//         }
//         mostRepeatIndex = 0;
//         };
//         return numbers[mostRepeatCurrent];
//     }
// console.log(mostRepeat([2, 3, 2, 5, 8, 2, 3]));

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5.

// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function naturalNumber(number) {
    let total = 0;
    for (let index = 0; index <= number; index += 1) {
        total += index;
    }
    return total;
}

console.log(naturalNumber(8));
