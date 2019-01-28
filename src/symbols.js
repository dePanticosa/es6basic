let password = Symbol();

let user = {
    username: 'r2d2',
    [password]: 'c3po',
    password: 'asfdf'
};

console.log(user.password);
console.log(Object.keys(user));

console.log(password);

console.log(Object.getOwnPropertySymbols(user));

let object = {
    iterator: 0,
    [Symbol.iterator](){}
};