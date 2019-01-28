function greet(greeting = 'Hello', name = 'Friend') {
    console.log(`${greeting} ${name}`);
}
greet("Hi");

function sum(...values) {
    console.log(values.reduce(function (prev, current) {
        return prev + current;
    }));
}
sum(5, 7, 2, 10);
