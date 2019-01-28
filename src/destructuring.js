// let scores = [3,4, [5,6]];

// let [low, mid, [high, higer]] = scores;

function computeScore([low, mid]) {
}
computeScore([3,4]);

function getScores() {
    return [3,4,5];
}

let scores = getScores();

let [low, mid, high] = getScores();

let yes = 'Yes';
let no = 'No';
[yes, no] = [no, yes];

let user = {
    firstname: 'john',
    lastname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

let {firstname: first, lastname: last, social: {facebook: fb}, age = 25} = user;

function post(url, {data: {firstname, lastname}, cache}) {
    console.log(firstname, lastname, cache);
}

let result = post('api/users', {data: user, cache: false});

function getUserInfo(){
    return {
        firstname: 'john',
        lastname: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    }
}

let {firstname, lastname, social: {twitter}} = getUserInfo();

console.log(firstname, lastname, twitter);


