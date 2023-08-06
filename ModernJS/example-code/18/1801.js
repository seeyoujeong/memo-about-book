const increase = function (num) {
    return ++num;
};

const decrease = function (num) {
    return --num;
};

const predicates = { increase, decrease };

function makeCounter(predicate) {
    let num = 0;

    return function () {
        num = predicate(num);
        return num;
    };
}

const increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());