// let fat = 1

// for (let index = 10; index > 0; index -= 1){
//     fat = fat * index;
    
// };
// console.log(fat);

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index +=1) {
//     reverseWord += word[word.length - 1 - index]
    
// };
// console.log(reverseWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];
for (let index = 1; index < array.length; index+= 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    } else if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
};

console.log(`A maior palavra eh : ${maiorPalavra} e a menor palara eh : ${menorPalavra}`);