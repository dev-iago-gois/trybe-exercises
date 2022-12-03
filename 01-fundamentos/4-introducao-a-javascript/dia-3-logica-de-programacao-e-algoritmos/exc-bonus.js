let n = 5;
let star = '●';
let inputLine= '';
let inputPos = n - 1;
for (let index = 0; index < n; index += 1) {
    for (let indexColun = 0; indexColun < n; indexColun += 1) {
        if (indexColun < inputPos) {
            inputLine = inputLine + ' ';
        }else{
            inputLine = inputLine + star;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPos -= 1;
};
