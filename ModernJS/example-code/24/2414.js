function makeCounter(predicate) {
    let counter = 0;

    return function () {
        counter = predicate(counter);
        return counter;
    };
}

function increase(n) {
    return ++n;
}

function decrease(n) {
    return --n;
}

const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());