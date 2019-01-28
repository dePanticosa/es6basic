let add = (x, y) => x + y;

let square = x => x * x;

let giveMeAnswer = () => 42;

let log = () => console.log('logging');

let multiply = (x, y) => {
    let result = x * y;
    return result
};

let gerPerson = () => ({name: 'John'});

(() => {console.log('IIFE')})();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach(num => sum += num);

let squared = numbers.map(num => num * num);


let person = {
    name: 'Bob',
    greet: () => console.log(`Hello, my name is ${person.name}`)   //this
};

person.greet();