//  '#' select id ; '.' select class.
const changeBGColor = (element, color) => {
    const getElement = document.querySelector(element);
    getElement.style.backgroundColor = color;
};
changeBGColor('#header-container', 'green');
changeBGColor('.emergency-tasks', 'red');
changeBGColor('.no-emergency-tasks', 'yellow');
changeBGColor('#footer-container', 'green'); 
const varSix = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < varSix.length; index += 1) {
    varSix[index].style.backgroundColor = 'purple';
    
};
const changeBGColorAll = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < changeBGColorAll.length; index += 1) {
    changeBGColorAll[index].style.backgroundColor = 'black';
    
};