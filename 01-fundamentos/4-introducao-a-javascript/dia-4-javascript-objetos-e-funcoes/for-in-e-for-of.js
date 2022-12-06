let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;

  for (let position of food) {
    console.log(position);
  };
  //resultado: hamburguer, bife, acarajé;

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let persons in names){
    console.log('Ola ' + names[persons]);
  };

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let key in car){
    console.log(key + ' : ' + car[key]);
  };