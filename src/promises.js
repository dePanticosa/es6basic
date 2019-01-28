function applyForVisa(documents) {
    console.log('Обработка заявлени...');
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve({}) : reject('В визе отказано: нехватило документов');
        }, 2000)
    });
    return promise;
}

function getVisa(visa) {
    console.log('Виза получена');
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(visa), 2000)
    });
}

function bookHotel(visa){
    console.log('Reserv hotel');
    return Promise.resolve(visa)
}
function buyTickets(booking) {
    console.log('Buy tickets');
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error));
