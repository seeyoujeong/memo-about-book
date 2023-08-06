function sum() {
    let res = 0;

    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

function sum1() {
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum1(1, 2));
console.log(sum1(1, 2, 3, 4, 5));

function sum2(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4, 5));